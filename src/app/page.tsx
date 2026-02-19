"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { ParticleBackground } from "@/components/ParticleBackground";
import { HouseSection } from "@/components/HouseSection";
import { ArrowRight, Wand2, Box, Cpu } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#05050a]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-8 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/hero-hogwarts.png"
            alt="Cinematic Hogwarts Startup HQ"
            className="w-full h-full object-cover opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#05050a] via-transparent to-[#05050a]"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6 relative z-10 border-white/10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
          </span>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400">Phase 1: Automating Alchemy</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tight leading-[1] relative z-10 max-w-5xl"
        >
          Unleash Your <br />
          <span className="gradient-text italic">Magical Empire</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-base md:text-lg text-slate-400 max-w-xl mb-12 relative z-10 leading-relaxed"
        >
          Hogwarts Labs bridges the gap between ancient spells and modern computing power to build the future of decentralized magic.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-5 relative z-10"
        >
          <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold shadow-xl shadow-brand-primary/20 hover:scale-105 transition-all flex items-center gap-2 group">
            Get Seed Funding <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 rounded-2xl glass text-white font-bold hover:bg-white/10 transition-all flex items-center gap-2">
            Read the Spell-Book
          </button>
        </motion.div>
      </section>

      {/* Feature Section */}
      <section className="py-32 px-8 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Automated Potions",
              icon: Box,
              image: "/features/potions.png",
              desc: "Our AI-driven cauldrons craft 10,000 flasks per hour with 99.9% purity."
            },
            {
              title: "Quantum Spells",
              icon: Cpu,
              image: "/features/quantum.png",
              desc: "Computing magic at the speed of thought using Ravenclaw's neural engine."
            },
            {
              title: "Smart Wands",
              icon: Wand2,
              image: "/features/wands.png",
              desc: "Wands connected to the cloud for real-time telemetry and OTA spell updates."
            }
          ].map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="magic-card group relative p-10 rounded-[2rem] overflow-hidden border-white/5 hover:border-brand-primary/30 transition-all duration-500"
            >
              <div className="absolute inset-0 z-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <img src={feature.image} alt={feature.title} className="w-full h-full object-cover grayscale" />
              </div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-8 group-hover:bg-brand-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="py-20">
        <HouseSection />
      </div>


      <section className="py-52 px-8 text-center relative overflow-hidden">
        <motion.div
          whileInView={{ scale: [0.9, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[120px]"
        />
        <h2 className="text-4xl md:text-7xl font-black text-white mb-10 tracking-tight leading-tight">
          Ready to disrupt the <br />
          <span className="gradient-text">Wizarding World?</span>
        </h2>
        <p className="text-slate-500 mb-16 max-w-xl mx-auto italic font-medium text-lg">
          "Innovation is just magic that hasn't been coded yet." <br />
          <span className="text-xs uppercase tracking-widest mt-4 block text-slate-600">— Albus Dumbledore, CEO</span>
        </p>
        <button className="px-12 py-6 rounded-full bg-white text-black font-black text-xl hover:scale-105 transition-transform shadow-2xl shadow-white/10 active:scale-95">
          Apply to the Accelerator
        </button>
      </section>

      <footer className="py-12 border-t border-white/5 text-center text-slate-500 text-sm">
        &copy; 2024 Hogwarts Labs Inc. Disrupting magic since the 10th century.
      </footer>
    </main>
  );
}
