"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { resumeData } from "@/app/data/resume";

const navItems = [
    { name: "Work", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" },
];

export const Header = () => {
    const pathname = usePathname();

    return (
        <header className="site-header">
            <div className="wrap">
                <Link href="/" className="brand">
                    {resumeData.profile.name}
                </Link>
                <nav className="nav" aria-label="Main">
                    {navItems.map((item) => {
                        const current = pathname === item.href || pathname.startsWith(item.href + "/");
                        return (
                            <Link key={item.href} href={item.href} aria-current={current ? "page" : undefined}>
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </header>
    );
};
