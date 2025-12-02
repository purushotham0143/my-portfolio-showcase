import { Heart, Linkedin, Github, Mail, MapPin, Send } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="connect" className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-gradient-start to-gradient-end rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <div>
                <span className="font-bold text-xl block">Nithyanand V K</span>
                <span className="text-background/60 text-sm">Full Stack Developer</span>
              </div>
            </div>
            <p className="text-background/70 mb-6 max-w-md leading-relaxed">
              Building elegant web solutions with modern technologies. 
              Passionate about clean code, scalable architecture, and creating impactful digital experiences.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/in/nithyanandvk"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-background/10 rounded-xl hover:bg-primary hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/nithyanandvk"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-background/10 rounded-xl hover:bg-primary hover:text-white transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:nithyanandvk2005@gmail.com"
                className="p-3 bg-background/10 rounded-xl hover:bg-primary hover:text-white transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <div className="space-y-3">
              <a href="#home" className="block text-background/70 hover:text-background hover:translate-x-1 transition-all">Home</a>
              <a href="#skills" className="block text-background/70 hover:text-background hover:translate-x-1 transition-all">Skills</a>
              <a href="#journey" className="block text-background/70 hover:text-background hover:translate-x-1 transition-all">Journey</a>
              <a href="#work" className="block text-background/70 hover:text-background hover:translate-x-1 transition-all">Work</a>
              <a href="#academics" className="block text-background/70 hover:text-background hover:translate-x-1 transition-all">Academics</a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <a href="mailto:nithyanandvk2005@gmail.com" className="text-background/70 hover:text-background transition-colors text-sm break-all">
                  nithyanandvk2005@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-background/70 text-sm">Tirupati, Andhra Pradesh, India</span>
              </div>
              <div className="flex items-start gap-3">
                <Send className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-background/70 text-sm">Open for opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-background/60 text-sm">
              © {currentYear} Nithyanand V K. All rights reserved.
            </p>
            <p className="flex items-center gap-2 text-background/60 text-sm">
              Crafted with <Heart className="w-4 h-4 text-red-400 fill-red-400" /> and lots of coffee
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
