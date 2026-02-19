"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { ParticleBackground } from "@/components/ParticleBackground";
import { HouseSection } from "@/components/HouseSection";
import { ArrowRight, Wand2, Box, Cpu, Zap, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#020617]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-8 text-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#020617]"></div>
          <img
            src="/hero-hogwarts.png"
            alt="Hogwarts Innovation HQ"
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex flex-col items-center"
        >
          <h1 className="text-6xl md:text-9xl font-black mb-2 tracking-tight text-brand-primary drop-shadow-2xl" style={{ fontFamily: 'var(--font-cinzel)' }}>
            Hogwarts<br />
            <span className="text-white brightness-125">Innovations</span>
          </h1>

          <div className="mb-6 bg-brand-accent/20 px-6 py-1 border-y border-brand-primary/30">
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-[0.4em] text-brand-primary">
              Magic Meets Technology
            </h2>
          </div>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-12 font-medium italic">
            Where Enchantment Fuels Entrepreneurship
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-24">
            <button className="btn-teal text-lg min-w-[200px]">
              Get a Demo
            </button>
            <button className="btn-orange text-lg min-w-[200px]">
              Join the Team
            </button>
          </div>
        </motion.div>

        {/* Bottom Features Grid */}
        <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12 pb-24">
          {[
            { title: "Wizard Tech Solutions", icon: Cpu, desc: "Bespoke enchantment-based software for the modern wizarding era." },
            { title: "Startup Incubator", icon: Box, desc: "Fostering the next generation of magical disruptors and visionaries." },
            { title: "Enchanted Networking", icon: Zap, desc: "Connecting magical minds through our high-speed neural owl network." }
          ].map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + (idx * 0.1) }}
              className="flex flex-col items-center gap-4"
            >
              <div className="p-3 rounded-full bg-brand-primary/10 border border-brand-primary/20">
                <feature.icon className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-wide" style={{ fontFamily: 'var(--font-cinzel)' }}>{feature.title}</h3>
              <div className="h-px w-12 bg-brand-primary/30 my-1"></div>
              <p className="text-slate-400 text-xs leading-relaxed max-w-[200px] text-center">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Campus Section */}
      <section className="py-32 px-12 bg-black/40 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-brand-primary mb-4" style={{ fontFamily: 'var(--font-cinzel)' }}>
              Our Campus
            </h2>
            <div className="h-1 w-24 bg-brand-primary/30 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="magic-card aspect-video group cursor-pointer overflow-hidden relative">
              <img src="/campus-1.png" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt="Innovation Tower" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-cinzel)' }}>Innovation Tower</h3>
                <p className="text-slate-300 text-sm">Where ideas take flight beyond the castle walls.</p>
              </div>
            </div>
            <div className="magic-card aspect-video group cursor-pointer overflow-hidden relative border-brand-primary/20">
              <img src="/campus-2.png" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt="Cutting-Edge Labs" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-2xl font-bold text-brand-primary mb-2" style={{ fontFamily: 'var(--font-cinzel)' }}>Cutting-Edge Labs</h3>
                <p className="text-slate-300 text-sm">Synthetic potions and neural magic manufacturing.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="magic-card aspect-square group p-6 flex flex-col justify-end border-white/5">
              <h4 className="text-xl font-bold text-white mb-2">Weekly Startup Pitches</h4>
              <p className="text-slate-400 text-xs">Held in the Great Hall every Friday at noon.</p>
            </div>
            <div className="magic-card aspect-square group flex flex-col items-center justify-center p-6 border-white/5">
              <div className="w-32 h-32 rounded-full border-2 border-brand-primary/30 flex items-center justify-center mb-4">
                <Sparkles className="w-16 h-16 text-brand-primary/50" />
              </div>
              <span className="text-xs uppercase tracking-[0.3em] text-brand-primary font-bold">Incubation Meta</span>
            </div>
            <div className="magic-card aspect-square group p-6 flex flex-col justify-end border-white/5">
              <h4 className="text-xl font-bold text-white mb-2">Collaborative Workspaces</h4>
              <p className="text-slate-400 text-xs">Hot-desks and private chambers for enchanted teams.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Magic Section */}
      <section className="relative py-40 px-12 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img src="/hogwarts-office-night.png" className="w-full h-full object-cover opacity-30" alt="Hogwarts Background" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-[#020617]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white" style={{ fontFamily: 'var(--font-cinzel)' }}>
              Join the Magic.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            {/* Openings */}
            <div className="lg:col-span-4 magic-card p-10 bg-black/60 border border-brand-primary/20">
              <h3 className="text-2xl font-bold text-white mb-8">Current Openings</h3>
              <div className="space-y-4 mb-8">
                {[
                  { name: "Charms Developer", icon: Wand2 },
                  { name: "Potions Engineer", icon: Box },
                  { name: "Data Wizard", icon: Cpu }
                ].map((role) => (
                  <div key={role.name} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                    <role.icon className="w-4 h-4 text-brand-primary" />
                    <span className="text-sm font-medium text-slate-300">{role.name}</span>
                  </div>
                ))}
              </div>
              <button className="btn-orange w-full py-3 text-sm">Apply Now</button>
            </div>

            {/* Interaction Area (Middle) */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center self-stretch py-12">
              {/* Visual spacing as per the image */}
            </div>

            {/* Success Stories */}
            <div className="lg:col-span-4 magic-card p-10 bg-black/60 border border-brand-primary/20">
              <h3 className="text-2xl font-bold text-white mb-8">Startup Success Stories</h3>
              <div className="space-y-6 mb-8">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-lg bg-orange-900/40 border border-orange-500/20"></div>
                  <div>
                    <h4 className="font-bold text-brand-primary">Nimbus AI</h4>
                    <p className="text-[10px] text-slate-400 italic">Flying Fast in the AI Space</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center border-t border-white/5 pt-6">
                  <div className="w-12 h-12 rounded-lg bg-yellow-900/40 border border-yellow-500/20"></div>
                  <div>
                    <h4 className="font-bold text-brand-accent">TimeTurner Tech</h4>
                    <p className="text-[10px] text-slate-400 italic">Revolutionizing Productivity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Form & Footer Info */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4"></div>
            <div className="lg:col-span-4 bg-black/60 p-8 rounded-xl border border-white/10">
              <h4 className="text-xl font-bold text-brand-primary mb-6 text-center">Get in Touch</h4>
              <div className="space-y-3">
                <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded p-2.5 text-sm text-white focus:outline-none focus:border-brand-primary" />
                <input type="email" placeholder="Your Email" className="w-full bg-white/5 border border-white/10 rounded p-2.5 text-sm text-white focus:outline-none focus:border-brand-primary" />
                <textarea placeholder="Your Message" rows={2} className="w-full bg-white/5 border border-white/10 rounded p-2.5 text-sm text-white focus:outline-none focus:border-brand-primary resize-none"></textarea>
                <button className="w-full bg-[#9a4d2b] py-2 rounded text-xs font-black uppercase tracking-widest text-white hover:bg-[#b05a35] transition-colors">Send</button>
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col items-center justify-end py-4">
              <div className="text-center">
                <p className="text-[9px] uppercase tracking-widest text-slate-500 mb-2">In Partnership With Gringotts Ventures</p>
                <div className="flex gap-4 justify-center opacity-60">
                  {/* Icons similar to reference */}
                  <span className="text-white">𝕏</span>
                  <span className="text-white">📷</span>
                  <span className="text-white">🎵</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 bg-[#020617] text-center text-slate-500 text-sm relative z-10">
        &copy; 2024 Hogwarts Innovations. All rights reserved. <br />
        <span className="text-[10px] uppercase tracking-[0.5em] mt-4 block opacity-30 italic">Disrupting the magical realm</span>
      </footer>
    </main>
  );
}
