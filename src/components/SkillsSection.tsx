import { Card } from "@/components/ui/card";

const skills = {
  "Programming Languages": ["Python", "SQL", "Scala", "Java"],
  "Big Data Tools": ["Apache Spark", "Hadoop", "Kafka", "Airflow"],
  "Cloud Platforms": ["AWS", "Azure", "GCP"],
  "Databases": ["PostgreSQL", "MongoDB", "Snowflake", "Redshift"],
  "ETL Tools": ["Informatica", "Talend", "Apache NiFi"],
};

const SkillsSection = () => {
  return (
    <section className="py-16 px-8 bg-white" id="skills">
      <h2 className="text-3xl font-bold text-center mb-12 text-primary">Skills & Technologies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {Object.entries(skills).map(([category, items]) => (
          <Card key={category} className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-secondary">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;