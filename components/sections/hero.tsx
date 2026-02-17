"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Subtle background element */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-width mx-auto px-4 relative z-10">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-xl md:text-2xl font-medium text-primary mb-4 tracking-tight">
                            Hello, my name is
                        </h2>
                        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 leading-none">
                            Hamad Ali Khan
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-2xl text-muted-foreground mb-10 leading-relaxed font-medium"
                    >
                        Software Developer & AI Advocate. I build innovative systems that solve real-world problems through clean code and intelligent design.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Button asChild size="lg" className="rounded-full px-8 h-12 text-base font-semibold">
                            <Link href="#projects">View Projects</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-12 text-base font-semibold">
                            <Link href="#contact">Get in Touch</Link>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
