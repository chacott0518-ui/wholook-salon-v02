export interface NavItem {
  id: string;
  label: string; // Display label (English)
}

export interface Artist {
  id: number;
  name: string;
  role: string;
  image: string;
  specialty: string;
}

export interface StyleItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface Review {
  id: number;
  author: string;
  content: string;
  rating: number;
  date: string;
}

export interface PriceItem {
  category: string;
  service: string;
  price: string;
}