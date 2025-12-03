import { ExternalLink, Code2 } from "lucide-react";

const profiles = [
  {
    platform: "LeetCode",
    username: "Ragala Purushotham",
    stat: "300+",
    statLabel: "Problems Solved",
    description: "Regular practice on algorithms and data structures with focus on medium and hard problems.",
    url: "https://leetcode.com/u/ragalapurushotham/",
    gradient: "from-amber-400 to-orange-500",
    bgGradient: "from-amber-500/10 to-orange-500/10",
  },
  {
    platform: "geeksforgeeks",
    username: "R Purushotham",
    stat: "100+",
    statLabel: "Problems Solved",
    description: "Regular practice on algorithms and data structures with focus on medium and hard problems.",
    url: "https://www.geeksforgeeks.org/profile/rpurushotkerk?tab=activity",
    gradient: "from-gray-600 to-gray-800",
    bgGradient: "from-gray-500/10 to-gray-700/10",
  },
  {
    platform: "Topmate",
    username: "Ragala Purushotham",
    stat: "100+",
    statLabel: "Mock Interviews & Company Drives",
    description: "Conducted multiple mock interviews and actively participated in 100+ company drives, gaining strong experience in real-world interview patterns, problem-solving, and communication skills.",
    url: "https://topmate.io/ragala_purushotham10?utm_campaign=Page_Ready&utm_medium=popup&utm_source=topmate",
    gradient: "from-emerald-400 to-green-600",
    bgGradient: "from-emerald-500/10 to-green-600/10",
  },
];

const CodingProfiles = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-light border border-primary/20 rounded-full mb-4">
            <Code2 className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-semibold">Coding Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Online Profiles
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my problem-solving journey across competitive programming platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <a
              key={profile.platform}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative bg-gradient-to-br ${profile.bgGradient} rounded-2xl p-6 border border-border hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-up opacity-0 overflow-hidden`}
              style={{ animationDelay: `${0.15 * index}s` }}
            >
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-5 h-5 text-muted-foreground" />
              </div>
              
              <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${profile.gradient} rounded-2xl shadow-lg mb-5`}>
                <span className="text-white font-bold text-2xl">{profile.platform[0]}</span>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-1">{profile.platform}</h3>
              <p className="text-muted-foreground text-sm mb-4">{profile.username}</p>
              
              <div className="mb-4">
                <span className={`text-4xl font-extrabold bg-gradient-to-r ${profile.gradient} bg-clip-text text-transparent`}>
                  {profile.stat}
                </span>
                <p className="text-sm text-muted-foreground font-medium">{profile.statLabel}</p>
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed">{profile.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
