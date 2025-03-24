
import { Activity, Brain, Cpu, Eye } from 'lucide-react';
import { TASKS, ATTENTION } from '../contexts/ClassificationContext';

const AboutPage = () => {
  return (
    <div className="page-transition max-w-4xl mx-auto">
      <section className="mb-16">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">About GazeNet</h1>
          <p className="text-gray-600">Understanding our eye tracking classification system</p>
        </div>
        
        <div className="glass rounded-xl p-8">
          <p className="text-gray-700 leading-relaxed mb-6">
            GazeNet is an advanced eye tracking analysis and classification system that processes eye movement data to identify user tasks and attention patterns. 
            Our system utilizes state-of-the-art machine learning techniques to analyze pupil coordinates and movement patterns.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            The classification process works in two layers:
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Layer 0: Processes raw video data to extract pupil coordinates, compute k-values, and define directional behavior.</li>
              <li>Layer 1: Applies advanced processing to the extracted data using augmentation, interpolation, TimeStormer layers, and LSTM for dynamic attention modulation.</li>
            </ul>
          </p>
        </div>
      </section>
      
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="glass rounded-xl p-8">
          <div className="flex items-center space-x-3 mb-4">
            <Brain className="h-6 w-6 text-blue-500" />
            <h2 className="text-xl font-semibold">Task Classification</h2>
          </div>
          
          <p className="text-gray-700 mb-4">
            Our system classifies user activities into one of the following tasks:
          </p>
          
          <ul className="space-y-3">
            {TASKS.map((task, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span className="text-gray-800">{task}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="glass rounded-xl p-8">
          <div className="flex items-center space-x-3 mb-4">
            <Activity className="h-6 w-6 text-purple-500" />
            <h2 className="text-xl font-semibold">Attention Classification</h2>
          </div>
          
          <p className="text-gray-700 mb-4">
            We categorize attention patterns into these types:
          </p>
          
          <ul className="space-y-3">
            {ATTENTION.map((attention, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                <span className="text-gray-800">{attention}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">How It Works</h2>
        
        <div className="glass rounded-xl p-8">
          <img 
            src="/lovable-uploads/e3ecffea-d7f9-43fa-a9ac-f2b2ad13dfab.png" 
            alt="GazeNet Processing Flow" 
            className="w-full rounded-lg shadow-md mb-6" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div>
              <h3 className="text-lg font-medium mb-3 flex items-center">
                <Eye className="mr-2 h-5 w-5 text-amber-500" />
                Layer 0: Data Extraction
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 mr-2"></span>
                  <span>Video input processing to extract pupil coordinates</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 mr-2"></span>
                  <span>Computation of k values for movement analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 mr-2"></span>
                  <span>Definition of directional behavior patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 mr-2"></span>
                  <span>Generation of structured CSV data</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3 flex items-center">
                <Cpu className="mr-2 h-5 w-5 text-blue-500" />
                Layer 1: Advanced Processing
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
                  <span>Data augmentation and interpolation techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
                  <span>TimeStormer layers for temporal pattern recognition</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
                  <span>LSTM networks for dynamic attention modulation</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
                  <span>Generation of model and spatial-temporal encoded files</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
