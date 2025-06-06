import React from 'react';
import { Star, Thermometer, Droplets, Calendar, ExternalLink, Heart, Plane, Building, MapPin } from 'lucide-react';
import { Destination } from '../types';

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny': return '☀️';
      case 'partly cloudy': return '⛅';
      case 'cloudy': return '☁️';
      case 'rainy': return '🌧️';
      case 'windy': return '💨';
      case 'hot': return '🔥';
      default: return '☀️';
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  // Generate booking URLs
  const getBookingUrls = () => {
    const destinationName = encodeURIComponent(destination.name);
    const countryName = encodeURIComponent(destination.country);
    const searchQuery = encodeURIComponent(`${destination.name} ${destination.country}`);
    
    return {
      flights: `https://www.kayak.co.in/flights?destination=${destinationName}`,
      hotels: `https://www.booking.com/searchresults.html?ss=${searchQuery}&checkin_year=2024&checkin_month=12&checkin_monthday=15&checkout_year=2024&checkout_month=12&checkout_monthday=22`,
      tours: `https://www.viator.com/searchResults/all?text=${searchQuery}`,
      general: `https://www.makemytrip.com/search?q=${searchQuery}`
    };
  };

  const bookingUrls = getBookingUrls();

  const handleBookingClick = (url: string, type: string) => {
    // Track booking click (you can add analytics here)
    console.log(`Booking clicked: ${type} for ${destination.name}`);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleMainBookingClick = () => {
    // For the main "Explore & Book" button, open a comprehensive search
    const searchQuery = encodeURIComponent(`${destination.name} ${destination.country} travel packages`);
    const url = `https://www.makemytrip.com/search?q=${searchQuery}`;
    handleBookingClick(url, 'main-booking');
  };

  return (
    <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        
        {/* Favorite Button */}
        <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200">
          <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors duration-200" />
        </button>
        
        {/* Rating Badge */}
        <div className="absolute top-4 left-4 flex items-center bg-white/90 rounded-full px-3 py-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm font-semibold">{destination.rating}</span>
        </div>

        {/* Price Badge */}
        <div className="absolute bottom-4 left-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full">
          <span className="text-sm font-semibold">{formatPrice(destination.price)}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-1">{destination.name}</h3>
            <p className="text-gray-600">{destination.country}</p>
          </div>
        </div>

        <p className="text-gray-700 mb-4 leading-relaxed">{destination.description}</p>

        {/* Weather Info */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-2xl mr-3">{getWeatherIcon(destination.weather.condition)}</span>
              <div>
                <div className="flex items-center">
                  <Thermometer className="w-4 h-4 text-blue-600 mr-1" />
                  <span className="font-semibold text-gray-800">{destination.weather.temperature}°C</span>
                </div>
                <div className="text-sm text-gray-600">{destination.weather.condition}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end mb-1">
                <Droplets className="w-4 h-4 text-blue-600 mr-1" />
                <span className="text-sm font-medium">{destination.weather.humidity}%</span>
              </div>
              <div className="flex items-center justify-end">
                <Calendar className="w-4 h-4 text-blue-600 mr-1" />
                <span className="text-xs text-gray-600">{destination.weather.bestTimeToVisit}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Highlights</h4>
          <div className="flex flex-wrap gap-2">
            {destination.highlights.map((highlight, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 mb-2">Activities</h4>
          <div className="flex flex-wrap gap-2">
            {destination.activities.slice(0, 3).map((activity, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
              >
                {activity}
              </span>
            ))}
            {destination.activities.length > 3 && (
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                +{destination.activities.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Booking Buttons */}
        <div className="space-y-3">
          <button 
            onClick={handleMainBookingClick}
            className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold py-3 rounded-2xl hover:from-amber-600 hover:to-amber-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
          >
            <MapPin className="w-5 h-5 mr-2" />
            Explore & Book
          </button>
          
          <div className="grid grid-cols-3 gap-2">
            <button 
              onClick={() => handleBookingClick(bookingUrls.flights, 'flights')}
              className="flex items-center justify-center py-2 px-3 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl transition-colors duration-200 group"
              title="Search flights on Kayak"
            >
              <Plane className="w-4 h-4 mr-1 group-hover:translate-x-0.5 transition-transform duration-200" />
              <span className="text-xs font-medium">Flights</span>
            </button>
            <button 
              onClick={() => handleBookingClick(bookingUrls.hotels, 'hotels')}
              className="flex items-center justify-center py-2 px-3 bg-green-50 hover:bg-green-100 text-green-700 rounded-xl transition-colors duration-200 group"
              title="Search hotels on Booking.com"
            >
              <Building className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-xs font-medium">Hotels</span>
            </button>
            <button 
              onClick={() => handleBookingClick(bookingUrls.tours, 'tours')}
              className="flex items-center justify-center py-2 px-3 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-xl transition-colors duration-200 group"
              title="Search tours on Viator"
            >
              <ExternalLink className="w-4 h-4 mr-1 group-hover:rotate-12 transition-transform duration-200" />
              <span className="text-xs font-medium">Tours</span>
            </button>
          </div>
        </div>

        {/* Booking Partners Info */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-center text-xs text-gray-500">
            <span>Powered by</span>
            <span className="mx-1 font-medium text-blue-600">MakeMyTrip</span>
            <span>•</span>
            <span className="mx-1 font-medium text-blue-600">Kayak</span>
            <span>•</span>
            <span className="mx-1 font-medium text-blue-600">Booking.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}