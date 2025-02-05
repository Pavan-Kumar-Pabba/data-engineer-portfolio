import { Database, Server, Code, BarChart } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center bg-primary text-primary-foreground p-8 animate-fadeIn">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Pavan Kumar Pabba</h1>
      <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">
        Data Engineer & Analytics Professional
      </p>
      <div className="flex flex-wrap justify-center gap-8 mt-4">
        <div className="flex items-center gap-2">
          <Database className="w-6 h-6" />
          <span>Big Data</span>
        </div>
        <div className="flex items-center gap-2">
          <Server className="w-6 h-6" />
          <span>Cloud Platforms</span>
        </div>
        <div className="flex items-center gap-2">
          <Code className="w-6 h-6" />
          <span>ETL Pipeline</span>
        </div>
        <div className="flex items-center gap-2">
          <BarChart className="w-6 h-6" />
          <span>Data Visualization</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;