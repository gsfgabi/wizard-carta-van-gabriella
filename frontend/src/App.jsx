import React, { useState } from 'react';
import Header from './components/Header/Header';
import { Wizard } from './components/Wizard/Wizard';
import WizardIntro from './pages/WizardIntro';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="min-h-screen bg-primary flex flex-col">
      <Header />
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