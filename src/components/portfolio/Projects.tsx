import { ExternalLink, Github, Code2,  } from "lucide-react";

const projects = [
  {
    title: "Chit Fund Management System",
    description:
      "A full-stack MERN application to manage chit-fund members, payments, and reports with admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind","TypeScript"],
    url: "https://chitfunds-fff.vercel.app/",
    github: "https://github.com/purushotham0143/chitfunds-",
    gradient: "from-purple-500 to-indigo-600",
    bgGradient: "from-purple-500/10 to-indigo-600/10",
  },
    {
  title: "Blogwebsite",
    description: "Admin dashboard with product analytics, orders tracking, charts, and authentication system. Post owners can remove inappropriate comments.",
  tech: ["Ejs", "Node.js", "Tailwindcss","MongoDb"],
  url: "https://blogwebsite-purushotham.onrender.com/",
  github: "https://github.com/purushotham0143/BlogWebsite",
  gradient: "from-pink-500 to-rose-600",
  bgGradient: "from-pink-500/10 to-rose-600/10",
},

  {
    title: "ChatApp",
    description: "A real-time chat application with instant messaging and smooth UI built using React and Tailwind.",
    tech: ["React", "Tailwind", "Socket.io","Node.js","MongoDb"],
    url: "https://chatapp-jq1a.onrender.com/",
    github: "https://github.com/purushotham0143/ChatApp",
    gradient: "from-emerald-400 to-green-600",
    bgGradient: "from-emerald-500/10 to-green-600/10",
  },
];

const ProjectBoxes = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-light border border-primary/20 rounded-full mb-4">
            <Code2 className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-semibold">My Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of web apps I’ve built using modern tech stacks.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative bg-gradient-to-br ${project.bgGradient} rounded-2xl p-6 border border-border hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-up opacity-0 overflow-hidden`}
              style={{ animationDelay: `${0.15 * index}s` }}
            >
             

              {/* Logo icon box */}
              <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${project.gradient} rounded-2xl shadow-lg mb-5`}>
                <Code2 className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-1">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white/10 rounded-full text-xs text-muted-foreground border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 mt-4">
                <a
                  href={project.url}
                  target="_blank"
                  className="flex items-center gap-2 text-primary font-medium hover:underline"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition"
                >
                  <Github size={18} />
                  GitHub
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectBoxes;
