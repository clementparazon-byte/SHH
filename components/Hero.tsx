import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-12 px-6 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-8">
          <span className="inline-block px-2 py-1 bg-neutral-900 border border-neutral-800 text-xs text-green-500 font-mono mb-6">
             ● SYSTEM_STATUS: ACCEPTING APPLICATIONS FOR BATCH SG-03
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-white mb-12 max-w-5xl">
          ACCELERATING <br/>
          THE NEXT GENERATION <br/>
          OF <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600">TECHNICAL FOUNDERS</span>
          <br/> IN SINGAPORE.
        </h1>

        <div className="flex flex-col md:flex-row gap-8 items-start md:items-end justify-between border-t border-neutral-800 pt-8">
          <p className="max-w-md text-neutral-400 leading-relaxed font-mono text-sm md:text-base">
            We provide a 12-week residency, funding, and a network of obsessives.
            Designed for hackers who want to build the future, not just talk about it.
          </p>
          
          <div className="flex flex-col gap-2">
             <div className="flex items-center gap-4 text-xs font-mono text-neutral-500">
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