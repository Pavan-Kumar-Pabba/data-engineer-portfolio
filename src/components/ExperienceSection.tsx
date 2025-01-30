import { Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    title: "Senior Data Engineer",
    company: "Tech Corp",
    period: "2022 - Present",
    description: "Leading data pipeline development and optimization for large-scale data processing",
  },
  {
    title: "Data Engineer",
    company: "Data Solutions Inc",
    period: "2020 - 2022",
    description: "Developed and maintained ETL processes and data warehousing solutions",
  },
  {
    title: "Junior Data Engineer",
    company: "StartUp Tech",
    period: "2019 - 2020",
    description: "Assisted in building data pipelines and implementing data quality measures",
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