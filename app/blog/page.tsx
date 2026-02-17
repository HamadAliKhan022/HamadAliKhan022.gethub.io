"use client";

import { motion } from "framer-motion";
import { BlogCard } from "@/components/blog/blog-card";

const posts = [
    {
        title: "SpineVision AI: Scalable Architecture for Medical Image Inference",
        description: "A professional deep dive into building a production-grade AI medical imaging system using React, Flask, and Deep Learning. Exploring the full-stack ML architecture, inference pipelines, and medical-grade engineering decisions.",
        date: "July 24, 2024",
        readTime: "12 min read",
        category: "AI Architecture",
        image: "/assets/blog/system-architecture.png",
        href: "/blog/spinevision-ai-architecture",
    },
];

export default function BlogPage() {
    return (
        <div className="pt-32 pb-24 px-4 min-h-screen bg-muted/20">
            <div className="max-width mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Technical Insights</h1>
                    <p className="text-muted-foreground text-xl max-w-2xl leading-relaxed">
                        Exploring the intersection of software engineering, artificial intelligence, and scalable system design through project-based deep dives.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <BlogCard key={post.href} {...post} index={index} />
                    ))}

                    {/* Placeholder for future posts */}
                    {[1, 2].map((_, i) => (
                        <div key={i} className="rounded-2xl border border-dashed border-muted-foreground/20 bg-muted/5 flex flex-col items-center justify-center p-12 text-center">
                            <p className="text-muted-foreground font-medium">Coming Soon</p>
                            <p className="text-xs text-muted-foreground/60 mt-2">Next deep dive in progress</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
