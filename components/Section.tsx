import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
  withDivider?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, children, className = '', dark = true, withDivider = true }) => {
  return (
    <section 
      id={id} 
      className={`relative py-6 md:py-10 px-6 ${dark ? 'text-white' : 'text-black'} ${className}`}
    >
      {/* Visual Divider */}
      {withDivider && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center gap-2 -translate-y-1/2 z-10">
           <div className="w-16 h-[1px] bg-white/20"></div>
           <div className="w-1.5 h-1.5 rounded-full bg-neon-green shadow-[0_0_5px_#39FF14]"></div>
           <div className="w-16 h-[1px] bg-white/20"></div>
        </div>
      )}
      
      <div className="max-w-7xl mx-auto h-full">
        {children}
      </div>
    </section>
  );
};

export default Section;