"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
    {
        title: "Software Development Intern",
        company: "Advanced Telecom Services",
        duration: "June 2025 – August 2025",
        responsibilities: [
            "Frontend + backend development & feature implementation",
            "Database integration and performance optimization",
            "Awarded: Best Performance Award",
        ],
        award: "Best Performance Award",
    },
];

export function Experience() {
    return (
        <section id="experience" className="py-24 px-4 bg-muted/30">
            <div className="max-width mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16 relative inline-block text-center md:text-left w-full md:w-auto">
                    Professional Experience
                    <span className="absolute -bottom-2 md:left-0 left-1/2 -translate-x-1/2 md:translate-x-0 w-12 h-1 bg-primary rounded-full" />
                </h2>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Card className="border-muted bg-card dark:bg-background/50 overflow-hidden shadow-sm">
                                <CardContent className="p-6 md:p-8">
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold tracking-tight">{exp.title}</h3>
                                            <p className="text-primary font-medium">{exp.company}</p>
                                        </div>
                                        <Badge variant="outline" className="text-sm md:text-base py-1 px-4 border-primary/20 bg-primary/5">
                                            {exp.duration}
                                        </Badge>
                                    </div>

                                    <ul className="space-y-4">
                                        {exp.responsibilities.map((resp, i) => (
                                            <li key={i} className="flex gap-3 text-muted-foreground text-lg">
                                                <span className="text-primary font-bold mt-1.5 leading-none">•</span>
                                                {resp}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
