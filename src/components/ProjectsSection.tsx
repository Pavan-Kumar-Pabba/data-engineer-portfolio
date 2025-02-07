
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    image: "/lovable-uploads/241f568b-9ec8-4b90-8d48-e98a1693ff48.png",
    githubLink: "https://github.com/Pavan-Kumar-Pabba/United-States-Mass-Killings-Analysis",
    technologies: ["SQL", "Tableau", "Data Analysis", "Data Visualization"],
  },
  {
    title: "Mediplus Website",
    description: "Led the design and deployment of a user-centric healthcare management system, integrating with Azure SQL Services for robust data management. Implemented comprehensive CRUD operations and adaptive event management for appointment scheduling, achieving universal responsiveness across all platforms.",
    image: "/lovable-uploads/7d82423a-59a8-4a7e-8ea7-ca43e438f1a2.png",
    githubLink: "https://github.com/Pavan-Kumar-Pabba/Mediplus-Web-Look",
    technologies: ["HTML", "CSS", "JavaScript", "C#", ".NET", "Microsoft Azure", "CRUD", "Healthcare Management"],
  },
  {
    title: "Video Activity Recognition Using LSTM and GRU",
    description: "Collaborated and published a research paper on advanced machine learning models (LSTM and GRU) for video activity recognition, achieving a peak accuracy of 97.3% on the UCF101 dataset and setting new standard in real-time video processing. Refined transfer learning applications with CNN architectures (ResNet and MobileNet) for large video datasets over 9GB.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    githubLink: "https://github.com/Pavan-Kumar-Pabba/video-activity-recognition",
    technologies: ["Deep Learning", "Transfer Learning", "CNN", "LSTM", "GRU", "Python", "Keras"],
  },
  {
    title: "Sentiment Analysis of Amazon Reviews",
    description: "Developed a sophisticated NLP model to analyze customer sentiment from Amazon product reviews. Implemented advanced text preprocessing techniques and leveraged BERT transformers to achieve 94% accuracy in sentiment classification. The system processes thousands of reviews in real-time, providing valuable insights for product improvement and customer satisfaction analysis.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    githubLink: "https://github.com/Pavan-Kumar-Pabba/sentiment-analysis",
    technologies: ["Python", "NLP", "BERT", "Machine Learning", "Text Processing", "Sentiment Analysis"],
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-16 px-8 bg-gradient-to-b from-accent/20 to-background" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary relative">
          <span className="inline-block animate-fade-in">Projects</span>
          <div className="absolute -z-10 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent bottom-0"></div>
        </h2>
        <Carousel className="w-full">
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem 
                key={index} 
                className="basis-full md:basis-1/2 lg:basis-1/3 transition-transform duration-300 ease-in-out"
              >
                <Card className="flex flex-col h-full mx-2 group hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm border-accent/50 hover:border-primary/50">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-background/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <h3 className="text-xl font-semibold mb-4 text-primary group-hover:text-primary/80 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 mb-4 flex-grow line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-accent/80 text-accent-foreground px-3 py-1 rounded-full text-sm backdrop-blur-sm 
                                   hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      className="w-full mt-auto group/button hover:bg-primary hover:text-primary-foreground 
                               transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                      onClick={() => window.open(project.githubLink, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2 transition-transform group-hover/button:rotate-12" />
                      View on GitHub
                    </Button>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 hover:bg-primary hover:text-primary-foreground transition-colors" />
          <CarouselNext className="hidden md:flex -right-12 hover:bg-primary hover:text-primary-foreground transition-colors" />
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectsSection;
