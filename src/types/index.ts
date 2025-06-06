export interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  description: string;
  price: number;
  rating: number;
  climate: 'tropical' | 'temperate' | 'desert' | 'polar' | 'mediterranean';
  activities: string[];
  travelStyle: 'solo' | 'couple' | 'family' | 'group';
  mood: 'adventure' | 'relaxation' | 'culture' | 'luxury' | 'nature';
  weather: {
    temperature: number;
    condition: string;
    icon: string;
    humidity: number;
    bestTimeToVisit: string;
  };
  highlights: string[];
  bookingPartners: {
    flights: string;
    hotels: string;
    activities: string;
  };
}

export interface TravelPreferences {
  mood: string;
  budget: number;
  days: number;
  travelStyle: string;
  climate: string;
}

export interface QuizStep {
  id: string;
  question: string;
  type: 'mood' | 'budget' | 'days' | 'style' | 'climate';
  options?: string[];
}