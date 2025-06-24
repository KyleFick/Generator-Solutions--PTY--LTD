'use client';

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { PhoneCall, Clock3, Reply } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function QuotePage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (value: string) => {
    setForm({ ...form, service: value });
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
      setStatus("Quote request sent!");
      setForm({ name: "", email: "", service: "", message: "" });
    } else {
      setStatus("Failed to send. Please try again.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left Content */}
        <div>
          <h5 className="text-red-600 uppercase font-bold text-sm tracking-widest">Request A Quote</h5>
          <h1 className="text-4xl font-bold mb-4">Need A Free Quote? Please Feel Free to Contact Us</h1>

          <div className="flex flex-col md:flex-row gap-6 my-6">
            <div className="flex items-center gap-3">
              <Reply className="text-blue-600" />
              <h5 className="text-lg">Reply within 24 hours</h5>
            </div>
            <div className="flex items-center gap-3">
              <Clock3 className="text-blue-600" />
              <h5 className="text-lg">24/7 Telephone Support</h5>
            </div>
          </div>

          <p className="mb-6 text-blue-900">
            Get in touch with us today for a personalized quote! Our team is available 24/7 to provide you with the best solutions and support. Call us now and discover how we can meet your generator and solar needs.
          </p>

          <div className="flex items-center gap-4 bg-blue-900 text-white rounded-xl p-6 shadow-lg">
            <div className="bg-red-600 p-3 rounded-full">
              <PhoneCall />
            </div>
            <div>
              <h5 className="text-lg">Call to ask any question</h5>
              <h4 className="text-xl font-bold">+27 73 653 4344</h4>
            </div>
          </div>
        </div>

        {/* Quote Form */}
        <form onSubmit={handleSubmit} className="bg-blue-600 text-white rounded-xl p-8 shadow-xl space-y-6">
          <div className="space-y-4">
            <Input
              name="name"
              placeholder="Your Name"
              className="bg-white text-black"
              value={form.name}
              onChange={handleChange}
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="Your Email"
              className="bg-white text-black"
              value={form.email}
              onChange={handleChange}
              required
            />
            <Select onValueChange={handleServiceChange} required>
              <SelectTrigger className="bg-white text-black">
                <SelectValue placeholder="Select a Service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Generator Installation">Generator Installation</SelectItem>
                <SelectItem value="Solar System Installation">Solar System Installation</SelectItem>
                <SelectItem value="Routine Maintenance">Routine Maintenance</SelectItem>
                <SelectItem value="Emergency Repairs">Emergency Repairs</SelectItem>
                <SelectItem value="System Upgrades">System Upgrades</SelectItem>
              </SelectContent>
            </Select>
            <Textarea
              name="message"
              rows={4}
              placeholder="Message"
              className="bg-white text-black"
              value={form.message}
              onChange={handleChange}
              required
            />
            <Button type="submit" className="bg-white text-blue-900 hover:bg-blue-200 w-full text-lg">
              Request A Quote
            </Button>
            {status && <p className="text-sm text-white mt-2">{status}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}
