import { Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    title: "Data Analyst",
    company: "University of South Florida",
    location: "Tampa, Florida",
    period: "Jan 2024 - Present",
    description: "Led a team of 4 to develop descriptive analytics solutions for E-insights using Python libraries, SQL, Tableau, and Power BI with DAX enhancing the decision-making efficiency by 35%. Improved data integrity for Tableau and Power BI dashboards by resolving issues and collaborating with SMEs and business leaders, boosting data-driven insights efficiency by 42.3%. Created an RAG-based AI chatbot applying LLMs, and Gen AI, increasing user engagement among 250+ Students.",
  },
  {
    title: "Data Analytics Engineer",
    company: "Tata Consultancy Services",
    location: "Hyderabad, India",
    period: "Jul 2021 - Aug 2023",
    description: "Orchestrated the migration and decommission of legacy data warehouses to AWS, leveraging ETL/ELT tools and enhancing OLAP performance by 36%, resulting in annual cost savings of $210,000. Automated ETL processes processing 1M+ daily records into Redshift, optimizing query performance by 54.71%. Deployed Big Data Architecture on EDH in AWS, building scalable data pipelines from 50+ systems, enhancing analytics efficiency by 40%. Consolidated legacy reporting applications into Tableau, reducing BI costs by 35%. Architected 40+ interactive BI dashboards, increasing user adoption by 25%. Led BI reporting initiatives at Motorola Solutions M&A, improving outcomes by 36%.",
  },
  {
    title: "Data Analyst",
    company: "CENTER FOR ADVANCED DEVELOPMENT, GITAM",
    location: "Vizag, India",
    period: "Oct 2020 - May 2021",
    description: "Built SQL Queries and Optimized Payroll analytics view performance by implementing LOD expressions, Table Calculations, data extracts, parameterized filters, and indexing, reducing load time by 49.76%. Formulated Tableau Prep and automated data refresh schedules in Tableau Server, ensuring 100% real-time report availability.",
  },
  {
    title: "Machine Learning Intern",
    company: "INTERNSHALA",
    location: "Remote, India",
    period: "Apr 2020 - Aug 2020",
    description: "Developed and fine-tuned over 6 ML models utilizing Pandas, Numpy, PyTorch, TensorFlow, NLP, Scikit-learn, and Open CV, improving predictive accuracy by 14.36% in image recognition and text classification. Executed statistical analysis and machine learning techniques, including regression, clustering, and deep learning, to enhance predictive modeling reliability by 21%.",
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
