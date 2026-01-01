"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { resumeData } from "@/app/data/resume";
import { cn } from "@/lib/utils";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
        }, 1500);
    };

    return (
        <div className="container max-w-screen-xl mx-auto py-12 px-4 animate-in fade-in duration-500">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-24">

                {/* Contact Information */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold tracking-tight">Get in Touch</h1>
                        <p className="text-muted-foreground text-lg">
                            Feel free to reach out for collaborations, opportunities, or just a friendly chat about technology and design.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <a
                            href={`mailto:${resumeData.profile.email}`}
                            className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:bg-accent/50 transition-colors"
                        >
                            <div className="p-3 rounded-full bg-primary/10 text-primary">
                                <Mail className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="font-medium">Email</p>
                                <p className="text-muted-foreground">{resumeData.profile.email}</p>
                            </div>
                        </a>

                        <a
                            href={`tel:${resumeData.profile.phone}`}
                            className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:bg-accent/50 transition-colors"
                        >
                            <div className="p-3 rounded-full bg-primary/10 text-primary">
                                <Phone className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="font-medium">Phone</p>
                                <p className="text-muted-foreground">{resumeData.profile.phone}</p>
                            </div>
                        </a>

                        <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:bg-accent/50 transition-colors cursor-default">
                            <div className="p-3 rounded-full bg-primary/10 text-primary">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="font-medium">Location</p>
                                <p className="text-muted-foreground">{resumeData.profile.location}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
                    {submitted ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-4 min-h-[400px]">
                            <div className="h-16 w-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                                <Send className="h-8 w-8" />
                            </div>
                            <h3 className="text-2xl font-bold">Message Sent!</h3>
                            <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="text-primary hover:underline"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">Name</label>
                                <input
                                    id="name"
                                    required
                                    type="text"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <input
                                    id="email"
                                    required
                                    type="email"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    className="flex min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                                    placeholder="How can I help you?"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={cn(
                                    "inline-flex w-full items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                                    "bg-primary text-primary-foreground hover:bg-primary/90",
                                    "h-11 px-8"
                                )}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
