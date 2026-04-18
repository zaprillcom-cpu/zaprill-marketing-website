"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  subject: "General Inquiry",
  message: ""
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [feedbackMessage, setFeedbackMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFeedbackMessage("");

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

    if (!endpoint) {
      setTimeout(() => {
        setStatus("error");
        setFeedbackMessage(
          "Form submission is not configured. Please contact support via email."
        );
      }, 800);
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(form)
      });

      if (!response.ok) throw new Error("Submission failed");

      setStatus("success");
      setFeedbackMessage("Message sent! We'll get back to you soon.");
      setForm(initialState);
    } catch {
      setStatus("error");
      setFeedbackMessage("Something went wrong. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="text-2xl font-bold text-foreground">Message Received</h3>
        <p className="mt-2 max-w-[280px] text-muted-foreground">
          Thanks for reaching out! One of our team members will be in touch within 24 hours.
        </p>
        <Button 
          variant="outline" 
          className="mt-8 rounded-full px-8" 
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2.5">
          <label htmlFor="name" className="text-[13px] font-bold uppercase tracking-widest text-muted-foreground ml-1">
            Full Name
          </label>
          <Input
            id="name"
            placeholder="John Doe"
            value={form.name}
            onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
            className="h-12 rounded-xl bg-muted/30 border-border/50 focus:bg-background transition-all"
            required
          />
        </div>
        <div className="space-y-2.5">
          <label htmlFor="email" className="text-[13px] font-bold uppercase tracking-widest text-muted-foreground ml-1">
            Email Address
          </label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            value={form.email}
            onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
            className="h-12 rounded-xl bg-muted/30 border-border/50 focus:bg-background transition-all"
            required
          />
        </div>
      </div>

      <div className="space-y-2.5">
        <label htmlFor="subject" className="text-[13px] font-bold uppercase tracking-widest text-muted-foreground ml-1">
          Subject
        </label>
        <div className="relative">
          <select
            id="subject"
            value={form.subject}
            onChange={(e) => setForm(f => ({ ...f, subject: e.target.value }))}
            className="flex h-12 w-full items-center justify-between rounded-xl border border-border/50 bg-muted/30 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none"
            required
          >
            <option>General Inquiry</option>
            <option>Support</option>
            <option>Partnership</option>
            <option>Press</option>
            <option>Other</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted-foreground">
            <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="space-y-2.5">
        <label htmlFor="message" className="text-[13px] font-bold uppercase tracking-widest text-muted-foreground ml-1">
          How can we help?
        </label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Tell us about what's on your mind..."
          value={form.message}
          onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))}
          className="rounded-xl bg-muted/30 border-border/50 focus:bg-background transition-all resize-none"
          required
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-3 rounded-xl border border-destructive/20 bg-destructive/5 p-4 text-sm text-destructive animate-in fade-in slide-in-from-top-2">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <p>{feedbackMessage}</p>
        </div>
      )}

      <Button 
        type="submit" 
        className="h-14 w-full rounded-xl text-base font-bold transition-all hover:translate-y-[-2px] active:translate-y-0" 
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
