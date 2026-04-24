"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

type FormState = {
  name: string;
  email: string;
  subject: string;
  otherSubject: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  subject: "General Inquiry",
  otherSubject: "",
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
        body: JSON.stringify({
          ...form,
          subject: form.subject === "Other" ? form.otherSubject : form.subject
        })
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
        <Select 
          value={form.subject} 
          onValueChange={(val) => setForm(f => ({ ...f, subject: val }))}
        >
          <SelectTrigger className="h-12 w-full rounded-xl bg-muted/30 border-border/50 focus:bg-background transition-all">
            <SelectValue placeholder="Select a subject" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="General Inquiry">General Inquiry</SelectItem>
            <SelectItem value="Support">Support</SelectItem>
            <SelectItem value="Partnership">Partnership</SelectItem>
            <SelectItem value="Press">Press</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>

        {form.subject === "Other" && (
          <div className="mt-3 animate-in fade-in slide-in-from-top-2 duration-300">
            <Input
              placeholder="Please specify your subject..."
              value={form.otherSubject}
              onChange={(e) => setForm(f => ({ ...f, otherSubject: e.target.value }))}
              className="h-12 rounded-xl bg-muted/30 border-border/50 focus:bg-background transition-all"
              required
            />
          </div>
        )}
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
          className="rounded-xl bg-muted/30 border-border/50 focus:bg-background transition-all resize-none max-h-48 overflow-y-auto [field-sizing:fixed]"
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
