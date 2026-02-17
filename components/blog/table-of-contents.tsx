"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface TOCItem {
    id: string;
    title: string;
}

export function TableOfContents({ items }: { items: TOCItem[] }) {
    return (
        <div className="bg-card dark:bg-muted/50 border border-muted rounded-xl p-6 my-8 shadow-sm">
            <h4 className="font-bold text-lg mb-4">Table of Contents</h4>
            <ul className="space-y-2">
                {items.map((item) => (
                    <li key={item.id}>
                        <Link
                            href={`#${item.id}`}
                            className="text-primary hover:underline transition-colors text-sm font-medium"
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
