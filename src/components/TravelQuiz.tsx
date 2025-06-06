import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, Mountain, Palmtree, Building2, Snowflake, Sun } from 'lucide-react';
import { TravelPreferences } from '../types';

interface TravelQuizProps {
  onComplete: (preferences: TravelPreferences) => void;
  onBack: () => void;
}

const moodOptions = [
  { id: 'adventure', label: 'Adventure', icon: Mountain, color: 'from-orange-500 to-red-500' },
  { id: 'relaxation', label: 'Relaxation', icon: Palmtree, color: 'from-green-500 to-teal-500' },
  { id: 'culture', label: 'Culture', icon: Building2, color: 'from-purple-500 to-indigo-500' },
  { id: 'luxury', label: 'Luxury', icon: Heart, color: 'from-amber-500 to-yellow-500' },
  { id: 'nature', label: 'Nature', icon: Palmtree, color: 'from-emerald-500 to-green-500' }
];

const climateOptions = [
  { id: 'tropical', label: 'Tropical', icon: Sun, temp: '25-35°C' },
  { id: 'temperate', label: 'Temperate', icon: Sun, temp: '15-25°C' },
  { id: 'desert', label: 'Desert', icon: Sun, temp: '30-45°C' },
  { id: 'mediterranean', label: 'Mediterranean', icon: Sun, temp: '20-30°C' },
  { id: 'polar', label: 'Cool', icon: Snowflake, temp: '0-15°C' }
];

const styleOptions = [
  { id: 'solo', label: 'Solo Travel' },
  { id: 'couple', label: 'Romantic Getaway' },
  { id: 'family', label: 'Family Adventure' },
  { id: 'group', label: 'Group Experience' }
];

export default function TravelQuiz({ onComplete, onBack }: TravelQuizProps) {
  const [step, setStep] = useState(0);
  const [preferences, setPreferences] = useState<TravelPreferences>({
    mood: '',
    budget: 200000,
    days: 7,
    travelStyle: '',
    climate: ''
  });

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      onComplete(preferences);
    }
  };

  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1);
    } else {
      onBack();
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What's your travel mood?</h2>
            <p className="text-gray-600 mb-8">Choose what resonates with your current desires</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {moodOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <button
                    key={option.id}
                    onClick={() => setPreferences({ ...preferences, mood: option.id })}
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
                      preferences.mood === option.id
                        ? 'border-blue-500 bg-blue-50 shadow-lg'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${option.color} flex items-center justify-center`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="font-semibold text-gray-800">{option.label}</div>
                  </button>
                );
              })}
            </div>
          </div>
        );

      case 1:
        return (
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What's your budget range?</h2>
            <p className="text-gray-600 mb-8">Per person for the entire trip</p>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-blue-600 mb-4">{formatPrice(preferences.budget)}</div>
              <input
                type="range"
                min="80000"
                max="800000"
                step="20000"
                value={preferences.budget}
                onChange={(e) => setPreferences({ ...preferences, budget: parseInt(e.target.value) })}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-4">
                <span>₹80,000</span>
                <span>₹8,00,000+</span>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">How many days?</h2>
            <p className="text-gray-600 mb-8">Duration of your perfect getaway</p>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-blue-600 mb-4">{preferences.days} days</div>
              <input
                type="range"
                min="3"
                max="30"
                step="1"
                value={preferences.days}
                onChange={(e) => setPreferences({ ...preferences, days: parseInt(e.target.value) })}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-4">
                <span>3 days</span>
                <span>30+ days</span>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Travel style?</h2>
            <p className="text-gray-600 mb-8">Who are you traveling with?</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {styleOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setPreferences({ ...preferences, travelStyle: option.id })}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
                    preferences.travelStyle === option.id
                      ? 'border-blue-500 bg-blue-50 shadow-lg'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-semibold text-gray-800">{option.label}</div>
                </button>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Preferred climate?</h2>
            <p className="text-gray-600 mb-8">What weather makes you happiest?</p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {climateOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <button
                    key={option.id}
                    onClick={() => setPreferences({ ...preferences, climate: option.id })}
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
                      preferences.climate === option.id
                        ? 'border-blue-500 bg-blue-50 shadow-lg'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                    <div className="font-semibold text-gray-800 mb-1">{option.label}</div>
                    <div className="text-sm text-gray-500">{option.temp}</div>
                  </button>
                );
              })}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const canProceed = () => {
    switch (step) {
      case 0: return preferences.mood !== '';
      case 1: return preferences.budget > 0;
      case 2: return preferences.days > 0;
      case 3: return preferences.travelStyle !== '';
      case 4: return preferences.climate !== '';
      default: return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gray-600">Step {step + 1} of 5</span>
            <span className="text-sm font-medium text-gray-600">{Math.round(((step + 1) / 5) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((step + 1) / 5) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Quiz Content */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          {renderStep()}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <button
            onClick={handlePrevious}
            className="flex items-center px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back
          </button>
          
          <button
            onClick={handleNext}
            disabled={!canProceed()}
            className={`flex items-center px-8 py-3 rounded-full font-semibold transition-all duration-200 ${
              canProceed()
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {step === 4 ? 'Find My Destinations' : 'Next'}
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}