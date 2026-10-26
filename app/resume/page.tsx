import type { Metadata } from "next";
import { resumeData } from "@/app/data/resume";

export const metadata: Metadata = { title: "Resume" };

export default function ResumePage() {
    const { profile } = resumeData;

    return (
        <section className="hero" style={{ paddingTop: 64 }}>
            <div className="wrap">
                <div className="section-head" style={{ alignItems: "center", flexWrap: "wrap" }}>
                    <h1 className="display">Resume</h1>
                    <a className="btn btn-primary" href={profile.resume} download>
                        Download PDF
                    </a>
                </div>
                <object className="pdf-frame" data={profile.resume} type="application/pdf" aria-label="Resume PDF">
                    <p>
                        Your browser cannot show the PDF here. <a className="link" href={profile.resume}>Open the resume</a>.
                    </p>
                </object>
                <p className="meta" style={{ marginTop: 16 }}>
                    On a phone? <a className="link" href={profile.resume}>Open the PDF directly</a>.
                </p>
            </div>
        </section>
    );
}
