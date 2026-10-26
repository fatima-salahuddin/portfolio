import Link from "next/link";
import { resumeData } from "@/app/data/resume";
import { ProjectRow, WorkEntry } from "@/components/blocks";

export default function Home() {
    const { profile, work, projects, experience } = resumeData;

    return (
        <>
            <section className="hero">
                <div className="wrap">
                    <p className="label" style={{ margin: "0 0 20px" }}>
                        {profile.name} · {profile.role}
                    </p>
                    <h1 className="display">{profile.headline}</h1>
                    <p className="lead">{profile.intro}</p>
                    <ul className="hero-facts meta">
                        <li>{profile.location}</li>
                        <li>{profile.availability}</li>
                        <li>CGPA 3.8, Gold Medalist</li>
                    </ul>
                    <div className="hero-actions">
                        <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                            Email me
                        </a>
                        <a className="btn btn-quiet" href={profile.resume}>
                            Resume (PDF)
                        </a>
                        <a className="link" href={profile.github}>GitHub</a>
                        <a className="link" href={profile.linkedin}>LinkedIn</a>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="wrap">
                    <div className="section-head">
                        <h2 className="h2">Systems in production</h2>
                        <span className="meta">Built alone, used every day</span>
                    </div>
                    {work.map((p) => (
                        <WorkEntry key={p.slug} project={p} />
                    ))}
                </div>
            </section>

            <section className="section">
                <div className="wrap">
                    <div className="section-head">
                        <h2 className="h2">Projects and research</h2>
                        <Link className="link" href="/projects">All work</Link>
                    </div>
                    <ul className="project-list">
                        {projects.slice(0, 4).map((p) => (
                            <ProjectRow key={p.slug} project={p} />
                        ))}
                    </ul>
                </div>
            </section>

            <section className="section">
                <div className="wrap">
                    <div className="section-head">
                        <h2 className="h2">Experience</h2>
                        <Link className="link" href="/about">About me</Link>
                    </div>
                    <dl className="timeline">
                        {experience.slice(0, 4).map((e) => (
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

            <section className="section">
                <div className="wrap">
                    <h2 className="h2" style={{ maxWidth: "22ch" }}>
                        Have a process that still lives in spreadsheets?
                    </h2>
                    <p className="lead" style={{ margin: "16px 0 28px" }}>
                        I am looking for remote backend and full-stack roles. The fastest way to reach me is email.
                    </p>
                    <div className="hero-actions">
                        <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                            Email me
                        </a>
                        <a className="link" href={`mailto:${profile.email}`} style={{ wordBreak: "break-all" }}>
                            {profile.email}
                        </a>
                        <Link className="link" href="/contact">Other ways to reach me</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
