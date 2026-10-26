import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allProjects } from "@/app/data/resume";
import { Figures, Stack } from "@/components/blocks";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
    return allProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    const { slug } = await params;
    const project = allProjects.find((p) => p.slug === slug);
    return project ? { title: project.title, description: project.summary } : {};
}

export default async function ProjectPage({ params }: Params) {
    const { slug } = await params;
    const index = allProjects.findIndex((p) => p.slug === slug);
    if (index === -1) notFound();

    const project = allProjects[index];
    const prev = allProjects[index - 1];
    const next = allProjects[index + 1];
    const meta = [project.role, project.period].filter(Boolean).join(" · ");

    return (
        <>
            <div className="wrap">
                <Link className="link crumb" href="/projects">All work</Link>
                <header className="case-head">
                    <h1 className="display" style={{ maxWidth: "20ch" }}>{project.title}</h1>
                    <p className="meta">
                        {project.context}
                        {meta && <> · {meta}</>}
                    </p>
                    {project.status && (
                        <p style={{ margin: "14px 0 0" }}>
                            <span className="status">{project.status}</span>
                        </p>
                    )}
                    <p className="lead">{project.summary}</p>
                </header>
                {project.figures && <Figures figures={project.figures} />}
            </div>

            <section className="section" style={{ borderTop: 0, paddingTop: 40 }}>
                <div className="wrap">
                    <p className="label" style={{ margin: "0 0 12px" }}>The problem</p>
                    <p className="lead" style={{ color: "var(--ink)" }}>{project.problem}</p>
                </div>
            </section>

            <section className="section">
                <div className="wrap">
                    <div className="section-head">
                        <h2 className="h2">Decisions that mattered</h2>
                    </div>
                    <div className="decisions">
                        {project.decisions.map((d) => (
                            <div key={d.title}>
                                <h3 className="h4">{d.title}</h3>
                                <p>{d.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {project.image && (
                <section className="section">
                    <div className="wrap">
                        <figure className="shot">
                            <img src={project.image.src} alt={project.image.alt} loading="lazy" />
                            <figcaption className="meta">{project.image.caption}</figcaption>
                        </figure>
                    </div>
                </section>
            )}

            <section className="section">
                <div className="wrap">
                    <dl className="kv">
                        <div>
                            <dt>Stack</dt>
                            <dd><Stack items={project.stack} /></dd>
                        </div>
                        {project.links.length > 0 && (
                            <div>
                                <dt>Links</dt>
                                <dd style={{ display: "flex", flexWrap: "wrap", gap: "8px 20px" }}>
                                    {project.links.map((l) => (
                                        <a key={l.href} className="link" href={l.href}>{l.label}</a>
                                    ))}
                                </dd>
                            </div>
                        )}
                    </dl>
                    {project.note && <p className="note">{project.note}</p>}
                </div>
            </section>

            <section className="section">
                <nav className="wrap pager" aria-label="More work">
                    <div>
                        {prev && (
                            <Link href={`/projects/${prev.slug}`}>
                                <span className="meta">Previous</span>
                                <span className="title">{prev.title}</span>
                            </Link>
                        )}
                    </div>
                    <div className="next">
                        {next && (
                            <Link href={`/projects/${next.slug}`}>
                                <span className="meta">Next</span>
                                <span className="title">{next.title}</span>
                            </Link>
                        )}
                    </div>
                </nav>
            </section>
        </>
    );
}
