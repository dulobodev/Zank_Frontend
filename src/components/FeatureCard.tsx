import React from 'react';
import cardBackground from '@/assets/card-background.png';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  iconAlt: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, iconAlt }) => {
  return (
    <article className="w-full max-w-[380px] h-[300px] border relative p-[30px] rounded-[20px] border-solid border-[rgba(255,255,255,0.40)] flex flex-col items-center overflow-hidden max-md:h-[280px] max-sm:h-[260px]">
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
      <div className="relative z-10 flex flex-col items-center">
        <img 
          src={icon} 
          alt={iconAlt} 
          className="w-[80px] h-[80px] mb-[20px] max-sm:w-[70px] max-sm:h-[70px]" 
        />
        
        <h3 className="text-black text-center text-xl font-bold mb-[12px] max-sm:text-lg">
          {title}
        </h3>
        
        <p className="text-black text-center text-sm font-normal leading-relaxed max-sm:text-xs">
          {description}
        </p>
      </div>
    </article>
  );
};

export default FeatureCard;
