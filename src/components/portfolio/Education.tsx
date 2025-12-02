import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "B-Tech in Computer Science Engineering",
    institution: "Mohan Babu University, Tirupati",
    period: "2022 - 2026",
    gpa: "9.81/10",
    description: "Specialized in Software Engineering with a strong focus on full-stack web development, algorithms, and emerging technologies.",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Sai Sri Chaitanya Junior College, Palamaner",
    period: "2020 - 2022",
    gpa: "9.71/10",
    description: "Completed Intermediate with 97.1%, securing Town Topper in 1st year.",
  },
  {
    degree: "SSC (10th Class)",
    institution: "Ravindra Bharathi School, Palamaner",
    period: "2020",
    gpa: "9.88/10",
    description: "Completed 10th class with 98.8%, demonstrating consistent academic excellence.",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Learning</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey that built the foundation for my technical expertise
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div
                key={edu.degree}
                className="relative md:pl-20 animate-fade-up"
                style={{ animationDelay: `${0.15 * index}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-5 h-5 bg-primary rounded-full border-4 border-background hidden md:block" />

                <div className="bg-card rounded-xl p-6 border border-border hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-brand-light rounded-lg">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                        <span className="inline-flex items-center px-3 py-1 bg-brand-light text-primary text-sm font-semibold rounded-full">
                          GPA: {edu.gpa}
                        </span>
                      </div>
                      <p className="text-primary font-medium text-sm mb-1">{edu.institution}</p>
                      <p className="text-muted-foreground text-sm mb-3">{edu.period}</p>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
