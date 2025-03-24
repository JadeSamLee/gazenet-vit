
import { Activity, Brain, Cpu, Eye, Zap, BarChart } from 'lucide-react';
import { TASKS, ATTENTION } from '../contexts/ClassificationContext';

const AboutPage = () => {
  return (
    <div className="page-transition max-w-4xl mx-auto">
      <section className="mb-16">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">About GazeNet</h1>
          <p className="text-gray-600">Understanding our eye tracking classification system</p>
        </div>
        
        <div className="glass rounded-xl p-8 bg-gradient-to-br from-white to-gray-50">
          <p className="text-gray-700 leading-relaxed mb-6">
            GazeNet is an advanced eye tracking analysis and classification system that processes eye movement data to identify user tasks and attention patterns. 
            Our system utilizes state-of-the-art machine learning techniques to analyze pupil coordinates and movement patterns.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            The classification process works in two layers:
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Layer 0: Processes raw video data to extract pupil coordinates, compute k-values, and define directional behavior.</li>
              <li>Layer 1: Applies advanced processing to the extracted data using augmentation, interpolation, TimeSformer layers, and LSTM for dynamic attention modulation.</li>
            </ul>
          </p>
        </div>
      </section>
      
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="glass rounded-xl p-8 bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 rounded-full bg-gradient-to-br from-teal-500 to-teal-300">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-xl font-semibold">Task Classification</h2>
          </div>
          
          <p className="text-gray-700 mb-4">
            Our system classifies user activities into one of the following tasks:
          </p>
          
          <ul className="space-y-3">
            {TASKS.map((task, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-teal-300"></span>
                <span className="text-gray-800">{task}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="glass rounded-xl p-8 bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 rounded-full bg-gradient-to-br from-teal-500 to-teal-300">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-xl font-semibold">Attention Classification</h2>
          </div>
          
          <p className="text-gray-700 mb-4">
            We categorize attention patterns into these types:
          </p>
          
          <ul className="space-y-3">
            {ATTENTION.map((attention, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-teal-300"></span>
                <span className="text-gray-800">{attention}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">How It Works</h2>
        
        <div className="glass rounded-xl p-8 bg-gradient-to-br from-white to-gray-50">
          <img 
            src="/lovable-uploads/e3ecffea-d7f9-43fa-a9ac-f2b2ad13dfab.png" 
            alt="GazeNet Processing Flow" 
            className="w-full rounded-lg shadow-md mb-6" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div>
              <h3 className="text-lg font-medium mb-3 flex items-center">
                <Eye className="mr-2 h-5 w-5 text-teal-500" />
                Layer 0: Data Extraction
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-teal-300 mt-1.5 mr-2"></span>
                  <span>Video input processing to extract pupil coordinates</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-teal-300 mt-1.5 mr-2"></span>
                  <span>Computation of k values for movement analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-teal-300 mt-1.5 mr-2"></span>
                  <span>Definition of directional behavior patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-teal-300 mt-1.5 mr-2"></span>
                  <span>Generation of structured CSV data</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3 flex items-center">
                <Cpu className="mr-2 h-5 w-5 text-teal-500" />
                Layer 1: Advanced Processing
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-teal-300 mt-1.5 mr-2"></span>
                  <span>Data augmentation and interpolation techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-teal-300 mt-1.5 mr-2"></span>
                  <span>TimeSformer layers for temporal pattern recognition</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-teal-300 mt-1.5 mr-2"></span>
                  <span>LSTM networks for dynamic attention modulation</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-teal-300 mt-1.5 mr-2"></span>
                  <span>Generation of model and spatial-temporal encoded files</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* New sections about TimeSformer and LSTM */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">Core Technologies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass rounded-xl p-8 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 rounded-full bg-gradient-to-br from-teal-500 to-teal-300">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">TimeSformer</h3>
            </div>
            
            <p className="text-gray-700 mb-4">
              TimeSformer (Time-Space Transformer) is a specialized vision transformer architecture designed for processing temporal data sequences, making it ideal for eye tracking analysis.
            </p>
            
            <div className="space-y-3 mt-4">
              <div className="p-3 bg-gradient-to-br from-gray-50 to-white rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">Key Features:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-teal-300 mt-1.5 mr-2"></span>
                    <span>Divided Space-Time Attention that separately applies temporal and spatial attention mechanisms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-teal-300 mt-1.5 mr-2"></span>
                    <span>Joint Space-Time Attention that models interactions between spatial and temporal dimensions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-teal-300 mt-1.5 mr-2"></span>
                    <span>Specialized time embeddings to handle sequential information in eye movement data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-teal-300 mt-1.5 mr-2"></span>
                    <span>Patch-based embedding approach for efficient processing of high-dimensional inputs</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <p className="text-gray-700 mt-4">
              Unlike CNNs, TimeSformer can process entire sequences at once, allowing it to better understand the contextual relationships in complex eye movement patterns across both space and time dimensions.
            </p>
          </div>
          
          <div className="glass rounded-xl p-8 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 rounded-full bg-gradient-to-br from-teal-500 to-teal-300">
                <BarChart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">LSTM with Dynamic Attention Modulation</h3>
            </div>
            
            <p className="text-gray-700 mb-4">
              Long Short-Term Memory (LSTM) networks with dynamic attention modulation allow our system to focus on the most relevant aspects of eye movement data.
            </p>
            
            <div className="space-y-3 mt-4">
              <div className="p-3 bg-gradient-to-br from-gray-50 to-white rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">Key Features:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-teal-300 mt-1.5 mr-2"></span>
                    <span>Memory cells that store information about previous eye movement states</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-teal-300 mt-1.5 mr-2"></span>
                    <span>Attention weights that dynamically adjust to focus on critical movement patterns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-teal-300 mt-1.5 mr-2"></span>
                    <span>Gate mechanisms to selectively update, forget, and output information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-teal-300 mt-1.5 mr-2"></span>
                    <span>Bidirectional processing to analyze eye movements in both temporal directions</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <p className="text-gray-700 mt-4">
              The dynamic attention mechanism allows the system to focus on specific temporal segments of eye movement data that are most discriminative for task and attention classification.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
