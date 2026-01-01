import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { resumeData } from "@/app/data/resume";

export const Footer = () => {
    return (
        <footer className="w-full border-t border-border bg-background py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row max-w-screen-xl px-4">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    © {new Date().getFullYear()} {resumeData.profile.name}. All rights reserved.
                </p>
                <div className="flex items-center gap-4">
                    <Link
                        href={resumeData.profile.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link
                        href={`mailto:${resumeData.profile.email}`}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
};
