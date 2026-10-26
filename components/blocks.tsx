import Link from "next/link";
import type { Figure, Project } from "@/app/data/resume";

export const Figures = ({ figures }: { figures: Figure[] }) => (
    <dl className="figures">
        {figures.map((f) => (
            <div key={f.label}>
                <dt>{f.value}</dt>
                <dd>{f.label}</dd>
            </div>
        ))}
    </dl>
);

export const Stack = ({ items }: { items: string[] }) => (
    <p className="stack" style={{ margin: 0 }}>
        {items.join(" · ")}
    </p>
);

/* Large two-column entry for production systems. */
export const WorkEntry = ({ project }: { project: Project }) => (
    <article className="work-entry">
        <div>
            <h3 className="h3">
                <Link href={`/projects/${project.slug}`}>{project.title}</Link>
            </h3>
            <p className="context">{project.context}</p>
            <p className="meta" style={{ margin: "0 0 10px" }}>
                {project.role} · {project.period}
            </p>
            {project.status && <span className="status">{project.status}</span>}
        </div>
        <div>
            <p className="summary">{project.summary}</p>
            {project.figures && <Figures figures={project.figures} />}
            <Stack items={project.stack} />
            <p style={{ margin: "20px 0 0" }}>
                <Link className="link" href={`/projects/${project.slug}`}>
                    How it works and what was hard
                </Link>
            </p>
        </div>
    </article>
);

/* Compact row for smaller and academic projects. */
export const ProjectRow = ({ project }: { project: Project }) => (
    <li className="project-row">
        <Link href={`/projects/${project.slug}`}>
            <span>
                <span className="title">{project.title}</span>
                <span className="meta" style={{ display: "block", marginTop: 4 }}>
                    {project.context}
                </span>
            </span>
            <p className="summary">{project.summary}</p>
            <span className="go">Read</span>
        </Link>
    </li>
);
