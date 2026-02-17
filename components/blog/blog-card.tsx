"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
    title: string;
    description: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
    href: string;
    index: number;
}

export function BlogCard({ title, description, date, readTime, category, image, href, index }: BlogCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
        >
            <Card className="h-full group overflow-hidden border-muted bg-card dark:bg-background/50 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <Badge className="absolute top-4 left-4 bg-background/80 backdrop-blur-md text-foreground border-none">
                        {category}
                    </Badge>
                </div>
                <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> {date}
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {readTime}
                        </span>
                    </div>
                    <CardTitle className="text-2xl tracking-tight line-clamp-2 group-hover:text-primary transition-colors">
                        {title}
                    </CardTitle>
                    <CardDescription className="text-base line-clamp-3 mt-2 leading-relaxed">
                        {description}
                    </CardDescription>
                </CardHeader>
                <CardFooter>
                    <Link
                        href={href}
                        className="inline-flex items-center text-primary font-semibold hover:underline group-hover:gap-1 transition-all"
                    >
                        Read Article <ChevronRight className="w-4 h-4" />
                    </Link>
                </CardFooter>
            </Card>
        </motion.div>
    );
}
