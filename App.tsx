import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { BatchList } from './components/BatchList';
import { Footer } from './components/Footer';
import { TerminalChat } from './components/TerminalChat';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-green-500 selection:text-black">
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <BatchList />
      </main>
      <Footer />
      <TerminalChat />
      
      {/* Background Grid Decoration */}
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-5">
        <div className="absolute inset-0" 
             style={{ 
               backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }}>
        </div>
      </div>
    </div>
  );
};

export default App;