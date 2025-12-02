import { ArrowRight, Linkedin, Mail, Github, Code2 } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-12 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-light border border-primary/20 rounded-full mb-8 animate-fade-up opacity-0" 
              style={{ animationDelay: "0.1s" }}
            >
              <Code2 className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-semibold">Full Stack Developer</span>
            </div>
            
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight animate-fade-up opacity-0" 
              style={{ animationDelay: "0.2s" }}
            >
              Crafting Digital
              <span className="block bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
                Experiences
              </span>
            </h1>
            
            <p 
              className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed animate-fade-up opacity-0" 
              style={{ animationDelay: "0.3s" }}
            >
              Building elegant, high-performance web applications with modern JavaScript 
              frameworks. Passionate about clean code and scalable solutions.
            </p>

            <div 
              className="flex flex-wrap items-center gap-3 mb-8 animate-fade-up opacity-0" 
              style={{ animationDelay: "0.35s" }}
            >
              <span className="px-3 py-1 bg-surface text-muted-foreground rounded-full text-sm font-medium">MERN Stack</span>
              <span className="px-3 py-1 bg-surface text-muted-foreground rounded-full text-sm font-medium">Java</span>
              <span className="px-3 py-1 bg-surface text-muted-foreground rounded-full text-sm font-medium">2x Hackathon Winner</span>
            </div>
            
            <div 
              className="flex items-center gap-4 animate-fade-up opacity-0" 
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href="#connect"
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-gradient-start to-gradient-end text-primary-foreground rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-2">
                <a
                  href="https://linkedin.com/in/nithyanandvk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card border border-border text-foreground rounded-xl hover:border-primary/50 hover:text-primary transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/nithyanandvk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card border border-border text-foreground rounded-xl hover:border-primary/50 hover:text-primary transition-all"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="mailto:nithyanandvk2005@gmail.com"
                  className="p-3 bg-card border border-border text-foreground rounded-xl hover:border-primary/50 hover:text-primary transition-all"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div 
              className="relative animate-scale-in opacity-0" 
              style={{ animationDelay: "0.3s" }}
            >
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-gradient-start/20 to-gradient-end/20 rounded-3xl blur-2xl" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-end/10 rounded-full blur-xl" />
              
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-gradient-start to-gradient-end rounded-3xl rotate-6" />
                <div className="absolute inset-0 bg-card rounded-3xl overflow-hidden border-4 border-card shadow-2xl">
                  <img
                    src={profileImage}
                    alt="Nithyanand V K - Full Stack Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
