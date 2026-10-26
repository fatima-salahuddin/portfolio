"use client";

import { useState } from "react";

export const CopyEmail = ({ email }: { email: string }) => {
    const [copied, setCopied] = useState(false);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            window.location.href = `mailto:${email}`;
        }
    };

    return (
        <button type="button" className="copy-btn" onClick={copy} aria-live="polite">
            {copied ? "Copied" : "Copy address"}
        </button>
    );
};
