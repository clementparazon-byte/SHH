import React from 'react';
import { FAQS } from '../constants';
import { ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
       {/* FAQ Section */}
       <section id="faq" className="py-24 px-6 border-b border-neutral-900">
         <div className="max-w-4xl mx-auto">
            <h2 className="text-sm font-mono text-neutral-500 mb-12 tracking-widest uppercase">03 // FAQ</h2>
            <div className="space-y-12">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="group">
                  <h3 className="text-xl text-white mb-2 font-bold group-hover:text-green-400 transition-colors cursor-default">
                    {faq.question}
                  </h3>
                  <p className="text-neutral-400 font-mono text-sm leading-relaxed max-w-2xl">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
         </div>
       </section>

       {/* Apply Section */}
       <section id="apply" className="py-32 px-6 bg-white text-black text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8">
              BUILD IT.
            </h2>
            <p className="text-lg md:text-xl font-mono text-neutral-600 mb-12 max-w-xl mx-auto">
              The next batch starts Q3 2025 in Singapore. 
              We are looking for the outliers.
            </p>
            <button className="inline-flex items-center gap-4 px-12 py-6 bg-black text-white text-xl font-bold hover:bg-neutral-800 transition-all hover:gap-6">
               APPLY NOW <ArrowRight />
            </button>
          </div>
       </section>

       {/* Bottom Bar */}
       <div className="py-8 px-6 border-t border-neutral-200 bg-neutral-950 text-neutral-500 text-xs font-mono flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            &copy; 2025 SINGAPORE HACKERS FUND. ALL SYSTEMS OPERATIONAL.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">TWITTER_X</a>
            <a href="#" className="hover:text-white">LINKEDIN</a>
            <a href="#" className="hover:text-white">EMAIL</a>
          </div>
       </div>
    </footer>
  );
};