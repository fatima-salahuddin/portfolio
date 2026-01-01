import { resumeData } from "@/app/data/resume";
import { Code2, Database, LayoutTemplate, Terminal, Cpu } from "lucide-react";

export default function SkillsPage() {

    const iconMap: Record<string, any> = {
        languages: Terminal,
        frontend: LayoutTemplate,
        backend: Database,
        tools: Code2,
        concepts: Cpu,
    };

    return (
        <div className="container max-w-screen-xl mx-auto py-12 px-4 animate-in fade-in duration-500">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">Technical Skills</h1>
                <p className="text-muted-foreground text-lg">
                    A catalogue of the technologies and tools I work with.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(resumeData.skills).map(([category, items]) => {
                    const Icon = iconMap[category] || Code2;
                    const title = category.charAt(0).toUpperCase() + category.slice(1);

                    return (
                        <div key={category} className="p-6 rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3 mb-6 border-b border-border/50 pb-4">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h2 className="text-xl font-semibold">{title}</h2>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="inline-flex items-center rounded-md border border-input bg-background px-3 py-1 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Certifications & Interests */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Certifications</h3>
                    <ul className="space-y-3">
                        {resumeData.certifications.map((cert, i) => (
                            <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                                {cert}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Interests</h3>
                    <div className="flex flex-wrap gap-2">
                        {resumeData.interests.map((interest, i) => (
                            <span key={i} className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                                {interest}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
