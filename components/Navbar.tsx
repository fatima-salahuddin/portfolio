"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { resumeData } from "@/app/data/resume";
import { cn } from "@/lib/utils";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Skills", href: "/skills" },
        { name: "Projects", href: "/projects" },
        { name: "Resume", href: "/resume" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 max-w-screen-xl items-center justify-between px-4">
                {/* Logo / Brand */}
                <Link href="/" className="mr-6 flex items-center space-x-2 font-bold text-xl tracking-tight hover:opacity-80 transition-opacity">
                    <span className="text-primary">{resumeData.profile.name}</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex md:gap-x-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium transition-colors hover:text-primary"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Actions & Mobile Toggle */}
                <div className="flex items-center gap-x-4">
                    <div className="hidden md:flex items-center gap-x-4">
                        {resumeData.profile.github && (
                            <Link href={resumeData.profile.github} target="_blank" rel="noopener noreferrer">
                                <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                            </Link>
                        )}
                        {resumeData.profile.linkedin && (
                            <Link href={resumeData.profile.linkedin} target="_blank" rel="noopener noreferrer">
                                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                            </Link>
                        )}
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 -mr-2 text-muted-foreground hover:text-foreground"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-b border-border bg-background p-4 animate-in slide-in-from-top-2">
                    <div className="flex flex-col space-y-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-sm font-medium transition-colors hover:text-primary block"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};
