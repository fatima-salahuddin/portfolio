import { resumeData } from "@/app/data/resume";
import { Download, FileText } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ResumePage() {
    return (
        <div className="container max-w-screen-lg mx-auto py-12 px-4 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tight">Resume</h1>
                    <p className="text-muted-foreground">
                        View or download my professional resume.
                    </p>
                </div>
                <Link
                    href="/Fatima Salahuddin - Resume.pdf" // Updated to match actual file
                    target="_blank"
                    className={cn(
                        "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                        "bg-primary text-primary-foreground hover:bg-primary/90",
                        "h-11 px-8"
                    )}
                >
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                </Link>
            </div>

            {/* Resume Preview - HTML Version */}
            <div className="border border-border rounded-xl bg-card p-8 md:p-12 shadow-sm space-y-12">
                {/* Header */}
                <div className="border-b border-border pb-8 text-center md:text-left">
                    <h2 className="text-4xl font-bold mb-2">{resumeData.profile.name}</h2>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted-foreground">
                        {resumeData.profile.email && <span>{resumeData.profile.email}</span>}
                        <span>•</span>
                        {resumeData.profile.phone && <span>{resumeData.profile.phone}</span>}
                        <span>•</span>
                        {resumeData.profile.location && <span>{resumeData.profile.location}</span>}
                    </div>
                </div>

                {/* Education */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider border-b border-border/50 pb-2">
                        <FileText className="h-5 w-5" /> Education
                    </div>
                    {resumeData.education.map((edu, i) => (
                        <div key={i} className="grid md:grid-cols-[1fr,auto] gap-1">
                            <div>
                                <h3 className="font-bold text-lg">{edu.institution}</h3>
                                <p className="text-muted-foreground">{edu.degree}</p>
                                {edu.honors && <p className="text-sm text-muted-foreground mt-1">{edu.honors.join(", ")}</p>}
                            </div>
                            <div className="text-right text-sm text-muted-foreground font-medium">
                                <p>{edu.year}</p>
                                <p>{edu.location}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Experience */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider border-b border-border/50 pb-2">
                        <FileText className="h-5 w-5" /> Experience
                    </div>
                    {resumeData.experience.map((exp, i) => (
                        <div key={i} className="space-y-2">
                            <div className="flex justify-between items-baseline">
                                <h3 className="font-bold text-lg">{exp.company}</h3>
                                <span className="text-sm font-medium text-muted-foreground">{exp.year}</span>
                            </div>
                            <p className="text-primary/80 font-medium text-sm">{exp.role} | {exp.role.includes("Remote") ? "Remote" : "Tabuk"}</p>
                            <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                        </div>
                    ))}
                </div>

                {/* Skills */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider border-b border-border/50 pb-2">
                        <FileText className="h-5 w-5" /> Skills
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 text-sm">
                        <p><span className="font-bold">Languages:</span> {resumeData.skills.languages.join(", ")}</p>
                        <p><span className="font-bold">Frontend:</span> {resumeData.skills.frontend.join(", ")}</p>
                        <p><span className="font-bold">Backend:</span> {resumeData.skills.backend.join(", ")}</p>
                        <p><span className="font-bold">Tools:</span> {resumeData.skills.tools.join(", ")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
