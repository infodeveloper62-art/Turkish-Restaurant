export interface MenuItem {
  id: string;
  name: string;
  turkishName?: string;
  category: 'starters' | 'mains' | 'burgers' | 'pizza' | 'desserts' | 'drinks';
  description: string;
  price: number;
  image: string;
  isPopular?: boolean;
  isSpicy?: boolean;
  isVegetarian?: boolean;
  isChefSpecial?: boolean;
  preparationTime?: string;
}

export interface Review {
  id: string;
  customerName: string;
  roleOrLocation: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
  dishRecommended?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  specialInstructions?: string;
}

export interface ReservationDetails {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  specialRequest?: string;
  bookingReference?: string;
}
