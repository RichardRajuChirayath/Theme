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
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 glass mx-8 mt-6 rounded-2xl"
        >
            <div className="flex items-center gap-2 group cursor-pointer">
                <div className="p-2 magic-gradient rounded-lg shadow-lg group-hover:scale-110 transition-transform">
                    <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white">HOGWARTS <span className="text-brand-primary">LABS</span></span>
            </div>

            <div className="hidden md:flex items-center gap-8">
                {[
                    { name: "Solutions", icon: Terminal },
                    { name: "Departments", icon: Shield },
                    { name: "Innovation", icon: Zap },
                ].map((item) => (
                    <Link
                        key={item.name}
                        href="#"
                        className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                    >
                        <item.icon className="w-4 h-4" />
                        {item.name}
                    </Link>
                ))}
            </div>

            <div className="flex items-center gap-4">
                <button className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                    Login
                </button>
                <button className="px-5 py-2 rounded-xl magic-gradient text-white text-sm font-bold shadow-lg shadow-brand-primary/20 hover:scale-105 transition-transform active:scale-95">
                    Join the Magic
                </button>
            </div>
        </motion.nav>
    );
};
