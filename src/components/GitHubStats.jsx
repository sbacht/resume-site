import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitBranch, Eye } from 'lucide-react';

const GitHubStats = ({ username = 'sbacht' }) => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        setLoading(true);
        
        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userResponse.json();
        
        // Fetch repositories
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=5`);
        const reposData = await reposResponse.json();
        
        // Fetch contribution data (if available)
        const contributionsResponse = await fetch(`https://api.github.com/users/${username}/events?per_page=10`);
        const contributionsData = await contributionsResponse.json();
        
        setStats({
          user: userData,
          repos: reposData,
          contributions: contributionsData
        });
      } catch (err) {
        console.error('Error fetching GitHub data:', err);
        setError('Unable to fetch GitHub data');
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, [username]);

  if (loading) {
    return (
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="bg-slate-50 rounded-lg p-4 text-center"
      >
        <div className="animate-pulse">
          <div className="h-6 bg-slate-200 rounded mb-2"></div>
          <div className="h-4 bg-slate-200 rounded"></div>
        </div>
      </motion.div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 rounded-lg p-4 text-center">
        <div className="text-sm text-red-600">{error}</div>
      </div>
    );
  }

  if (!stats) return null;

  const { user, repos, contributions } = stats;

  return (
    <div className="space-y-4">
      {/* User Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-slate-50 rounded-lg p-3 text-center">
          <div className="text-lg font-semibold text-slate-700">{user.public_repos}</div>
          <div className="text-xs text-slate-600">Repositories</div>
        </div>
        <div className="bg-slate-50 rounded-lg p-3 text-center">
          <div className="text-lg font-semibold text-slate-700">{user.followers}</div>
          <div className="text-xs text-slate-600">Followers</div>
        </div>
        <div className="bg-slate-50 rounded-lg p-3 text-center">
          <div className="text-lg font-semibold text-slate-700">{user.following}</div>
          <div className="text-xs text-slate-600">Following</div>
        </div>
      </div>

      {/* Top Repositories */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-slate-700">Top Repositories</h3>
        {repos.slice(0, 3).map((repo) => (
          <motion.div 
            key={repo.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-50 rounded-lg p-3"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-slate-800">{repo.name}</div>
                <div className="text-xs text-slate-600">{repo.description || 'No description'}</div>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3" />
                  {repo.stargazers_count}
                </div>
                <div className="flex items-center gap-1">
                  <GitBranch className="h-3 w-3" />
                  {repo.forks_count}
                </div>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-2">
              {repo.language && (
                <span className="inline-block w-3 h-3 rounded-full bg-blue-500"></span>
              )}
              <span className="text-xs text-slate-500">{repo.language || 'Other'}</span>
              <span className="text-xs text-slate-400">•</span>
              <span className="text-xs text-slate-500">
                Updated {new Date(repo.updated_at).toLocaleDateString()}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-slate-700">Recent Activity</h3>
        <div className="space-y-2">
          {contributions.slice(0, 3).map((event, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-xs text-slate-600"
            >
              {event.type === 'PushEvent' && (
                <span>Pushed to {event.repo.name}</span>
              )}
              {event.type === 'CreateEvent' && (
                <span>Created {event.repo.name}</span>
              )}
              {event.type === 'ForkEvent' && (
                <span>Forked {event.repo.name}</span>
              )}
              <span className="text-slate-400 ml-2">
                {new Date(event.created_at).toLocaleDateString()}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;
