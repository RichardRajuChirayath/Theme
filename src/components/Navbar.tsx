"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Terminal, Shield, Zap } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-5 bg-black/20 backdrop-blur-md border-b border-white/5"
        >
            <div className="flex items-center gap-3 cursor-pointer group">
                <Sparkles className="w-6 h-6 text-brand-primary" />
                <span className="text-2xl font-black tracking-widest text-brand-primary uppercase" style={{ fontFamily: 'var(--font-cinzel)' }}>
                    Hogwarts <span className="text-white">Innovations</span>
                </span>
            </div>

            <div className="hidden md:flex items-center gap-10">
                {["Accelerator", "Strategic Partners", "About", "Campus", "Portfolio"].map((item) => (
                    <Link
                        key={item}
                        href="#"
                        className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-brand-primary transition-colors"
                    >
                        {item}
                    </Link>
                ))}
            </div>

            <div className="flex items-center gap-6">
                <button className="text-xs font-bold uppercase tracking-widest text-slate-300 hover:text-white transition-colors">
                    Portal Login
                </button>
                <button className="px-6 py-2.5 rounded-lg bg-[#9a4d2b] hover:bg-[#b05a35] text-white text-[11px] font-black uppercase tracking-widest shadow-lg transition-all active:scale-95">
                    Join the Team
                </button>
            </div>
        </motion.nav>
    );
};
