import React from 'react';
import { motion } from 'framer-motion';

const floatingImages = [
  {
    src: "https://i.pinimg.com/1200x/a9/ef/d1/a9efd1d51c062e7f29bd4929560a7255.jpg", // 1번 (좌측 상단)
    className: "top-[12%] left-[8%] md:left-[15%] w-44 md:w-80 aspect-[16/10] z-20 shadow-2xl",
    delay: 0.8,
  },
  {
    src: "https://i.pinimg.com/736x/98/4c/32/984c32dd82e5492910282ddbe0b9070b.jpg", // 2번 (우측 상단)
    className: "top-[8%] right-[8%] md:right-[18%] w-32 md:w-56 aspect-square z-10 rotate-3",
    delay: 1.0,
  },
  {
    src: "https://i.pinimg.com/736x/cb/6e/0e/cb6e0e9234d879cb482e96fde1ec4c29.jpg", // 3번 (좌측 하단)
    className: "bottom-[22%] left-[5%] md:left-[10%] w-36 md:w-60 aspect-[3/4] z-10 -rotate-3",
    delay: 1.2,
  },
  {
    src: "https://i.pinimg.com/736x/80/f6/52/80f652d33c9933d1e5213a94128e327f.jpg", // 4번 (우측 하단)
    className: "bottom-[15%] right-[5%] md:right-[15%] w-40 md:w-72 aspect-video z-30 shadow-neon",
    delay: 1.4,
  },
  {
    src: "https://i.pinimg.com/1200x/0e/eb/8c/0eeb8c7cbd7e7eec34cc44f06d354a4c.jpg", // 5번 (신규: 3번과 겹치며 여백 채움)
    className: "bottom-[2%] left-[15%] md:left-[22%] w-40 md:w-72 aspect-[4/5] z-0 rotate-6 opacity-80 shadow-2xl",
    delay: 1.6,
  }
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
            alt="Aura Style"
            className="w-full h-full object-cover rounded-lg shadow-[0_0_30px_rgba(57,255,20,0.1)] opacity-60 md:opacity-80"
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