import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import { Wizard } from './components/Wizard/Wizard';
import WizardIntro from './pages/WizardIntro';
import Login from './pages/Login';
import { isTokenExpired } from './utils/validation';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && !isTokenExpired(token)) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      localStorage.removeItem('token');
      localStorage.removeItem('cnpj');
    }
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setShowIntro(true); 
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setShowIntro(true);
    localStorage.removeItem('token');
    localStorage.removeItem('cnpj');
    localStorage.removeItem('selectedBank');
  };

  const handleBackToIntro = () => {
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
    <div className="min-h-screen bg-primary flex flex-col pt-14 sm:pt-16">
      <Header onLogout={handleLogout} onLogoClick={() => setShowIntro(true)} />
      <main className="flex-1 flex flex-col">
        {showIntro ? (
          <WizardIntro onStart={() => setShowIntro(false)} />
        ) : (
          <>
            {console.log('Renderizando Wizard')}
            <Wizard onBackToIntro={handleBackToIntro} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;