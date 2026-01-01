import { resumeData } from "@/app/data/resume";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, Globe, Server, CheckCircle2 } from "lucide-react";

// Generate static params for existing projects to enable static export if needed
export async function generateStaticParams() {
    return resumeData.projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
    // Await params if necessary in newer Next.js versions, but for now accessing directly or assuming basic Next.js 14 behavior
    // Note: In Next.js 15+, params is a promise. In 14, it's an object. 
    // To be safe and future proof, we can treat it as is or await if we were in 15.
    // For this environment (16.1.1), it is likely a Promise.

    // However, the types provided usually default to simple object in standard setup unless strictly using async everywhere.
    // We'll treat it as standard object access for now to match typical patterns, but standard recommendation for 15+ is await.
    // Given the previous files didn't utilize async params for simple pages, we'll assume direct access or await if needed.

    // Let's resolve the slug correctly.
    const { slug } = await params;

    const project = resumeData.projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen pb-20 animate-in fade-in duration-700">
            {/* Hero Banner */}
            <div className="relative w-full h-[400px] md:h-[500px] bg-muted overflow-hidden">
                {/* Background Image / Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background z-10" />

                {project.image ? (
                    <div className="absolute inset-0">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover blur-sm opacity-50 scale-105"
                        />
                    </div>
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
                )}

                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-20 z-20 container mx-auto">
                    <Link
                        href="/projects"
                        className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-6 group"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Projects
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">{project.title}</h1>
                    <div className="flex flex-wrap gap-3">
                        {project.tech.map((t) => (
                            <span key={t} className="px-3 py-1 bg-primary/20 backdrop-blur-md text-foreground border border-primary/20 rounded-full text-sm font-medium">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto max-w-5xl px-4 mt-12 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12">

                {/* Main Content */}
                <div className="space-y-12">
                    {/* Overview */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold flex items-center gap-2 text-primary">
                            <Server className="h-6 w-6" />
                            About the Project
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {project.description}
                        </p>
                    </section>

                    {/* The Details (Case Study) */}
                    {project.details && (
                        <>
                            <div className="grid md:grid-cols-2 gap-8">
                                <section className="space-y-4 p-6 bg-secondary/30 rounded-xl border border-border">
                                    <h3 className="text-xl font-semibold">The Challenge</h3>
                                    <p className="text-muted-foreground">{project.details.problem}</p>
                                </section>
                                <section className="space-y-4 p-6 bg-primary/5 rounded-xl border border-primary/10">
                                    <h3 className="text-xl font-semibold">The Solution</h3>
                                    <p className="text-muted-foreground">{project.details.solution}</p>
                                </section>
                            </div>

                            <section className="space-y-6">
                                <h3 className="text-xl font-bold">Key Features</h3>
                                <ul className="grid grid-cols-1 gap-3">
                                    {project.details.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                                            <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </>
                    )}
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                    <div className="p-6 border border-border rounded-xl bg-card shadow-sm sticky top-24">
                        <h3 className="font-semibold mb-4 text-lg">Project Links</h3>
                        <div className="space-y-4">
                            {project.repo && project.repo !== "#" ? (
                                <Link
                                    href={project.repo}
                                    target="_blank"
                                    className="flex items-center justify-center w-full py-3 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-lg transition-colors font-medium"
                                >
                                    <Github className="mr-2 h-4 w-4" /> View Source Code
                                </Link>
                            ) : (
                                <button disabled className="flex items-center justify-center w-full py-3 bg-muted text-muted-foreground rounded-lg cursor-not-allowed font-medium opacity-70">
                                    <Github className="mr-2 h-4 w-4" /> Source Private
                                </button>
                            )}

                            {project.link && project.link !== "#" ? (
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    className="flex items-center justify-center w-full py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg shadow-md transition-all font-medium"
                                >
                                    <Globe className="mr-2 h-4 w-4" /> Live Demo
                                </Link>
                            ) : null}
                        </div>

                        <div className="mt-8 pt-6 border-t border-border">
                            <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <span key={t} className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </main>
    );
}
