import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <h1 className="hero-title">
          ACCELERATING <br/>
          THE NEXT GENERATION <br/>
          OF <span className="text-gradient">TECHNICAL FOUNDERS</span>
          <br/> IN SINGAPORE.
        </h1>

        <div className="hero-footer">
          <p className="hero-desc">
            We provide a 12-week residency, funding, and a network of obsessives.
            Designed for hackers who want to build the future, not just talk about it.
          </p>
          
          <div className="flex flex-col gap-2">
             <div className="hero-stats">
               <span>LATENCY: 4ms</span>
               <span>REGION: SIN1</span>
               <span>AVAILABILITY: 99.9%</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};