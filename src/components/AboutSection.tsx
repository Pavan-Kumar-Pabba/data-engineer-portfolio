import { GraduationCap, Mail, Phone, Download } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const handleResumeDownload = () => {
    // Replace with your Google Drive link
    window.open("https://drive.google.com/your-resume-link", "_blank");
  };

  return (
    <section className="py-16 px-8 bg-white" id="about">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-primary">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            As a passionate Data Engineer with 4+ years of experience, I specialize in building robust data pipelines and implementing scalable data solutions. My expertise lies in transforming complex data challenges into efficient, actionable insights.
          </p>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary flex items-center gap-2">
              <GraduationCap className="w-6 h-6" />
              Education
            </h3>
            <div className="space-y-2">
              <p className="font-medium">Master of Science in Data Analytics</p>
              <p className="text-gray-600">University Name, 2015-2017</p>
              <p className="font-medium">Bachelor of Technology in Computer Science</p>
              <p className="text-gray-600">University Name, 2011-2015</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary">Contact</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-secondary" />
                <a href="mailto:your.email@example.com" className="hover:text-secondary">
                  your.email@example.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-secondary" />
                <span>+1 (234) 567-8900</span>
              </p>
            </div>
          </div>

          <Button
            onClick={handleResumeDownload}
            className="flex items-center gap-2"
            variant="secondary"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </Button>
        </div>

        <div className="flex justify-center">
          <Avatar className="w-64 h-64">
            <AvatarImage src="/placeholder.svg" alt="Profile Photo" />
            <AvatarFallback>DE</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;