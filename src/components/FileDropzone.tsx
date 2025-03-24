
import { useState, useCallback } from 'react';
import { Upload, FileType, Check, X } from 'lucide-react';

interface FileDropzoneProps {
  onFileDrop: (file: File) => void;
  accept: string;
  maxSize?: number;
  file: File | null;
  label: string;
  icon?: React.ReactNode;
  clearFile: () => void;
}

const FileDropzone = ({
  onFileDrop,
  accept,
  maxSize = 100 * 1024 * 1024, // 100MB default
  file,
  label,
  icon,
  clearFile
}: FileDropzoneProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const validateFile = useCallback((file: File): boolean => {
    setError(null);

    // Check file type
    const fileType = file.type;
    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    
    // For video files
    if (accept === 'video/*' && !fileType.startsWith('video/')) {
      setError('Please upload a video file');
      return false;
    }
    
    // For .h5 files which might not have a proper MIME type
    if (accept === '.h5' && fileExtension !== 'h5') {
      setError('Please upload an .h5 file');
      return false;
    }

    // Check file size
    if (file.size > maxSize) {
      setError(`File is too large. Maximum size is ${Math.round(maxSize / (1024 * 1024))}MB`);
      return false;
    }

    return true;
  }, [accept, maxSize]);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      if (validateFile(droppedFile)) {
        onFileDrop(droppedFile);
      }
    }
  }, [onFileDrop, validateFile]);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      if (validateFile(selectedFile)) {
        onFileDrop(selectedFile);
      }
    }
  }, [onFileDrop, validateFile]);

  return (
    <div className="space-y-2">
      {!file ? (
        <div
          className={`file-drop-area ${isDragging ? 'active' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById(`file-upload-${label}`)?.click()}
        >
          <input
            id={`file-upload-${label}`}
            type="file"
            accept={accept}
            onChange={handleFileSelect}
            className="hidden"
          />
          <div className="flex flex-col items-center space-y-3">
            {icon || <Upload className="h-10 w-10 text-gray-400" />}
            <div className="space-y-1 text-center">
              <p className="text-sm font-medium text-gray-700">{label}</p>
              <p className="text-xs text-gray-500">Drag and drop or click to browse</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white/80 border border-gray-200 rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <FileType className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm font-medium text-gray-800 truncate max-w-[180px]">{file.name}</p>
              <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
            </div>
          </div>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              clearFile();
            }}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>
      )}
      
      {error && (
        <p className="text-red-500 text-xs mt-1 animate-fade-in">{error}</p>
      )}
    </div>
  );
};

const formatFileSize = (bytes: number): string => {
  if (bytes < 1024) return `${bytes} bytes`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

export default FileDropzone;
