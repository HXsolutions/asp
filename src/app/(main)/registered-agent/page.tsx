
'use client';

import { Button } from '@/components/ui/button';
import {
  ShieldCheck,
  Check,
  Star,
  Phone,
  Mail,
  MessageSquare,
  FileText,
  Building,
  Mailbox,
  Clock,
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import PageHeader from '@/components/page-header';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.5 },
};

const whyRegisteredAgent = [
    {
        icon: ShieldCheck,
        title: 'Meet Legal Requirements',
        description: 'Every US LLC and Corporation is legally required to have a registered agent in their state of formation.',
    },
    {
        icon: FileText,
        title: 'Receive Official Documents',
        description: 'The registered agent receives all official legal and tax documents on behalf of your business, including lawsuits and state notices.',
    },
    {
        icon: Mailbox,
        title: 'Privacy Protection',
        description: 'Using a registered agent service keeps your personal home address off the public record.',
    },
    {
        icon: Clock,
        title: 'Stay Compliant',
        description: 'Our service includes reminders for important filing deadlines to help you keep your business in good standing.',
    },
];

const serviceIncludes = [
  'Physical address in your state of formation',
  'Acceptance of legal and official documents',
  'Same-day scanning and email forwarding of all mail',
  'Online dashboard to access your documents 24/7',
  'Annual report and compliance deadline reminders',
  'Support from our compliance experts',
];

export default function RegisteredAgentPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section {...fadeIn} className="bg-card border-b pt-16">
        <div className="container mx-auto px-6 py-20 text-center">
          <PageHeader 
            title="Registered Agent Service"
            description="Fulfill your legal requirement for a registered agent in any US state. Our service provides a physical address and handles all your official mail."
          />
          <div className="flex justify-center gap-4 mt-8">
            <Button asChild size="lg" className="bg-[#E53935] text-white hover:bg-[#C62828] rounded-full">
              <Link href="#">Hire a Registered Agent</Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Why Section */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Why a Registered Agent is Essential</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {whyRegisteredAgent.map((point) => (
              <Card key={point.title} className="bg-transparent border-0 shadow-none">
                <CardHeader className="flex-row items-start gap-4 p-4">
                  <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center text-primary shrink-0">
                    <point.icon className="w-6 h-6" strokeWidth="1.5" />
                  </div>
                  <div>
                    <CardTitle>{point.title}</CardTitle>
                    <CardDescription className="mt-1">{point.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Service Section */}
      <motion.section {...fadeIn} className="py-24 bg-card border-y">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-bold font-headline text-foreground mb-4">Our Comprehensive Service</h2>
                <p className="text-muted-foreground mb-8">
                 We provide more than just an address. Our service ensures you are compliant and informed.
                </p>
                <ul className="space-y-3 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                {serviceIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 shrink-0 mt-1"/>
                        <span className="text-sm text-foreground">{item}</span>
                    </li>
                ))}
                </ul>
            </div>
            <Card className="bg-white p-8 rounded-lg shadow-lg border">
              <CardTitle className="text-2xl font-bold font-headline text-foreground mb-2">Registered Agent Service</CardTitle>
              <p className="text-5xl font-bold text-foreground mb-2">$149</p>
              <p className="text-muted-foreground mb-4">per year</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Available in all 50 US states. Free for the first year with our LLC formation packages.</p>
              </div>
              <Button asChild size="lg" className="w-full mt-6 bg-[#E53935] text-white hover:bg-[#C62828] rounded-full">
                  <Link href="#">Sign Up Now</Link>
              </Button>
          </Card>
        </div>
      </motion.section>
      
      {/* CTA Section */}
      <section id="contact" className="py-24 bg-white relative">
        <motion.div className="max-w-4xl mx-auto px-6 text-center" {...fadeIn}>
          <h2 className="text-4xl md:text-5xl font-semibold text-black tracking-tight mb-6">Stay Compliant and Protected</h2>
          <p className="text-lg text-neutral-500 mb-10">Sign up for our Registered Agent service today and get the peace of mind that comes with knowing your business's legal correspondence is in professional hands.</p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#E53935] text-white hover:bg-[#C62828] rounded-full">
                <Link href="#">Get Registered Agent Service</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
