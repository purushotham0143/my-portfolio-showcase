import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Web Lead & Full Stack Developer",
    organization: "ISTE MBU & SVEC",
    period: "2023 - Present",
    description:
      "Led the design and development of the official club website using MERN stack. Integrated authentication, admin panel, and dynamic event management. Collaborated with faculty to promote and organize over 25+ events and earned recognition as Web Lead.",
  },
  {
    title: "Web Lead & Technical Mentor",
    organization: "The Coding Club MBU",
    period: "2024 - Present",
    description:
      "Developing the Coding Club portal with dynamic UI/UX and event features. Mentored students in MERN stack, Java, Git and led coding events for 500+ participants. Contributed to increasing club registrations through active engagement and tech initiatives.",
  },
  {
    title: "GDSC Coordinator",
    organization: "Google Developer Student Club, MBU",
    period: "2023 - 2024",
    description:
      "Promoted Google programs like Arcade and various tech workshops on cloud, web development. Encouraged students to complete Google certifications.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Journey</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Professional Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Leadership roles and contributions that have shaped my professional growth
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-md transition-shadow animate-fade-up"
              style={{ animationDelay: `${0.15 * index}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-brand-light rounded-lg">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-primary font-medium text-sm mb-3">{exp.organization}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hire Me Section */}
        <div className="mt-16 text-center bg-brand-light rounded-2xl p-8 md:p-12 animate-fade-up">
          <h3 className="text-2xl font-bold text-foreground mb-4">Hire Me</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            I'm available for full-time positions, internships, and freelance projects. 
            Let's create something amazing together!
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="#contact"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Contact Me
            </a>
            <a
              href="https://nithyanandvk.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-card text-foreground border border-border rounded-lg font-medium hover:bg-surface-hover transition-colors"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
