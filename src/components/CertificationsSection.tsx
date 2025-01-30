import { Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const certifications = [
  {
    name: "AWS Certified Data Analytics - Specialty",
    issuer: "Amazon Web Services",
    year: "2023",
  },
  {
    name: "Azure Data Engineer Associate",
    issuer: "Microsoft",
    year: "2022",
  },
  {
    name: "Databricks Certified Associate Developer",
    issuer: "Databricks",
    year: "2022",
  },
];

const CertificationsSection = () => {
  return (
    <section className="py-16 px-8 bg-white" id="certifications">
      <h2 className="text-3xl font-bold text-center mb-12 text-primary">Certifications</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center">
              <Award className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-lg font-semibold text-primary mb-2">{cert.name}</h3>
              <p className="text-gray-600">{cert.issuer}</p>
              <p className="text-sm text-gray-500">{cert.year}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;