
'use client';

import { Button } from '@/components/ui/button';
import {
  Mailbox,
  Check,
  Building,
  Phone,
  Mail,
  Scan,
  Globe,
  Briefcase,
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

const virtualOfficeBenefits = [
    {
        icon: Building,
        title: 'Prestigious Business Address',
        description: 'Establish a professional presence with a prestigious business address in key locations like Wyoming, Delaware, London, or Toronto.',
    },
    {
        icon: Mailbox,
        title: 'Mail Handling & Scanning',
        description: 'We receive, scan, and securely upload your business mail to a digital portal, accessible to you anywhere in the world.',
    },
    {
        icon: Briefcase,
        title: 'Business Credibility',
        description: 'A professional address enhances your brand image with customers, suppliers, banks, and Amazon.',
    },
    {
        icon: Globe,
        title: 'Global Accessibility',
        description: 'Manage your business mail and maintain a professional presence from anywhere, without the need for a physical office.',
    },
];

const serviceIncludes = [
  'A unique physical street address (not a P.O. Box)',
  'Receipt of all business and legal mail',
  'Same-day scanning of mail contents',
  'Secure online portal for mail access',
  'Email notifications for new mail',
  'Junk mail filtering',
];

const processSteps = [
    { number: 1, title: 'Choose Your Location', description: 'Select a virtual office address in the USA, UK, or Canada that best suits your business needs.' },
    { number: 2, title: 'Complete Setup', description: 'We complete the simple setup process and provide you with your new professional business address.'},
    { number: 3, title: 'Mail is Received & Scanned', description: 'We receive all your business mail, scan the contents, and upload it to your secure online portal.' },
    { number: 4, title: 'Access Mail Anywhere', description: 'You receive an email notification and can log in to view, download, or request physical forwarding of your mail.' },
];

export default function VirtualOfficePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section {...fadeIn} className="bg-card border-b pt-16">
        <div className="container mx-auto px-6 py-20 text-center">
          <PageHeader 
            title="Virtual Office & Mail Forwarding"
            description="Establish a professional business address with our virtual office and mail handling services, available in the USA, UK, and Canada."
          />
          <div className="flex justify-center gap-4 mt-8">
            <Button asChild size="lg" className="bg-[#E53935] text-white hover:bg-[#C62828] rounded-full">
              <Link href="/contact">Get My Virtual Address</Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Benefits of a Virtual Office</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {virtualOfficeBenefits.map((point) => (
              <div key={point.title} className="text-center">
                <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                  <point.icon className="w-8 h-8" strokeWidth="1.5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{point.title}</h3>
                <p className="text-muted-foreground">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Service Section */}
      <motion.section {...fadeIn} className="py-24 bg-card border-y">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-bold font-headline text-foreground mb-4">Our Complete Mail Handling Service</h2>
                <p className="text-muted-foreground mb-8">
                    We provide a seamless service to manage your business mail, so you never miss an important document.
                </p>
                <ul className="space-y-3">
                {serviceIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 shrink-0 mt-1"/>
                        <span className="text-sm text-foreground">{item}</span>
                    </li>
                ))}
                </ul>
            </div>
            <Card className="bg-white p-8 rounded-lg shadow-lg border">
              <CardTitle className="text-2xl font-bold font-headline text-foreground mb-2">Virtual Office Plans</CardTitle>
              <p className="text-5xl font-bold text-foreground mb-2">From $39</p>
              <p className="text-muted-foreground mb-4">per month</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Affordable plans that provide a professional image and essential mail handling for your global business.</p>
              </div>
              <Button asChild size="lg" className="w-full mt-6 bg-[#E53935] text-white hover:bg-[#C62828] rounded-full">
                  <Link href="/contact">Choose Your Address</Link>
              </Button>
          </Card>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">How It Works</h2>
          </div>
          <div className="relative grid md:grid-cols-4 gap-8">
            <div className="absolute top-8 left-0 w-full h-0.5 bg-border hidden md:block"></div>
            {processSteps.map((step) => (
              <div key={step.number} className="relative text-center">
                <div className="relative z-10 w-16 h-16 bg-card border-2 border-primary text-primary flex items-center justify-center rounded-full mx-auto mb-4 font-bold text-xl">
                  {step.number}
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* CTA Section */}
      <section id="contact" className="py-24 bg-card border-t relative">
        <motion.div className="max-w-4xl mx-auto px-6 text-center" {...fadeIn}>
          <h2 className="text-4xl md:text-5xl font-semibold text-black tracking-tight mb-6">Get Your Professional Business Address Today</h2>
          <p className="text-lg text-neutral-500 mb-10">Enhance your business's credibility and manage your mail from anywhere in the world. Sign up for your virtual office now.</p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#E53935] text-white hover:bg-[#C62828] rounded-full">
                <Link href="/contact">Sign Up for a Virtual Office</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
