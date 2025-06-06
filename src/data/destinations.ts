import { Destination } from '../types';

export const destinations: Destination[] = [
  {
    id: '1',
    name: 'Santorini',
    country: 'Greece',
    image: 'https://images.pexels.com/photos/161815/santorini-oia-greece-water-161815.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Breathtaking sunsets and pristine white architecture',
    price: 200000,
    rating: 4.9,
    climate: 'mediterranean',
    activities: ['Photography', 'Wine Tasting', 'Beach', 'Architecture'],
    travelStyle: 'couple',
    mood: 'luxury',
    weather: {
      temperature: 24,
      condition: 'Sunny',
      icon: 'sun',
      humidity: 65,
      bestTimeToVisit: 'April - October'
    },
    highlights: ['Iconic Blue Domes', 'Volcanic Beaches', 'Sunset Views'],
    bookingPartners: {
      flights: 'Kayak',
      hotels: 'Booking.com',
      activities: 'Viator'
    }
  },
  {
    id: '2',
    name: 'Kyoto',
    country: 'Japan',
    image: 'https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Ancient temples and traditional Japanese culture',
    price: 260000,
    rating: 4.8,
    climate: 'temperate',
    activities: ['Temples', 'Gardens', 'Tea Ceremony', 'History'],
    travelStyle: 'solo',
    mood: 'culture',
    weather: {
      temperature: 18,
      condition: 'Partly Cloudy',
      icon: 'cloud-sun',
      humidity: 70,
      bestTimeToVisit: 'March - May, October - November'
    },
    highlights: ['Bamboo Forest', 'Golden Pavilion', 'Geisha District'],
    bookingPartners: {
      flights: 'Expedia',
      hotels: 'Agoda',
      activities: 'GetYourGuide'
    }
  },
  {
    id: '3',
    name: 'Maldives',
    country: 'Maldives',
    image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Crystal clear waters and overwater bungalows',
    price: 375000,
    rating: 4.9,
    climate: 'tropical',
    activities: ['Diving', 'Snorkeling', 'Spa', 'Beach'],
    travelStyle: 'couple',
    mood: 'relaxation',
    weather: {
      temperature: 30,
      condition: 'Sunny',
      icon: 'sun',
      humidity: 80,
      bestTimeToVisit: 'November - April'
    },
    highlights: ['Overwater Villas', 'Coral Reefs', 'Pristine Beaches'],
    bookingPartners: {
      flights: 'Kayak',
      hotels: 'Booking.com',
      activities: 'Viator'
    }
  },
  {
    id: '4',
    name: 'Patagonia',
    country: 'Chile/Argentina',
    image: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Dramatic landscapes and untouched wilderness',
    price: 315000,
    rating: 4.7,
    climate: 'polar',
    activities: ['Hiking', 'Photography', 'Wildlife', 'Camping'],
    travelStyle: 'group',
    mood: 'adventure',
    weather: {
      temperature: 8,
      condition: 'Windy',
      icon: 'wind',
      humidity: 60,
      bestTimeToVisit: 'October - March'
    },
    highlights: ['Torres del Paine', 'Glaciers', 'Mountain Peaks'],
    bookingPartners: {
      flights: 'Skyscanner',
      hotels: 'Airbnb',
      activities: 'Adventure Tours'
    }
  },
  {
    id: '5',
    name: 'Bali',
    country: 'Indonesia',
    image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Tropical paradise with rich culture and stunning temples',
    price: 230000,
    rating: 4.6,
    climate: 'tropical',
    activities: ['Temples', 'Yoga', 'Beach', 'Rice Terraces'],
    travelStyle: 'family',
    mood: 'nature',
    weather: {
      temperature: 28,
      condition: 'Partly Cloudy',
      icon: 'cloud-sun',
      humidity: 85,
      bestTimeToVisit: 'April - October'
    },
    highlights: ['Ubud Rice Terraces', 'Beach Clubs', 'Hindu Temples'],
    bookingPartners: {
      flights: 'Agoda',
      hotels: 'Booking.com',
      activities: 'Klook'
    }
  },
  {
    id: '6',
    name: 'Dubai',
    country: 'UAE',
    image: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Futuristic city with luxury shopping and dining',
    price: 290000,
    rating: 4.5,
    climate: 'desert',
    activities: ['Shopping', 'Architecture', 'Desert Safari', 'Luxury'],
    travelStyle: 'couple',
    mood: 'luxury',
    weather: {
      temperature: 35,
      condition: 'Hot',
      icon: 'sun',
      humidity: 45,
      bestTimeToVisit: 'November - March'
    },
    highlights: ['Burj Khalifa', 'Desert Safaris', 'Luxury Malls'],
    bookingPartners: {
      flights: 'Emirates',
      hotels: 'Marriott',
      activities: 'Dubai Tourism'
    }
  }
];