import { Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    title: "Data Science Teaching Assistant",
    company: "University of South Florida",
    location: "Tampa, United States",
    period: "Aug 2024 - Present",
    description: "Leading data science instruction for 350+ students, focusing on preprocessing, model evaluation, and statistical analysis. Developed a RAG-based AI chatbot using LLMs and Azure OpenAI, achieving 87.83% query reliability improvement. Enhanced student performance in statistical techniques, resulting in 31% grade improvement.",
  },
  {
    title: "Data Analytics Engineer",
    company: "Tata Consultancy Services",
    location: "Hyderabad, India",
    period: "Jul 2021 - Aug 2023",
    description: "Architected big data solutions on AWS using Airflow, Terraform, and Spark, improving processing efficiency by 33%. Developed automated ETL pipelines processing 1M+ daily records, optimizing performance by 54.71%. Implemented real-time log processing using Amazon Kinesis and designed actionable dashboards with Tableau and Power BI, enhancing reporting efficiency by 36%.",
  },
  {
    title: "Machine Learning Intern",
    company: "Internshala Trainings",
    location: "Visakhapatnam, India",
    period: "Apr 2020 - Sep 2020",
    description: "Developed ML models for Churn Prediction and Fraud Detection, achieving 15% higher precision. Implemented advanced statistical analysis and machine learning techniques, enhancing model reliability by 21%. Created and optimized ML models using Pandas, NumPy, Keras, and PyTorch, improving predictive accuracy by 14.36%.",
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-16 px-8 bg-accent/20" id="experience">
      <h2 className="text-3xl font-bold text-center mb-12 text-primary">Professional Experience</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-secondary rounded-full p-2">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                <p className="text-secondary font-medium">{exp.company}</p>
                <p className="text-sm text-gray-600">{exp.location}</p>
                <p className="text-sm text-gray-600 mb-2">{exp.period}</p>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;