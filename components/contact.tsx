"use client";

import React from "react"

import { MapPin, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-6">
            Contact
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-foreground text-balance mx-auto">
            {"Let's work together. Feel free to reach out."}
          </p>
        </div>

        <div className="p-8 md:p-12 rounded-3xl bg-[#1c203a]/40 border border-white/5 shadow-2xl relative overflow-hidden group hover:border-[#6387f2]/20 transition-all duration-500">
          {/* Decorative background element */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#6387f2]/5 rounded-full blur-3xl group-hover:bg-[#6387f2]/10 transition-colors" />

          <div className="grid md:grid-cols-2 gap-12 items-start relative z-10">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Contact Information
                </h3>
                <p className="text-sm text-muted-foreground">
                  I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-center gap-4 text-muted-foreground group/item">
                  <div className="p-3 rounded-xl bg-[#6387f2]/10 text-[#6387f2] border border-[#6387f2]/20 group-hover/item:bg-[#6387f2] group-hover/item:text-white transition-all duration-300">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium">Addis Ababa, Ethiopia</span>
                </div>

                <a
                  href="mailto:ermiastsegu@yahoo.com"
                  className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors group/item"
                >
                  <div className="p-3 rounded-xl bg-[#6387f2]/10 text-[#6387f2] border border-[#6387f2]/20 group-hover/item:bg-[#6387f2] group-hover/item:text-white transition-all duration-300">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium">ermiastsegu@yahoo.com</span>
                </a>

                <a
                  href="mailto:yetabalij@gmail.com"
                  className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors group/item"
                >
                  <div className="p-3 rounded-xl bg-[#6387f2]/10 text-[#6387f2] border border-[#6387f2]/20 group-hover/item:bg-[#6387f2] group-hover/item:text-white transition-all duration-300">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium">yetabalij@gmail.com</span>
                </a>

                <a
                  href="tel:+251910640691"
                  className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors group/item"
                >
                  <div className="p-3 rounded-xl bg-[#6387f2]/10 text-[#6387f2] border border-[#6387f2]/20 group-hover/item:bg-[#6387f2] group-hover/item:text-white transition-all duration-300">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium">+251 910 640 691</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/5 shadow-inner">
              <h3 className="text-lg font-semibold text-white mb-6">
                Send a Message
              </h3>

              {submitted ? (
                <div className="text-center py-10">
                  <div className="p-4 rounded-full bg-[#6387f2]/20 w-fit mx-auto mb-4 border border-[#6387f2]/30">
                    <Send className="h-8 w-8 text-[#6387f2] animate-pulse" />
                  </div>
                  <p className="text-white font-bold text-lg">
                    Message Sent!
                  </p>
                  <p className="text-muted-foreground text-sm mt-2">
                    Thank you for reaching out. I'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white text-sm font-medium">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Ermias Tsegu"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-[#0f111a] border-white/10 text-white placeholder:text-muted-foreground focus:border-[#6387f2]/50 transition-all h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white text-sm font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-[#0f111a] border-white/10 text-white placeholder:text-muted-foreground focus:border-[#6387f2]/50 transition-all h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white text-sm font-medium">
                      Your Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Type your message here..."
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-[#0f111a] border-white/10 text-white placeholder:text-muted-foreground focus:border-[#6387f2]/50 transition-all resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#6387f2] hover:bg-[#6387f2]/90 text-white font-bold h-12 shadow-lg shadow-[#6387f2]/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending Message...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
