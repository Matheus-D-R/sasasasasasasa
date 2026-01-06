export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface CourseModule {
  id: number;
  title: string;
  duration: string;
  lessons: string[];
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}
