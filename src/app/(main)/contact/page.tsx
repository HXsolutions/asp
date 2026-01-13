
'use client';

import React from 'react';
import PageHeader from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Mail, Phone, MessageSquare, ShieldCheck, Check } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.5 },
};

const contactOptions = [
  { icon: Phone, title: 'Call Us', detail: '+1 (346) 380-4251', availability: '24/7', bestFor: 'Urgent questions, complex issues, immediate assistance.', ctaText: 'Call Now', ctaLink: 'tel:+13463804251' },
  { icon: MessageSquare, title: 'WhatsApp Support', detail: '+1 (346) 380-4251', availability: '24/7', bestFor: 'Quick questions, document sharing, international clients.', ctaText: 'Message on WhatsApp', ctaLink: 'https://wa.me/13463804251' },
  { icon: Mail, title: 'Email Us', detail: 'support@amazonsolutionspro.com', availability: '24-hour response', bestFor: 'Detailed inquiries, document review, non-urgent matters.', ctaText: 'Send Email', ctaLink: 'mailto:support@amazonsolutionspro.com' },
];

export default function ContactPage() {
  return (
    <div className="bg-white pt-16">
      <div className="pt-16">
        <motion.div {...fadeIn}>
          <PageHeader
            title="Get in Touch with Amazon Solutions Pro"
            description="Have questions about our services? Need help with your Amazon business? Contact us anytime - our experts are ready to assist you."
          />
          <div className="container mx-auto px-4 py-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-lg shadow-red-500/20">
                  <Link href="#contact-form">Start Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white text-black border-neutral-300 rounded-full">
                  <Link href="/faq">Browse FAQ First</Link>
              </Button>
          </div>
        </motion.div>
      </div>

      <motion.section {...fadeIn} className="py-16 md:py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Choose How to Reach Us</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactOptions.map((option) => (
              <Card key={option.title} className="text-center flex flex-col">
                <CardHeader>
                  <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                    <option.icon className="w-8 h-8" strokeWidth="1.5" />
                  </div>
                  <CardTitle className="font-headline">{option.title}</CardTitle>
                  <CardDescription>{option.detail}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">{option.bestFor}</p>
                </CardContent>
                <CardContent>
                    <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href={option.ctaLink}>{option.ctaText}</Link>
                    </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeIn} id="contact-form" className="py-16 md:py-24">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                <h2 className="text-3xl font-bold font-headline text-foreground">Send Us a Message</h2>
                <p className="text-muted-foreground mt-2">Get a free consultation by filling out the form below.</p>
            </div>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-6 md:p-8">
              <form className="space-y-8">
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Your Information</h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div><Label htmlFor="fullName">Full Name*</Label><Input id="fullName" /></div>
                        <div><Label htmlFor="email">Email Address*</Label><Input id="email" type="email" /></div>
                        <div><Label htmlFor="phone">Phone Number</Label><Input id="phone" /></div>
                        <div><Label htmlFor="country">Country</Label><Input id="country" /></div>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Business Information</h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div><Label htmlFor="businessName">Business Name</Label><Input id="businessName" /></div>
                        <div><Label htmlFor="website">Website</Label><Input id="website" /></div>
                         <Select>
                            <SelectTrigger><SelectValue placeholder="Business Stage" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="idea">Idea</SelectItem>
                                <SelectItem value="planning">Planning</SelectItem>
                                <SelectItem value="started">Started</SelectItem>
                                <SelectItem value="operating">Operating</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger><SelectValue placeholder="Current Revenue" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="none">None</SelectItem>
                                <SelectItem value="<10k">Under $10K</SelectItem>
                                <SelectItem value="10-100k">$10K - $100K</SelectItem>
                                <SelectItem value=">100k">Over $100K</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Service Interest</h3>
                     <div className="grid sm:grid-cols-2 gap-6">
                         <Select>
                            <SelectTrigger><SelectValue placeholder="Specific Service Needed" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="llc">USA LLC Formation</SelectItem>
                                <SelectItem value="uk">UK Company Formation</SelectItem>
                                <SelectItem value="trademark">Trademark Registration</SelectItem>
                                <SelectItem value="amazon">Amazon Account Setup</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger><SelectValue placeholder="Budget Range" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="<1k">Under $1K</SelectItem>
                                <SelectItem value="1-5k">$1K - $5K</SelectItem>
                                <SelectItem value="5-10k">$5K - $10K</SelectItem>
                                <SelectItem value=">10k">Over $10K</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Your Message</h3>
                    <div>
                        <Label htmlFor="message">How can we help you?*</Label>
                        <Textarea id="message" className="min-h-[120px]" />
                    </div>
                    <div className="items-top flex space-x-2">
                        <Checkbox id="terms" />
                        <div className="grid gap-1.5 leading-none">
                            <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            I agree to Terms & Privacy Policy*
                            </label>
                        </div>
                    </div>
                    <div className="items-top flex space-x-2">
                        <Checkbox id="newsletter" />
                        <div className="grid gap-1.5 leading-none">
                            <label htmlFor="newsletter" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Yes, send me updates
                            </label>
                        </div>
                    </div>
                </div>

                <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Send Message</Button>
                <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-2"><ShieldCheck className="h-4 w-4" /> Your information is encrypted and secure.</p>
              </form>
            </CardContent>
          </Card>
        </div>
      </motion.section>
      
       <motion.section {...fadeIn} className="py-16 md:py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Book a Free Consultation</h2>
            <p className="text-muted-foreground mt-2">No obligation, no pressure - just expert advice. Schedule your free 30-minute call now.</p>
          </div>
          <Card className="max-w-4xl mx-auto">
             <div className="p-6 md:p-8">
                <h3 className="font-semibold text-lg mb-4">What to expect:</h3>
                <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><Check className="text-green-500 w-5 h-5 mt-1 shrink-0" /><span>Discuss your business goals and current situation.</span></li>
                    <li className="flex items-start gap-2"><Check className="text-green-500 w-5 h-5 mt-1 shrink-0" /><span>Explore the best service options for your needs.</span></li>
                    <li className="flex items-start gap-2"><Check className="text-green-500 w-5 h-5 mt-1 shrink-0" /><span>Clarify timeline and pricing.</span></li>
                    <li className="flex items-start gap-2"><Check className="text-green-500 w-5 h-5 mt-1 shrink-0" /><span>Get answers to all your questions.</span></li>
                </ul>
            </div>
             <div className="p-6 md:p-8 border-t">
                <Button asChild size="lg" className="w-full">
                    <Link href="/schedule-call">Schedule Free Consultation</Link>
                </Button>
             </div>
          </Card>
        </div>
      </motion.section>
    </div>
  );
}
