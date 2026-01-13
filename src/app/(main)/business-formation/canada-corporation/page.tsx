
'use client';

import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
    ArrowRight,
    ShieldCheck,
    Banknote,
    Award,
    BookUser,
    Building,
    CheckCircle,
    FileText,
    UserCheck,
    Mail,
    BookOpen,
    Headset,
    Search,
    FileSignature,
    Stamp,
    Phone,
    Globe,
    Rocket,
    Landmark,
    Check,
    Store,
    BadgeCheck,
    Clock,
    XCircle,
    FilePlus,
    Users,
    Star,
    TrendingUp,
    MessageSquare,
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.5 },
};

const whyCanadaPoints = [
    {
        icon: Globe,
        title: 'NAFTA/USMCA Access',
        description: 'Gain preferential access to US markets, making cross-border trade easier and more profitable.',
    },
    {
        icon: Building,
        title: 'Stable Economy',
        description: 'Canada offers a strong and stable business environment, perfect for e-commerce businesses.',
    },
    {
        icon: Banknote,
        title: 'Favorable Tax Rates',
        description: 'Benefit from a competitive corporate tax structure and an extensive network of international tax treaties.',
    },
    {
        icon: Store,
        title: 'Amazon Canada Access',
        description: "Tap into Amazon.ca's growing marketplace with millions of customers and less competition.",
    },
];

const processSteps = [
    { number: 1, title: 'Document Collection & Address Setup', description: 'We gather your documents and set up your Canadian business address.', time: '5 days' },
    { number: 2, title: 'Corporate Registration', description: 'We handle the official company registration with provincial authorities.', time: '15 days' },
    { number: 3, title: 'CRA Registration & Tax Setup', description: 'We complete all CRA registrations including your Business Number and GST/HST account.', time: '10 days' },
    { number: 4, title: 'Bank Account & Final Docs', description: 'We assist with bank account setup and deliver all your final documentation.', time: '5 days' },
];


export default function CanadaCorporationPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section {...fadeIn} className="bg-card border-b pt-24 md:pt-32">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">
            Complete Business Solutions in Canada
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Professional business services in Canada: Canadian corporation formation, trademark registration, and patent filing. Complete setup for Amazon sellers with GST/HST registration and full compliance support.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Start Canadian Business Setup</Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Why Canada Section */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Canadian Market Advantages</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyCanadaPoints.map((point) => (
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

    {/* Service Packages Section */}
      <motion.section {...fadeIn} className="py-24 bg-card border-y">
        <div className="container mx-auto px-6">
           <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold font-headline text-foreground">Canadian Service Packages</h2>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                 {/* Company Formation */}
                <Card className="bg-white flex flex-col h-full border-primary border-2">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl">Canadian LTD Formation</CardTitle>
                        <CardDescription>A complete Canadian Corporation formation package.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-5xl font-bold mb-2">CAD $750</p>
                        <p className="text-sm text-muted-foreground mb-4">+ $118 in third-party fees.</p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Canadian LTD Registration</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Company Formation & Bank Account Setup</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>1-Year Business Address</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>35-Day Complete Setup</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Free Domain, Hosting & Brand Approval</span></li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                         <Button asChild className="w-full">
                            <Link href="/contact">Select Plan</Link>
                        </Button>
                    </CardFooter>
                </Card>

                {/* Trademark Registration */}
                 <Card className="bg-white flex flex-col h-full">
                    <CardHeader>
                        <CardTitle  className="font-headline text-2xl">Trademark Registration</CardTitle>
                         <CardDescription>Protect your brand in Canada.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                         <p className="text-5xl font-bold mb-2">CAD $660</p>
                         <p className="text-sm text-muted-foreground mb-4">All-inclusive fee.</p>
                         <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Trademark Filing Fee (CAD $580)</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Website with Domain & Hosting (CAD $80)</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Free Amazon Brand Approval</span></li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                         <Button asChild variant="outline" className="w-full">
                            <Link href="/contact">Select Plan</Link>
                        </Button>
                    </CardFooter>
                </Card>

                 {/* Patent Filing */}
                 <Card className="bg-white flex flex-col h-full">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl">Patent Filing</CardTitle>
                         <CardDescription>Protect your unique product or invention.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                         <p className="text-5xl font-bold mb-2">CAD $1,000</p>
                         <p className="text-sm text-muted-foreground mb-4">per classification.</p>
                         <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Patent Filing for One Class</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Complete Application Preparation</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>18-month processing timeline</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Free Advance Patent Check</span></li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                         <Button asChild variant="outline" className="w-full">
                            <Link href="/contact">Select Plan</Link>
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
      </motion.section>

      {/* Incorporation Process */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold font-headline text-foreground">Canadian LTD Formation Process (35 Days)</h2>
            </div>
            <div className="relative grid md:grid-cols-4 gap-8">
                <div className="absolute top-8 left-0 w-full h-0.5 bg-border hidden md:block"></div>
                {processSteps.map((step) => (
                    <div key={step.number} className="relative text-center">
                        <div className="relative z-10 w-16 h-16 bg-card border-2 border-primary text-primary flex items-center justify-center rounded-full mx-auto mb-4 font-bold text-xl">
                            {step.number}
                        </div>
                        <h3 className="font-semibold text-foreground text-lg mb-2">{step.title}</h3>
                        <p className="text-muted-foreground text-sm mb-2">{step.description}</p>
                        <p className="text-xs text-muted-foreground font-medium">Time: {step.time}</p>
                    </div>
                ))}
            </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <section id="contact" className="py-24 bg-card border-t relative">
        <motion.div className="max-w-4xl mx-auto px-6 text-center" {...fadeIn}>
          <h2 className="text-4xl md:text-5xl font-semibold text-black tracking-tight mb-6">Ready to Establish Your Business in Canada?</h2>
          <p className="text-lg text-neutral-500 mb-10">Establish your business in Canada with professional services including Canadian corporation formation, trademark registration, and patent filing. Complete setup with GST/HST registration and full compliance support.</p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Start Canadian Business Setup</Link>
              </Button>
            </div>
             <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-neutral-600 mt-4">
                <a href="tel:+14161234567" className="flex items-center gap-2 hover:text-primary">
                  <Phone className="h-4 w-4" />
                  +1 (416) 123-4567
                </a>
                 <a href="https://wa.me/13463804251" className="flex items-center gap-2 hover:text-primary">
                    <MessageSquare className="h-4 w-4" />
                    +1 (346) 380-4251 (WhatsApp)
                </a>
                <a href="mailto:canada@amazonsolutionspro.com" className="flex items-center gap-2 hover:text-primary">
                  <Mail className="h-4 w-4" />
                  canada@amazonsolutionspro.com
                </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
