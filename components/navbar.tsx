"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
    { name: "Experience", href: "/#experience" },
    { name: "Technical Insights", href: "/blog" },
    { name: "Skills", href: "/#skills" },
    { name: "Contact", href: "/#contact" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 px-4",
                isScrolled
                    ? "py-3 bg-background/80 backdrop-blur-md border-b"
                    : "py-6 bg-transparent"
            )}
        >
            <div className="max-width mx-auto flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tighter">
                    Portfo<span className="text-primary">lio.</span>
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "hover:text-primary transition-colors",
                                pathname === item.href ? "text-primary" : "text-muted-foreground"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <ModeToggle />
                </div>

                {/* Mobile menu could be added here if needed, but keeping it minimal for now */}
            </div>
        </nav>
    );
}
