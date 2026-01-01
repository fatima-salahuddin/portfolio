import { resumeData } from "@/app/data/resume";
import { GraduationCap, Briefcase, User } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="container max-w-screen-lg mx-auto py-12 px-4 space-y-16 animate-in fade-in duration-500 max-h-screen overflow-y-auto">

            {/* Bio Section */}
            <section className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                    <User className="h-8 w-8 text-primary" />
                    <h1 className="text-3xl font-bold tracking-tight">About Me</h1>
                </div>
                <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground leading-relaxed text-lg">
                    <p className="mb-4">
                        I am a <strong>{resumeData.profile.role}</strong> based in {resumeData.profile.location}.
                        {resumeData.profile.summary.replace(resumeData.profile.role, "").replace("Computer Science undergraduate", "")}
                    </p>
                    <p>
                        My journey involves a strong foundation in both high-level application development and low-level systems programming.
                        Whether it's building full-stack web apps or optimizing kernel modules, I love tackling complex technical challenges.
                    </p>
                </div>
            </section>

            {/* Experience Section */}
            <section>
                <div className="flex items-center gap-3 mb-8">
                    <Briefcase className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-bold">Experience</h2>
                </div>
                <div className="space-y-8 border-l-2 border-border pl-6 relative">
                    {resumeData.experience.map((job, index) => (
                        <div key={index} className="relative group">
                            <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors" />
                            <div className="space-y-1">
                                <h3 className="text-xl font-semibold">{job.company}</h3>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-muted-foreground">
                                    <span className="font-medium text-foreground/80">{job.role}</span>
                                    <span className="hidden sm:inline">•</span>
                                    <span>{job.year}</span>
                                </div>
                                <p className="text-muted-foreground pt-2 max-w-2xl">
                                    {job.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Education Section */}
            <section>
                <div className="flex items-center gap-3 mb-8">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-bold">Education</h2>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                    {resumeData.education.map((edu, index) => (
                        <div key={index} className="p-6 rounded-xl border border-border bg-card hover:bg-accent/5 transition-colors shadow-sm">
                            <h3 className="font-semibold text-lg">{edu.institution}</h3>
                            <p className="text-primary font-medium">{edu.degree}</p>
                            <div className="text-sm text-muted-foreground mt-2 flex justify-between">
                                <span>{edu.year}</span>
                                <span>{edu.location}</span>
                            </div>
                            {edu.honors && (
                                <ul className="mt-4 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                                    {edu.honors.map((honor, i) => (
                                        <li key={i}>{honor}</li>
                                    ))}
                                </ul>
                            )}
                            {edu.grade && (
                                <p className="mt-4 text-sm font-medium text-foreground/80">{edu.grade}</p>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
