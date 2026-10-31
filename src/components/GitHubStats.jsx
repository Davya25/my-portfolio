import { useEffect, useState } from 'react';
import { FiGithub, FiBook, FiUsers, FiStar, FiActivity, FiExternalLink } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import '../styles/GitHubStats.css';

export default function GitHubStats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const username = personalInfo.githubUsername;

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setStats({
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          name: data.name || personalInfo.name,
          bio: data.bio,
          avatar: data.avatar_url,
          url: data.html_url,
        });
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, [username]);

  return (
    <section id="github" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">GitHub</span>
          <h2 className="section-title">GitHub Activity</h2>
          <p className="section-subtitle">
            My open-source contributions and GitHub activity — all statistics are pulled live from the GitHub API.
          </p>
        </div>

        {loading && (
          <div className="github-loading">
            <div className="loading-spinner" />
            <p>Loading GitHub stats...</p>
          </div>
        )}

        {error && (
          <div className="github-error">
            <FiGithub size={32} />
            <p>Could not load GitHub stats. Visit my profile directly.</p>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <FiGithub size={16} /> View GitHub Profile
            </a>
          </div>
        )}

        {!loading && !error && stats && (
          <div className="github-content">
            {/* Profile Card */}
            <div className="github-profile card">
              <div className="github-profile-top">
                <img
                  src={stats.avatar}
                  alt={`${username}'s GitHub avatar`}
                  className="github-avatar"
                />
                <div className="github-profile-info">
                  <h3 className="github-name">{stats.name}</h3>
                  <a
                    href={stats.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-username"
                  >
                    @{username} <FiExternalLink size={13} />
                  </a>
                  {stats.bio && <p className="github-bio">{stats.bio}</p>}
                </div>
              </div>

              {/* Stats Row */}
              <div className="github-stats-row">
                <div className="github-stat">
                  <div className="stat-icon"><FiBook size={18} /></div>
                  <span className="stat-number">{stats.repos}</span>
                  <span className="stat-label">Public Repos</span>
                </div>
                <div className="github-stat">
                  <div className="stat-icon"><FiUsers size={18} /></div>
                  <span className="stat-number">{stats.followers}</span>
                  <span className="stat-label">Followers</span>
                </div>
                <div className="github-stat">
                  <div className="stat-icon"><FiStar size={18} /></div>
                  <span className="stat-number">{stats.following}</span>
                  <span className="stat-label">Following</span>
                </div>
              </div>

              <a
                href={stats.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary github-cta-btn"
              >
                <FiGithub size={16} /> View Full Profile
              </a>
            </div>

            {/* Charts */}
            <div className="github-charts">
              {/* Contribution Graph */}
              <div className="github-chart-card card">
                <div className="chart-header">
                  <FiActivity size={16} />
                  <span>Contribution Calendar</span>
                </div>
                <div className="contribution-graph-wrap">
                  <img
                    src={`https://ghchart.rshah.org/7c3aed/${username}`}
                    alt="GitHub contribution graph"
                    className="contribution-graph"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* GitHub Readme Stats */}
              <div className="github-chart-card card">
                <div className="chart-header">
                  <FiStar size={16} />
                  <span>GitHub Statistics</span>
                </div>
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&title_color=7c3aed&icon_color=a855f7&text_color=6b7280&bg_color=00000000&border_color=ede9f8`}
                  alt="GitHub Stats"
                  className="github-readme-stats"
                  loading="lazy"
                />
              </div>

              {/* Top Languages */}
              <div className="github-chart-card card">
                <div className="chart-header">
                  <FiBook size={16} />
                  <span>Most Used Languages</span>
                </div>
                <img
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&title_color=7c3aed&text_color=6b7280&bg_color=00000000&border_color=ede9f8`}
                  alt="Top Languages"
                  className="github-readme-stats"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
