
import { Database, Server, Code, BarChart, BrainCircuit, Cloud, Network } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative min-h-[70vh] flex flex-col justify-center items-center bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground p-8">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <svg className="absolute blur-3xl opacity-20" width="100%" height="100%">
          <circle cx="50%" cy="50%" r="100" fill="url(#gradient)" />
          <defs>
            <radialGradient id="gradient">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#3B82F6" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
          Pavan Kumar Pabba
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-center max-w-2xl text-white/90">
          Data Engineer & Analytics Professional
        </p>
        <p className="text-lg md:text-xl mb-8 text-center text-white/80">
          Decoding Complexity, Delivering Clarity
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-8"
      >
        {[
          { icon: Database, text: "Big Data" },
          { icon: Server, text: "Cloud Platforms" },
          { icon: Code, text: "ETL Pipeline" },
          { icon: BarChart, text: "Data Visualization" },
          { icon: BrainCircuit, text: "AI & ML" },
          { icon: Network, text: "Data Engineering" }
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
          >
            <item.icon className="w-8 h-8 text-accent" />
            <span className="text-sm font-medium text-white/90">{item.text}</span>
          </motion.div>
        ))}
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default HeroSection;
