import { Code, Server, Database, Cpu, GitBranch, Users, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Tailwind CSS", "React"],
    color: "from-teal-500 to-emerald-500",
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Node.js", "Express", "RESTful APIs"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Database Systems",
    icon: Database,
    skills: ["MongoDB", "Mongoose", "SQL Databases"],
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Programming & DSA",
    icon: Cpu,
    skills: ["Java Development", "Data Structures", "Algorithms", "Problem Solving"],
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Development Tools",
    icon: GitBranch,
    skills: ["Git", "GitHub", "VS Code", "AI Tools"],
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Leadership & Soft Skills",
    icon: Users,
    skills: ["Team Leadership", "Event Organization", "Mentoring", "Communication"],
    color: "from-indigo-500 to-blue-500",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-light border border-primary/20 rounded-full mb-4">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-semibold">Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit mastered through hands-on experience and continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group bg-background rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 animate-fade-up opacity-0"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex items-start gap-4 mb-5">
                <div className={`p-3 bg-gradient-to-br ${category.color} rounded-xl shadow-lg`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground pt-1">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 bg-surface text-muted-foreground rounded-lg text-sm font-medium group-hover:bg-brand-light group-hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
