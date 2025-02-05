import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Caravan Insurance Policy Prediction",
    description: "Developed a machine learning model to predict caravan insurance policy purchases using various algorithms including Random Forest, Decision Trees, Logistic Regression, XGBoost, SVM, and KNN. Implemented hyperparameter tuning to optimize model performance.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    githubLink: "https://github.com/yourusername/caravan-insurance",
    technologies: ["Python", "Jupyter Notebook", "Machine Learning", "Random Forest", "Decision Trees", "Logistic Regression", "XGBoost", "SVM", "KNN"],
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