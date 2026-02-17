"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
    return (
        <section id="about" className="py-24 px-4 bg-muted/30">
            <div className="max-width mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border">
                            <Image
                                src="/images/about me.jpeg"
                                alt="Hamad Ali Khan"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 relative inline-block">
                            About Me
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full" />
                        </h2>
                        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                            <p className="text-foreground font-semibold text-xl">
                                Hamad Ali Khan — Software Developer & Problem Solver
                            </p>
                            <p>
                                I am passionate about building innovative web and mobile applications, developing scalable
                                systems, and integrating AI-powered solutions to solve real-world problems.
                            </p>
                            <p>
                                My expertise spans full-stack development, modern app architectures, database management, and professional SEO strategy. I thrive on creating clean, maintainable code that delivers exceptional user experiences.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
