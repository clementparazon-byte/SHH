import React from 'react';
import { BATCHES } from '../constants';
import { ExternalLink } from 'lucide-react';

export const BatchList: React.FC = () => {
  return (
    <section id="batches" className="py-24 px-6 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto">
         <h2 className="text-sm font-mono text-neutral-500 mb-12 tracking-widest uppercase">02 // The Batches</h2>

         <div className="grid grid-cols-1 gap-12">
            {BATCHES.map((batch) => (
              <div key={batch.id} className="relative">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 border-b border-neutral-800 pb-2">
                   <h3 className="text-2xl font-bold text-white tracking-tight">{batch.name}</h3>
                   <div className="flex items-center gap-4 text-sm font-mono text-neutral-500 mt-2 md:mt-0">
                      <span>{batch.date}</span>
                      <span className={`px-2 py-0.5 text-xs border ${
                        batch.status === 'active' ? 'border-green-500 text-green-500' : 
                        batch.status === 'upcoming' ? 'border-neutral-600 text-neutral-500' : 
                        'border-neutral-700 text-neutral-400'
                      }`}>
                        {batch.status.toUpperCase()}
                      </span>
                   </div>
                </div>

                {batch.companies.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {batch.companies.map((company) => (
                      <a 
                        key={company.name} 
                        href={company.url}
                        className="group block p-6 border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-800/50 hover:border-neutral-600 transition-all duration-300"
                      >
                         <div className="flex justify-between items-start mb-4">
                           <h4 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">{company.name}</h4>
                           <ExternalLink size={14} className="text-neutral-600 group-hover:text-white transition-colors" />
                         </div>
                         <p className="text-neutral-400 text-sm font-mono leading-relaxed">
                           {company.description}
                         </p>
                      </a>
                    ))}
                  </div>
                ) : (
                   <div className="p-12 border border-dashed border-neutral-800 text-center text-neutral-600 font-mono text-sm">
                      [ APPLICATIONS_OPEN ]
                   </div>
                )}
              </div>
            ))}
         </div>
      </div>
    </section>
  );
};