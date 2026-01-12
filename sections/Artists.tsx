import React from 'react';
import Section from '../components/Section';
import { ARTISTS } from '../constants';
import { motion } from 'framer-motion';

const Artists: React.FC = () => {
  return (
    // 배경을 약간 밝은 그레이(#121212)로 변경하여 밸런스 조정
    <Section id="artists" className="bg-[#121212] border-t border-white/5">
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
            {/* [수정] 이미지 틀 높이를 h-[480px]로 고정하여 하단 이름 위치를 일직선으로 정렬 */}
            <div className="overflow-hidden mb-6 relative h-[480px] bg-black/20 rounded-sm">
              <img
                src={artist.image}
                alt={artist.name}
                /* [수정] 장미(JANGMI) 얼굴 크기를 시윤님과 맞추기 위해 scale-[0.7]로 대폭 축소 */
                className={`w-full h-full object-cover object-top transition-transform duration-700 
                  ${artist.name === 'JANGMI' ? 'scale-[0.7]' : 'scale-100'} 
                  group-hover:scale-110 grayscale group-hover:grayscale-0`}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
            </div>

            {/* [수정] 녹색 세로선 밸런스: py-1을 추가하여 텍스트 높이에 딱 맞게 네온 바 길이 조정 */}
            <div className="border-l-2 border-neon-green pl-4 py-0 flex flex-col justify-start h-fit mt-4">
              <h3 className="text-2xl font-serif text-white leading-tight">{artist.name}</h3>
              <p className="text-neon-green text-sm uppercase tracking-wider mt-1 mb-2">{artist.role}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{artist.specialty}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Artists;