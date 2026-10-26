import type { Metadata } from "next";
import { resumeData } from "@/app/data/resume";
import { CopyEmail } from "@/components/CopyEmail";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
    const { profile } = resumeData;

    return (
        <section className="hero">
            <div className="wrap">
                <h1 className="display">Contact</h1>
                <p className="lead" style={{ marginTop: 24 }}>
                    I am looking for remote backend and full-stack roles. Email is the fastest way to reach me.
                </p>

                <div style={{ margin: "48px 0 56px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px 24px" }}>
                    <a className="email-big" href={`mailto:${profile.email}`}>{profile.email}</a>
                    <CopyEmail email={profile.email} />
                </div>

                <dl className="kv">
                    <div>
                        <dt>LinkedIn</dt>
                        <dd><a className="link" href={profile.linkedin}>linkedin.com/in/fatima-salahuddin-</a></dd>
                    </div>
                    <div>
                        <dt>GitHub</dt>
                        <dd><a className="link" href={profile.github}>github.com/fatima-salahuddin</a></dd>
                    </div>
                    <div>
                        <dt>Based in</dt>
                        <dd>{profile.location}, UTC+5. I already work remotely with teams in Kuwait and Iraq.</dd>
                    </div>
                    <div>
                        <dt>Resume</dt>
                        <dd><a className="link" href={profile.resume}>Download the PDF</a></dd>
                    </div>
                </dl>
            </div>
        </section>
    );
}
