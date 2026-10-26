import { resumeData } from "@/app/data/resume";

export const Footer = () => {
    const { profile } = resumeData;

    return (
        <footer className="site-footer">
            <div className="wrap">
                <div>
                    <p style={{ margin: 0, color: "var(--ink)" }}>{profile.name}</p>
                    <p style={{ margin: "4px 0 0" }}>
                        {profile.location} · <a className="link" href={`mailto:${profile.email}`}>{profile.email}</a>
                    </p>
                    <p className="meta" style={{ margin: "16px 0 0" }}>
                        No cookies, no analytics, no tracking. Set in Source Serif and IBM Plex.
                    </p>
                </div>
                <ul aria-label="Elsewhere">
                    <li><a className="link" href={profile.github}>GitHub</a></li>
                    <li><a className="link" href={profile.linkedin}>LinkedIn</a></li>
                    <li><a className="link" href={profile.resume}>Resume (PDF)</a></li>
                </ul>
            </div>
        </footer>
    );
};
