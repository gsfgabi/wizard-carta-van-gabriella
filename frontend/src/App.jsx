import React, { useState } from 'react';
import Header from './components/Header/Header';
import { Wizard } from './components/Wizard/Wizard';
import WizardIntro from './pages/WizardIntro';
import Login from './pages/Login';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setShowIntro(true); 
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setShowIntro(true);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-primary flex flex-col">
        <Login onLoginSuccess={handleLoginSuccess} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary flex flex-col">
      <Header onLogout={handleLogout} onLogoClick={() => setShowIntro(true)} />
      <main className="flex-1 flex items-center justify-center">
        {showIntro ? (
          <WizardIntro onStart={() => setShowIntro(false)} />
        ) : (
          <Wizard />
        )}
      </main>
    </div>
  );
}

export default App;