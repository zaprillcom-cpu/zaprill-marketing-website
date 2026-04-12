"use client";

import type { FormEvent } from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
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
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

    if (!endpoint) {
      setStatus("error");
      setMessage(
        "Formspree endpoint is not configured yet. Add NEXT_PUBLIC_FORMSPREE_ENDPOINT to enable submissions."
      );
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

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      setMessage("Thanks for reaching out. We’ll get back to you within 24 hours on business days.");
      setForm(initialState);
    } catch {
      setStatus("error");
      setMessage("We couldn’t send your message right now. Please try again in a moment.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-border bg-white p-8 shadow-card"
    >
      <div className="space-y-2">
        <label htmlFor="name" className="label block">
          Name
        </label>
        <Input
          id="name"
          value={form.name}
          onChange={(event) =>
            setForm((current) => ({ ...current, name: event.target.value }))
          }
          placeholder="Your name"
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="label block">
          Email
        </label>
        <Input
          id="email"
          type="email"
          value={form.email}
          onChange={(event) =>
            setForm((current) => ({ ...current, email: event.target.value }))
          }
          placeholder="you@company.com"
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="subject" className="label block">
          Subject
        </label>
        <Select
          id="subject"
          value={form.subject}
          onChange={(event) =>
            setForm((current) => ({ ...current, subject: event.target.value }))
          }
        >
          <option>General Inquiry</option>
          <option>Support</option>
          <option>Partnership</option>
          <option>Press</option>
          <option>Other</option>
        </Select>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="label block">
          Message
        </label>
        <Textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(event) =>
            setForm((current) => ({ ...current, message: event.target.value }))
          }
          placeholder="Tell us how we can help."
          required
        />
      </div>
      {status === "success" ? (
        <div className="rounded-md border border-accent-green bg-[#F0FDF4] px-4 py-3 text-sm text-accent-greenDark">
          {message}
        </div>
      ) : null}
      {status === "error" ? (
        <div className="rounded-md border border-error bg-[#FEF2F2] px-4 py-3 text-sm text-error">
          {message}
        </div>
      ) : null}
      <Button type="submit" size="full" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
