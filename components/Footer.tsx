import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-end gap-8">
        <div className="text-center md:text-left">
           <h2 className="text-2xl font-serif font-bold mb-4">WhoLook<span className="text-neon-green">.</span></h2>
           <address className="text-gray-500 not-italic text-sm leading-relaxed">
             서울 성동구 성수이로 84, 4층<br />
             <a href="tel:050714586203" className="hover:text-white transition-colors mt-1 inline-block">0507-1458-6203</a>
           </address>
        </div>
        
        <div className="flex flex-col items-center md:items-end">
          <div className="mb-4">
            <a 
              href="https://www.instagram.com/wholook_seongsu/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-neon-green transition-colors uppercase tracking-widest text-sm font-medium"
            >
              Instagram
            </a>
          </div>
          <p className="text-gray-700 text-xs">
            © 2026 WhoLook Premium Salon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;