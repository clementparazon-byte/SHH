import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div>
          <span className="system-status">
             ● System Status: Operational
          </span>
        </div>
        
        <h1 className="hero-title">
          Accelerating <br/>
          the next generation <br/>
          of technical founders
          <br/> in Singapore.
        </h1>

        <div className="flex flex-col md-flex-row justify-between items-end gap-4" style={{ marginTop: '2rem' }}>
          <p className="hero-desc">
            We provide a 12-week residency, funding, and a network of obsessives.
            Designed for hackers who want to build the future, not just talk about it.
          </p>
          
          <div className="flex gap-4" style={{ fontSize: '0.7rem', color: '#666', textTransform: 'uppercase' }}>
             <span>Latency: 4ms</span>
             <span>Region: SIN1</span>
             <span>Availability: 99.9%</span>
          </div>
        </div>
      </div>
    </section>
  );
};