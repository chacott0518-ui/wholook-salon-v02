import React from 'react';
import Section from '../components/Section';
import { REVIEWS } from '../constants';
import { Star } from 'lucide-react';

const Review: React.FC = () => {
  return (
    <Section id="review" className="bg-black border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-serif font-bold mb-4 text-white">Voice of Clients</h2>
        <p className="text-gray-500">고객의 이야기가 우리의 증명입니다.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {REVIEWS.map((review) => (
          <div 
            key={review.id} 
            className="bg-white/5 p-8 border border-white/5 hover:border-neon-green/50 transition-colors duration-300 flex flex-col h-full"
          >
            <div className="flex mb-4 text-neon-green">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            {/* flex-grow를 사용하여 텍스트 길이가 달라도 하단 영역을 밀어내어 정렬을 맞춤 */}
            <p className="text-gray-300 mb-8 italic flex-grow leading-relaxed">"{review.content}"</p>
            
            <div className="mt-auto flex justify-between items-end border-t border-white/10 pt-4 w-full">
              <span className="font-serif text-white text-lg">{review.author}</span>
              <span className="text-xs text-gray-500">{review.date}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Review;