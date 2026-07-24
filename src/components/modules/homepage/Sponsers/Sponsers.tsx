import React from "react";
import { Gem, Disc, Hexagon, Sparkles, Coins } from "lucide-react";

interface Partner {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const LOGOS: Partner[] = [
  { id: "1", name: "NOVA", icon: <Coins className="w-6 h-6" /> },
  { id: "2", name: "PRISM", icon: <Gem className="w-6 h-6" /> },
  { id: "3", name: "ORBIT", icon: <Disc className="w-6 h-6" /> },
  { id: "4", name: "NEXUS", icon: <Hexagon className="w-6 h-6" /> },
  { id: "5", name: "ZENITH", icon: <Sparkles className="w-6 h-6" /> },
];

export const SponsorSection: React.FC = () => {
  return (
    <section className="py-16 border-y border-white/10 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-[0.3em] mb-12">
          Trusted by global industry leaders
        </p>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
          {LOGOS.map((logo) => (
            <div
              key={logo.id}
              className="flex items-center gap-2 text-2xl font-bold text-white tracking-wider"
            >
              {logo.icon}
              <span>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;
