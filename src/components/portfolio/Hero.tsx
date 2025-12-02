import { Linkedin, Mail, Github } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-light rounded-full mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <span className="text-primary text-sm font-medium">MERN | Java | 2X National AI Hackathon Winner</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Welcome to{" "}
              <span className="text-primary">Nithyanand V K's</span>{" "}
              Portfolio
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl animate-fade-up" style={{ animationDelay: "0.3s" }}>
              Hi there! I create elegant, high-performance web applications that solve real-world problems. 
              Specializing in modern JavaScript frameworks and scalable architecture.
            </p>
            
            <div className="flex items-center gap-4 justify-center md:justify-start animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <a
                href="#contact"
                className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-surface-hover transition-colors"
              >
                Contact Me
              </a>
              <a
                href="https://linkedin.com/in/nithyanandvk"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:nithyanandvk2005@gmail.com"
                className="p-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-surface-hover transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://github.com/nithyanandvk"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-surface-hover transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-border shadow-xl">
              <img
                src={profileImage}
                alt="Nithyanand V K - Full Stack Developer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
