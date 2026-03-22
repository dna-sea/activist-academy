import { useState, useEffect } from 'react';
import { useAuth, signOut } from '../../context/AuthContext';
import { useQuiz } from '../../context/QuizContext';
import { fetchActiveProfile, fetchProfileHistory } from '../../lib/profiles';
import { HOUSE_COLORS } from '../../utils/constants';
import ArchetypeIcon from '../icons/ArchetypeIcon';

export default function SavedProfilePage() {
  const { user } = useAuth();
  const { backToLanding, startQuiz, loadSavedResults } = useQuiz();
  const [activeProfile, setActiveProfile] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    if (!user) return;
    setLoading(true);
    Promise.all([
      fetchActiveProfile(user.id),
      fetchProfileHistory(user.id),
    ]).then(([active, hist]) => {
      setActiveProfile(active.data);
      setHistory(hist.data || []);
      setLoading(false);
    });
  }, [user]);

  const handleViewResults = () => {
    if (activeProfile) {
      loadSavedResults(activeProfile);
    }
  };

  const handleViewHistoryItem = (profile) => {
    loadSavedResults(profile);
  };

  const handleSignOut = async () => {
    await signOut();
    backToLanding();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-warm-white flex items-center justify-center">
        <p className="text-charcoal/50">Loading your profile...</p>
      </div>
    );
  }

  const displayName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Activist';

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Header */}
      <div className="px-6 py-4 flex items-center justify-between">
        <button
          onClick={backToLanding}
          className="text-charcoal/60 hover:text-charcoal transition-colors text-sm cursor-pointer"
        >
          &larr; Home
        </button>
        <button
          onClick={handleSignOut}
          className="text-charcoal/40 hover:text-charcoal/60 transition-colors text-sm cursor-pointer"
        >
          Sign Out
        </button>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-8">
        {/* Welcome */}
        <h1 className="text-3xl font-black text-charcoal mb-2">
          Welcome back, {displayName}
        </h1>
        <p className="text-charcoal/50 text-sm mb-8">
          {user?.email}
        </p>

        {activeProfile ? (
          <>
            {/* Active Profile Card */}
            <div
              className="rounded-2xl p-6 mb-6 border"
              style={{
                backgroundColor: (HOUSE_COLORS[activeProfile.house?.id] || '#1B2A4A') + '10',
                borderColor: (HOUSE_COLORS[activeProfile.house?.id] || '#1B2A4A') + '20',
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <ArchetypeIcon
                  archetype={activeProfile.primaryArchetype?.key}
                  size={72}
                  className="rounded-xl overflow-hidden"
                />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-charcoal/40 mb-1">
                    Your Archetype
                  </p>
                  <h2 className="text-2xl font-bold text-charcoal">
                    {activeProfile.primaryArchetype?.name}
                  </h2>
                  <p className="text-sm text-charcoal/60">
                    {activeProfile.house?.name} &middot; Secondary: {activeProfile.secondaryArchetype?.name}
                  </p>
                </div>
              </div>

              <p className="text-charcoal/60 text-sm leading-relaxed mb-4 line-clamp-3">
                {activeProfile.primaryArchetype?.description?.split('.').slice(0, 2).join('.') + '.'}
              </p>

              <div className="flex gap-3">
                <button
                  onClick={handleViewResults}
                  className="flex-1 bg-gold text-navy font-bold text-sm py-3 rounded-xl
                             hover:bg-gold/90 transition-colors cursor-pointer"
                >
                  View Full Character Sheet
                </button>
              </div>
            </div>

            {/* Retake */}
            <button
              onClick={startQuiz}
              className="w-full border border-charcoal/20 text-charcoal font-medium text-sm py-3 rounded-xl
                         hover:bg-charcoal/5 transition-colors cursor-pointer mb-8"
            >
              Retake the Quiz
            </button>

            {/* History */}
            {history.length > 1 && (
              <div>
                <button
                  onClick={() => setShowHistory(!showHistory)}
                  className="flex items-center gap-2 text-charcoal/50 hover:text-charcoal text-sm font-medium cursor-pointer mb-4"
                >
                  <span className={`transition-transform ${showHistory ? 'rotate-90' : ''}`}>&#9654;</span>
                  Quiz History ({history.length} {history.length === 1 ? 'attempt' : 'attempts'})
                </button>

                {showHistory && (
                  <div className="space-y-3">
                    {history.map((profile, i) => {
                      const color = HOUSE_COLORS[profile.house?.id] || '#1B2A4A';
                      return (
                        <button
                          key={profile.id}
                          onClick={() => handleViewHistoryItem(profile)}
                          className="w-full flex items-center gap-3 p-3 rounded-xl border hover:shadow-md transition-shadow cursor-pointer text-left"
                          style={{ borderColor: color + '20' }}
                        >
                          <ArchetypeIcon
                            archetype={profile.primaryArchetype?.key}
                            size={40}
                            className="rounded-lg overflow-hidden flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-charcoal text-sm">
                              {profile.primaryArchetype?.name}
                              {profile.isActive && (
                                <span className="ml-2 text-xs font-normal px-2 py-0.5 rounded-full bg-gold/20 text-gold">
                                  Current
                                </span>
                              )}
                            </p>
                            <p className="text-charcoal/40 text-xs">
                              {profile.house?.name} &middot;{' '}
                              {new Date(profile.createdAt).toLocaleDateString('en-US', {
                                year: 'numeric', month: 'short', day: 'numeric',
                              })}
                            </p>
                          </div>
                          <span className="text-charcoal/30 text-xs flex-shrink-0">View &rarr;</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </>
        ) : (
          /* No profile yet */
          <div className="text-center py-12">
            <p className="text-charcoal/50 text-lg mb-2">You haven't taken the quiz yet.</p>
            <p className="text-charcoal/40 text-sm mb-6">
              Discover your activist archetype and save your results to return to them anytime.
            </p>
            <button
              onClick={startQuiz}
              className="bg-gold text-navy font-bold text-lg px-8 py-3 rounded-xl
                         hover:bg-gold/90 transition-colors cursor-pointer
                         shadow-lg shadow-gold/25"
            >
              Begin Your Discovery
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
