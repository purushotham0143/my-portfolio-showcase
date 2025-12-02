import { ExternalLink } from "lucide-react";

const profiles = [
  {
    platform: "LeetCode",
    username: "@nithyanandvk2005",
    highlight: "Solved 490+ DSA problems",
    description: "Regularly practice algorithms and data structures, focusing on medium and hard problems.",
    url: "https://leetcode.com/nithyanandvk2005",
    color: "bg-amber-500",
  },
  {
    platform: "GitHub",
    username: "@nithyanandvk",
    highlight: "20+ repositories",
    description: "Active contributor with various personal and collaborative projects, focusing on web applications.",
    url: "https://github.com/nithyanandvk",
    color: "bg-gray-800",
  },
  {
    platform: "HackerRank",
    username: "@nithyanandvk2005",
    highlight: "5-Star Java Badge",
    description: "Achieved 5-star rating in Java, with expertise in problem-solving and algorithms challenges.",
    url: "https://hackerrank.com/nithyanandvk2005",
    color: "bg-emerald-500",
  },
];

const CodingProfiles = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Online Presence</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Coding Profiles
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Check out my coding journey and problem-solving skills across various platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <a
              key={profile.platform}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${0.15 * index}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${profile.color} rounded-lg flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">{profile.platform[0]}</span>
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-1">{profile.platform}</h3>
              <p className="text-primary text-sm mb-2">{profile.username}</p>
              <p className="font-medium text-foreground mb-2">{profile.highlight}</p>
              <p className="text-muted-foreground text-sm">{profile.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
