"use client";

import { motion } from "framer-motion";
import Scene from "./Scene";

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden text-white">
      {/* Background Gradient */}

      <div className="pointer-events-none">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(155% 170% at 50% 10%, var(--background) 40%, rgba(168,85,247,0.2) 60%)",
          }}
        />
      </div>
      {/* Purple Glow */}
      <div className="absolute left-1/2 top-[42%] h-[250px] w-[900px] -translate-x-1/2 rounded-full bg-purple-400/20 dark:bg-purple-500/20 blur-3xl" />
      {/* Extra Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/[0.03] to-transparent dark:via-purple-500/[0.06]" />

      {/* 3D Scene */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1, ease: "easeOut" }}
        className="absolute inset-0 pointer-events-auto"
      >
        <Scene />
      </motion.div>

      {/* Content */}
      <div className="pointer-events-none relative z-10 flex h-full flex-col items-center md:justify-start lg:justify-center justify-start  px-6 mt-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 rounded-full border border-purple-500/40 dark:bg-purple-500/10 bg-purple-500/50 px-4 py-2 text-sm tracking-widest dark:text-purple-300"
        >
          SAGE WALLET
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl"
        >
          Secure Wallet.
          <br />
          <span className="bg-gradient-to-r from-white dark:to-purple-400 to-purple-100 ligh bg-clip-text text-transparent">
            Limitless Possibilities
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-xl dark:text-gray-400 text-white"
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
