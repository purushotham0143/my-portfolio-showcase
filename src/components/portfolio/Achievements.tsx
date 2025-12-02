import { Award, Trophy, Medal, Star } from "lucide-react";

const achievements = [
  {
    title: "3rd Prize - AI Autonomous Hackathon 2025",
    organization: "V R Siddartha College",
    year: "2025",
    icon: Trophy,
  },
  {
    title: "Finalist - SASTRA Daksh 2025 Hackathon",
    organization: "SASTRA University",
    year: "2025",
    icon: Medal,
  },
  {
    title: "Programming in Java by NPTEL",
    organization: "Top 5% & Silver Elite",
    year: "2024",
    icon: Award,
  },
  {
    title: "Data Structures & Algorithms in Java",
    organization: "NPTEL",
    year: "2024",
    icon: Star,
  },
  {
    title: "MERN Stack Web Development",
    organization: "Apna College",
    year: "2023",
    icon: Award,
  },
  {
    title: "Pearson Mepro English, Hindi Vidwan",
    organization: "Pearson, Hindi Prachar Sabha",
    year: "2023, 2020",
    icon: Star,
  },
];

const cetRanks = [
  { state: "Andhra Pradesh", rank: "5270" },
  { state: "Telangana", rank: "3359" },
  { state: "Karnataka", rank: "8905" },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Milestones</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Achievements & Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recognitions, certifications, and professional journey that have shaped my career
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold text-foreground mb-6">Certifications & Achievements</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.title}
                  className="bg-card rounded-xl p-5 border border-border hover:shadow-md transition-shadow animate-fade-up"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-brand-light rounded-lg flex-shrink-0">
                      <achievement.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground text-sm leading-tight">{achievement.title}</h4>
                      <p className="text-muted-foreground text-xs mt-1">{achievement.organization}</p>
                      <span className="text-primary text-xs font-medium">{achievement.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">CET Ranks (2022)</h3>
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="space-y-4">
                {cetRanks.map((rank, index) => (
                  <div
                    key={rank.state}
                    className="flex justify-between items-center py-3 border-b border-border last:border-b-0"
                  >
                    <span className="text-muted-foreground">{rank.state}</span>
                    <span className="font-semibold text-foreground">{rank.rank}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
