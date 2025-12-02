import { Award, Trophy, Medal, Star, TrendingUp, MapPin } from "lucide-react";

const achievements = [
  {
    title: "AI Autonomous Hackathon 2025",
    subtitle: "3rd Prize Winner",
    organization: "V R Siddartha College",
    year: "2025",
    icon: Trophy,
  },
  {
    title: "SASTRA Daksh 2025",
    subtitle: "National Finalist",
    organization: "SASTRA University",
    year: "2025",
    icon: Medal,
  },
  {
    title: "Java Programming",
    subtitle: "Top 5% - Silver Elite",
    organization: "NPTEL Certification",
    year: "2024",
    icon: Award,
  },
  {
    title: "DSA in Java",
    subtitle: "Certified",
    organization: "NPTEL Certification",
    year: "2024",
    icon: Star,
  },
  {
    title: "MERN Stack Development",
    subtitle: "Completed",
    organization: "Apna College",
    year: "2023",
    icon: Award,
  },
];

const cetRanks = [
  { state: "Andhra Pradesh", rank: "5270", icon: "🏆" },
  { state: "Telangana", rank: "3359", icon: "🥇" },
  { state: "Karnataka", rank: "8905", icon: "🎯" },
];

const Achievements = () => {
  return (
    <section id="journey" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-light border border-primary/20 rounded-full mb-4">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-semibold">Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Key accomplishments that highlight my dedication and technical growth
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Achievements */}
          <div className="lg:col-span-2 space-y-4">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="flex items-center gap-4 p-5 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all animate-fade-up opacity-0"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-gradient-start to-gradient-end rounded-xl">
                  <achievement.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-foreground">{achievement.title}</h4>
                  <p className="text-primary text-sm font-medium">{achievement.subtitle}</p>
                  <p className="text-muted-foreground text-sm">{achievement.organization}</p>
                </div>
                <span className="flex-shrink-0 px-3 py-1 bg-surface text-muted-foreground text-sm font-medium rounded-full">
                  {achievement.year}
                </span>
              </div>
            ))}
          </div>

          {/* CET Ranks */}
          <div className="animate-fade-up opacity-0" style={{ animationDelay: "0.3s" }}>
            <div className="bg-gradient-to-br from-gradient-start to-gradient-end p-1 rounded-2xl">
              <div className="bg-card rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">CET Rankings 2022</h3>
                </div>
                <div className="space-y-4">
                  {cetRanks.map((rank) => (
                    <div
                      key={rank.state}
                      className="flex items-center justify-between p-4 bg-surface rounded-xl"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{rank.icon}</span>
                        <span className="font-medium text-foreground">{rank.state}</span>
                      </div>
                      <span className="text-2xl font-bold text-primary">#{rank.rank}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
