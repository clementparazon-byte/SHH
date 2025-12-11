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
        </div>
      </div>
    </section>
  );
};