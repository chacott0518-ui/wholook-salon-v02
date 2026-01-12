import React from 'react';
import Section from '../components/Section';
import { ARTISTS } from '../constants';
import { motion } from 'framer-motion';

const Artists: React.FC = () => {
  return (
    // 배경을 더 밝은 그레이(#1a1a1a)로 변경하여 밸런스 조정
    <Section id="artists" className="bg-[#1a1a1a] border-t border-white/5">
      <div className="mb-20 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
          Artistry in Hair
        </h2>
        <p className="text-gray-400">
          최고의 기술을 가진 아티스트들을 만나보세요.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {ARTISTS.map((artist, index) => (
          <motion.div
            key={artist.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="group relative cursor-pointer"
          >
            {/* 이미지 틀의 높이를 h-[480px]로 고정하여 이름 위치를 한 줄로 맞춤 */}
            <div className="overflow-hidden mb-6 relative h-[480px] bg-black/40 rounded-sm">
              <img
                src={artist.image}
                alt={artist.name}
                /* 장미(JANGMI)는 scale-[0.75]로 대폭 축소하여 시윤님 얼굴 크기와 맞춤 */
                className={`w-full h-full object-cover object-top transition-transform duration-700 
                  ${artist.name === 'JANGMI' ? 'scale-[0.75]' : 'scale-100'} 
                  group-hover:scale-110 grayscale group-hover:grayscale-0`}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </div>

            {/* 하단 텍스트 영역: 위에서 이미지 높이를 고정했으므로 세 명 모두 세로 위치가 정확히 일치함 */}
            <div className="border-l-2 border-neon-green pl-4 min-h-[110px]">
              <h3 className="text-2xl font-serif text-white">{artist.name}</h3>
              <p className="text-neon-green text-sm uppercase tracking-wider mb-2">{artist.role}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{artist.specialty}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Artists;