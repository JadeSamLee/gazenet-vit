
import { Link } from "react-router-dom";
import { ArrowRight, Eye, Layers, Cpu } from "lucide-react";

const Index = () => {
  return (
    <div className="page-transition">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="header-gradient">GazeNet</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Advanced vision transformer for eye-tracking analysis and attention classification
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="classic-card flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full icon-bg flex items-center justify-center mb-4">
            <Eye className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Gaze Classification</h2>
          <p className="text-gray-600 mb-6">
            Analyze eye-tracking data using our advanced TimeSformer model to classify user attention patterns.
          </p>
          <Link to="/classify" className="btn-primary mt-auto">
            Try Classification <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
        
        <div className="classic-card flex flex-col items-center text-center classic-pattern">
          <div className="w-16 h-16 rounded-full icon-bg flex items-center justify-center mb-4">
            <Cpu className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Advanced Technology</h2>
          <p className="text-gray-600 mb-6">
            Powered by TimeSformer and LSTM with dynamic attention modulation for accurate classification.
          </p>
          <Link to="/about" className="btn-primary mt-auto">
            Learn More <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
      
      <div className="glass rounded-xl p-8 mb-12 classic-pattern">
        <h2 className="text-2xl font-bold mb-4 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/70 p-6 rounded-lg shadow-sm flow-item">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 text-teal-700 mb-4">
              <span className="font-bold">1</span>
            </div>
            <h3 className="font-bold mb-2">Upload Data</h3>
            <p className="text-gray-600">Upload eye-tracking video and pre-trained model</p>
          </div>
          
          <div className="bg-white/70 p-6 rounded-lg shadow-sm flow-item">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 text-teal-700 mb-4">
              <span className="font-bold">2</span>
            </div>
            <h3 className="font-bold mb-2">Process</h3>
            <p className="text-gray-600">Our TimeSformer model analyzes gaze patterns</p>
          </div>
          
          <div className="bg-white/70 p-6 rounded-lg shadow-sm flow-item">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 text-teal-700 mb-4">
              <span className="font-bold">3</span>
            </div>
            <h3 className="font-bold mb-2">Results</h3>
            <p className="text-gray-600">Get detailed attention and task classification</p>
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <Link to="/classify" className="btn-primary">
          Start Classification <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default Index;
