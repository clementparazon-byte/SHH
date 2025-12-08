import React from 'react';
import { MANIFESTO_TEXT } from '../constants';

export const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="py-24 px-6 border-b border-neutral-900 bg-neutral-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-mono text-neutral-500 mb-8 tracking-widest uppercase">01 // Manifesto</h2>
        
        <div className="space-y-8">
          {MANIFESTO_TEXT.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-2xl md:text-4xl font-light text-neutral-200 leading-tight">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border-l border-neutral-800 pl-6">
            <h3 className="font-bold text-white mb-2">RESIDENCY</h3>
            <p className="text-neutral-500 text-sm">12 weeks in a shared house. Code day and night. Pure focus.</p>
          </div>
          <div className="border-l border-neutral-800 pl-6">
            <h3 className="font-bold text-white mb-2">CAPITAL</h3>
            <p className="text-neutral-500 text-sm">$100k investment on friendly terms to get you to seed.</p>
          </div>
          <div className="border-l border-neutral-800 pl-6">
            <h3 className="font-bold text-white mb-2">NETWORK</h3>
            <p className="text-neutral-500 text-sm">Direct access to top founders, engineers, and tier-1 VCs.</p>
          </div>
        </div>
      </div>
    </section>
  );
};