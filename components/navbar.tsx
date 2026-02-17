"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu, X } from "lucide-react";

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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

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
                isScrolled || isMobileMenuOpen
                    ? "py-3 bg-background/90 backdrop-blur-md border-b"
                    : "py-6 bg-transparent"
            )}
        >
            <div className="max-width mx-auto flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tighter">
                    Portfo<span className="text-primary">lio.</span>
                </Link>

                {/* Desktop Menu */}
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

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <ModeToggle />
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-foreground focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Content */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden mt-4 pb-6 space-y-4 flex flex-col items-start"
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={cn(
                                "text-lg font-medium w-full py-2 px-2 rounded-lg transition-colors",
                                pathname === item.href ? "text-primary bg-primary/10" : "text-muted-foreground hover:bg-muted"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </motion.div>
            )}
        </nav>
    );
}
