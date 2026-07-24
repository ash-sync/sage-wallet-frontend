import React from "react";

export const CallToAction: React.FC = () => {
  return (
    <section className="py-32 px-4 md:px-8 max-w-6xl mx-auto mb-20 text-white">
      <div className="relative bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-[48px] p-8 md:p-16 text-center overflow-hidden">
        {/* Abstract Glow Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 -z-10 pointer-events-none" />

        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Ready to Step into the Future?
        </h2>

        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Join over 1 million users who have transitioned to a more secure,
          borderless financial life with Sage Wallet.
        </p>
      </div>
    </section>
  );
};

export default CallToAction;
