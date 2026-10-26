import type { Metadata } from "next";
import { resumeData } from "@/app/data/resume";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
    const { about, education, experience, skills, leadership, certifications } = resumeData;

    return (
        <>
            <section className="hero" style={{ paddingBottom: 56 }}>
                <div className="wrap">
                    <h1 className="display">About</h1>
                    <div style={{ marginTop: 28 }}>
                        {about.map((p) => (
                            <p key={p.slice(0, 24)} className="lead" style={{ marginBottom: "1em" }}>{p}</p>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="wrap">
                    <div className="section-head">
                        <h2 className="h2">Experience</h2>
                    </div>
                    <dl className="timeline">
                        {experience.map((e) => (
                            <div key={e.role + e.org}>
                                <dt>{e.period}</dt>
                                <dd>
                                    <span className="role">{e.role}</span>, {e.org}
                                    <div className="detail">{e.detail}</div>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            <section className="section" id="skills">
                <div className="wrap">
                    <div className="section-head">
                        <h2 className="h2">What I work with</h2>
                    </div>
                    <dl className="kv">
                        {skills.map((s) => (
                            <div key={s.area}>
                                <dt>{s.area}</dt>
                                <dd>{s.items.join(", ")}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            <section className="section">
                <div className="wrap">
                    <div className="section-head">
                        <h2 className="h2">Education</h2>
                    </div>
                    <p className="h4" style={{ fontSize: 19 }}>{education.degree}</p>
                    <p style={{ margin: "0 0 6px", color: "var(--ink-2)" }}>{education.institution}</p>
                    <p className="meta" style={{ margin: 0 }}>{[education.period, ...education.notes].join(" · ")}</p>
                </div>
            </section>

            <section className="section">
                <div className="wrap decisions">
                    <div>
                        <h2 className="h3" style={{ marginBottom: 16 }}>Leadership and community</h2>
                        <ul className="plain-list">
                            {leadership.map((l) => <li key={l}>{l}</li>)}
                        </ul>
                    </div>
                    <div>
                        <h2 className="h3" style={{ marginBottom: 16 }}>Certifications</h2>
                        <ul className="plain-list">
                            {certifications.map((c) => <li key={c}>{c}</li>)}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}
