import { GraduationCap, Mail, Phone, Download } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const handleResumeDownload = () => {
    window.open("https://drive.google.com/file/d/19Wed6BlvexaodK1SZXnZCc2UTrEA0cYR/view?usp=drive_link", "_blank");
  };

  return (
    <section className="py-16 px-8 bg-white" id="about">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-primary">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            As a Data Engineer with expertise in Data Science and AI, I specialize in designing and implementing scalable data solutions. My experience spans across big data processing, cloud architecture, and machine learning implementations. I excel in building robust ETL pipelines, optimizing data workflows, and creating actionable insights through advanced analytics.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            Key competencies include data pipeline development, cloud infrastructure management (AWS, Azure, GCP), big data technologies (Hadoop, Spark), and machine learning model deployment. I have successfully led projects in real-time data processing, predictive analytics, and data warehouse optimization, consistently delivering performance improvements and cost savings.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary flex items-center gap-2">
              <GraduationCap className="w-6 h-6" />
              Education
            </h3>
            <div className="space-y-2">
              <p className="font-medium">University of South Florida</p>
              <p className="text-gray-600">Masters in Artificial Intelligence and Business Analytics | CGPA: 3.97</p>
              <p className="text-gray-600">Sep 2023 – May 2025</p>
              <p className="font-medium">Gitam University</p>
              <p className="text-gray-600">Bachelors in Computer Science and Engineering | CGPA: 3.50</p>
              <p className="text-gray-600">Jul 2017 – May 2021</p>
            </div>
          </div>

          <div className="space-y-4" id="contact">
            <h3 className="text-xl font-semibold text-primary">Contact</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-secondary" />
                <a href="mailto:pavanpabba36@gmail.com" className="hover:text-secondary">
                  pavanpabba36@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-secondary" />
                <span>+1 (813) 713-7867</span>
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
            <AvatarImage src="/lovable-uploads/07f34fb6-f5c1-479d-8b42-70f0a305b899.png" alt="Profile Photo" className="object-cover" />
            <AvatarFallback>PP</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;