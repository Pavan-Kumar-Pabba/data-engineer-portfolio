import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % skillCategories.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % skillCategories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + skillCategories.length) % skillCategories.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto py-8">
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`flex-shrink-0 w-full p-8 ${category.bgColor} text-white transition-opacity duration-500 
                ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <h3 className="text-2xl font-bold mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="flex justify-center mt-4 gap-2">
        {skillCategories.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-secondary' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsSlideshow;