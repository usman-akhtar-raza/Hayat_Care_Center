"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    relationship: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry! Our team will contact you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", relationship: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <span className="inline-block text-[var(--accent)] font-semibold text-sm uppercase tracking-wider mb-2">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Schedule Your Free Visit
            </h2>
            <p className="text-[var(--text-muted)] mb-8 leading-relaxed">
              We would love to show you around our center and discuss how we can
              support your family. Tours are available Monday through Friday.
            </p>

            <div className="space-y-5">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--secondary)] text-[var(--primary)] flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--foreground)]">Our Location</h3>
                  <p className="text-[var(--text-muted)] text-sm">123 Care Boulevard, Springfield, IL 62701</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--secondary)] text-[var(--primary)] flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--foreground)]">Phone</h3>
                  <p className="text-[var(--text-muted)] text-sm">
                    <a href="tel:+1234567890" className="hover:text-[var(--primary)] transition-colors">(123) 456-7890</a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--secondary)] text-[var(--primary)] flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--foreground)]">Email</h3>
                  <p className="text-[var(--text-muted)] text-sm">info@hayatcarecenter.com</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--secondary)] text-[var(--primary)] flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--foreground)]">Hours</h3>
                  <p className="text-[var(--text-muted)] text-sm">Monday - Friday: 7:00 AM - 6:00 PM</p>
                  <p className="text-[var(--text-muted)] text-sm">Saturday: By Appointment</p>
                </div>
              </div>
            </div>

            {/* Insurance accepted */}
            <div className="mt-8 p-4 rounded-xl bg-[var(--secondary)] border border-[var(--primary)]/10">
              <p className="text-sm font-semibold text-[var(--foreground)] mb-1">Insurance & Payment</p>
              <p className="text-xs text-[var(--text-muted)]">
                We accept Medicaid, Medicare, most major insurance plans, and private pay. Contact us for details about your specific coverage.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[var(--secondary)] rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">
              Request a Visit
            </h3>
            <p className="text-sm text-[var(--text-muted)] mb-6">
              Fill out the form below and we will reach out within 24 hours.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--foreground)] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent bg-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[var(--foreground)] mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent bg-white"
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)] mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent bg-white"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="relationship" className="block text-sm font-medium text-[var(--foreground)] mb-1">
                  Relationship to Member
                </label>
                <select
                  id="relationship"
                  value={formData.relationship}
                  onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent bg-white"
                >
                  <option value="">Select...</option>
                  <option value="self">Self</option>
                  <option value="child">Son/Daughter</option>
                  <option value="spouse">Spouse</option>
                  <option value="sibling">Sibling</option>
                  <option value="caregiver">Professional Caregiver</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--foreground)] mb-1">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent bg-white resize-none"
                  placeholder="Tell us about your loved one's needs..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[var(--accent)] text-white py-3.5 rounded-lg font-semibold hover:bg-[var(--accent-light)] transition-colors shadow-md"
              >
                Request a Free Visit
              </button>
              <p className="text-xs text-center text-[var(--text-muted)]">
                No obligation. We respect your privacy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
