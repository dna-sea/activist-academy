import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getTransition } from '../../utils/accessibility';
import { signInWithGoogle, signInWithEmail, signUpWithEmail } from '../../context/AuthContext';

export default function AuthModal({ open, onClose }) {
  const [mode, setMode] = useState('signin'); // 'signin' | 'signup'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [confirmationSent, setConfirmationSent] = useState(false);

  const handleGoogleSignIn = async () => {
    setError(null);
    const { error } = await signInWithGoogle();
    if (error) setError(error.message);
    // OAuth redirects — modal will close on return
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const action = mode === 'signup' ? signUpWithEmail : signInWithEmail;
    const { error } = await action(email, password);

    setLoading(false);

    if (error) {
      setError(error.message);
    } else if (mode === 'signup') {
      setConfirmationSent(true);
    } else {
      onClose();
    }
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={getTransition(0.2)}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.97 }}
          transition={getTransition(0.25)}
          onClick={(e) => e.stopPropagation()}
          className="bg-navy border border-warm-white/10 rounded-2xl max-w-sm w-full p-6 md:p-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-warm-white">
              {mode === 'signin' ? 'Sign In' : 'Create Account'}
            </h2>
            <button
              onClick={onClose}
              className="text-warm-white/50 hover:text-warm-white transition-colors text-2xl leading-none cursor-pointer"
              aria-label="Close"
            >
              &times;
            </button>
          </div>

          {confirmationSent ? (
            <div className="text-center py-4">
              <p className="text-teal font-semibold text-lg mb-2">Check your email</p>
              <p className="text-warm-white/60 text-sm">
                We sent a confirmation link to <strong className="text-warm-white">{email}</strong>.
                Click it to activate your account.
              </p>
              <button
                onClick={onClose}
                className="mt-6 w-full bg-warm-white/10 text-warm-white font-medium text-sm py-3 rounded-xl
                           hover:bg-warm-white/15 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              {/* Google OAuth */}
              <button
                onClick={handleGoogleSignIn}
                className="w-full flex items-center justify-center gap-3 bg-white text-charcoal font-medium
                           py-3 rounded-xl hover:bg-white/90 transition-colors cursor-pointer mb-4"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4" />
                  <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853" />
                  <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.997 8.997 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05" />
                  <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335" />
                </svg>
                Continue with Google
              </button>

              {/* Divider */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-1 h-px bg-warm-white/10" />
                <span className="text-warm-white/30 text-xs uppercase">or</span>
                <div className="flex-1 h-px bg-warm-white/10" />
              </div>

              {/* Email form */}
              <form onSubmit={handleEmailSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  required
                  className="w-full bg-warm-white/5 border border-warm-white/10 rounded-xl px-4 py-3
                             text-warm-white placeholder:text-warm-white/30 text-sm
                             focus:outline-none focus:ring-2 focus:ring-teal/50"
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                  minLength={6}
                  className="w-full bg-warm-white/5 border border-warm-white/10 rounded-xl px-4 py-3
                             text-warm-white placeholder:text-warm-white/30 text-sm
                             focus:outline-none focus:ring-2 focus:ring-teal/50"
                />

                {error && (
                  <p className="text-red-400 text-xs">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-teal text-white font-semibold py-3 rounded-xl
                             hover:bg-teal/90 transition-colors cursor-pointer disabled:opacity-50"
                >
                  {loading ? 'Please wait...' : mode === 'signin' ? 'Sign In' : 'Create Account'}
                </button>
              </form>

              {/* Toggle mode */}
              <p className="text-warm-white/40 text-xs text-center mt-4">
                {mode === 'signin' ? (
                  <>
                    Don&apos;t have an account?{' '}
                    <button
                      onClick={() => { setMode('signup'); setError(null); }}
                      className="text-teal hover:text-teal/80 underline cursor-pointer"
                    >
                      Sign up
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{' '}
                    <button
                      onClick={() => { setMode('signin'); setError(null); }}
                      className="text-teal hover:text-teal/80 underline cursor-pointer"
                    >
                      Sign in
                    </button>
                  </>
                )}
              </p>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
