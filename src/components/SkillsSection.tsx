import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: "Python, PL-SQL, PostgreSQL, NoSQL, PySpark, Unix, C++, Java, R-Programming"
  },
  {
    title: "Data Systems",
    skills: "Postgres, MySQL, Oracle, SQL Server, MongoDB, Cassandra, Amazon Redshift, Microsoft Azure, Snowflake"
  },
  {
    title: "Data Visualizations",
    skills: "Tableau, Power BI, Matplotlib, Seaborn, ggplot2, Snowsight, Looker Studio"
  },
  {
    title: "AWS Services",
    skills: "EC2, S3, RDS, Lambda, Redshift, Glue, Athena, EMR, DynamoDB, Kinesis, SNS, SQS, IAM, VPC, CloudFormation, CloudWatch, Route 53, EKS, ECS, Step Functions, API Gateway, CloudTrail, Secrets Manager, KMS, CodePipeline, CodeBuild, CodeDeploy, SageMaker, QuickSight"
  },
  {
    title: "Azure Services",
    skills: "Blob Storage, SQL Database, Databricks, Synapse Analytics, Data Factory, Event Hubs, Active Directory, Virtual Network, Kubernetes Service, Cosmos DB, Power BI, API Management, Monitor, DevOps"
  },
  {
    title: "Google Cloud Platform",
    skills: "Cloud Storage, BigQuery, Dataflow, Pub/Sub, IAM, VPC, Kubernetes Engine, Cloud SQL, Bigtable, Cloud Logging, Cloud Monitoring, Dataproc, Vertex AI"
  },
  {
    title: "Tools and Frameworks",
    skills: "Informatica, Talend, Stitch, Jira, Jupyter Notebook, SSMS, SSIS, Alation, Big Data tools, Hadoop, Apache Spark, GIT, Bitbucket, Jenkins, Ansible, SAP, Apache Airflow, Azure Data Studio, Rest APIs, Kafka, Terraform"
  },
  {
    title: "Demonstrated Skills",
    skills: "Data Mining, Advance Database Management, Machine Learning, Predictive Modelling, Cloud Platforms, Artificial Intelligence, LLMs, CICD tools, ETL tools, Big Data tools, Prompt Engineering with Langchain, Statistical Data Modelling, Business Intelligence"
  }
];

const SkillsSection = () => {
  return (
    <section className="py-16 px-8 bg-white" id="skills">
      <h2 className="text-3xl font-bold text-center mb-12 text-primary">Skills & Technologies</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-primary">{category.title}</h3>
            <p className="text-gray-700 leading-relaxed">{category.skills}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;