import React from 'react';
import { FAQS } from '../constants';
import { ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer>
       {/* FAQ Section */}
       <section id="faq" className="section">
         <div className="container" style={{ maxWidth: '900px' }}>
            <h2 className="section-label">03 // FAQ</h2>
            <div className="faq-list">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="faq-item">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
         </div>
       </section>

       {/* Apply Section */}
       <section id="apply" className="apply-cta">
          <div className="container">
            <h2 className="cta-title">
              BUILD IT.
            </h2>
            <p className="cta-text">
              The inaugural batch starts H1 2026 in Singapore. 
              We are looking for the outliers.
            </p>
            <button className="btn-cta">
               APPLY NOW <ArrowRight size={20} />
            </button>
          </div>
       </section>

       {/* Bottom Bar */}
       <div className="footer-bar">
          <div>
            &copy; 2025 SINGAPORE HACKERS FUND.
          </div>
          <div className="social-links">
            <a href="#">TWITTER_X</a>
            <a href="#">LINKEDIN</a>
            <a href="#">EMAIL</a>
          </div>
       </div>
    </footer>
  );
};