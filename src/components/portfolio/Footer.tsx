import { Heart, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">N</span>
              </div>
              <span className="font-semibold text-lg">Nithyanand V K</span>
            </div>
            <p className="text-background/70 text-sm">
              Full Stack Developer specializing in MERN stack and Java. Building elegant, 
              high-performance web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              <a href="#home" className="text-background/70 hover:text-background transition-colors text-sm">Home</a>
              <a href="#skills" className="text-background/70 hover:text-background transition-colors text-sm">Skills</a>
              <a href="#achievements" className="text-background/70 hover:text-background transition-colors text-sm">Achievements</a>
              <a href="#experience" className="text-background/70 hover:text-background transition-colors text-sm">Experience</a>
              <a href="#education" className="text-background/70 hover:text-background transition-colors text-sm">Education</a>
              <a href="#contact" className="text-background/70 hover:text-background transition-colors text-sm">Contact</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:nithyanandvk2005@gmail.com"
                className="flex items-center gap-2 text-background/70 hover:text-background transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                nithyanandvk2005@gmail.com
              </a>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://linkedin.com/in/nithyanandvk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/nithyanandvk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-background/70 text-sm">
              © {currentYear} All Rights Reserved
            </p>
            <p className="flex items-center gap-1 text-background/70 text-sm">
              Made with <Heart className="w-4 h-4 text-red-400 fill-red-400" /> by Nithyanand V K
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
