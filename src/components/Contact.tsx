import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Copy,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Send,
} from "lucide-react";
import { profile } from "../data/profile";
import { MagneticButton } from "./MagneticButton";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "sending" | "sent" | "ready">("idle");
  const [statusText, setStatusText] = useState("");

  const trimmedName = senderName.trim() || "Visitor";
  const trimmedEmail = senderEmail.trim();
  const trimmedMsg = message.trim();

  const subject = `Portfolio Inquiry from ${trimmedName}`;
  const fullBody = [
    trimmedMsg,
    "",
    `---`,
    `From: ${trimmedName}`,
    trimmedEmail ? `Reply-To: ${trimmedEmail}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    profile.email
  )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(fullBody)}`;

  const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(fullBody)}`;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const handleCopyMessage = async () => {
    const text = `To: ${profile.email}\nSubject: ${subject}\n\n${fullBody}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopiedMessage(true);
      window.setTimeout(() => setCopiedMessage(false), 2200);
    } catch {
      setStatusText("Clipboard blocked by browser — use the Gmail or Mail App buttons above.");
    }
  };

  const handleDraftSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trimmedMsg) {
      setStatus("error");
      setStatusText("Please enter a short message before sending.");
      return;
    }

    if (profile.contactFormEndpoint) {
      setStatus("sending");
      setStatusText("Sending your message...");
      try {
        const res = await fetch(profile.contactFormEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            name: trimmedName,
            email: trimmedEmail || "not-provided",
            message: trimmedMsg,
          }),
        });
        if (!res.ok) throw new Error("Failed to send");
        setStatus("sent");
        setStatusText("Message sent successfully! Thank you for reaching out.");
        setSenderName("");
        setSenderEmail("");
        setMessage("");
        return;
      } catch {
        setStatus("ready");
        setStatusText(
          "Direct delivery unavailable — use Gmail Web, your Mail App, or Copy below."
        );
        return;
      }
    }

    // No backend configured: open Gmail Web compose cleanly & reveal fallback options
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
    setStatus("ready");
    setStatusText(
      "Gmail compose opened in a new tab. You can also use your Mail App or Copy the message below."
    );
  };

  return (
    <section id="contact" className="orchid-grid bg-aubergine py-20 text-porcelain sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 rounded-[2.5rem] border border-lavender/25 bg-blackberry/75 p-8 shadow-orchid sm:p-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between lg:col-span-6"
          >
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-citron">
                ACT 06 // LET&apos;S CONNECT
              </span>
              <h2 className="section-display mt-3 font-extrabold text-porcelain">
                Have An Idea?{" "}
                <span className="text-papaya">Let&apos;s Build It Together.</span>
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-porcelain/80 sm:text-lg">
                I&apos;m always excited to connect with people who love technology, innovation,
                learning, and creative problem-solving.
              </p>
            </div>

            <div className="mt-8 space-y-3.5">
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                data-cursor="OPEN"
                className="flex items-center justify-between rounded-2xl border border-lavender/25 bg-aubergine/80 p-4 transition-all hover:-translate-y-0.5 hover:border-citron"
              >
                <div className="flex items-center gap-3.5">
                  <span className="rounded-xl bg-citron/15 p-2.5 text-citron">
                    <Linkedin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-porcelain">LinkedIn</p>
                    <p className="font-mono text-xs text-lavender/80">
                      linkedin.com/in/aadhidhya-s-180303391
                    </p>
                  </div>
                </div>
                <span className="font-mono text-xs font-semibold text-citron">Connect &rarr;</span>
              </a>

              <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-lavender/25 bg-aubergine/80 p-4">
                <a href={`mailto:${profile.email}`} className="flex items-center gap-3.5">
                  <span className="rounded-xl bg-papaya/15 p-2.5 text-papaya">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-porcelain">Email</p>
                    <p className="font-mono text-xs text-porcelain/75">{profile.email}</p>
                  </div>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 rounded-full border border-lavender/25 bg-blackberry px-3.5 py-1.5 font-mono text-xs text-porcelain transition-colors hover:border-citron hover:text-citron"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-citron" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                data-cursor="OPEN"
                className="flex items-center justify-between rounded-2xl border border-lavender/25 bg-aubergine/80 p-4 transition-all hover:-translate-y-0.5 hover:border-lavender"
              >
                <div className="flex items-center gap-3.5">
                  <span className="rounded-xl bg-lavender/15 p-2.5 text-lavender">
                    <Github className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-porcelain">GitHub</p>
                    <p className="font-mono text-xs text-lavender/80">
                      github.com/aadhidhyas01-spec
                    </p>
                  </div>
                </div>
                <span className="font-mono text-xs font-semibold text-lavender">View Repos &rarr;</span>
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleDraftSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-between rounded-3xl border border-lavender/20 bg-aubergine p-7 shadow-orchid lg:col-span-6"
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-porcelain">
                Start a Conversation
              </h3>
              <p className="mt-1 text-sm text-porcelain/70">
                Write a quick note below and send directly via Gmail or your email app.
              </p>

              <div className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-mono text-xs font-medium uppercase tracking-wider text-lavender"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="Recruiter, Mentor, Collaborator"
                      className="mt-1.5 w-full rounded-xl border-2 border-lavender/30 bg-porcelain px-4 py-3 text-sm font-medium text-aubergine placeholder:text-aubergine/45 outline-none transition-colors focus:border-citron"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-mono text-xs font-medium uppercase tracking-wider text-lavender"
                    >
                      Your Email (Optional)
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="mt-1.5 w-full rounded-xl border-2 border-lavender/30 bg-porcelain px-4 py-3 text-sm font-medium text-aubergine placeholder:text-aubergine/45 outline-none transition-colors focus:border-citron"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-mono text-xs font-medium uppercase tracking-wider text-lavender"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (status === "error") setStatus("idle");
                    }}
                    placeholder="Share an AI, robotics, or software collaboration idea..."
                    className="mt-1.5 w-full rounded-xl border-2 border-lavender/30 bg-porcelain px-4 py-3 text-sm font-medium text-aubergine placeholder:text-aubergine/45 outline-none transition-colors focus:border-citron"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <MagneticButton className="w-full">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  data-cursor="SEND"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-citron px-6 py-4 font-mono text-xs font-semibold uppercase tracking-widest text-aubergine transition-transform hover:scale-[1.01] disabled:opacity-60"
                >
                  <Send className="h-4 w-4" />
                  <span>{status === "sending" ? "Sending..." : "Send Message"}</span>
                </button>
              </MagneticButton>

              {statusText && (
                <p
                  className={`text-center font-mono text-xs ${
                    status === "error" ? "text-papaya" : "text-citron"
                  }`}
                >
                  {statusText}
                </p>
              )}

              {status === "ready" && (
                <div className="grid gap-2 pt-1 sm:grid-cols-3">
                  <a
                    href={gmailUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-citron/40 bg-blackberry px-3 py-2.5 font-mono text-[11px] font-semibold text-citron transition-colors hover:bg-citron hover:text-aubergine"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span>Open Gmail</span>
                  </a>
                  <a
                    href={mailtoUrl}
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-lavender/30 bg-blackberry px-3 py-2.5 font-mono text-[11px] font-semibold text-porcelain transition-colors hover:border-lavender"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    <span>Mail App</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-papaya/35 bg-blackberry px-3 py-2.5 font-mono text-[11px] font-semibold text-papaya transition-colors hover:bg-papaya hover:text-aubergine"
                  >
                    {copiedMessage ? (
                      <>
                        <Check className="h-3.5 w-3.5" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy Text</span>
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
