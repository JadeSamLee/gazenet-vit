
import React from 'react';
import { Eye } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'minimal';
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md',
  variant = 'default'
}) => {
  const sizes = {
    sm: {
      icon: 'h-5 w-5',
      text: 'text-lg',
      container: 'space-x-1.5'
    },
    md: {
      icon: 'h-6 w-6',
      text: 'text-xl',
      container: 'space-x-2'
    },
    lg: {
      icon: 'h-8 w-8',
      text: 'text-2xl',
      container: 'space-x-3'
    }
  };
  
  return (
    <div className={`flex items-center ${sizes[size].container}`}>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full blur-sm opacity-70"></div>
        <div className="relative bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center p-1.5">
          <Eye className={`${sizes[size].icon} text-white`} />
        </div>
      </div>
      
      {variant === 'default' && (
        <span className={`${sizes[size].text} font-semibold bg-gradient-to-br from-teal-600 to-teal-400 bg-clip-text text-transparent`}>
          GazeNet
        </span>
      )}
    </div>
  );
};

export default Logo;
