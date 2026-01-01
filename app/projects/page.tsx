"use client";

import { useState } from "react";
import Link from "next/link";
import { resumeData } from "@/app/data/resume";
import { ArrowRight, Github } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProjectsPage() {
    const [filter, setFilter] = useState("All");

    const categories = ["All", ...Array.from(new Set(resumeData.projects.map((p) => p.category)))];

    const filteredProjects = filter === "All"
        ? resumeData.projects
        : resumeData.projects.filter((p) => p.category === filter);

    return (
        <div className="container max-w-screen-xl mx-auto py-12 px-4 animate-in fade-in duration-500">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">Featured Projects</h1>
                <p className="text-muted-foreground text-lg">
                    A showcase of my technical projects, ranging from full-stack web applications to system-level optimizations.
                </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={cn(
                            "px-4 py-2 rounded-full text-sm font-medium transition-all",
                            filter === cat
                                ? "bg-primary text-primary-foreground shadow-md"
                                : "bg-secondary/50 text-secondary-foreground hover:bg-secondary"
                        )}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                    <Link
                        key={index}
                        href={`/projects/${project.slug}`}
                        className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary/50 cursor-pointer h-full"
                    >
                        {/* Project Image or Placeholder */}
                        <div className="h-48 bg-muted/30 border-b border-border flex items-center justify-center group-hover:bg-muted/50 transition-colors overflow-hidden relative">
                            {project.image ? (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            ) : (
                                <span className="text-muted-foreground font-mono text-sm">Project Preview</span>
                            )}
                        </div>

                        <div className="flex-1 p-6 space-y-4">
                            <div className="space-y-2">
                                <div className="flex justify-between items-start">
                                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">{project.category}</span>
                                    {/* {project.repo !== "#" && (
                                        <object>
                                            <a href={project.repo} target="_blank" className="text-muted-foreground hover:text-foreground z-10 relative">
                                                <Github className="h-4 w-4" />
                                            </a>
                                        </object>
                                    )} */}
                                </div>
                                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-muted-foreground text-sm line-clamp-3">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-2">
                                {project.tech.map((t) => (
                                    <span key={t} className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium border border-primary/20">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
