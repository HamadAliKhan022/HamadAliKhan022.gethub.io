"use client";

import { motion } from "framer-motion";

interface FAQItem {
    question: string;
    answer: string;
}

export function FAQSection({ items }: { items: FAQItem[] }) {
    return (
        <section id="faq" className="mt-16 pt-12 border-t border-muted">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Frequently Asked Questions</h2>
            <div className="space-y-8">
                {items.map((item, index) => (
                    <div key={index} className="space-y-3">
                        <h3 className="text-xl font-bold text-foreground">{item.question}</h3>
                        <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed font-medium">{item.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
