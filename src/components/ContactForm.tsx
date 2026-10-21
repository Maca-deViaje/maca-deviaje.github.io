"use client";

import { CircleCheck, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/content/es";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { buttonClass } from "./Button";

type Fields = { name: string; company: string; email: string; type: string; budget: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;
type Status = "idle" | "sending" | "sent" | "mailto" | "error";

const field =
  "mt-2 block w-full rounded-md border border-arena-200 bg-white px-4 py-3 text-body text-tinta-900 placeholder:text-piedra-600/60 transition-colors duration-fast ease-warm focus:border-celeste-700 focus:outline-none focus:ring-2 focus:ring-celeste-300";
const label = "text-small text-tinta-900";

// Posts JSON to NEXT_PUBLIC_FORM_ENDPOINT (e.g. Formspree) when set.
// Without an endpoint it opens a pre-filled email, so the form works on any static host.
export function ContactForm({ t }: { t: Dictionary }) {
  const f = t.contact.form;
  const [values, setValues] = useState<Fields>({
    name: "",
    company: "",
    email: "",
    type: f.types[0],
    budget: f.budgets[0],
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const set = (key: keyof Fields) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const validate = (): Errors => {
    const e: Errors = {};
    if (!values.name.trim()) e.name = f.required;
    if (!values.company.trim()) e.company = f.required;
    if (!values.email.trim()) e.email = f.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) e.email = f.invalidEmail;
    if (!values.message.trim()) e.message = f.required;
    return e;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length) {
      document.getElementById(`cf-${Object.keys(found)[0]}`)?.focus();
      return;
    }

    if (!site.formEndpoint) {
      const body = [
        `${f.name}: ${values.name}`,
        `${f.company}: ${values.company}`,
        `${f.email}: ${values.email}`,
        `${f.typeLegend} ${values.type}`,
        `${f.budget}: ${values.budget}`,
        "",
        values.message,
      ].join("\n");
      const subject = `${f.subject} · ${values.company} (${values.type})`;
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus("mailto");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...values, locale: t.locale, _subject: `${f.subject} · ${values.company}` }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div role="status" className="flex flex-col items-start gap-3 py-10">
        <CircleCheck className="size-8 text-mate-600" strokeWidth={1.75} aria-hidden />
        <p className="font-display text-h3 font-semibold text-tinta-900">{f.success}</p>
      </div>
    );
  }

  const err = (key: keyof Fields) =>
    errors[key] ? (
      <p id={`cf-${key}-error`} className="mt-1.5 text-small text-rojo-700">
        {errors[key]}
      </p>
    ) : null;
  const aria = (key: keyof Fields) => ({
    id: `cf-${key}`,
    "aria-invalid": errors[key] ? true : undefined,
    "aria-describedby": errors[key] ? `cf-${key}-error` : undefined,
  });

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <fieldset className="sm:col-span-2">
        <legend className={label}>{f.typeLegend}</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {f.types.map((type) => (
            <label
              key={type}
              className={cn(
                "cursor-pointer rounded-full border px-4 py-2 text-small transition-colors duration-base ease-warm has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-celeste-700",
                values.type === type
                  ? "border-celeste-700 bg-celeste-100 text-nordsee-900"
                  : "border-arena-200 bg-white text-piedra-600 hover:border-celeste-300",
              )}
            >
              <input
                type="radio"
                name="type"
                value={type}
                checked={values.type === type}
                onChange={set("type")}
                className="sr-only"
              />
              {type}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="cf-name" className={label}>
          {f.name}
        </label>
        <input
          {...aria("name")}
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={set("name")}
          className={cn(field, errors.name && "border-rojo-700")}
        />
        {err("name")}
      </div>
      <div>
        <label htmlFor="cf-company" className={label}>
          {f.company}
        </label>
        <input
          {...aria("company")}
          name="company"
          autoComplete="organization"
          value={values.company}
          onChange={set("company")}
          className={cn(field, errors.company && "border-rojo-700")}
        />
        {err("company")}
      </div>
      <div>
        <label htmlFor="cf-email" className={label}>
          {f.email}
        </label>
        <input
          {...aria("email")}
          type="email"
          name="email"
          autoComplete="email"
          inputMode="email"
          value={values.email}
          onChange={set("email")}
          className={cn(field, errors.email && "border-rojo-700")}
        />
        {err("email")}
      </div>
      <div>
        <label htmlFor="cf-budget" className={label}>
          {f.budget}
        </label>
        <select
          id="cf-budget"
          name="budget"
          value={values.budget}
          onChange={set("budget")}
          className={cn(field, "select-chevron appearance-none pr-12")}
        >
          {f.budgets.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="cf-message" className={label}>
          {f.message}
        </label>
        <textarea
          {...aria("message")}
          name="message"
          rows={5}
          placeholder={f.messagePlaceholder}
          value={values.message}
          onChange={set("message")}
          className={cn(field, "resize-y", errors.message && "border-rojo-700")}
        />
        {err("message")}
      </div>

      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" disabled={status === "sending"} className={buttonClass("primary", "lg", "disabled:opacity-60")}>
          {status === "sending" ? f.sending : f.submit}
          <Send className="size-5" strokeWidth={1.75} aria-hidden />
        </button>
        <p role="status" className="text-small font-normal text-piedra-600">
          {status === "mailto" && f.mailtoNote}
          {status === "error" && (
            <span className="text-rojo-700">
              {f.error}{" "}
              <a className="link" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </span>
          )}
        </p>
      </div>
    </form>
  );
}
