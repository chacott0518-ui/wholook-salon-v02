import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Heritage from './sections/Heritage';
import Artists from './sections/Artists';
import Style from './sections/Style';
import Review from './sections/Review';
import Booking from './sections/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">
      <Navbar />

      {/* 밸런스 수정: 중앙 정렬 컨테이너를 적용하여 정렬을 맞춥니다. */}
      <main className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col gap-y-24 md:gap-y-32 py-10">
          <Hero />
          <Heritage />
          <Artists />
          <Style />
          <Review />
          <Booking />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;