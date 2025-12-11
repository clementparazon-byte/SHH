import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { BatchList } from './components/BatchList';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <BatchList />
      </main>
      <Footer />
      
      {/* Background Grid Decoration */}
      <div className="bg-grid"></div>
    </div>
  );
};

export default App;