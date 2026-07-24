import React from "react";
import { Zap, Globe } from "lucide-react";

export const Finance: React.FC = () => {
  return (
    <section className="py-32 bg-slate-900/30 overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Column: Content */}
        <div className="flex-1">
          <div className="inline-block px-4 py-1 border border-indigo-500/30 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold mb-6 uppercase tracking-widest">
            The Next Frontier
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">
            Reimagining Finance for the Digital Generation
          </h2>

          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            Traditional banking is restricted by borders and legacy systems.
            Sage Wallet breaks these barriers, offering a unified portal into
            decentralized finance, NFTs, and cross-border payments with zero
            friction.
          </p>

          <div className="space-y-8">
            {/* Feature 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-slate-800/80 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-center text-indigo-400">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1 text-white">
                  Ultra-Fast Execution
                </h3>
                <p className="text-slate-400">
                  Proprietary node infrastructure ensures your transactions are
                  broadcasted instantly.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-slate-800/80 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-center text-purple-400">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1 text-white">
                  Global Accessibility
                </h3>
                <p className="text-slate-400">
                  Available in 190+ countries with localized on-ramps for over
                  60 fiat currencies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Container */}
        <div className="flex-1 relative w-full">
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border border-white/10 aspect-square">
            <img
              className="w-full h-full object-cover"
              alt="A sophisticated UI dashboard on a mobile screen mockup displaying crypto asset charts"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZMrJLlR5ZAkdi-74waO05SqeLW71-HllxYj4_afXw-VZJo08-mrSFED89A_5yIgX6DzyRGrpznaZT-J_7GaqBDpgLUzx5tDpea-QAkwJSOPR6PuH3yVkSJiJhFVU4aPOltB05hIpwZ1SseBHtSs54eQQSsCnidYDZMIuD9WYihVQHbQ4jjStW4XqpYt8-CGM6ZjmcF-b2NW5AXLuzwcNu8JGS5KKR-xSKLOi5InR3NgzTEhl0Y8ER0dgI-wyp2b0CSh4n9-jTV4St"
            />
          </div>

          {/* Background Glows */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-500/20 blur-[100px] rounded-full pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Finance;
