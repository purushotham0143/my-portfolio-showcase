import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

// Your manual data list (title + filename)
const galleryData = [
  { file: "img1.jpg", title: "🇮🇳 Proud to belong to a nation rich in culture, diversity, and innovation" },
  // Add more as needed...
];

// Import all images from folder
const importImages = import.meta.glob("/src/assets/Gallery/*.{png,jpg,jpeg}", {
  eager: true,
});

const mappedImages = galleryData.map((item) => {
  const imagePath = `/src/assets/Gallery/${item.file}`;
  const mod = importImages[imagePath];

  return {
    src: mod ? (mod as any).default : "",
    title: item.title,
  };
});

const Gallery = () => {
  const [activeImg, setActiveImg] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState<string>("");

  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/#skills", label: "Skills" },
    { to: "/#journey", label: "Certifications" },
    { to: "/#work", label: "Work" },
    { to: "/#academics", label: "Academics" },
    { to: "/#projects", label: "Projects" },
    { to: "/gallery", label: "Gallery" },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-4">

            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-11 h-11 bg-gradient-to-br from-gradient-start to-gradient-end rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <span className="text-primary-foreground font-bold text-xl">R</span>
                </div>
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="hidden sm:block">
                <span className="font-bold text-foreground text-lg block leading-tight">Ragala Purushotham</span>
                <span className="text-xs text-muted-foreground">Full Stack Developer</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-surface rounded-lg transition-all text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <button
              className="md:hidden p-2 text-foreground rounded-lg hover:bg-surface transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isOpen && (
            <div className="md:hidden py-4 border-t border-border animate-fade-in">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-surface rounded-lg transition-all text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* HEADING */}
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 text-center mb-2 mt-16">
        Photo Gallery
      </h2>

      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
        College life and professional journey across companies.
      </p>

      {/* IMAGE GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
        {mappedImages.map((imgObj, index) => (
          <div
            key={index}
            onClick={() => {
              setActiveImg(imgObj.src);
              setActiveTitle(imgObj.title);
            }}
            className="group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform bg-black/5"
          >
            <img
              src={imgObj.src}
              alt={imgObj.title}
              className="w-full h-40 md:h-48 object-cover"
            />
            <p className="text-center text-sm py-2 bg-black/60 text-white">
              {imgObj.title}
            </p>
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {activeImg && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
          <button
            onClick={() => setActiveImg(null)}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            ✖
          </button>

          <div className="max-w-3xl mx-auto text-center">
            <img src={activeImg} className="rounded-xl max-h-[80vh] mx-auto" />
            <p className="text-white text-lg mt-3">{activeTitle}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
