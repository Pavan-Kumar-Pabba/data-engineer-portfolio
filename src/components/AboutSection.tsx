
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
          <div className="text-xl font-semibold text-secondary mb-4">
            Data Alchemist: Transforming Raw Information into Strategic Gold
          </div>
          <p className="text-gray-700 leading-relaxed">
            I'm Pavan Kumar Pabba, a Data Engineer and Graduate Student in Artificial Intelligence and Business Analytics at the University of South Florida who decodes complexity and delivers clarity, turning raw data into actionable insights and scalable AI-driven solutions.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            Fueled by a deep curiosity for data-driven decision-making and the potential of AI to revolutionize industries, I specialize in designing scalable ETL pipelines, creating Interactive Business Intelligence reports, optimizing data warehouses, and deploying AI solutions that drive business intelligence forward. With 5 years of experience in Data Analysis, data engineering, machine learning, and cloud architecture, I have built and optimized systems that power real-time analytics, automation, and AI-driven applications.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary">Key Milestones:</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-secondary">✅ Data Analytics:</h4>
                <p className="text-gray-700">Architected and optimized 40+ interactive BI dashboards for supply chain, finance, and marketing, driving a 25% increase in Tableau, Quicksight, and Power BI user adoption. Led the analysis and BI reporting initiatives at Motorola Solutions Mergers & Acquisitions, improving business outcomes by 36%.</p>
              </div>
              <div>
                <h4 className="font-semibold text-secondary">✅ Data Engineering at Scale:</h4>
                <p className="text-gray-700">Orchestrated a full-scale EDH DevOps implementation, reducing time-to-market by 52.03% and generating $210K in annual savings, demonstrating expertise in process optimization and automation.</p>
              </div>
              <div>
                <h4 className="font-semibold text-secondary">✅ AI & Machine Learning:</h4>
                <p className="text-gray-700">Built an AI-powered chatbot using LLMs and Generative AI, improving query reliability by 87.83%. Developed and fine-tuned over 6 ML models utilizing Pandas, NumPy, Keras, OpenCV, PyTorch, and NLP, improving predictive accuracy by 14.36%.</p>
              </div>
              <div>
                <h4 className="font-semibold text-secondary">✅ Data Engineer - Cloud & Automation:</h4>
                <p className="text-gray-700">Engineered big data architectures on AWS, leveraging Airflow, Terraform, Spark, and EMR, improving processing efficiency by 33%. Automated ETL pipelines using Python, PostgreSQL, Kinesis, and AWS Glue, optimizing Redshift queries by 54.71% and saving $186K annually.</p>
              </div>
            </div>
          </div>

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
