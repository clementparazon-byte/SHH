import React from 'react';
import { BATCHES } from '../constants';
import { ExternalLink } from 'lucide-react';

export const BatchList: React.FC = () => {
  return (
    <section id="batches" className="section">
      <div className="container">
         <h2 className="section-label">02 // The Batches</h2>

         <div className="flex flex-col gap-4">
            {BATCHES.map((batch) => (
              <div key={batch.id} className="batch-item">
                <div className="batch-header">
                   <h3 className="batch-title">{batch.name}</h3>
                   <div className="batch-meta">
                      <span>{batch.date}</span>
                      <span className={`status-tag ${batch.status === 'active' ? 'active' : 'upcoming'}`}>
                        {batch.status.toUpperCase()}
                      </span>
                   </div>
                </div>

                {batch.companies.length > 0 ? (
                  <div className="company-grid">
                    {batch.companies.map((company) => (
                      <a 
                        key={company.name} 
                        href={company.url}
                        className="company-card"
                      >
                         <div className="company-header">
                           <h4 className="company-name">{company.name}</h4>
                           <ExternalLink size={14} className="text-muted" />
                         </div>
                         <p className="company-desc">
                           {company.description}
                         </p>
                      </a>
                    ))}
                  </div>
                ) : (
                   <div className="empty-batch">
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