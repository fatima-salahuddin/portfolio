import Link from "next/link";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { resumeData } from "@/app/data/resume";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="relative flex-1 flex flex-col justify-center items-center text-center px-4 py-20 md:py-32 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 overflow-hidden">

        {/* Background Gradient Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full pointer-events-none -z-10" />

        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight">
            Hi, I'm <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">{resumeData.profile.name}</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            {resumeData.profile.role}
          </p>
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
            {resumeData.profile.summary}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-4">
          <Link
            href="/projects"
            className={cn(
              "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
              "bg-primary text-primary-foreground hover:bg-primary/90",
              "h-11 px-8 py-2"
            )}
          >
            View Projects
          </Link>
          <Link
            href="/resume"
            className={cn(
              "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
              "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
              "h-11 px-8 py-2"
            )}
          >
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Link>
          <Link
            href="/contact"
            className={cn(
              "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
              "text-muted-foreground hover:text-foreground underline-offset-4 hover:underline",
              "h-11 px-4"
            )}
          >
            Contact Me <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="flex items-center gap-6 pt-8">
          {resumeData.profile.github && (
            <Link href={resumeData.profile.github} target="_blank" className="text-muted-foreground hover:text-foreground transition-transform hover:scale-110">
              <Github className="h-6 w-6" />
            </Link>
          )}
          {resumeData.profile.linkedin && (
            <Link href={resumeData.profile.linkedin} target="_blank" className="text-muted-foreground hover:text-foreground transition-transform hover:scale-110">
              <Linkedin className="h-6 w-6" />
            </Link>
          )}
          <Link href={`mailto:${resumeData.profile.email}`} className="text-muted-foreground hover:text-foreground transition-transform hover:scale-110">
            <Mail className="h-6 w-6" />
          </Link>
        </div>
      </section>

      {/* Featured Snippet (Optional - kept simple for MVP speed, expanded later) */}
      <section className="py-16 bg-muted/50 border-y border-border/50">
        <div className="container max-w-screen-xl px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { title: "Full Stack Development", desc: "Building robust web applications using React, Node.js, and modern databases." },
              { title: "Systems Programming", desc: "Low-level optimization using C, C++, and Assembly for performance-critical tasks." },
              { title: "AI & Machine Learning", desc: "Developing models and data pipelines using TensorFlow and Python." }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-lg bg-background border border-border shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
