import { Home, User, GraduationCap, Code2, Briefcase, FolderGit2, Mail } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex gap-6">
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 hover:text-secondary transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="flex items-center gap-2 hover:text-secondary transition-colors"
          >
            <User className="w-4 h-4" />
            <span>About Me</span>
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="flex items-center gap-2 hover:text-secondary transition-colors"
          >
            <Code2 className="w-4 h-4" />
            <span>Skills</span>
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="flex items-center gap-2 hover:text-secondary transition-colors"
          >
            <Briefcase className="w-4 h-4" />
            <span>Experience</span>
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="flex items-center gap-2 hover:text-secondary transition-colors"
          >
            <FolderGit2 className="w-4 h-4" />
            <span>Projects</span>
          </button>
          <button
            onClick={() => scrollToSection('certifications')}
            className="flex items-center gap-2 hover:text-secondary transition-colors"
          >
            <GraduationCap className="w-4 h-4" />
            <span>Certifications</span>
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="flex items-center gap-2 hover:text-secondary transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Contact</span>
          </button>
        </div>
        <Avatar className="w-10 h-10">
          <AvatarImage src="/lovable-uploads/503e9d73-b3e1-42b7-b20b-afb16b1c1f0b.png" alt="Profile" />
          <AvatarFallback>PP</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};

export default Navigation;