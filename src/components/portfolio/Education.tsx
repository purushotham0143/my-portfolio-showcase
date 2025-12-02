import { GraduationCap, BookOpen } from "lucide-react";

const educationData = [
  {
    degree: "B.Tech Computer Science Engineering",
    institution: "Mohan Babu University, Tirupati",
    period: "2022 - 2026",
    gpa: "9.81",
    description: "Specializing in Software Engineering with focus on full-stack development and emerging technologies.",
    current: true,
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Sai Sri Chaitanya Jr. College, Palamaner",
    period: "2020 - 2022",
    gpa: "9.71",
    description: "Completed with 97.1%, securing Town Topper recognition in 1st year.",
    current: false,
  },
  {
    degree: "Secondary School (SSC)",
    institution: "Ravindra Bharathi School, Palamaner",
    period: "2020",
    gpa: "9.88",
    description: "Completed 10th class with 98.8%, demonstrating consistent academic excellence.",
    current: false,
  },
];

const Education = () => {
  return (
    <section id="academics" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-light border border-primary/20 rounded-full mb-4">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-semibold">Academics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Educational Background
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic journey that built the foundation for technical expertise
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gradient-start to-gradient-end" />

            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <div
                  key={edu.degree}
                  className="relative pl-16 md:pl-20 animate-fade-up opacity-0"
                  style={{ animationDelay: `${0.15 * index}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-6 w-5 h-5 bg-gradient-to-br from-gradient-start to-gradient-end rounded-full border-4 border-card shadow-lg" />
                  
                  {edu.current && (
                    <div className="absolute left-2 md:left-4 w-9 h-9 bg-primary/20 rounded-full animate-ping" />
                  )}

                  <div className="bg-background rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div className="flex items-start gap-4">
                        <div className="hidden sm:flex p-3 bg-brand-light rounded-xl">
                          <GraduationCap className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                          <p className="text-primary font-medium text-sm">{edu.institution}</p>
                          <p className="text-muted-foreground text-sm">{edu.period}</p>
                        </div>
                      </div>
                      <div className="text-center px-4 py-2 bg-gradient-to-br from-gradient-start to-gradient-end rounded-xl">
                        <span className="text-2xl font-bold text-white block">{edu.gpa}</span>
                        <span className="text-xs text-white/80">GPA/10</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
