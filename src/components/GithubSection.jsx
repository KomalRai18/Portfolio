import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, ExternalLink, Activity } from 'lucide-react';

const GithubSection = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/KomalRai18/repos?sort=updated&per_page=6');
        const data = await response.json();
        if (Array.isArray(data)) {
          setRepos(data);
        }
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  return (
    <section id="github" className="section bg-white/30 backdrop-blur-sm">
      <div className="container">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6 font-bold text-gray-700">
            <Github size={20} /> github.com/KomalRai18
          </div>
          <h2 className="section-title">Open Source & Activity</h2>
          <p className="section-subtitle">Real-time pulse of my latest contributions and side projects fetched directly from GitHub.</p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="w-12 h-12 border-4 border-[#6366f1] border-t-transparent rounded-full"
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, i) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full"
              >
                <div className="flex items-center justify-between mb-4">
                  <Activity size={20} className="text-indigo-400 group-hover:text-[#6366f1] transition-colors" />
                  <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
                    <span className="flex items-center gap-1"><Star size={14} className="text-amber-400" /> {repo.stargazers_count}</span>
                    <span className="flex items-center gap-1"><GitFork size={14} className="text-indigo-400" /> {repo.forks_count}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 line-clamp-1 group-hover:text-[#6366f1] transition-colors">{repo.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2 flex-grow">
                  {repo.description || "No description provided for this repository. Explorations in full-stack engineering."}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400">{repo.language || "TypeScript"}</span>
                  <ExternalLink size={16} className="text-gray-300 group-hover:text-gray-600 transition-colors" />
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default GithubSection;
