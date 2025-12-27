import { useEffect, useState } from "react";
import SectionHeading from "../components/SectionHeading";

const GithubStats = () => {
  const username = "deliwalayash"; // 🔴 make sure this is correct

  const [stats, setStats] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    // Fetch user stats
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        setStats({
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
        });
      })
      .catch((err) => console.error(err));

    // Fetch repositories
    fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className=" py-20" id="gitstats">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="GitHub Activity"
          dsc="Live stats pulled directly from GitHub — code never lies."
        />

        {/* STATS */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          <StatCard label="Repositories" value={stats?.repos} />
          <StatCard label="Followers" value={stats?.followers} />
          <StatCard label="Following" value={stats?.following} />
        </div>

        {/* CONTRIBUTION GRAPH */}
        <div className="mt-16 flex justify-center overflow-x-auto">
          <img
            src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=react-dark&bg_color=0f0f1b&color=8750f7&line=8750f7&point=ffffff&hide_border=true`}
            alt="GitHub Contribution Graph"
            className="max-w-full"
          />
        </div>

        {/* CONTRIBUTION HEATMAP */}
        <div className="mt-20 flex flex-col items-center">
          <h3 className="text-center text-2xl font-semibold text-[#8750f7] mb-8">
            GitHub Contribution Graph
          </h3>

          <div className="overflow-x-auto w-full flex justify-center">
            <img
              src={`https://ghchart.rshah.org/8750f7/deliwalayash`}
              alt="GitHub contribution graph"
              className="w-full p-20"
            />
          </div>

          <p className="text-sm text-white/60 mt-4">
            Live contributions from the last year
          </p>
        </div>

        {/* REPOSITORIES LIST */}
        <div className="mt-20">
          <h3 className="text-center text-2xl font-semibold text-[#8750f7] mb-10">
            Latest Repositories
          </h3>

          <div className="flex flex-wrap gap-6 justify-center">
            {repos.slice(0, 6).map((repo) => (
              <div
                key={repo.id}
                className="w-full sm:w-[320px] bg-[#1a1a2e] p-6 rounded-xl hover:shadow-xl hover:shadow-[#8750f7]/20 transition"
              >
                <h4 className="text-white font-semibold mb-2">{repo.name}</h4>

                <p className="text-white/70 text-sm mb-4 min-h-[40px]">
                  {repo.description || "No description provided"}
                </p>

                <div className="flex justify-between text-xs text-white/60">
                  <span>⭐ {repo.stargazers_count}</span>
                  <span>{repo.language || "N/A"}</span>
                </div>

                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-4 text-[#8750f7] text-sm font-semibold hover:underline"
                >
                  View Repository →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ label, value }) => {
  return (
    <div className="w-64 bg-[#1a1a2e] rounded-2xl p-6 text-center hover:shadow-xl hover:shadow-[#8750f7]/20 transition">
      <h2 className="text-4xl font-bold text-[#8750f7]">{value ?? "--"}</h2>
      <p className="text-sm text-white/80 mt-2">{label}</p>
    </div>
  );
};

export default GithubStats;
