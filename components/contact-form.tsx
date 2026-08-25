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
  subject: "General question",
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
      <div className="border-l-2 border-signal py-2 pl-5" role="status">
        <div className="mb-4 flex size-10 items-center justify-center rounded-md bg-accent text-signal">
          <CheckCircle2 className="size-5" aria-hidden="true" />
        </div>
        <h3 className="text-2xl">Message received</h3>
        <p className="mt-2 max-w-md">
          Thanks for reaching out. A member of the team will reply within one
          business day.
        </p>
        <Button 
          variant="outline" 
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" aria-busy={status === "loading"}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-semibold text-foreground">
            Full name
          </label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
            className="h-11"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-semibold text-foreground">
            Email address
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
            className="h-11"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-semibold text-foreground">
          Subject
        </label>
        <Select 
          value={form.subject} 
          onValueChange={(val) => setForm(f => ({ ...f, subject: val || "" }))}
        >
          <SelectTrigger id="subject" className="h-11 w-full">
            <SelectValue placeholder="Select a subject" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="General question">General question</SelectItem>
            <SelectItem value="Account support">Account support</SelectItem>
            <SelectItem value="Partnership">Partnership</SelectItem>
            <SelectItem value="Press request">Press request</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>

        {form.subject === "Other" && (
          <div className="mt-3">
            <label htmlFor="other-subject" className="sr-only">
              Specify the subject
            </label>
            <Input
              id="other-subject"
              name="otherSubject"
              placeholder="Specify the subject"
              value={form.otherSubject}
              onChange={(e) => setForm(f => ({ ...f, otherSubject: e.target.value }))}
              className="h-11"
              required
            />
          </div>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-semibold text-foreground">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Describe your question and include any useful context."
          value={form.message}
          onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))}
          className="min-h-36 resize-y"
          required
        />
      </div>

      {status === "error" && (
        <div className="flex items-start gap-3 rounded-md border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive" role="alert">
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <p className="text-destructive">{feedbackMessage}</p>
        </div>
      )}

      <Button 
        type="submit" 
        className="h-11 w-full"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          "Send message"
        )}
      </Button>
    </form>
  );
}
