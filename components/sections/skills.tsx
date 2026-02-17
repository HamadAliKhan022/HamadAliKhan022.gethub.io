"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skillGroups = [
    {
        title: "Languages",
        skills: ["C++", "Python", "JavaScript", "SQL"],
    },
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS"],
    },
    {
        title: "Backend",
        skills: ["Node.js", "Flask", "Express"],
    },
    {
        title: "Specialties",
        skills: ["AI Integration", "Full-Stack Systems", "Database Design", "SEO"],
    },
    {
        title: "Tools",
        skills: ["Git", "Linux", "VS Code", "Vercel"],
    },
    {
        title: "Professional",
        skills: ["WordPress", "Wix", "Digital Marketing", "Enterprise Solutions"],
    },
];

export function Skills() {
    return (
        <section id="skills" className="py-24 px-4 bg-background">
            <div className="max-width mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center md:text-left"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Creative Skills & Expertise</h2>
                        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                            <p>
                                I am proficient in a diverse range of technical skills, from core algorithm implementation in C++ to high-level web architecture using Next.js.
                            </p>
                            <p>
                                My background in both traditional software engineering and modern web technologies allows me to build robust, performant, and user-friendly systems.
                            </p>
                            <p>
                                I also specialize in optimizing digital footprints through advanced SEO and professional platform management.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {skillGroups.map((group, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="space-y-3"
                            >
                                <h3 className="font-bold text-lg tracking-tight">{group.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {group.skills.map((skill) => (
                                        <Badge key={skill} variant="secondary" className="hover:bg-primary/10 transition-colors py-1 px-3 border bg-muted/50 dark:bg-muted text-foreground font-medium">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
