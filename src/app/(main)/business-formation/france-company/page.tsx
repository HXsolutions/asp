
'use client';

import { Button } from '@/components/ui/button';
import {
    ArrowRight,
    ShieldCheck,
    Banknote,
    Award,
    Building,
    Check,
    Mail,
    Phone,
    Globe,
    FileSignature,
    FileText,
    Users,
    MessageCircle,
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.5 },
};

const whyFrancePoints = [
    {
        icon: Globe,
        title: 'EU Market Access',
        description: 'France offers a gateway to the vast European Union market, reaching over 450 million consumers.',
    },
    {
        icon: Building,
        title: 'Prestigious Jurisdiction',
        description: 'A French company enhances your brand\'s reputation and credibility with partners and customers worldwide.',
    },
    {
        icon: Banknote,
        title: 'Competitive Tax Structure',
        description: 'Benefit from France\'s business-friendly tax reforms and extensive network of international tax treaties.',
    },
    {
        icon: Award,
        title: 'Direct Amazon EU Access',
        description: 'A French entity provides seamless access to sell on Amazon.fr and other major European marketplaces.',
    },
];

const processSteps = [
    { number: 1, title: 'Document Collection & Address Setup', description: 'We gather your documents and set up your French business address.', time: '5 days' },
    { number: 2, title: 'SASU Registration with Greffe', description: 'We handle the official company registration with the Commercial Court.', time: '15 days' },
    { number: 3, title: 'Accountant & Bank Deposit', description: 'We appoint your registered accountant and facilitate the initial share capital deposit.', time: '10 days' },
    { number: 4, title: 'Final Setup & Kbis Delivery', description: 'You receive your official Kbis, SIREN, and VAT numbers, ready for business.', time: '10 days' },
];

export default function FranceCompanyPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section {...fadeIn} className="bg-card border-b pt-24 md:pt-32">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">
            Complete Business Solutions in France
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Professional business services in France: company formation, trademark registration, and patent filing. Complete setup for Amazon sellers with French LLC (SASU), registered accountant, and full compliance support.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Start French Business Setup</Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Why France Section */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">French Market Advantages</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyFrancePoints.map((point) => (
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

      {/* Main Service Section */}
      <motion.section {...fadeIn} className="py-24 bg-card border-y">
        <div className="container mx-auto px-6">
           <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold font-headline text-foreground">France Service Packages</h2>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                 {/* Company Formation */}
                <Card className="bg-white flex flex-col h-full border-primary border-2">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl">French LLC Formation</CardTitle>
                        <CardDescription>A complete SASU company registration package.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-5xl font-bold mb-2">€1,350</p>
                        <p className="text-sm text-muted-foreground mb-4">+ €98 in third-party fees.</p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>SASU Registration Fee (€299)</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Registered Accountant (€435)</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Our Service Charges (€100)</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Refundable Capital Deposit (€350)</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>3-Month Business Address</span></li>
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
                         <CardDescription>Protect your brand in France and the EU.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                         <p className="text-5xl font-bold mb-2">€379</p>
                         <p className="text-sm text-muted-foreground mb-4">All-inclusive fee.</p>
                         <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Trademark Filing Fee (€200)</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Greffe (Court) Fee (€99)</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Website with Domain & Hosting (€80)</span></li>
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
                         <p className="text-5xl font-bold mb-2">€350</p>
                         <p className="text-sm text-muted-foreground mb-4">per classification.</p>
                         <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Patent Filing for One Class</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Complete Application Preparation</span></li>
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
                <h2 className="text-3xl font-bold font-headline text-foreground">French LLC Formation Process (40 Days)</h2>
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
          <h2 className="text-4xl md:text-5xl font-semibold text-black tracking-tight mb-6">Ready to Establish Your Business in France?</h2>
          <p className="text-lg text-neutral-500 mb-10">Establish your business in France with professional services including French LLC (SASU) formation, trademark registration, and patent filing. Complete setup with registered accountant and full compliance support.</p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Start French Business Setup</Link>
              </Button>
            </div>
             <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-neutral-600 mt-4">
                <a href="tel:+33170481800" className="flex items-center gap-2 hover:text-primary">
                  <Phone className="h-4 w-4" />
                  +33 (0)1 70 48 18 00
                </a>
                 <a href="https://wa.me/33612345678" className="flex items-center gap-2 hover:text-primary">
                    <MessageCircle className="h-4 w-4" />
                    +33 (0)6 12 34 56 78 (WhatsApp)
                </a>
                <a href="mailto:france@amazonsolutionspro.com" className="flex items-center gap-2 hover:text-primary">
                  <Mail className="h-4 w-4" />
                  france@amazonsolutionspro.com
                </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
