import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';

const Heritage: React.FC = () => {
  return (
    <Section id="heritage" className="bg-[#0a0a0a] border-t border-white/5">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
              Our Heritage: <br />
              <span className="text-gray-500 text-3xl md:text-4xl">시간이 흘러도 변하지 않는 가치</span>
            </h2>
            <div className="space-y-6 text-gray-400 font-sans leading-relaxed">
              <p>
                WhoLook은 단순한 헤어 살롱이 아닙니다. 우리는 각 개인이 가진 고유한 아름다움을 발견하고,
                가장 완벽한 형태로 다듬어내는 크리에이티브 그룹입니다.
              </p>
              <p className="text-neon-green font-medium">
                "We don't just cut hair; we sculpt your identity."
              </p>
              <p>
                성수동의 거친 인더스트리얼 무드와 현대적인 미학이 공존하는 공간에서,
                당신만을 위한 맞춤형 스타일링을 경험해보세요. 수십 년간 쌓아온 장인정신(Artistry)과
                트렌디한 감각의 조화를 약속합니다.
              </p>
            </div>

            <div className="mt-12 flex space-x-12 border-t border-white/10 pt-8">
              <div>
                <span className="block text-3xl font-bold text-white">10+</span>
                <span className="text-sm text-gray-600 uppercase tracking-wider">Years Experience</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-white">5k+</span>
                <span className="text-sm text-gray-600 uppercase tracking-wider">Happy Clients</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="order-1 md:order-2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <img
              src="https://i.pinimg.com/1200x/55/be/3f/55be3f24789a2fe44c9dfd3068971bae.jpg"
              alt="WhoLook Heritage Interior"
              className="w-full h-[500px] md:h-[650px] object-cover transition-all duration-700 rounded-sm shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-neon-green/30 z-20 hidden md:block" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-white/10 z-0 hidden md:block" />
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Heritage;