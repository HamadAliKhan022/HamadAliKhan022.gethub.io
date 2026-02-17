"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, ShoppingBag, Search, Globe, ChevronRight } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "SpineVision AI",
        description: "AI-powered web app detecting spinal diseases from X-ray images at early stages. Production-grade architecture with React, Node, and Flask.",
        icon: Brain,
        tags: ["React", "Node", "Flask", "ML"],
        href: "/blog/spinevision-ai-architecture",
    },
    {
        title: "Virtual Try-On E-Commerce",
        description: "Full-stack system allowing users to virtually preview products. Awarded 'Best Performance Award' for technical excellence.",
        icon: ShoppingBag,
        tags: ["React", "Python", "Flask", "DB"],
        href: "#",
    },
    {
        title: "Research Assistant AI",
        description: "AI system that analyzes research papers and extracts insights using Langflow and React APIs for intelligent content discovery.",
        icon: Search,
        tags: ["Langflow", "React", "APIs"],
        href: "#",
    },
    {
        title: "Web Development Work",
        description: "Developed and managed multiple enterprise-grade websites, handling deployment, optimization, and search engine performance.",
        icon: Globe,
        tags: ["WordPress", "Wix", "SEO"],
        href: "#",
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-24 px-4 bg-background">
            <div className="max-width mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Featured Projects</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A selection of my technical work, ranging from deep-learning medical applications to high-performance e-commerce systems.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full group hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md bg-muted/50 border-muted">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                        <project.icon className="w-6 h-6" />
                                    </div>
                                    <CardTitle className="text-2xl tracking-tight leading-tight">{project.title}</CardTitle>
                                    <CardDescription className="text-base mt-2 leading-relaxed">
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <Badge key={tag} variant="secondary" className="bg-background border font-medium">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href={project.href}
                                        className="inline-flex items-center text-primary font-semibold hover:underline group-hover:gap-1 transition-all"
                                    >
                                        View Details <ChevronRight className="w-4 h-4" />
                                    </Link>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
