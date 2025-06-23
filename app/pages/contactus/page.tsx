'use client';

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      setStatus("Message sent!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send. Try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />
        <Input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Your Email" required />
        <Textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" required rows={5} />
        <Button type="submit" className="bg-blue-600 text-white">Send Message</Button>
        <p className="text-sm text-gray-600">{status}</p>
      </form>
    </div>
  );
}
