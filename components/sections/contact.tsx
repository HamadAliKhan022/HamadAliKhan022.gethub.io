"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User, MapPin, Mail, Send } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-24 px-4 bg-muted/30">
            <div className="max-width mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16 relative inline-block text-center md:text-left w-full md:w-auto">
                    Contact Me
                    <span className="absolute -bottom-2 md:left-0 left-1/2 -translate-x-1/2 md:translate-x-0 w-12 h-1 bg-primary rounded-full" />
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold tracking-tight mb-4">Get in Touch</h3>
                            <p className="text-muted-foreground text-lg">
                                If you're interested in hiring me or have any questions about my work, feel free to reach out. I'm always open to discussing new projects and opportunities.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <User className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Name</p>
                                    <p className="text-lg font-semibold">Hamad Ali Khan</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Address</p>
                                    <p className="text-lg font-semibold">I-14 4 Islamabad</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Email</p>
                                    <p className="text-lg font-semibold">hammadalikhan022@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-background p-8 rounded-2xl border shadow-sm"
                    >
                        <form action="mailto:hammadalikhan022@gmail.com" method="post" className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Name</label>
                                    <Input placeholder="Your Name" name="Name" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Email</label>
                                    <Input type="email" placeholder="Your Email" name="Email" required />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Subject</label>
                                <Input placeholder="Subject" name="Subject" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Message</label>
                                <Textarea placeholder="How can I help you?" name="Message" className="min-h-[150px]" required />
                            </div>
                            <Button type="submit" className="w-full h-12 text-base font-semibold rounded-xl">
                                Send Message <Send className="ml-2 w-4 h-4" />
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

