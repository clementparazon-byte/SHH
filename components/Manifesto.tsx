import React from 'react';
import { MANIFESTO_TEXT } from '../constants';

export const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="section manifesto-bg">
      <div className="container" style={{ maxWidth: '900px' }}>
        <h2 className="section-label">01 // Manifesto</h2>
        
        <div className="flex flex-col gap-4">
          {MANIFESTO_TEXT.split('\n\n').map((paragraph, index) => (
            <p key={index} className="manifesto-text">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="features-grid">
          <div className="feature-item">
            <h3 className="feature-title">RESIDENCY</h3>
            <p className="feature-desc">12 weeks in a shared house. Code day and night. Pure focus.</p>
          </div>
          <div className="feature-item">
            <h3 className="feature-title">CAPITAL</h3>
            <p className="feature-desc">$XXXk investment on friendly terms to get you to seed.</p>
          </div>
          <div className="feature-item">
            <h3 className="feature-title">NETWORK</h3>
            <p className="feature-desc">Direct access to top founders, engineers, and tier-1 VCs.</p>
          </div>
        </div>
      </div>
    </section>
  );
};