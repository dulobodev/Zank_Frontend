import React from 'react';
import cardBackground from '@/assets/card-background.png';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  iconAlt: string;
  index: number;
  isInView: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, iconAlt, index, isInView }) => {
  return (
    <article 
      className={`w-full max-w-[380px] min-w-0 h-[300px] border relative p-[30px] rounded-[20px] border-solid border-[rgba(255,255,255,0.40)] flex flex-col items-center overflow-hidden max-xl:max-w-full max-lg:h-[280px] max-md:h-[280px] max-md:max-w-full max-sm:h-[260px] max-sm:p-[20px] transition-all duration-700 ${
        isInView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Background image with transparency */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url(${cardBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Overlay for additional transparency effect */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[20px]" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center h-full justify-center">
        <div className="mb-[20px]">
          <img 
            src={icon} 
            alt={iconAlt} 
            className="w-[80px] h-[80px] max-sm:w-[70px] max-sm:h-[70px] object-contain" 
            loading="lazy"
          />
        </div>
        
        <h3 className="text-zank-dark text-center text-xl font-bold mb-[12px] max-sm:text-lg">
          {title}
        </h3>
        
        <p className="text-zank-dark text-center text-sm font-normal leading-relaxed max-sm:text-xs">
          {description}
        </p>
      </div>
    </article>
  );
};

export default FeatureCard;
