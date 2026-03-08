import ProgressBar from './ProgressBar';

export default function QuizShell({ children }) {
  return (
    <div className="min-h-screen bg-warm-white">
      <ProgressBar />
      <div className="max-w-3xl mx-auto px-4 py-6">
        {children}
      </div>
    </div>
  );
}
