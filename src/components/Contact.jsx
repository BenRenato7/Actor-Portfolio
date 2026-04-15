import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { actorInfo } from '../data/mock';
import { useToast } from '../hooks/use-toast';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // For now, open email client with pre-filled message
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:${actorInfo.email}?subject=${subject}&body=${body}`;
    
    setTimeout(() => {
      toast({
        title: "Opening Email Client",
        description: "Your default email app will open with the message pre-filled.",
      });
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            GET IN TOUCH
          </h2>
          <p className="text-slate-400 text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Let's collaborate on your next project
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3
                className="text-2xl font-bold text-white mb-6"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                CONTACT INFORMATION
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-rose-700 rounded-lg">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>Email</p>
                    <p className="text-white font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {actorInfo.email}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-rose-700 rounded-lg">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>Phone</p>
                    <p className="text-white font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {actorInfo.phone}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-rose-700 rounded-lg">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>Location</p>
                    <p className="text-white font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {actorInfo.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3
                className="text-2xl font-bold text-white mb-6"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                FIND ME ON
              </h3>
              <div className="space-y-3">
                {actorInfo.websites.map((site, index) => (
                  <a
                    key={index}
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-slate-300 hover:text-rose-400 transition-colors duration-300"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {site.name} →
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-950 p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-slate-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 bg-slate-900 border-slate-800 text-white focus:border-rose-700"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-slate-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 bg-slate-900 border-slate-800 text-white focus:border-rose-700"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-slate-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Phone
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2 bg-slate-900 border-slate-800 text-white focus:border-rose-700"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                />
              </div>
              <div>
                <Label htmlFor="subject" className="text-slate-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Subject *
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-2 bg-slate-900 border-slate-800 text-white focus:border-rose-700"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-slate-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 bg-slate-900 border-slate-800 text-white focus:border-rose-700"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-rose-700 hover:bg-rose-600 text-white font-semibold py-6 rounded-md transition-all duration-300 transform hover:scale-105"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send size={20} />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;