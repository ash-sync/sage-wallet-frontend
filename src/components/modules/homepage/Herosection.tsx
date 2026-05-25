"use client";

import { motion } from "framer-motion";
import Scene from "./Scene";

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden  text-white">
      {/* Purple Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#7c3aed22,transparent_60%)]" />

      {/* Glow Line */}
      <div className="absolute bottom-32 left-1/2 h-[300px] w-[900px] -translate-x-1/2 rounded-full bg-purple-500/20 blur-3xl" />

      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Scene />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 rounded-full border border-purple-500/40 bg-purple-500/10 px-4 py-2 text-sm tracking-widest text-purple-300"
        >
          CRYPTOCURRENCY
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl"
        >
          Secure Wallet.
          <br />
          <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            Limitless Possibilities
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-xl text-gray-400"
        >
          A futuristic non-custodial wallet experience with immersive 3D
          interaction.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex gap-4"
        >
          <button className="rounded-xl bg-purple-600 px-6 py-3 font-medium transition hover:bg-purple-500">
            Get Started
          </button>

          <button className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-md transition hover:bg-white/10">
            Watch Video
          </button>
        </motion.div>
      </div>
    </section>
  );
}
