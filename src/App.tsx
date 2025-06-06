import React, { useState } from 'react';
import Hero from './components/Hero';
import TravelQuiz from './components/TravelQuiz';
import DestinationGrid from './components/DestinationGrid';
import { TravelPreferences } from './types';

type AppState = 'hero' | 'quiz' | 'results';

function App() {
  const [currentState, setCurrentState] = useState<AppState>('hero');
  const [preferences, setPreferences] = useState<TravelPreferences | null>(null);

  const handleStartQuiz = () => {
    setCurrentState('quiz');
  };

  const handleQuizComplete = (userPreferences: TravelPreferences) => {
    setPreferences(userPreferences);
    setCurrentState('results');
  };

  const handleBackToHero = () => {
    setCurrentState('hero');
    setPreferences(null);
  };

  const handleNewSearch = () => {
    setCurrentState('quiz');
  };

  const renderCurrentState = () => {
    switch (currentState) {
      case 'hero':
        return <Hero onStartQuiz={handleStartQuiz} />;
      case 'quiz':
        return <TravelQuiz onComplete={handleQuizComplete} onBack={handleBackToHero} />;
      case 'results':
        return preferences ? (
          <DestinationGrid preferences={preferences} onNewSearch={handleNewSearch} />
        ) : null;
      default:
        return <Hero onStartQuiz={handleStartQuiz} />;
    }
  };

  return (
    <div className="min-h-screen">
      {renderCurrentState()}
    </div>
  );
}

export default App;