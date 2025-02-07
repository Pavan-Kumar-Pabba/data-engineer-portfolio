
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Database, Cloud, Brain, ChartBar, Code2, Git, Server, Network } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: "Python, PL-SQL, PostgreSQL, NoSQL, PySpark, Unix, C++, Java, R-Programming",
    icon: Code2,
    bgImage: "/lovable-uploads/503e9d73-b3e1-42b7-b20b-afb16b1c1f0b.png"
  },
  {
    title: "Data Systems",
    skills: "Postgres, MySQL, Oracle, SQL Server, MongoDB, Cassandra, Amazon Redshift, Microsoft Azure, Snowflake",
    icon: Database,
    bgImage: "/lovable-uploads/9f4a532c-5f10-4611-8636-1cd4b83b3426.png"
  },
  {
    title: "Data Visualizations",
    skills: "Tableau, Power BI, Matplotlib, Seaborn, ggplot2, Snowsight, Looker Studio",
    icon: ChartBar,
    bgImage: "/lovable-uploads/241f568b-9ec8-4b90-8d48-e98a1693ff48.png"
  },
  {
    title: "AWS Services",
    skills: "EC2, S3, RDS, Lambda, Redshift, Glue, Athena, EMR, DynamoDB, Kinesis, SNS, SQS, IAM, VPC",
    icon: Cloud,
    bgImage: "/lovable-uploads/d07d8c82-bbb3-4f1e-b7c7-1c4dc8c6e3bb.png"
  },
  {
    title: "Azure Services",
    skills: "Blob Storage, SQL Database, Databricks, Synapse Analytics, Data Factory, Event Hubs, Active Directory",
    icon: Server,
    bgImage: "/lovable-uploads/7d82423a-59a8-4a7e-8ea7-ca43e438f1a2.png"
  },
  {
    title: "Tools and Frameworks",
    skills: "Informatica, Talend, Stitch, Jira, Jupyter Notebook, SSMS, SSIS, Alation, Big Data tools",
    icon: Git,
    bgImage: "/lovable-uploads/503e9d73-b3e1-42b7-b20b-afb16b1c1f0b.png"
  },
  {
    title: "Cloud & Infrastructure",
    skills: "AWS, Azure, GCP, Kubernetes, Docker, Terraform, CI/CD, DevOps",
    icon: Network,
    bgImage: "/lovable-uploads/9f4a532c-5f10-4611-8636-1cd4b83b3426.png"
  },
  {
    title: "AI & Machine Learning",
    skills: "TensorFlow, PyTorch, Scikit-learn, Neural Networks, NLP, Computer Vision",
    icon: Brain,
    bgImage: "/lovable-uploads/241f568b-9ec8-4b90-8d48-e98a1693ff48.png"
  }
];

const SkillsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-16 px-8 relative bg-gradient-to-b from-background via-accent/5 to-background" id="skills">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/c09136fe-032f-43b9-8ddb-eec1f8beb6bd.png')] opacity-5 bg-repeat"></div>
      
      <div className="max-w-6xl mx-auto relative">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-primary relative"
        >
          Skills & Technologies
          <div className="absolute -z-10 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent bottom-0"></div>
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 bg-white/50 backdrop-blur-sm border-accent/50 hover:border-primary/50 group">
                <div className="relative h-full">
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <img 
                      src={category.bgImage} 
                      alt="" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="relative z-10">
                    <category.icon className="w-8 h-8 text-primary mb-4 group-hover:text-secondary transition-colors duration-300" />
                    <h3 className="text-xl font-semibold mb-3 text-primary group-hover:text-secondary transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{category.skills}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
