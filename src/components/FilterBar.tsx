import React from 'react';
import { Filter, SlidersHorizontal, MapPin, Users, Thermometer } from 'lucide-react';

interface FilterBarProps {
  filters: {
    priceRange: [number, number];
    climate: string;
    travelStyle: string;
    sortBy: string;
  };
  onFilterChange: (filters: any) => void;
}

export default function FilterBar({ filters, onFilterChange }: FilterBarProps) {
  const climateOptions = [
    { value: '', label: 'All Climates' },
    { value: 'tropical', label: 'Tropical' },
    { value: 'temperate', label: 'Temperate' },
    { value: 'desert', label: 'Desert' },
    { value: 'mediterranean', label: 'Mediterranean' },
    { value: 'polar', label: 'Cool' }
  ];

  const styleOptions = [
    { value: '', label: 'All Styles' },
    { value: 'solo', label: 'Solo Travel' },
    { value: 'couple', label: 'Romantic' },
    { value: 'family', label: 'Family' },
    { value: 'group', label: 'Group' }
  ];

  const sortOptions = [
    { value: 'recommended', label: 'Recommended' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <div className="flex items-center mb-6">
        <SlidersHorizontal className="w-5 h-5 text-gray-600 mr-3" />
        <h3 className="text-lg font-semibold text-gray-800">Refine Your Search</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            <MapPin className="w-4 h-4 inline mr-2" />
            Budget Range
          </label>
          <div className="space-y-3">
            <div className="flex justify-between text-sm text-gray-600">
              <span>{formatPrice(filters.priceRange[0])}</span>
              <span>{formatPrice(filters.priceRange[1])}</span>
            </div>
            <input
              type="range"
              min="80000"
              max="800000"
              step="20000"
              value={filters.priceRange[1]}
              onChange={(e) => onFilterChange({
                ...filters,
                priceRange: [filters.priceRange[0], parseInt(e.target.value)]
              })}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>
        </div>

        {/* Climate */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            <Thermometer className="w-4 h-4 inline mr-2" />
            Climate
          </label>
          <select
            value={filters.climate}
            onChange={(e) => onFilterChange({ ...filters, climate: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {climateOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Travel Style */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            <Users className="w-4 h-4 inline mr-2" />
            Travel Style
          </label>
          <select
            value={filters.travelStyle}
            onChange={(e) => onFilterChange({ ...filters, travelStyle: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {styleOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Sort By */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            <Filter className="w-4 h-4 inline mr-2" />
            Sort By
          </label>
          <select
            value={filters.sortBy}
            onChange={(e) => onFilterChange({ ...filters, sortBy: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}