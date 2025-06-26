'use client';

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
    <Card className="shadow-xl border border-blue-100 bg-white">
      <CardContent className="p-8">
        <div className="max-w-2xl mx-auto space-y-6 text-blue-900">
          <h1 className="text-3xl font-bold text-center text-red-600">Contact Us</h1>
          <p className="text-center text-gray-600">We’re here to help. Reach out with your questions or service needs.</p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="bg-gray-50 border-blue-200 focus-visible:ring-blue-500"
            />
            <Input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="bg-gray-50 border-blue-200 focus-visible:ring-blue-500"
            />
            <Textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows={5}
              className="bg-gray-50 border-blue-200 focus-visible:ring-blue-500"
            />
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6 font-semibold"
            >
              Send Message
            </Button>
            {status && <p className="text-sm text-center text-gray-500">{status}</p>}
          </form>
        </div>
      </CardContent>
    </Card>
  );
}
