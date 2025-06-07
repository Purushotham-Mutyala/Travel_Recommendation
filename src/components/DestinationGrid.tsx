import React, { useState, useMemo } from 'react';
import { Sparkles, RefreshCw, Shuffle } from 'lucide-react';
import DestinationCard from './DestinationCard';
import FilterBar from './FilterBar';
import { Destination, TravelPreferences } from '../types';
import { destinations } from '../data/destinations';

interface DestinationGridProps {
  preferences: TravelPreferences;
  onNewSearch: () => void;
}

export default function DestinationGrid({ preferences, onNewSearch }: DestinationGridProps) {
  const [filters, setFilters] = useState({
    priceRange: [80000, 800000] as [number, number],
    climate: '',
    travelStyle: '',
    sortBy: 'recommended'
  });
  const [randomSeed, setRandomSeed] = useState(Math.random());

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  // Smart random destination selection based on preferences
  const getSmartRandomDestinations = (count: number = 9): Destination[] => {
    // Create preference-weighted pools
    const moodMatches = destinations.filter(dest => dest.mood === preferences.mood);
    const styleMatches = destinations.filter(dest => dest.travelStyle === preferences.travelStyle);
    const climateMatches = destinations.filter(dest => dest.climate === preferences.climate);
    const budgetMatches = destinations.filter(dest => dest.price <= preferences.budget + 100000);
    
    // Create a weighted selection pool
    const weightedPool: Destination[] = [];
    
    // Add destinations with different weights based on preference matches
    destinations.forEach(dest => {
      let weight = 1; // Base weight
      
      if (moodMatches.includes(dest)) weight += 3;
      if (styleMatches.includes(dest)) weight += 2;
      if (climateMatches.includes(dest)) weight += 2;
      if (budgetMatches.includes(dest)) weight += 1;
      
      // Add destination multiple times based on weight
      for (let i = 0; i < weight; i++) {
        weightedPool.push(dest);
      }
    });
    
    // Shuffle with current seed for consistent results until manually refreshed
    const seededRandom = (seed: number) => {
      const x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    };
    
    const shuffled = [...weightedPool].sort(() => seededRandom(randomSeed) - 0.5);
    
    // Remove duplicates while maintaining preference weighting
    const unique: Destination[] = [];
    const seen = new Set<string>();
    
    for (const dest of shuffled) {
      if (!seen.has(dest.id) && unique.length < count) {
        unique.push(dest);
        seen.add(dest.id);
      }
    }
    
    // If we don't have enough unique destinations, fill with remaining ones
    if (unique.length < count) {
      const remaining = destinations.filter(dest => !seen.has(dest.id));
      const shuffledRemaining = remaining.sort(() => seededRandom(randomSeed + 1) - 0.5);
      unique.push(...shuffledRemaining.slice(0, count - unique.length));
    }
    
    return unique;
  };

  const filteredAndSortedDestinations = useMemo(() => {
    let filtered = destinations.filter(dest => {
      // Filter by preferences first
      const matchesMood = !preferences.mood || dest.mood === preferences.mood;
      const matchesStyle = !preferences.travelStyle || dest.travelStyle === preferences.travelStyle;
      const matchesClimate = !preferences.climate || dest.climate === preferences.climate;
      const withinBudget = dest.price <= preferences.budget + 80000; // Allow some flexibility

      // Then apply additional filters
      const withinPriceRange = dest.price >= filters.priceRange[0] && dest.price <= filters.priceRange[1];
      const matchesFilterClimate = !filters.climate || dest.climate === filters.climate;
      const matchesFilterStyle = !filters.travelStyle || dest.travelStyle === filters.travelStyle;

      return matchesMood && matchesStyle && matchesClimate && withinBudget && 
             withinPriceRange && matchesFilterClimate && matchesFilterStyle;
    });

    // Sort destinations
    switch (filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'recommended':
      default:
        // Keep original order for recommended
        break;
    }

    return filtered;
  }, [preferences, filters]);

  const displayDestinations = useMemo(() => {
    if (filteredAndSortedDestinations.length > 0) {
      return filteredAndSortedDestinations;
    }
    
    // Use smart random selection when no exact matches
    return getSmartRandomDestinations(9);
  }, [filteredAndSortedDestinations, randomSeed, preferences]);

  const isShowingRandomDestinations = filteredAndSortedDestinations.length === 0;

  const getPersonalizedMessage = () => {
    if (isShowingRandomDestinations) {
      return "No exact matches found, but here are some amazing places tailored to your preferences! ✨";
    }

    const moodMessages = {
      adventure: "Epic adventures await you! 🏔️",
      relaxation: "Perfect escapes for ultimate relaxation 🏝️",
      culture: "Rich cultural experiences to inspire you 🏛️",
      luxury: "Luxurious destinations fit for royalty 👑",
      nature: "Breathtaking natural wonders 🌿"
    };

    return moodMessages[preferences.mood as keyof typeof moodMessages] || "Amazing destinations just for you!";
  };

  const handleNewRandomSuggestions = () => {
    setRandomSeed(Math.random()); // Generate new seed for different random selection
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-amber-500 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              {isShowingRandomDestinations 
                ? "Smart Suggestions for You" 
                : "Your Perfect Destinations"}
            </h1>
          </div>
          <p className="text-xl text-gray-600 mb-6">{getPersonalizedMessage()}</p>
          
          {/* Show preferences summary */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white rounded-full px-6 py-2 shadow-md">
              <span className="text-sm text-gray-600">Mood: </span>
              <span className="font-semibold text-blue-600 capitalize">{preferences.mood}</span>
            </div>
            <div className="bg-white rounded-full px-6 py-2 shadow-md">
              <span className="text-sm text-gray-600">Budget: </span>
              <span className="font-semibold text-green-600">{formatPrice(preferences.budget)}</span>
            </div>
            <div className="bg-white rounded-full px-6 py-2 shadow-md">
              <span className="text-sm text-gray-600">Duration: </span>
              <span className="font-semibold text-purple-600">{preferences.days} days</span>
            </div>
            <div className="bg-white rounded-full px-6 py-2 shadow-md">
              <span className="text-sm text-gray-600">Style: </span>
              <span className="font-semibold text-orange-600 capitalize">{preferences.travelStyle}</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex justify-center gap-4">
            <button
              onClick={onNewSearch}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              New Search
            </button>
            
            {isShowingRandomDestinations && (
              <button
                onClick={handleNewRandomSuggestions}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full hover:from-amber-600 hover:to-orange-600 transition-all duration-200 transform hover:scale-105"
              >
                <Shuffle className="w-5 h-5 mr-2" />
                More Suggestions
              </button>
            )}
          </div>
        </div>

        {/* Filters - Only show if we have matching destinations */}
        {!isShowingRandomDestinations && (
          <FilterBar filters={filters} onFilterChange={setFilters} />
        )}

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600">
            {isShowingRandomDestinations ? (
              <>
                <span className="font-semibold text-amber-600">Smart suggestions based on your preferences:</span> {displayDestinations.length} amazing destinations to explore
              </>
            ) : (
              <>Found <span className="font-semibold text-gray-800">{displayDestinations.length}</span> perfect destinations for you</>
            )}
          </p>
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayDestinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>

        {/* Additional Info for Random Suggestions */}
        {isShowingRandomDestinations && (
          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Why these suggestions?</h3>
              <p className="text-gray-600 leading-relaxed">
                Our AI has selected these destinations based on your preferences for <span className="font-semibold text-blue-600">{preferences.mood}</span> travel, 
                <span className="font-semibold text-green-600"> {formatPrice(preferences.budget)}</span> budget, and 
                <span className="font-semibold text-purple-600"> {preferences.travelStyle}</span> style. 
                Each suggestion offers unique experiences that align with what you're looking for!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}