import { Code, Server, Database, Cpu, GitBranch, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Tailwind CSS", "React"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "RESTful APIs"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB & Mongoose", "SQL Databases"],
  },
  {
    title: "Programming & DSA",
    icon: Cpu,
    skills: ["Java Development", "Data Structures & Algorithms", "Problem Solving"],
  },
  {
    title: "Tools",
    icon: GitBranch,
    skills: ["Git & GitHub", "VS Code", "AI Tools"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Team Leadership", "Event Organization", "Mentoring", "Communication"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Expertise</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A diverse set of skills and technologies I've mastered to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow animate-fade-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-brand-light rounded-lg">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-muted-foreground text-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
