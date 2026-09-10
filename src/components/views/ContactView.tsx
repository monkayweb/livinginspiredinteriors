"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { site } from "@/content/site";
import PageHeader from "@/components/PageHeader";
import LocalTime from "@/components/LocalTime";
import Magnetic from "@/components/Magnetic";
import { AnimatedRule, FadeIn } from "@/components/Reveal";
import { EASE_OUT_EXPO } from "@/lib/motion";

const SCOPES = [
  "Full home",
  "Single room",
  "New build",
  "Renovation",
  "Commercial",
  "Furniture only",
];

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  required,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  textarea?: boolean;
}) {
  const [focus, setFocus] = useState(false);
  const shared = {
    id: name,
    name,
    value,
    required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      onChange(e.target.value),
    className:
      "w-full bg-transparent pb-3 pt-2 t-body outline-none placeholder:opacity-30",
  };

  return (
    <div className="relative">
      <label htmlFor={name} className="t-small block opacity-40">
        {label}
      </label>
      {textarea ? (
        <textarea {...shared} rows={4} />
      ) : (
        <input {...shared} type={type} />
      )}
      <span className="block h-px w-full bg-current opacity-20" />
      <motion.span
        className="absolute bottom-0 left-0 block h-px w-full origin-left bg-current"
        animate={{ scaleX: focus || value ? 1 : 0 }}
        transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
      />
    </div>
  );
}

export default function ContactView() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [scope, setScope] = useState<string[]>([]);
  const [sent, setSent] = useState(false);

  const toggleScope = (s: string) =>
    setScope((cur) =>
      cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]
    );

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Location: ${location || "Not given"}`,
      `Scope: ${scope.length ? scope.join(", ") : "Not given"}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `New enquiry from ${name || "the website"}`
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Start a"
        italicTail="project."
        lead="Tell us about the space, how you want to live in it and when you would like to be in. We take on a small number of projects each year so that every one gets the studio's full attention."
      />

      <section data-surface="light" className="bg-paper text-ink py-20 md:py-32">
        <div className="shell grid gap-16 md:grid-cols-12 md:gap-10">
          {/* Form ---------------------------------------------------- */}
          <div className="md:col-span-7">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
                  className="flex flex-col gap-6 border border-current/20 p-10"
                >
                  <h2 className="display t-lg">Thank you.</h2>
                  <p className="t-body max-w-[42ch] opacity-65">
                    Your email client should have opened with the enquiry ready
                    to send. If nothing happened, write to us directly at{" "}
                    <a
                      href={`mailto:${site.email}`}
                      className="link-underline [overflow-wrap:anywhere]"
                      data-cursor
                    >
                      {site.email}
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    data-cursor
                    className="link-underline t-body w-fit"
                  >
                    Write another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={submit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col gap-10"
                >
                  <div className="grid gap-10 md:grid-cols-2">
                    <Field
                      label="Your name"
                      name="name"
                      value={name}
                      onChange={setName}
                      required
                    />
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={setEmail}
                      required
                    />
                  </div>

                  <Field
                    label="Where is the project"
                    name="location"
                    value={location}
                    onChange={setLocation}
                  />

                  <div className="flex flex-col gap-4">
                    <span className="t-small opacity-40">Scope</span>
                    <div className="flex flex-wrap gap-3">
                      {SCOPES.map((s) => {
                        const on = scope.includes(s);
                        return (
                          <button
                            key={s}
                            type="button"
                            onClick={() => toggleScope(s)}
                            data-cursor
                            className={`border px-4 py-2 t-small transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                              on
                                ? "border-current bg-ink text-paper"
                                : "border-current/25 opacity-60 hover:opacity-100"
                            }`}
                          >
                            {s}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <Field
                    label="Tell us about it"
                    name="message"
                    value={message}
                    onChange={setMessage}
                    textarea
                    required
                  />

                  <Magnetic strength={0.25} className="w-fit">
                    <button
                      type="submit"
                      data-cursor
                      data-cursor-label="Send"
                      className="group inline-flex items-center gap-4 border border-current/30 px-8 py-4 transition-colors duration-500 hover:border-current"
                    >
                      <span className="t-body">Send enquiry</span>
                      <span className="block h-px w-8 origin-left bg-current transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-150" />
                    </button>
                  </Magnetic>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Details ------------------------------------------------- */}
          <div className="flex flex-col gap-10 md:col-span-4 md:col-start-9">
            <FadeIn>
              <div className="flex flex-col gap-4">
                <AnimatedRule />
                <span className="t-small pt-2 opacity-40">Studio</span>
                <address className="t-body not-italic leading-relaxed">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.postal}
                  <br />
                  {site.address.country}
                </address>
              </div>
            </FadeIn>

            <FadeIn delay={0.06}>
              <div className="flex flex-col gap-4">
                <AnimatedRule />
                <span className="t-small pt-2 opacity-40">Direct</span>
                <a
                  href={`mailto:${site.email}`}
                  className="link-underline t-body w-fit max-w-full [overflow-wrap:anywhere]"
                  data-cursor
                >
                  {site.email}
                </a>
                <a
                  href={site.instagram.url}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline t-body w-fit"
                  data-cursor
                >
                  {site.instagram.handle}
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="flex flex-col gap-4">
                <AnimatedRule />
                <span className="t-small pt-2 opacity-40">Hours</span>
                <p className="t-body opacity-70">
                  Monday to Friday, 09:00 to 17:00 SAST
                </p>
                <p className="t-small opacity-50">
                  Local time <LocalTime />
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.18}>
              <div className="flex flex-col gap-4">
                <AnimatedRule />
                <span className="t-small pt-2 opacity-40">Working with us</span>
                <p className="t-body opacity-70">
                  We work across South Africa and internationally on private
                  residences, estates and commercial interiors, from full
                  turnkey delivery to bespoke furniture and joinery alone.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
