import React from 'react';
import { motion } from 'framer-motion';
const floatingImages = [
  {
    src: "https://i.pinimg.com/736x/0f/32/bc/0f32bcd8a7eabbf3ae4544c3cfa241dc.jpg",
    className: "top-[10%] left-[5%] md:top-[12%] md:left-[10%] w-32 md:w-80 aspect-[3/4] z-20 shadow-2xl",
    delay: 0.8,
  },
  {
    src: "https://i.pinimg.com/736x/98/4c/32/984c32dd82e5492910282ddbe0b9070b.jpg",
    // top-[5%]를 top-[20%]로 수정하여 모바일에서 아래로 내림
    className: "top-[20%] right-[5%] md:top-[8%] md:right-[12%] w-28 md:w-56 aspect-square z-10 rotate-3",
    delay: 1.0,
  },
  {
    src: "https://i.pinimg.com/736x/cb/6e/0e/cb6e0e9234d879cb482e96fde1ec4c29.jpg",
    className: "bottom-[20%] left-[2%] md:bottom-[20%] md:left-[8%] w-28 md:w-60 aspect-[3/4] z-10 -rotate-3",
    delay: 1.2,
  },
  {
    src: "https://i.pinimg.com/1200x/0e/eb/8c/0eeb8c7cbd7e7eec34cc44f06d354a4c.jpg",
    className: "bottom-[5%] left-[25%] md:bottom-[18%] md:left-[30%] w-28 md:w-60 aspect-[3/4] z-8 shadow-lg",
    delay: 1.4,
  },
  {
    src: "https://i.pinimg.com/736x/7e/29/84/7e2984737122798a0b6ee1f1f7d95f33.jpg",
    // 1. 모바일: w-36으로 줄여서 버튼 옆 빨간 박스 위치에 안착
    // 2. PC(md): w-[380px]로 줄여서 'SALON' 글자 아래 배경으로 배치
    // 3. z-0으로 설정하여 배경 위로 노출 (글자/버튼보다는 뒤)
    className: "bottom-[8%] right-[2%] md:bottom-[5%] md:right-[5%] w-36 md:w-[380px] aspect-[2/3] z-0 rotate-[4deg] opacity-80 shadow-none",
    delay: 1.6,
  },
  },
];
const Hero: React.FC = () => {
  return (
    <div className="relative w-full min-h-[100dvh] bg-black flex flex-col justify-center items-center overflow-hidden">

      {/* Scattered Floating Images */}
      {floatingImages.map((img, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: img.delay
          }}
          className={`absolute ${img.className} z-0 pointer-events-none`}
        >
          <img
            src={img.src}
            className="w-full h-full object-cover object-top rounded-lg"
            alt="Hair Style"
          />
        </motion.div>
      ))}

      {/* Central Content */}
      <div className="z-10 text-center relative px-4 mt-20 md:mt-0">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-neon-green uppercase tracking-[0.3em] text-xs md:text-sm mb-6 font-bold"
        >
          Seongsu Premium Salon
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-9xl font-serif font-bold text-white mb-8 uppercase leading-none tracking-tighter"
        >
          Define <br />
          <span className="italic font-light text-gray-400">Your Aura</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.5 }}
        >
          <a
            href="https://map.naver.com/p/entry/place/2039421472?lng=127.0566416&lat=37.5424167&placePath=/stylist?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202601130207&locale=ko&svcName=map_pcv5&fromPanelNum=1&additionalHeight=76&timestamp=202601130207&locale=ko&svcName=map_pcv5&entry=plt&searchType=place&c=15.00,0,0,0,dh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-neon-green text-black px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors shadow-[0_0_20px_rgba(57,255,20,0.4)] rounded-full"
          >
            Book Now
          </a>
        </motion.div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,#000000_100%)] pointer-events-none z-0" />
    </div>
  );
};

export default Hero;