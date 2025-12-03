import { Briefcase, Calendar, ArrowUpRight, Rocket } from "lucide-react";

const experiences = [
  {
    title: "Fresher",
    organization: "Chitkara University Himachal Pradesh",
    period: "2022 - 2026",
    highlights: [
      "Experienced in MERN Stack Website Development",
      "Specialized in Full-Stack Web Development",
      "Built 10+ Projects During My College Journey"
    ],
  },
];

const Experience = () => {
  return (
    <section id="work" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-light border border-primary/20 rounded-full mb-4">
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-semibold">Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Professional Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Leadership roles and contributions shaping my professional growth
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className="group relative bg-background rounded-2xl p-6 border border-border hover:border-primary/30 transition-all animate-fade-up opacity-0"
              style={{ animationDelay: `${0.15 * index}s` }}
            >
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5 text-primary" />
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface text-muted-foreground rounded-full text-sm mb-4">
                <Calendar className="w-3.5 h-3.5" />
                {exp.period}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{exp.title}</h3>
              <p className="text-primary font-medium text-sm mb-4">{exp.organization}</p>
              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-gradient-start to-gradient-end rounded-3xl p-8 md:p-12 animate-fade-up opacity-0" style={{ animationDelay: "0.4s" }}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
          
          <div className="relative text-center">
            <Rocket className="w-12 h-12 text-white/90 mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Collaborate?</h3>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Available for full-time positions, internships, and freelance projects. 
              Let us build something remarkable together!
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a
                href="#connect"
                className="px-8 py-3.5 bg-white text-primary rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Contact Me
              </a>
              <a
                href="https://drive.google.com/file/d/1jJ2UKoaI24Lx7n5F2kQE4L-7ZIV3_Ty0/view"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-white/10 text-white border border-white/30 rounded-xl font-semibold hover:bg-white/20 transition-all"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
