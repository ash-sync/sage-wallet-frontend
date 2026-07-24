import React from "react";
import { ShieldCheck, Network, Box, CheckCircle, Shield } from "lucide-react";

export const Infrastructure: React.FC = () => {
  return (
    <section className="py-32 px-4 md:px-8 max-w-7xl mx-auto text-white">
      {/* Header Section */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Powerful Web3 Infrastructure
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
          Engineered for the next generation of digital assets, combining
          ironclad security with an intuitive user experience.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {/* Large Feature Card: Non-Custodial Security */}
        <div className="md:col-span-2 bg-slate-900/60 backdrop-blur-md rounded-[32px] p-8 md:p-10 border border-white/10 flex flex-col justify-between overflow-hidden relative group">
          <div className="relative z-10">
            <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6 border border-indigo-500/20">
              <ShieldCheck className="w-7 h-7 text-indigo-400" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Non-Custodial Security</h3>
            <p className="text-slate-400 max-w-md">
              You are in full control of your private keys and assets. We never
              have access to your funds, providing ultimate peace of mind.
            </p>
          </div>
          {/* Background Decorative Icon */}
          <div className="absolute bottom-0 right-0 w-1/2 translate-y-1/4 translate-x-1/4 opacity-10 group-hover:opacity-25 transition-opacity duration-300 pointer-events-none">
            <Shield className="w-72 h-72 text-indigo-400" />
          </div>
        </div>

        {/* Small Feature Card: Multi-Chain Support */}
        <div className="bg-slate-900/60 backdrop-blur-md rounded-[32px] p-8 md:p-10 flex flex-col justify-between border border-white/10 border-t-indigo-500/50">
          <div>
            <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/20">
              <Network className="w-7 h-7 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Multi-Chain Support</h3>
            <p className="text-slate-400">
              Seamlessly manage assets across Ethereum, Solana, Polygon, and 50+
              other networks.
            </p>
          </div>
        </div>

        {/* Small Feature Card: 3D Interactions */}
        <div className="bg-slate-900/60 backdrop-blur-md rounded-[32px] p-8 md:p-10 flex flex-col justify-between border border-white/10">
          <div>
            <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/20">
              <Box className="w-7 h-7 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">3D Interactions</h3>
            <p className="text-slate-400">
              Experience your portfolio in a fully immersive 3D space with
              real-time data visualization.
            </p>
          </div>
        </div>

        {/* Bottom Feature Card: Instant Swaps */}
        <div className="md:col-span-2 bg-slate-900/60 backdrop-blur-md rounded-[32px] p-8 md:p-10 border border-white/10 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h3 className="text-3xl font-bold mb-4">
              Instant Swaps &amp; Liquidity
            </h3>
            <p className="text-slate-400 mb-6">
              Built-in DEX aggregator ensures you get the best rates across all
              liquidity pools without leaving the app.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-300">
                <CheckCircle className="w-5 h-5 text-indigo-400" />
                <span>Zero slippage protection</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <CheckCircle className="w-5 h-5 text-indigo-400" />
                <span>Gasless transaction options</span>
              </li>
            </ul>
          </div>

          {/* UI Representation Container */}
          <div className="flex-1 w-full h-48 bg-slate-950/80 rounded-2xl overflow-hidden relative border border-white/10 p-4 space-y-4">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent pointer-events-none" />
            <div className="h-4 w-3/4 bg-white/10 rounded animate-pulse" />
            <div className="h-4 w-1/2 bg-white/10 rounded animate-pulse" />
            <div className="flex gap-2 pt-2">
              <div className="h-12 flex-1 bg-indigo-500/10 rounded border border-indigo-500/20" />
              <div className="h-12 flex-1 bg-white/5 rounded border border-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
