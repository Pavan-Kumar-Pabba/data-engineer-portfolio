
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Pavan Kumar Pabba</h3>
            <p className="text-primary-foreground/80">Data Engineer & Analytics Professional</p>
          </div>
          
          <div className="flex gap-6">
            <a
              href="https://github.com/Pavan-Kumar-Pabba"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/pavan-kumar-pabba/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <button
              onClick={scrollToContact}
              className="hover:text-secondary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Pavan Kumar Pabba. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
