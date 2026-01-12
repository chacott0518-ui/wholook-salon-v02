import React from 'react';
import Section from '../components/Section';
import { STYLES } from '../constants';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Style: React.FC = () => {
  return (
    <Section id="style" className="bg-[#0a0a0a] border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
        <div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-2">
            Personalized Styling
          </h2>
          <p className="text-xl text-gray-400">
            당신만의 고유한 아우라를 정의합니다.
          </p>
        </div>
        <div className="hidden md:block">
          <a 
            href="https://map.naver.com/p/entry/place/2039421472?lng=127.0566416&lat=37.5424167&placePath=/styleInfo?filter=popular&from=summary&style=13&from=map&fromPanelNum=1&additionalHeight=76&timestamp=202601130258&locale=ko&svcName=map_pcv5&entry=plt&searchType=place&c=15.00,0,0,0,dh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-neon-green hover:text-white transition-colors uppercase tracking-widest text-sm font-bold"
          >
            View All Lookbook <ArrowUpRight className="ml-2" size={18} />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {STYLES.map((style, index) => (
          <motion.div
            key={style.id}
            initial={{ opacity: 0, y: 20, filter: "blur(12px)", scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.1,
              duration: 1,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="group relative h-[400px] overflow-hidden"
          >
            <img
              src={style.image}
              alt={style.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-2xl font-serif text-white mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{style.title}</h3>
              <p className="text-neon-green text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{style.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Style;