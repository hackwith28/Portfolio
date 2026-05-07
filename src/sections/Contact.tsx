import React from "react";
import { toast } from "sonner";
import { Mail, Phone, Send } from "lucide-react";

import { profile } from "@/content/profile";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { sendContact } from "@/shared/contact/sendContact";

function mailtoFromForm(name: string, email: string, message: string) {
  const subject = encodeURIComponent(`Portfolio inquiry — ${name}`);
  const body = encodeURIComponent(
    `Hi Reetesh,\n\n${message}\n\n— ${name}\n${email}`
  );
  return `mailto:${profile.email}?subject=${subject}&body=${body}`;
}

export function Contact() {
  const [loading, setLoading] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill all fields.");
      return;
    }
    setLoading(true);
    try {
      const res = await sendContact({ name, email, message });
      if (res.ok) {
        toast.success("Message sent.", { description: "I’ll reply as soon as possible." });
        setName("");
        setEmail("");
        setMessage("");
        return;
      }
      // Fallback path (no env configured)
      window.location.href = mailtoFromForm(name, email, message);
    } catch {
      window.location.href = mailtoFromForm(name, email, message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="container-max py-20 sm:py-24">
      <SectionHeader
        kicker="Contact"
        title="Let’s build something recruiters brag about."
        description="If you’re hiring for frontend/full stack roles—or want a fast, reliable engineer with strong DSA fundamentals—send me a message."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <Reveal as="div">
          <Card className="p-6 sm:p-8">
            <form className="grid gap-4" onSubmit={onSubmit}>
              <div className="grid gap-2">
                <label className="text-sm font-semibold text-fg-muted" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  className="focus-ring h-11 rounded-xl border border-border/60 bg-bg-elevated/20 px-3 text-sm font-semibold text-fg placeholder:text-fg-muted/60"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  autoComplete="name"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-semibold text-fg-muted" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="focus-ring h-11 rounded-xl border border-border/60 bg-bg-elevated/20 px-3 text-sm font-semibold text-fg placeholder:text-fg-muted/60"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  autoComplete="email"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-semibold text-fg-muted" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  className="focus-ring min-h-[140px] resize-none rounded-xl border border-border/60 bg-bg-elevated/20 px-3 py-3 text-sm font-semibold text-fg placeholder:text-fg-muted/60"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about the role, the product, and what success looks like."
                />
              </div>
              <div className="flex flex-wrap gap-3">
                <Button type="submit" disabled={loading}>
                  {loading ? "Sending…" : "Send message"} <Send className="h-4 w-4" />
                </Button>
                <Button asChild variant="secondary" type="button">
                  <a href={`mailto:${profile.email}`}>
                    Email directly <Mail className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              <p className="text-xs font-semibold text-fg-muted">
                If EmailJS isn’t configured, the form automatically opens your email client with the
                message pre-filled.
              </p>
            </form>
          </Card>
        </Reveal>

        <Reveal as="div" delay={0.05}>
          <Card className="p-6 sm:p-8">
            <p className="font-mono text-xs text-fg-muted">Fast response</p>
            <h3 className="mt-2 text-xl font-extrabold tracking-tight">
              I’m easiest to reach via email.
            </h3>
            <p className="mt-3 text-sm text-fg-muted">
              For interviews, take-homes, or quick technical discussions, email works best. I’m also
              happy to jump on a call when needed.
            </p>

            <div className="mt-6 grid gap-3">
              <a
                className="focus-ring glass flex items-center justify-between rounded-2xl px-4 py-4 text-sm font-semibold text-fg-muted hover:text-fg"
                href={`mailto:${profile.email}`}
              >
                <span className="inline-flex items-center gap-2">
                  <Mail className="h-4 w-4" /> {profile.email}
                </span>
                <span className="font-mono text-xs">mailto</span>
              </a>
              <a
                className="focus-ring glass flex items-center justify-between rounded-2xl px-4 py-4 text-sm font-semibold text-fg-muted hover:text-fg"
                href={`tel:${profile.phone}`}
              >
                <span className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4" /> {profile.phone}
                </span>
                <span className="font-mono text-xs">call</span>
              </a>
              <div className="rounded-2xl border border-border/60 bg-bg-elevated/25 p-5">
                <div className="text-sm font-extrabold tracking-tight">
                  Hiring checklist (what I do well)
                </div>
                <ul className="mt-3 grid gap-2 text-sm text-fg-muted">
                  {[
                    "Clean React architecture with strong UI/UX instincts",
                    "Node.js APIs + realtime systems with reliable state sync",
                    "Database thinking (SQL/NoSQL) + performance awareness",
                    "DSA fundamentals for tricky edge cases and optimization"
                  ].map((x) => (
                    <li key={x} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--accent))]" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}

