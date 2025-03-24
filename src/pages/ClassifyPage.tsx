
import { useState, useEffect } from 'react';
import { FileVideo, Database, Play, RefreshCw } from 'lucide-react';
import { useClassification } from '../contexts/ClassificationContext';
import FileDropzone from '../components/FileDropzone';
import { toast } from '@/components/ui/use-toast';

const ClassifyPage = () => {
  const {
    videoFile,
    modelFile,
    taskResult,
    attentionResult,
    setVideoFile,
    setModelFile,
    generateResults,
    resetResults,
    isGenerating
  } = useClassification();
  
  const [canGenerate, setCanGenerate] = useState(false);
  
  useEffect(() => {
    setCanGenerate(!!videoFile && !!modelFile);
  }, [videoFile, modelFile]);
  
  const handleGenerate = () => {
    if (!canGenerate) {
      toast({
        title: "Files required",
        description: "Please upload both video and model files",
        variant: "destructive"
      });
      return;
    }
    
    generateResults();
    toast({
      title: "Processing",
      description: "Analyzing your files..."
    });
  };
  
  const handleReset = () => {
    setVideoFile(null);
    setModelFile(null);
    resetResults();
  };

  return (
    <div className="page-transition max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">Classification Tool</h1>
        <p className="text-gray-600">Upload your files to classify tasks and attention patterns</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <FileDropzone
          onFileDrop={setVideoFile}
          accept="video/*"
          file={videoFile}
          label="Upload Video File"
          icon={<FileVideo className="h-10 w-10 text-gray-400" />}
          clearFile={() => setVideoFile(null)}
        />
        
        <FileDropzone
          onFileDrop={setModelFile}
          accept=".h5"
          file={modelFile}
          label="Upload Model File (.h5)"
          icon={<Database className="h-10 w-10 text-gray-400" />}
          clearFile={() => setModelFile(null)}
        />
      </div>
      
      <div className="flex justify-center space-x-4 mb-12">
        <button
          onClick={handleGenerate}
          disabled={!canGenerate || isGenerating}
          className={`btn-primary rounded-lg text-base px-6 py-3 ${
            !canGenerate || isGenerating ? 'opacity-60 cursor-not-allowed' : ''
          }`}
        >
          {isGenerating ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <Play className="mr-2 h-4 w-4" />
              Generate Classification
            </>
          )}
        </button>
        
        <button
          onClick={handleReset}
          className="btn-secondary rounded-lg text-base px-6 py-3"
        >
          <RefreshCw className="mr-2 h-4 w-4" />
          Reset
        </button>
      </div>
      
      {(taskResult || attentionResult) && (
        <div className="result-card animate-scale-in">
          <h2 className="text-2xl font-semibold mb-6 text-center">Classification Results</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2 text-center">
              <p className="text-sm font-medium text-gray-500">TASK CLASSIFICATION</p>
              <div className="bg-blue-50 text-blue-800 py-3 px-4 rounded-lg font-bold text-xl">
                {taskResult}
              </div>
            </div>
            
            <div className="space-y-2 text-center">
              <p className="text-sm font-medium text-gray-500">ATTENTION CLASSIFICATION</p>
              <div className="bg-purple-50 text-purple-800 py-3 px-4 rounded-lg font-bold text-xl">
                {attentionResult}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassifyPage;
