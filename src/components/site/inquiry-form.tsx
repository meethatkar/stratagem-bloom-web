import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type FieldErrors = Partial<Record<"name" | "email" | "phone" | "service" | "message", string>>;

export function InquiryForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const next: FieldErrors = {};
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const service = String(form.get("service") ?? "");
    const message = String(form.get("message") ?? "").trim();
    if (name.length < 2) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Enter a valid work email.";
    if (!/^[+\d][\d\s-]{7,}$/.test(phone)) next.phone = "Enter a valid phone number.";
    if (!service) next.service = "Select a service.";
    if (message.length < 10) next.message = "Tell us a little more about your brief.";
    setErrors(next);
    setSubmitted(Object.keys(next).length === 0);
  }

  if (submitted) return <div className="flex min-h-[380px] flex-col items-start justify-center border-t border-foreground/20"><span className="grid size-12 place-items-center bg-accent text-accent-foreground"><Check /></span><h3 className="mt-7 font-display text-4xl">Your brief is ready.</h3><p className="mt-4 max-w-md leading-7 text-muted-foreground">This preview has validated your inquiry. Secure delivery to the Eon Media team will be connected in the next integration phase.</p><Button variant="outlinePremium" className="mt-8" onClick={() => setSubmitted(false)}>Send another inquiry</Button></div>;

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-x-6 gap-y-7 md:grid-cols-2">
      <Field id="name" label="Name" error={errors.name}><Input id="name" name="name" autoComplete="name" placeholder="Your full name" aria-invalid={Boolean(errors.name)} /></Field>
      <Field id="email" label="Work Email" error={errors.email}><Input id="email" name="email" type="email" autoComplete="email" placeholder="name@company.com" aria-invalid={Boolean(errors.email)} /></Field>
      <Field id="phone" label="Phone" error={errors.phone}><Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+91" aria-invalid={Boolean(errors.phone)} /></Field>
      <Field id="service" label="Service Required" error={errors.service}><select id="service" name="service" defaultValue="" aria-invalid={Boolean(errors.service)} className="form-control"><option value="" disabled>Select a capability</option><option>Event Management & Production</option><option>Real Estate Activations</option><option>PR & Corporate Communications</option><option>Creative Design & Branding</option><option>Advertising & Digital Marketing</option><option>Management Consultancy</option></select></Field>
      <Field id="message" label="Tell us about the brief" error={errors.message} wide><Textarea id="message" name="message" rows={5} placeholder="Objectives, audience, timelines and location" aria-invalid={Boolean(errors.message)} /></Field>
      <div className="md:col-span-2"><Button type="submit" variant="premium" size="xl">Request a Quote <ArrowRight /></Button></div>
    </form>
  );
}

function Field({ id, label, error, wide, children }: { id: string; label: string; error?: string; wide?: boolean; children: React.ReactNode }) {
  return <div className={wide ? "md:col-span-2" : ""}><Label htmlFor={id}>{label}</Label><div className="mt-2">{children}</div>{error && <p className="mt-2 text-xs text-destructive" role="alert">{error}</p>}</div>;
}
