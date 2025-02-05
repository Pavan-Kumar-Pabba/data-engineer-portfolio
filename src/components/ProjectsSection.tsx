import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Caravan Insurance Policy Prediction",
    description: "Developed a machine learning model to predict caravan insurance policy purchases using various algorithms including Random Forest, Decision Trees, Logistic Regression, XGBoost, SVM, and KNN. Implemented hyperparameter tuning to optimize model performance.",
    image: "/lovable-uploads/d07d8c82-bbb3-4f1e-b7c7-1c4dc8c6e3bb.png",
    githubLink: "https://github.com/Pavan-Kumar-Pabba/Caravan-Insurance-Policy",
    technologies: ["Python", "Jupyter Notebook", "Machine Learning", "Random Forest", "Decision Trees", "Logistic Regression", "XGBoost", "SVM", "KNN"],
  },
  {
    title: "United States Mass Killing Analysis",
    description: "The project's overarching goal is to generate practical insights that can influence public policy and community-based initiatives aimed at curtailing mass killings. By pinpointing patterns and critical factors, it seeks to fuel policy discussions around gun control, mental health provisions, and public safety strategies, ultimately contributing to a safer societal environment.",
    image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302",
    githubLink: "https://github.com/Pavan-Kumar-Pabba/United-States-Mass-Killings-Analysis",
    technologies: ["SQL", "Tableau", "Data Analysis", "Data Visualization"],
  },
  {
    title: "Mediplus Website",
    description: "Led the design and deployment of a user-centric healthcare management system, integrating with Azure SQL Services for robust data management. Implemented comprehensive CRUD operations and adaptive event management for appointment scheduling, achieving universal responsiveness across all platforms.",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    githubLink: "https://github.com/Pavan-Kumar-Pabba/Mediplus-Web-Look",
    technologies: ["HTML", "CSS", "JavaScript", "C#", ".NET", "Microsoft Azure", "CRUD", "Healthcare Management"],
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-16 px-8 bg-accent/20" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover hover:opacity-80 transition-opacity"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => window.open(project.githubLink, "_blank")}
                >
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;