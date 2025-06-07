import { Destination } from '../types';

export const destinations: Destination[] = [
  // Adventure Destinations
  {
    id: '1',
    name: 'Nepal Himalayas',
    country: 'Nepal',
    image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Epic mountain adventures and spiritual journeys',
    price: 180000,
    rating: 4.8,
    climate: 'polar',
    activities: ['Trekking', 'Mountaineering', 'Meditation', 'Photography'],
    travelStyle: 'group',
    mood: 'adventure',
    weather: {
      temperature: 12,
      condition: 'Cloudy',
      icon: 'cloud',
      humidity: 55,
      bestTimeToVisit: 'March - May, September - November'
    },
    highlights: ['Everest Base Camp', 'Annapurna Circuit', 'Buddhist Monasteries'],
    bookingPartners: {
      flights: 'Kayak',
      hotels: 'Local Lodges',
      activities: 'Trekking Companies'
    }
  },
  {
    id: '2',
    name: 'New Zealand',
    country: 'New Zealand',
    image: 'https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Adventure capital with stunning landscapes',
    price: 420000,
    rating: 4.9,
    climate: 'temperate',
    activities: ['Bungee Jumping', 'Skydiving', 'Hiking', 'Kayaking'],
    travelStyle: 'solo',
    mood: 'adventure',
    weather: {
      temperature: 16,
      condition: 'Partly Cloudy',
      icon: 'cloud-sun',
      humidity: 65,
      bestTimeToVisit: 'December - February, March - May'
    },
    highlights: ['Milford Sound', 'Queenstown', 'Hobbiton'],
    bookingPartners: {
      flights: 'Air New Zealand',
      hotels: 'Booking.com',
      activities: 'Tourism New Zealand'
    }
  },
  {
    id: '3',
    name: 'Costa Rica',
    country: 'Costa Rica',
    image: 'https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Biodiversity paradise with adventure activities',
    price: 250000,
    rating: 4.7,
    climate: 'tropical',
    activities: ['Zip Lining', 'Wildlife Watching', 'Volcano Tours', 'Surfing'],
    travelStyle: 'family',
    mood: 'adventure',
    weather: {
      temperature: 26,
      condition: 'Rainy',
      icon: 'rain',
      humidity: 85,
      bestTimeToVisit: 'December - April'
    },
    highlights: ['Manuel Antonio', 'Arenal Volcano', 'Cloud Forests'],
    bookingPartners: {
      flights: 'Copa Airlines',
      hotels: 'Eco Lodges',
      activities: 'Adventure Tours'
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
    travelStyle: 'couple',
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

  // Relaxation Destinations
  {
    id: '5',
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
    id: '6',
    name: 'Seychelles',
    country: 'Seychelles',
    image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Pristine beaches and luxury resorts',
    price: 450000,
    rating: 4.8,
    climate: 'tropical',
    activities: ['Beach', 'Spa', 'Snorkeling', 'Island Hopping'],
    travelStyle: 'solo',
    mood: 'relaxation',
    weather: {
      temperature: 29,
      condition: 'Sunny',
      icon: 'sun',
      humidity: 78,
      bestTimeToVisit: 'April - May, October - November'
    },
    highlights: ['Anse Source d\'Argent', 'Luxury Spas', 'Giant Tortoises'],
    bookingPartners: {
      flights: 'Emirates',
      hotels: 'Luxury Resorts',
      activities: 'Island Tours'
    }
  },
  {
    id: '7',
    name: 'Goa',
    country: 'India',
    image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Tropical beaches with Portuguese heritage',
    price: 120000,
    rating: 4.4,
    climate: 'tropical',
    activities: ['Beach', 'Water Sports', 'Nightlife', 'Heritage Tours'],
    travelStyle: 'group',
    mood: 'relaxation',
    weather: {
      temperature: 32,
      condition: 'Sunny',
      icon: 'sun',
      humidity: 75,
      bestTimeToVisit: 'November - March'
    },
    highlights: ['Calangute Beach', 'Old Goa Churches', 'Beach Shacks'],
    bookingPartners: {
      flights: 'IndiGo',
      hotels: 'Beach Resorts',
      activities: 'Local Tours'
    }
  },
  {
    id: '8',
    name: 'Fiji',
    country: 'Fiji',
    image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Island paradise with crystal clear lagoons',
    price: 380000,
    rating: 4.7,
    climate: 'tropical',
    activities: ['Diving', 'Island Hopping', 'Spa', 'Cultural Shows'],
    travelStyle: 'family',
    mood: 'relaxation',
    weather: {
      temperature: 28,
      condition: 'Sunny',
      icon: 'sun',
      humidity: 82,
      bestTimeToVisit: 'May - October'
    },
    highlights: ['Coral Coast', 'Traditional Bure', 'Kava Ceremony'],
    bookingPartners: {
      flights: 'Fiji Airways',
      hotels: 'Island Resorts',
      activities: 'Fiji Tourism'
    }
  },

  // Cultural Destinations
  {
    id: '9',
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
    id: '10',
    name: 'Morocco',
    country: 'Morocco',
    image: 'https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Exotic markets and ancient medinas',
    price: 190000,
    rating: 4.6,
    climate: 'desert',
    activities: ['Markets', 'Architecture', 'Desert Tours', 'Cooking Classes'],
    travelStyle: 'couple',
    mood: 'culture',
    weather: {
      temperature: 22,
      condition: 'Sunny',
      icon: 'sun',
      humidity: 40,
      bestTimeToVisit: 'March - May, September - November'
    },
    highlights: ['Marrakech Medina', 'Sahara Desert', 'Atlas Mountains'],
    bookingPartners: {
      flights: 'Royal Air Maroc',
      hotels: 'Riads',
      activities: 'Morocco Tours'
    }
  },
  {
    id: '11',
    name: 'Peru',
    country: 'Peru',
    image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Ancient Incan civilization and mystical ruins',
    price: 280000,
    rating: 4.8,
    climate: 'temperate',
    activities: ['Archaeology', 'Hiking', 'Cultural Tours', 'Cuisine'],
    travelStyle: 'group',
    mood: 'culture',
    weather: {
      temperature: 15,
      condition: 'Partly Cloudy',
      icon: 'cloud-sun',
      humidity: 60,
      bestTimeToVisit: 'May - September'
    },
    highlights: ['Machu Picchu', 'Sacred Valley', 'Cusco'],
    bookingPartners: {
      flights: 'LATAM',
      hotels: 'Historic Hotels',
      activities: 'Peru Tours'
    }
  },
  {
    id: '12',
    name: 'India (Rajasthan)',
    country: 'India',
    image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Royal palaces and vibrant culture',
    price: 150000,
    rating: 4.5,
    climate: 'desert',
    activities: ['Palaces', 'Festivals', 'Camel Safari', 'Handicrafts'],
    travelStyle: 'family',
    mood: 'culture',
    weather: {
      temperature: 28,
      condition: 'Hot',
      icon: 'sun',
      humidity: 35,
      bestTimeToVisit: 'October - March'
    },
    highlights: ['Taj Mahal', 'Jaipur Palaces', 'Desert Camps'],
    bookingPartners: {
      flights: 'Air India',
      hotels: 'Heritage Hotels',
      activities: 'Incredible India'
    }
  },
  {
    id: '13',
    name: 'Thailand',
    country: 'Thailand',
    image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Tropical beaches and rich Buddhist culture',
    price: 180000,
    rating: 4.6,
    climate: 'tropical',
    activities: ['Temples', 'Street Food', 'Island Hopping', 'Massage'],
    travelStyle: 'solo',
    mood: 'culture',
    weather: {
      temperature: 30,
      condition: 'Hot',
      icon: 'sun',
      humidity: 85,
      bestTimeToVisit: 'November - March'
    },
    highlights: ['Phi Phi Islands', 'Bangkok Temples', 'Floating Markets'],
    bookingPartners: {
      flights: 'Thai Airways',
      hotels: 'Beach Resorts',
      activities: 'Thailand Tourism'
    }
  },

  // Luxury Destinations
  {
    id: '14',
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
    id: '15',
    name: 'Dubai',
    country: 'UAE',
    image: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Futuristic city with luxury shopping and dining',
    price: 290000,
    rating: 4.5,
    climate: 'desert',
    activities: ['Shopping', 'Architecture', 'Desert Safari', 'Luxury'],
    travelStyle: 'solo',
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
  },
  {
    id: '16',
    name: 'Monaco',
    country: 'Monaco',
    image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Glamorous principality with luxury lifestyle',
    price: 550000,
    rating: 4.9,
    climate: 'mediterranean',
    activities: ['Casinos', 'Yacht Tours', 'Fine Dining', 'Shopping'],
    travelStyle: 'group',
    mood: 'luxury',
    weather: {
      temperature: 23,
      condition: 'Sunny',
      icon: 'sun',
      humidity: 68,
      bestTimeToVisit: 'April - October'
    },
    highlights: ['Monte Carlo Casino', 'Prince\'s Palace', 'Formula 1 Circuit'],
    bookingPartners: {
      flights: 'Air France',
      hotels: 'Luxury Hotels',
      activities: 'Monaco Tourism'
    }
  },
  {
    id: '17',
    name: 'Swiss Alps',
    country: 'Switzerland',
    image: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Luxury mountain resorts and pristine nature',
    price: 480000,
    rating: 4.8,
    climate: 'polar',
    activities: ['Skiing', 'Mountain Railways', 'Spa', 'Fine Dining'],
    travelStyle: 'family',
    mood: 'luxury',
    weather: {
      temperature: 5,
      condition: 'Snowy',
      icon: 'snow',
      humidity: 70,
      bestTimeToVisit: 'December - March, June - September'
    },
    highlights: ['Matterhorn', 'Jungfraujoch', 'Luxury Chalets'],
    bookingPartners: {
      flights: 'Swiss Air',
      hotels: 'Mountain Resorts',
      activities: 'Switzerland Tourism'
    }
  },
  {
    id: '18',
    name: 'Napa Valley',
    country: 'USA',
    image: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'World-class wineries and luxury experiences',
    price: 400000,
    rating: 4.7,
    climate: 'mediterranean',
    activities: ['Wine Tasting', 'Fine Dining', 'Spa', 'Hot Air Balloon'],
    travelStyle: 'couple',
    mood: 'luxury',
    weather: {
      temperature: 25,
      condition: 'Sunny',
      icon: 'sun',
      humidity: 55,
      bestTimeToVisit: 'April - October'
    },
    highlights: ['Premium Wineries', 'Michelin Restaurants', 'Luxury Spas'],
    bookingPartners: {
      flights: 'United Airlines',
      hotels: 'Luxury Resorts',
      activities: 'Napa Tourism'
    }
  },

  // Nature Destinations
  {
    id: '19',
    name: 'Bali',
    country: 'Indonesia',
    image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Tropical paradise with rich culture and stunning temples',
    price: 230000,
    rating: 4.6,
    climate: 'tropical',
    activities: ['Temples', 'Yoga', 'Beach', 'Rice Terraces'],
    travelStyle: 'solo',
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
    id: '20',
    name: 'Amazon Rainforest',
    country: 'Brazil',
    image: 'https://images.pexels.com/photos/975771/pexels-photo-975771.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'World\'s largest rainforest with incredible biodiversity',
    price: 320000,
    rating: 4.6,
    climate: 'tropical',
    activities: ['Wildlife Watching', 'River Cruises', 'Jungle Trekking', 'Photography'],
    travelStyle: 'group',
    mood: 'nature',
    weather: {
      temperature: 27,
      condition: 'Rainy',
      icon: 'rain',
      humidity: 90,
      bestTimeToVisit: 'June - November'
    },
    highlights: ['Pink Dolphins', 'Canopy Walks', 'Indigenous Communities'],
    bookingPartners: {
      flights: 'LATAM',
      hotels: 'Eco Lodges',
      activities: 'Amazon Tours'
    }
  },
  {
    id: '21',
    name: 'Yellowstone',
    country: 'USA',
    image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Geothermal wonders and pristine wilderness',
    price: 280000,
    rating: 4.8,
    climate: 'temperate',
    activities: ['Wildlife Viewing', 'Geysers', 'Hiking', 'Photography'],
    travelStyle: 'family',
    mood: 'nature',
    weather: {
      temperature: 18,
      condition: 'Partly Cloudy',
      icon: 'cloud-sun',
      humidity: 45,
      bestTimeToVisit: 'April - May, September - October'
    },
    highlights: ['Old Faithful', 'Grand Prismatic Spring', 'Bison Herds'],
    bookingPartners: {
      flights: 'Delta Airlines',
      hotels: 'National Park Lodges',
      activities: 'National Park Service'
    }
  },
  {
    id: '22',
    name: 'Galápagos Islands',
    country: 'Ecuador',
    image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Unique wildlife and evolutionary wonders',
    price: 520000,
    rating: 4.9,
    climate: 'tropical',
    activities: ['Wildlife Photography', 'Snorkeling', 'Island Hopping', 'Research Tours'],
    travelStyle: 'couple',
    mood: 'nature',
    weather: {
      temperature: 24,
      condition: 'Sunny',
      icon: 'sun',
      humidity: 75,
      bestTimeToVisit: 'December - May'
    },
    highlights: ['Giant Tortoises', 'Marine Iguanas', 'Darwin\'s Finches'],
    bookingPartners: {
      flights: 'TAME',
      hotels: 'Eco Cruises',
      activities: 'Galápagos Tours'
    }
  },
  {
    id: '23',
    name: 'Iceland',
    country: 'Iceland',
    image: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Land of fire and ice with dramatic landscapes',
    price: 350000,
    rating: 4.8,
    climate: 'polar',
    activities: ['Northern Lights', 'Hot Springs', 'Glacier Tours', 'Photography'],
    travelStyle: 'solo',
    mood: 'nature',
    weather: {
      temperature: 2,
      condition: 'Windy',
      icon: 'wind',
      humidity: 80,
      bestTimeToVisit: 'June - August, September - March'
    },
    highlights: ['Blue Lagoon', 'Golden Circle', 'Northern Lights'],
    bookingPartners: {
      flights: 'Icelandair',
      hotels: 'Unique Hotels',
      activities: 'Iceland Tourism'
    }
  },
  {
    id: '24',
    name: 'Norway Fjords',
    country: 'Norway',
    image: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Dramatic fjords and midnight sun',
    price: 420000,
    rating: 4.9,
    climate: 'polar',
    activities: ['Fjord Cruises', 'Hiking', 'Northern Lights', 'Photography'],
    travelStyle: 'family',
    mood: 'nature',
    weather: {
      temperature: 8,
      condition: 'Cloudy',
      icon: 'cloud',
      humidity: 75,
      bestTimeToVisit: 'May - September'
    },
    highlights: ['Geiranger Fjord', 'Midnight Sun', 'Viking Heritage'],
    bookingPartners: {
      flights: 'Norwegian Air',
      hotels: 'Fjord Hotels',
      activities: 'Visit Norway'
    }
  }
];