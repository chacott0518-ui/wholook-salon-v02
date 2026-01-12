import React from 'react';
import Section from '../components/Section';
import { PRICES } from '../constants';

const Booking: React.FC = () => {
  return (
    <>
      <Section id="price" className="bg-[#0a0a0a] border-t border-white/5">
        <div className="flex flex-col xl:flex-row gap-12">
          <div className="xl:w-1/4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white xl:sticky xl:top-32">
              Service <br /> <span className="text-neon-green">Price List</span>
            </h2>
          </div>
          <div className="xl:w-3/4">
             {/* 6 Categories in a 2-column grid to match the reference image */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
               {["CUT", "COLOR", "PERM", "MAGIC PERM", "DRY", "CLINIC"].map(cat => (
                 <div key={cat}>
                   {/* Boxed Header Style */}
                   <div className="border border-white/80 py-2 mb-6 text-center">
                     <h3 className="text-xl font-serif text-white uppercase tracking-widest">{cat}</h3>
                   </div>
                   
                   <div className="space-y-4 px-1">
                     {PRICES.filter(p => p.category === cat).map((item, idx) => (
                       <div key={idx} className="flex justify-between items-center group">
                         <span className="text-sm md:text-base text-gray-300 group-hover:text-white transition-colors uppercase tracking-wide font-medium">{item.service}</span>
                         <span className="text-sm md:text-base font-serif text-white tracking-wide">{item.price}</span>
                       </div>
                     ))}
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </Section>

      <Section id="booking" className="bg-black border-t border-white/10" withDivider={true}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-8">
            Ready to <br /> Define Your Aura?
          </h2>
          <p className="text-gray-400 mb-12 text-base md:text-lg">
            예약은 100% 사전 예약제로 운영됩니다. <br />
            당신만을 위한 시간을 비워두겠습니다.
          </p>
          
          <div className="max-w-lg mx-auto">
             <a 
               href="https://map.naver.com/p/entry/place/2039421472?lng=127.0566416&lat=37.5424167&placePath=/stylist?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202601130201&locale=ko&svcName=map_pcv5&fromPanelNum=1&additionalHeight=76&timestamp=202601130201&locale=ko&svcName=map_pcv5&entry=plt&searchType=place&c=15.00,0,0,0,dh" 
               target="_blank" 
               rel="noopener noreferrer"
               className="block w-full bg-neon-green text-black font-bold uppercase py-5 hover:bg-white transition-colors tracking-widest text-lg"
             >
               Make a Reservation
             </a>
          </div>
          
          <p className="mt-12 text-sm text-gray-400">
            * 예약 취소 및 변경은 방문 2일 전까지 가능합니다.
          </p>
        </div>
      </Section>
    </>
  );
};

export default Booking;