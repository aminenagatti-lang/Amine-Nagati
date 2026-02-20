import React, { useState } from 'react';
import { LEADS_WEBHOOK_URL } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const LeadMagnet: React.FC = () => {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if(email && company) {
      setIsSubmitting(true);

      // Create lead object
      const newLead = {
        email,
        company,
        timestamp: new Date().toISOString(),
        source: 'portfolio_lead_magnet'
      };

      // 1. Store in localStorage (Backup/Demo)
      try {
        const existingLeads = JSON.parse(localStorage.getItem('portfolio_leads') || '[]');
        localStorage.setItem('portfolio_leads', JSON.stringify([...existingLeads, newLead]));
        console.log('Lead stored locally:', newLead);
      } catch (error) {
        console.error('Error storing lead locally:', error);
      }

      // 2. Send to Automation Webhook (Formspree)
      if (LEADS_WEBHOOK_URL) {
        try {
          await fetch(LEADS_WEBHOOK_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json' // Important for Formspree to return JSON
            },
            body: JSON.stringify(newLead),
          });
          console.log('Lead sent to webhook');
        } catch (error) {
          console.error('Webhook sending failed:', error);
          // We don't block success state on webhook failure to preserve UX
        }
      } else {
        console.log('No Webhook URL configured in constants.ts. Data only stored in localStorage.');
        // Simulate network delay for effect
        await new Promise(resolve => setTimeout(resolve, 800));
      }

      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <section id="lead-magnet" className="py-24 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0f0f0f] p-8 md:p-12 relative overflow-hidden shadow-lg dark:shadow-none">
          
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#cc5500]"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#cc5500]"></div>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="font-mono text-[#cc5500] text-xs uppercase tracking-widest mb-4 block">
                {t.leadMagnet.stayConnected}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-neutral-900 dark:text-white mb-4">
                {t.leadMagnet.joinNetwork}
              </h2>
              <p className="font-mono text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-6">
                {t.leadMagnet.description}
              </p>
              <div className="font-mono text-xs text-neutral-500 dark:text-neutral-600">
                {t.leadMagnet.joinCount}
              </div>
            </div>

            <div className="w-full md:w-1/2">
               {submitted ? (
                 <div className="h-full flex items-center justify-center p-8 bg-[#cc5500]/10 border border-[#cc5500] animate-in fade-in duration-500">
                    <p className="font-mono text-[#cc5500] text-center">
                      <span className="text-xl block mb-2">{t.leadMagnet.detailsRecorded}</span>
                      {t.leadMagnet.addedToDatabase}
                    </p>
                 </div>
               ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="relative group">
                    <label htmlFor="email" className="font-mono text-xs text-neutral-500 uppercase mb-2 block group-focus-within:text-[#cc5500]">
                      {t.leadMagnet.businessEmail}
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full bg-transparent border-b border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white font-mono py-2 focus:outline-none focus:border-[#cc5500] transition-colors placeholder:text-neutral-400 dark:placeholder:text-neutral-800"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="relative group">
                     <label htmlFor="company" className="font-mono text-xs text-neutral-500 uppercase mb-2 block group-focus-within:text-[#cc5500]">
                      {t.leadMagnet.companyName}
                    </label>
                    <input 
                      type="text" 
                      id="company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Acme AI Inc."
                      className="w-full bg-transparent border-b border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white font-mono py-2 focus:outline-none focus:border-[#cc5500] transition-colors placeholder:text-neutral-400 dark:placeholder:text-neutral-800"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="mt-4 self-start text-neutral-900 dark:text-white font-mono uppercase text-sm tracking-wider border-b border-[#cc5500] pb-1 hover:text-[#cc5500] dark:hover:text-[#cc5500] transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? t.leadMagnet.processing : t.leadMagnet.requestAccess}
                  </button>
                </form>
               )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;