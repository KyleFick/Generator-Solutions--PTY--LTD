'use client';

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
      toast.success("Message sent successfully!");
      setStatus("Message sent ✅");
      setForm({ name: "", email: "", message: "" });
    } else {
      toast.error("Failed to send. Please try again.");
      setStatus("Failed to send ❌");
    }
  };

  return (
      <div className="flex justify-center items-center min-h-[80vh] p-4 bg-gradient-to-br from-blue-50 via-white to-red-50">
        <Card className="w-full max-w-2xl rounded-2xl shadow-2xl border border-blue-100 backdrop-blur-md bg-white/70">
          <CardContent className="p-8">
            <div className="space-y-6 text-blue-900">
              <h1 className="text-4xl font-extrabold text-center text-red-600">Contact Us</h1>
              <p className="text-center text-gray-600 text-lg">
                We'd love to hear from you. Fill out the form and we’ll get back to you shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <Input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="bg-white border-blue-200 focus-visible:ring-blue-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <Input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="bg-white border-blue-200 focus-visible:ring-blue-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <Textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Type your message here..."
                      required
                      rows={6}
                      className="bg-white border-blue-200 focus-visible:ring-blue-500 transition-all"
                  />
                </div>

                <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6 font-semibold rounded-xl transition"
                >
                  Send Message
                </Button>

                {status && (
                    <p className="text-sm text-center text-gray-500 mt-2">{status}</p>
                )}
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
  );
}
