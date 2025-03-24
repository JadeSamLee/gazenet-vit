
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the tasks and attention constants
export const TASKS = ["Picture", "Reading", "Video"];
export const ATTENTION = ["BVPS (GTSS)", "BVPS (TSS)", "GVPS (BTSS)", "GVPS (TSS)"];

// Define the full descriptions for attention types
export const ATTENTION_DESCRIPTIONS = {
  "BVPS (GTSS)": "Bad visuo-perceptual skills, Good task switching skills",
  "BVPS (TSS)": "Bad visuo-perceptual skills and bad task switching skills",
  "GVPS (BTSS)": "Good visuo-perceptual skills, Bad task switching skills",
  "GVPS (TSS)": "Good visuo-perceptual skills, good task switching skills"
};

interface ClassificationContextType {
  videoFile: File | null;
  modelFile: File | null;
  taskResult: string | null;
  attentionResult: string | null;
  setVideoFile: (file: File | null) => void;
  setModelFile: (file: File | null) => void;
  generateResults: () => void;
  resetResults: () => void;
  isGenerating: boolean;
}

const ClassificationContext = createContext<ClassificationContextType | undefined>(undefined);

export const ClassificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [modelFile, setModelFile] = useState<File | null>(null);
  const [taskResult, setTaskResult] = useState<string | null>(null);
  const [attentionResult, setAttentionResult] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateResults = () => {
    if (!videoFile || !modelFile) return;
    
    setIsGenerating(true);
    
    // Simulate processing time
    setTimeout(() => {
      // Randomly select a task and attention type
      const randomTask = TASKS[Math.floor(Math.random() * TASKS.length)];
      const randomAttention = ATTENTION[Math.floor(Math.random() * ATTENTION.length)];
      
      setTaskResult(randomTask);
      setAttentionResult(randomAttention);
      setIsGenerating(false);
    }, 2000);
  };
  
  const resetResults = () => {
    setTaskResult(null);
    setAttentionResult(null);
  };

  return (
    <ClassificationContext.Provider
      value={{
        videoFile,
        modelFile,
        taskResult,
        attentionResult,
        setVideoFile,
        setModelFile,
        generateResults,
        resetResults,
        isGenerating
      }}
    >
      {children}
    </ClassificationContext.Provider>
  );
};

export const useClassification = () => {
  const context = useContext(ClassificationContext);
  if (context === undefined) {
    throw new Error('useClassification must be used within a ClassificationProvider');
  }
  return context;
};
