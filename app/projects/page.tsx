import type { Metadata } from "next";
import { resumeData } from "@/app/data/resume";
import { ProjectRow, WorkEntry } from "@/components/blocks";

export const metadata: Metadata = { title: "Work" };

export default function ProjectsPage() {
    const { work, projects } = resumeData;

    return (
        <>
            <section className="hero" style={{ paddingBottom: 56 }}>
                <div className="wrap">
                    <h1 className="display">Work</h1>
                    <p className="lead">
                        Three systems I built alone for businesses in Kuwait and Iraq, followed by my final year project and
                        coursework. Each page explains the problem, the decisions that mattered and the stack.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="wrap">
                    <div className="section-head">
                        <h2 className="h2">Systems in production</h2>
                    </div>
                    {work.map((p) => (
                        <WorkEntry key={p.slug} project={p} />
                    ))}
                </div>
            </section>

            <section className="section">
                <div className="wrap">
                    <div className="section-head">
                        <h2 className="h2">Projects and coursework</h2>
                    </div>
                    <ul className="project-list">
                        {projects.map((p) => (
                            <ProjectRow key={p.slug} project={p} />
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
}
