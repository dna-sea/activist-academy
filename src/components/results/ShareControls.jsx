import { useCallback, useRef, useState } from 'react';
import { toPng, toJpeg } from 'html-to-image';
import { jsPDF } from 'jspdf';
import { useQuiz } from '../../context/QuizContext';
import { SITE_URL } from '../../utils/constants';

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function ShareControls({ sheetRef }) {
  const { resetQuiz, results } = useQuiz();
  const [feedback, setFeedback] = useState(null);
  const feedbackTimer = useRef(null);

  const showFeedback = (msg) => {
    clearTimeout(feedbackTimer.current);
    setFeedback(msg);
    feedbackTimer.current = setTimeout(() => setFeedback(null), 2500);
  };

  const shareText = results
    ? `I'm ${results.primaryArchetype.name} from ${results.house.name}! Discover your activist archetype:`
    : '';

  const handleSaveImage = useCallback(async () => {
    if (!sheetRef?.current) return;
    try {
      const dataUrl = await toPng(sheetRef.current, {
        pixelRatio: 2,
        backgroundColor: '#F5F1EB',
        skipFonts: true,
      });

      // Convert data URL to blob for Web Share API
      const res = await fetch(dataUrl);
      const blob = await res.blob();
      const file = new File([blob], 'activist-character-sheet.png', { type: 'image/png' });

      // Use Web Share API with file if available (reliable on mobile)
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file] });
        showFeedback('Image shared!');
      } else {
        // Fallback: <a download> for desktop
        const link = document.createElement('a');
        link.download = 'activist-character-sheet.png';
        link.href = dataUrl;
        link.click();
        showFeedback('Image saved!');
      }
    } catch (err) {
      if (err.name !== 'AbortError') {
        console.error('Failed to export image:', err);
        showFeedback('Failed to save image. Try a screenshot instead.');
      }
    }
  }, [sheetRef]);

  const handleSavePDF = useCallback(async () => {
    if (!sheetRef?.current) return;
    try {
      // Use JPEG for PDF to keep file size small (~1MB vs ~12MB with PNG)
      const dataUrl = await toJpeg(sheetRef.current, {
        pixelRatio: 2,
        backgroundColor: '#F5F1EB',
        skipFonts: true,
        quality: 0.85,
      });

      // Get image dimensions
      const img = new Image();
      img.src = dataUrl;
      await new Promise(resolve => { img.onload = resolve; });

      // Create PDF sized to content (in mm)
      const pxToMm = 0.264583;
      const pdfWidth = img.width * pxToMm / 2;
      const pdfHeight = img.height * pxToMm / 2;
      const pdf = new jsPDF({
        orientation: pdfWidth > pdfHeight ? 'landscape' : 'portrait',
        unit: 'mm',
        format: [pdfWidth, pdfHeight],
      });

      pdf.addImage(dataUrl, 'JPEG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('activist-character-sheet.pdf');
      showFeedback('PDF saved!');
    } catch (err) {
      console.error('Failed to export PDF:', err);
      showFeedback('Failed to save PDF. Try saving as image instead.');
    }
  }, [sheetRef]);

  const handleShare = useCallback(async () => {
    if (!results) return;

    if (navigator.share) {
      try {
        await navigator.share({ title: 'My Activist Archetype', text: shareText, url: SITE_URL });
      } catch {
        // User cancelled share dialog
      }
    } else {
      try {
        await navigator.clipboard.writeText(`${shareText} ${SITE_URL}`);
        showFeedback('Copied to clipboard!');
      } catch {
        showFeedback('Could not copy — try sharing manually.');
      }
    }
  }, [results, shareText]);

  const openShareWindow = (url) => {
    window.open(url, '_blank', 'width=600,height=400,noopener,noreferrer');
  };

  const handleTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(SITE_URL)}`;
    openShareWindow(url);
  };

  const handleFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SITE_URL)}&quote=${encodeURIComponent(shareText)}`;
    openShareWindow(url);
  };

  const handleLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(SITE_URL)}`;
    openShareWindow(url);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={handleSaveImage}
          className="bg-navy text-warm-white font-semibold px-6 py-3 rounded-xl
                     hover:bg-navy/90 transition-colors cursor-pointer min-h-11
                     focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
        >
          Save as Image
        </button>
        <button
          onClick={handleSavePDF}
          className="bg-navy/80 text-warm-white font-semibold px-6 py-3 rounded-xl
                     hover:bg-navy/70 transition-colors cursor-pointer min-h-11
                     focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
        >
          Save as PDF
        </button>
        <button
          onClick={handleShare}
          className="bg-teal text-white font-semibold px-6 py-3 rounded-xl
                     hover:bg-teal/90 transition-colors cursor-pointer min-h-11
                     focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
        >
          Share
        </button>
        <button
          onClick={resetQuiz}
          className="border-2 border-charcoal/20 text-charcoal font-semibold px-6 py-3 rounded-xl
                     hover:border-charcoal/40 transition-colors cursor-pointer min-h-11
                     focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
        >
          Take Again
        </button>
      </div>

      {/* Social Media Share Buttons */}
      <div className="flex gap-3 justify-center">
        <button
          onClick={handleTwitter}
          className="w-10 h-10 rounded-full bg-charcoal/10 text-charcoal/70 hover:bg-charcoal/20
                     hover:text-charcoal transition-colors cursor-pointer flex items-center justify-center
                     focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          aria-label="Share on X (Twitter)"
        >
          <TwitterIcon />
        </button>
        <button
          onClick={handleFacebook}
          className="w-10 h-10 rounded-full bg-charcoal/10 text-charcoal/70 hover:bg-charcoal/20
                     hover:text-charcoal transition-colors cursor-pointer flex items-center justify-center
                     focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          aria-label="Share on Facebook"
        >
          <FacebookIcon />
        </button>
        <button
          onClick={handleLinkedIn}
          className="w-10 h-10 rounded-full bg-charcoal/10 text-charcoal/70 hover:bg-charcoal/20
                     hover:text-charcoal transition-colors cursor-pointer flex items-center justify-center
                     focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          aria-label="Share on LinkedIn"
        >
          <LinkedInIcon />
        </button>
      </div>

      {feedback && (
        <p className="text-center text-sm text-charcoal/70 font-medium" role="status">
          {feedback}
        </p>
      )}
    </div>
  );
}
