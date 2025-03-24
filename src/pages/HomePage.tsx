
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Eye, ArrowRight, FileVideo, FileInput, Activity } from 'lucide-react';

const HomePage = () => {
  const flowContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="page-transition space-y-16 max-w-5xl mx-auto">
      <section className="text-center space-y-6 py-12">
        <div className="animate-on-scroll opacity-0 transform">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="inline-block text-primary">Gaze</span>
            <span className="inline-block">Net</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Advanced eye tracking analysis and classification system
          </p>
        </div>
        
        <div className="animate-on-scroll opacity-0 transform delay-100 mt-8">
          <Link 
            to="/classify" 
            className="btn-primary text-base px-6 py-3 rounded-lg"
          >
            Start Classifying
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
      
      <section ref={flowContainerRef} className="space-y-10 py-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10 animate-on-scroll opacity-0">
          How It Works
        </h2>
        
        <div className="flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-0 items-center mb-16">
            <div className="md:col-span-1 animate-on-scroll opacity-0 bg-amber-50 p-4 rounded-xl text-center flow-item">
              <div className="flex flex-col items-center">
                <FileVideo className="h-8 w-8 text-amber-500 mb-2" />
                <p className="font-medium text-gray-700">Video</p>
              </div>
            </div>
            
            <div className="hidden md:block md:col-span-1 flow-arrow w-full h-px animate-on-scroll opacity-0"></div>
            
            <div className="md:col-span-1 animate-on-scroll opacity-0 bg-rose-50 p-4 rounded-xl text-center flow-item">
              <div className="flex flex-col items-center">
                <Eye className="h-8 w-8 text-rose-500 mb-2" />
                <p className="font-medium text-gray-700">Pupil Coordinates</p>
              </div>
            </div>
            
            <div className="hidden md:block md:col-span-1 flow-arrow w-full h-px animate-on-scroll opacity-0"></div>
            
            <div className="md:col-span-1 animate-on-scroll opacity-0 bg-orange-50 p-4 rounded-xl text-center flow-item">
              <div className="flex flex-col items-center">
                <Activity className="h-8 w-8 text-orange-500 mb-2" />
                <p className="font-medium text-gray-700">Classification</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-0 items-center">
            <div className="md:col-span-1 animate-on-scroll opacity-0 bg-orange-50 p-4 rounded-xl text-center flow-item">
              <div className="flex flex-col items-center">
                <FileInput className="h-8 w-8 text-orange-500 mb-2" />
                <p className="font-medium text-gray-700">Model File</p>
              </div>
            </div>
            
            <div className="hidden md:block md:col-span-1 flow-arrow w-full h-px animate-on-scroll opacity-0"></div>
            
            <div className="md:col-span-1 animate-on-scroll opacity-0 bg-blue-50 p-4 rounded-xl text-center flow-item">
              <div className="flex flex-col items-center">
                <Activity className="h-8 w-8 text-blue-500 mb-2" />
                <p className="font-medium text-gray-700">Processing</p>
              </div>
            </div>
            
            <div className="hidden md:block md:col-span-1 flow-arrow w-full h-px animate-on-scroll opacity-0"></div>
            
            <div className="md:col-span-1 animate-on-scroll opacity-0 bg-emerald-50 p-4 rounded-xl text-center flow-item">
              <div className="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-500 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3z"></path>
                  <path d="M7 22V7H2.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H7z"></path>
                </svg>
                <p className="font-medium text-gray-700">Results</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 text-center">
        <div className="glass rounded-2xl p-8 md:p-12 max-w-3xl mx-auto animate-on-scroll opacity-0">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Start Your Analysis Today
          </h2>
          <p className="text-gray-600 mb-8">
            Upload your video and model files to classify tasks and attention patterns with our state-of-the-art algorithm.
          </p>
          <Link 
            to="/classify" 
            className="btn-primary text-base px-6 py-3 rounded-lg"
          >
            Go to Classifier
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
