"use client";

import React from "react";
import { motion } from "framer-motion";
import { Flame, BookOpen, Heart, ShieldCheck } from "lucide-react";

const houses = [
    {
        name: "Gryffindor Labs",
        role: "Bold Innovation & Growth",
        icon: Flame,
        color: "from-red-500/20 to-orange-500/20",
        shadow: "shadow-red-500/20",
        image: "/houses/gryffindor.png",
        desc: "Spearheading high-risk, high-reward magical ventures. Our sales and growth teams are the bravest in the industry."
    },
    {
        name: "Ravenclaw R&D",
        role: "Engineering & Intelligence",
        icon: BookOpen,
        color: "from-blue-500/20 to-indigo-500/20",
        shadow: "shadow-blue-500/20",
        image: "/houses/ravenclaw.png",
        desc: "The brains behind our automated potion pipelines. Our R&D department solves the unsolvable with pure logic."
    },
    {
        name: "Hufflepuff Logistics",
        role: "Ops & Customer Success",
        icon: Heart,
        color: "from-yellow-400/20 to-amber-600/20",
        shadow: "shadow-amber-500/20",
        image: "/houses/hufflepuff.png",
        desc: "Ensuring every owl delivery is on time. We build the backbone of the magical infrastructure with loyalty and hard work."
    },
    {
        name: "Slytherin Strategy",
        role: "Legal & Strategic Assets",
        icon: ShieldCheck,
        color: "from-emerald-500/20 to-teal-700/20",
        shadow: "shadow-emerald-500/20",
        image: "/houses/slytherin.png",
        desc: "Mastering the art of magical contracts and expansion. We play to win, ensuring Hogwarts Labs dominates the market."
    }
];

export const HouseSection = () => {
    return (
        <section className="py-24 px-8 max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-24">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight"
                >
                    Our <span className="magic-gradient bg-clip-text text-transparent italic">Founding Divisions</span>
                </motion.h2>
                <p className="text-slate-500 max-w-xl mx-auto text-base font-medium leading-relaxed">
                    The four pillars of Hogwarts Labs, each dedicated to a specific aspect of the magical revolution.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {houses.map((house, idx) => (
                    <motion.div
                        key={house.name}
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className={`magic-card group relative p-8 flex flex-col items-center text-center overflow-hidden border-white/5 hover:border-brand-primary/50 transition-all duration-500`}
                    >
                        {/* House Background Image */}
                        <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                            <img src={house.image} alt={house.name} className="w-full h-full object-cover scale-150 group-hover:scale-100 transition-transform duration-700" />
                        </div>

                        <div className="relative z-10 w-full flex flex-col items-center">
                            <div className={`p-4 rounded-2xl bg-gradient-to-br ${house.color} ${house.shadow} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                <house.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">{house.name}</h3>
                            <div className="text-xs font-black text-brand-primary uppercase tracking-[0.2em] mb-4 opacity-80">{house.role}</div>
                            <p className="text-slate-400 text-sm leading-relaxed font-medium">
                                {house.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
