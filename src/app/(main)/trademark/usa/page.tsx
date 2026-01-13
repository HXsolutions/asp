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
  BadgeDollarSign,
  TrendingUp,
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';


const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.5 },
};

const whyTrademarkPoints = [
    {
        icon: ShieldCheck,
        title: 'Unlock Amazon Brand Registry',
        description: 'Trademark is required for Amazon Brand Registry, giving you access to A+ Content, Sponsored Brands, and enhanced brand protection tools.',
    },
    {
        icon: Building,
        title: 'Federal Legal Protection',
        description: 'Federal registration gives you nationwide protection, the right to use ® symbol, and legal presumption of ownership across all 50 states.',
    },
    {
        icon: BadgeDollarSign,
        title: 'Valuable Business Asset',
        description: 'A trademark is a business asset that increases company value, enables licensing, and provides competitive advantage in the marketplace.',
    },
    {
        icon: Store,
        title: 'Protect Your Listings',
        description: 'Registered trademark helps protect against hijackers, counterfeiters, and unauthorized sellers on your Amazon listings.',
    },
    {
        icon: Globe,
        title: 'International Foundation',
        description: 'US trademark provides foundation for international expansion through Madrid Protocol and other international registration systems.',
    },
];

const processSteps = [
    { number: 1, title: 'Comprehensive Search', description: 'We search USPTO database and common law sources to assess availability and identify potential conflicts.', time: '2-3 days' },
    { number: 2, title: 'Professional Application', description: 'We prepare your USPTO application with proper classifications, descriptions, and supporting documentation.', time: '3-5 days' },
    { number: 3, title: 'USPTO Review Process', description: 'USPTO examining attorney reviews application for registrability and searches for conflicting marks.', time: '3-6 months' },
    { number: 4, title: 'Registration & Protection', description: 'Once approved, you receive registration certificate and we provide ongoing monitoring services.', time: '2-4 months' },
];

const includedItems = [
    "Comprehensive Trademark Search - USPTO database + common law search",
    "Application Preparation - Professional USPTO application drafting",
    "USPTO Filing - Electronic filing with appropriate fees",
    "Office Action Response - One office action response included",
    "Amazon Brand Registry Support - Setup assistance included",
    "Registration Certificate - Final registration documentation",
    "1-Year Monitoring - Trademark watching service included",
    "Lifetime Support - Ongoing questions and guidance",
];


export default function UsaTrademarkPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section {...fadeIn} className="bg-card border-b pt-16">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">
            USA Trademark Registration for Amazon Sellers
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Complete USPTO trademark registration service with Amazon Brand Registry support. Professional trademark search, application filing, and approval guidance - everything you need for federal trademark protection.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="bg-[#E53935] text-white hover:bg-[#C62828] rounded-full shadow-lg shadow-red-500/20">
              <Link href="#">Register US Trademark</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full bg-white">
              <Link href="#">Free Trademark Search</Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Why Trademark Section */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Why Amazon Sellers Need a US Trademark</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyTrademarkPoints.map((point) => (
              <div key={point.title} className="text-center">
                <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center text-[#E53935] mx-auto mb-6">
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
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold font-headline text-foreground mb-4">Complete US Trademark Registration</h2>
            <p className="text-muted-foreground mb-8">
              We handle your entire USPTO trademark registration, including all documentation and Brand Registry support.
            </p>
            <ul className="space-y-3">
              {includedItems.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0"/>
                  <span className="text-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <Card className="bg-white p-8 rounded-lg shadow-lg border">
              <CardTitle className="text-2xl font-bold font-headline text-foreground mb-2">One-Time Fee</CardTitle>
              <p className="text-5xl font-bold text-foreground mb-2">$599</p>
              <p className="text-muted-foreground mb-4">(includes all government fees)</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong>Timeline:</strong> 8-12 months average</p>
                  <p><strong>Success Rate:</strong> 95% approval</p>
                  <p><strong>Guarantee:</strong> Free re-file if rejected due to our error</p>
              </div>
              <Button asChild size="lg" className="w-full mt-6 bg-[#E53935] text-white hover:bg-[#C62828] rounded-full">
                  <Link href="#">Get Started Now</Link>
              </Button>
          </Card>
        </div>
      </motion.section>

      {/* Trademark Process */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold font-headline text-foreground">USPTO Registration Process - 4 Simple Steps</h2>
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

      {/* Pricing Section */}
       <motion.section {...fadeIn} className="py-24 bg-card border-y">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold font-headline text-foreground">Transparent US Trademark Pricing</h2>
                </div>
                <div className="max-w-2xl mx-auto">
                    <Card className="border-2 border-primary rounded-lg p-8 bg-white shadow-lg flex flex-col">
                         <Badge className="w-fit bg-primary mb-2">Most Popular</Badge>
                        <CardTitle className="text-2xl font-bold font-headline text-foreground">Complete Package</CardTitle>
                        <div className="flex items-baseline gap-2">
                             <p className="text-5xl font-bold text-foreground my-4">$599</p>
                             <p className="text-lg text-muted-foreground line-through">$865</p>
                        </div>
                        <p className="text-sm text-green-600 font-semibold mb-6">You save $266</p>
                        <ul className="space-y-2 text-sm text-muted-foreground mb-6 flex-grow">
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Comprehensive trademark search ($149 value)</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>USPTO application filing ($299 value)</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>One office action response ($199 value)</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Amazon Brand Registry assistance ($99 value)</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink--0"/><span>1-year trademark monitoring ($119 value)</span></li>
                             <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Lifetime support</span></li>
                        </ul>
                        <Button asChild size="lg" className="w-full bg-primary text-primary-foreground">
                            <Link href="#">Start My Trademark</Link>
                        </Button>
                    </Card>
                </div>
            </div>
      </motion.section>

      {/* Post Registration */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
           <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold font-headline text-foreground">After Registration: Protection & Maintenance</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-card p-6">
                    <CardHeader>
                        <CardTitle>Registration Benefits</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Nationwide legal rights</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Access to Amazon Brand Registry tools</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Right to use the ® symbol</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Legal presumption of ownership</span></li>
                        </ul>
                    </CardContent>
                </Card>
                 <Card className="bg-card p-6">
                    <CardHeader>
                        <CardTitle>Maintenance Requirements</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Renewals every 10 years</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Ongoing use in commerce</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Monitoring for infringers</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Keeping records of use</span></li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <section id="contact" className="py-24 bg-card border-t relative">
        <motion.div className="max-w-4xl mx-auto px-6 text-center" {...fadeIn}>
          <h2 className="text-4xl md:text-5xl font-semibold text-black tracking-tight mb-6">Ready to Protect Your Brand?</h2>
          <p className="text-lg text-neutral-500 mb-10">Don't risk losing your brand name or missing out on Amazon Brand Registry benefits. Start your US trademark registration now and protect your business future.</p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#E53935] text-white hover:bg-[#C62828] transition-all rounded-full shadow-lg shadow-red-500/20 px-8 py-4">
                <Link href="#">Start Trademark Registration</Link>
              </Button>
            </div>
             <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-neutral-600 mt-4">
                <a href="tel:+13463804251" className="flex items-center gap-2 hover:text-[#E53935]">
                  <Phone className="h-4 w-4" />
                  +1 (346) 380-4251
                </a>
                 <a href="mailto:trademarks@amazonsolutionspro.com" className="flex items-center gap-2 hover:text-[#E53935]">
                  <Mail className="h-4 w-4" />
                  trademarks@amazonsolutionspro.com
                </a>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
