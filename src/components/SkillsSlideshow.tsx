import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "R", "SQL", "PL-SQL", "Scala", "HiveQL", "XML", "Shell Scripting", "PostgreSQL"],
    bgColor: "bg-blue-500"
  },
  {
    title: "Databases",
    skills: ["Amazon Redshift", "Oracle", "MySQL", "Microsoft SQL Server", "Postgres", "Teradata", "Neo4j", "HBase", "Cassandra", "MongoDB"],
    bgColor: "bg-green-500"
  },
  {
    title: "Big Data Tools",
    skills: ["Apache Hadoop", "Spark", "Hive", "Kafka", "Storm", "Flume", "Sqoop", "Oozie", "Zookeeper", "Cloudera"],
    bgColor: "bg-purple-500"
  },
  {
    title: "BI Tools & Cloud Services",
    skills: ["Tableau", "Power BI", "Qlik Sense", "QuickSight", "AWS", "Azure", "GCP"],
    bgColor: "bg-orange-500"
  },
  {
    title: "Advanced Capabilities",
    skills: ["Artificial Intelligence", "Generative AI", "Machine Learning", "Data Science", "LLMs", "Prompt Engineering"],
    bgColor: "bg-red-500"
  },
  {
    title: "Data Visualization",
    skills: ["Tableau", "Power BI", "Qlik Sense", "QuickSight", "Grafana", "D3.js", "Chart.js"],
    bgColor: "bg-indigo-500"
  }
];

const SkillsSlideshow = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {skillCategories.map((category, index) => (
        <Card
          key={index}
          className={`p-6 ${category.bgColor} text-white hover:shadow-lg transition-shadow`}
        >
          <h3 className="text-xl font-bold mb-4">{category.title}</h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="px-2 py-1 bg-white/20 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default SkillsSlideshow;