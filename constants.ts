import { NavItem, Artist, StyleItem, Review, PriceItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'heritage', label: 'Heritage' },
  { id: 'artists', label: 'Artists' },
  { id: 'style', label: 'Style' },
  { id: 'review', label: 'Review' },
  { id: 'price', label: 'Price' },
  { id: 'booking', label: 'Booking' },
];

export const ARTISTS: Artist[] = [
  {
    id: 1,
    name: "JANGMI",
    role: "DESIGNER",
    image: "https://i.imgur.com/trYIdbb.png",
    specialty: "Texture Perm & Creative Cut"
  },
  {
    id: 2,
    name: "SIYOON",
    role: "DESIGNER",
    image: "https://i.imgur.com/WXbIram.png",
    specialty: "Personal Color & Balayage"
  },
  {
    id: 3,
    name: "JISOO",
    role: "DESIGNER",
    image: "https://i.imgur.com/gysykKc.png",
    specialty: "Men's Classic & Barbering"
  }
];

export const STYLES: StyleItem[] = [
  { id: 1, title: "Sleek Cut", description: "Minimalism redefined.", image: "https://i.pinimg.com/736x/90/5b/88/905b8828d90fc43c653e6e55cf488aff.jpg" },
  { id: 2, title: "Hush Perm", description: "Natural flow and volume.", image: "https://i.pinimg.com/736x/52/b6/fd/52b6fd40c9dbe0904a036d65ba4e0aef.jpg" },
  { id: 3, title: "Block Color", description: "Bold statement.", image: "https://i.pinimg.com/736x/e2/4b/03/e24b034f82f90a3bbac372cd47f57c9c.jpg" },
  { id: 4, title: "Leaf Cut", description: "Light texture.", image: "https://i.pinimg.com/736x/b3/22/3c/b3223ce3212d371630f253605e69a13f.jpg" },
];

export const REVIEWS: Review[] = [
  { id: 1, author: "김지영", content: "얼굴에 어울리게 기장도 잘 잘라주시고 제 머리 상태에 맞게 관리법 알려주셔서 좋았어요. 집에서 혼자 해봤는데 머리한날이랑 똑같이 잘 유지되어서 행복합니다 😚😚", rating: 5, date: "2025.12.10" },
  { id: 2, author: "이지연", content: "꺅 진짜 너무 마음에 들어요 제가 하고 싶은 느낌을 말씀드렸더니 장미쌤이 알잘딱깔센으로 해주셨어요✨ 관리나 유지방법에 대해서도 친절하게 설명해주시고 미용실 유목민이었는데 장미쌤한테 정착하려구요!! 다음 뿌염때 가겠습니다😊", rating: 5, date: "2026.01.03" },
  { id: 3, author: "최유리", content: "1년 넘게 방치한 극손상모라 컬이 나올까 걱정했는데, 원하는 대로 예쁘게 시술해주셨어요! 그레이스펌 했고, 손질이나 말리는 방법까지 꼼꼼하게 알려주셔서 너무 만족스러웠습니다. 전체적으로 훨씬 여성여성해진 느낌이에요!! 다음에 또 방문하겠습니다 ㅎㅎ 그땐.. 머릿결 관리 열심히 하고 갈게요 🥰", rating: 5, date: "2026.01.12" },
];

export const PRICES: PriceItem[] = [
  { category: "CUT", service: "MEN'S CUT", price: "33,000" },
  { category: "CUT", service: "WOMAN'S CUT", price: "44,000" },
  { category: "CUT", service: "JUNIOR CUT", price: "22,000" },

  { category: "COLOR", service: "BASIC COLOR", price: "110,000" },
  { category: "COLOR", service: "ROOT DYE", price: "77,000" },
  { category: "COLOR", service: "BLEACH", price: "150,000" },
  { category: "COLOR", service: "ROOT BLEACH", price: "88,000" },
  { category: "COLOR", service: "DESIGN COLOR", price: "180,000" },

  { category: "PERM", service: "COLD PERM", price: "110,000" },
  { category: "PERM", service: "HEAT PERM", price: "140,000" },
  { category: "PERM", service: "PARTING PERM", price: "22,000" },
  { category: "PERM", service: "DOWN PERM", price: "25,000" },
  { category: "PERM", service: "ROOT PERM", price: "88,000" },

  { category: "MAGIC PERM", service: "STRAIGHT", price: "180,000" },
  { category: "MAGIC PERM", service: "ROOT STRAIGHT", price: "99,000" },
  { category: "MAGIC PERM", service: "SETTING PERM", price: "250,000" },

  { category: "DRY", service: "BLOW DRY", price: "22,000" },
  { category: "DRY", service: "UP STYLE", price: "55,000" },
  { category: "DRY", service: "SHAMPOO", price: "11,000" },

  { category: "CLINIC", service: "BASIC", price: "66,000" },
  { category: "CLINIC", service: "PREMIUM", price: "99,000" },
  { category: "CLINIC", service: "REPAIR CLINIC", price: "150,000" },
];