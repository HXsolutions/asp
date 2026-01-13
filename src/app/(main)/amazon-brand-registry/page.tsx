
'use client';

import { Button } from '@/components/ui/button';
import {
  ShieldCheck,
  Check,
  Star,
  Phone,
  Mail,
  MessageSquare,
  TrendingUp,
  BadgeDollarSign,
  UserCheck,
  BookCopy,
  Store,
  BadgeCheck,
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.5 },
};

const whyBrandRegistryPoints = [
    {
        icon: ShieldCheck,
        title: 'Protect Your Brand',
        description: 'Gain powerful tools to find and report violations, and proactively protect your intellectual property from counterfeiters and hijackers.',
    },
    {
        icon: TrendingUp,
        title: 'Increase Sales',
        description: 'Unlock A+ Content, Sponsored Brands, and Brand Stores—premium features proven to increase traffic, conversion rates, and sales.',
    },
    {
        icon: UserCheck,
        title: 'Control Your Listings',
        description: 'Get more control over your product detail pages, ensuring customers see accurate information and a consistent brand experience.',
    },
    {
        icon: BookCopy,
        title: 'Access Powerful Analytics',
        description: 'Use Amazon Brand Analytics to get valuable insights into customer behavior, search terms, and competitor performance.',
    },
     {
        icon: BadgeCheck,
        title: 'Build Customer Trust',
        description: 'A registered brand reassures customers they are buying authentic products, enhancing trust and encouraging loyalty.',
    },
];

const includedServices = [
  {
    title: 'Eligibility Assessment',
    description: 'We verify that your trademark meets all of Amazon\'s requirements for successful Brand Registry enrollment.',
  },
  {
    title: 'Application Preparation',
    description: 'We gather all necessary information and prepare a flawless application to ensure a smooth submission process.',
  },
  {
    title: 'Verification Code Handling',
    description: 'We manage the verification process, including receiving and submitting the unique code sent by Amazon to your trademark contact.',
  },
  {
    title: 'Enrollment & Setup',
    description: 'We complete the enrollment and help you set up your Brand Registry account, giving you access to all the protection and marketing tools.',
  },
];

const processSteps = [
    { number: 1, title: 'Trademark & Account Review', description: 'We review your active trademark and Amazon account to confirm eligibility and prepare for application.'},
    { number: 2, title: 'Application Submission', description: 'We submit the Brand Registry application on your behalf with all required documentation.'},
    { number: 3, title: 'Amazon Verification', description: 'We work with your trademark contact to receive and submit Amazon\'s verification code promptly.' },
    { number: 4, title: 'Enrollment Complete', description: 'Your brand is enrolled! We provide a walkthrough of the tools and help you get started with A+ Content.' },
];

export default function AmazonBrandRegistryPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section {...fadeIn} className="bg-card border-b pt-16">
        <div className="container mx-auto px-6 py-20 text-center">
          <Badge variant="secondary" className="mb-4">Amazon Seller Services</Badge>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">
            Amazon Brand Registry Enrollment
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Protect your brand, unlock powerful marketing tools, and increase sales with our expert Amazon Brand Registry enrollment service.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="bg-[#E53935] text-white hover:bg-[#C62828] rounded-full">
              <Link href="/contact">Enroll My Brand</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full bg-white">
              <Link href="/trademark-registration">Register a Trademark First</Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Why Brand Registry Section */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Benefits of Brand Registry</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyBrandRegistryPoints.map((point) => (
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

      {/* Services Section */}
      <motion.section {...fadeIn} className="py-24 bg-card border-y">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold font-headline text-foreground mb-4">Hassle-Free Enrollment Service</h2>
            <p className="text-muted-foreground mb-8">
              Our service handles every step of the Brand Registry process, from application to final approval.
            </p>
            <ul className="space-y-4">
              {includedServices.map((service) => (
                <li key={service.title} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-1"/>
                  <div>
                    <h4 className="font-semibold text-foreground">{service.title}</h4>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <Card className="bg-white p-8 rounded-lg shadow-lg border">
              <CardTitle className="text-2xl font-bold font-headline text-foreground mb-2">Enrollment Service</CardTitle>
              <p className="text-5xl font-bold text-foreground mb-2">$299</p>
              <p className="text-muted-foreground mb-4">One-time fee</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong>Requirement:</strong> A pending or registered trademark.</p>
                  <p><strong>Timeline:</strong> 1-2 weeks</p>
                  <p><strong>Guarantee:</strong> 100% success or free re-application.</p>
              </div>
              <Button asChild size="lg" className="w-full mt-6 bg-[#E53935] text-white hover:bg-[#C62828] rounded-full">
                  <Link href="/contact">Get Enrolled Now</Link>
              </Button>
          </Card>
        </div>
      </motion.section>
      
      {/* Process Section */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Our 4-Step Enrollment Process</h2>
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
          <h2 className="text-4xl md:text-5xl font-semibold text-black tracking-tight mb-6">Unlock Your Brand's Potential on Amazon</h2>
          <p className="text-lg text-neutral-500 mb-10">Stop losing sales to counterfeiters and gain a competitive edge with Amazon Brand Registry. Let's get your brand protected and poised for growth.</p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#E53935] text-white hover:bg-[#C62828] rounded-full">
                <Link href="/contact">Enroll in Brand Registry</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
