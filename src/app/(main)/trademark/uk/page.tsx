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

const whyUkTrademarkPoints = [
    {
        icon: ShieldCheck,
        title: 'Unlock UK Brand Registry',
        description: 'UK trademark gives you access to Amazon UK Brand Registry with A+ Content, Sponsored Brands, and enhanced protection tools for UK and EU marketplaces.',
    },
    {
        icon: Globe,
        title: 'Protect Across UK & EU',
        description: 'UK registration provides foundation for EU expansion and protects your brand across Amazon UK, Germany, France, Italy, Spain and other EU marketplaces.',
    },
    {
        icon: Building,
        title: 'UK Legal Protection',
        description: 'UK registration gives you legal rights across the UK, the right to use ® symbol, and strong foundation for international trademark protection.',
    },
    {
        icon: BadgeCheck,
        title: 'UK Business Credibility',
        description: 'UK trademark adds credibility to your business, enables licensing opportunities, and provides competitive advantage in European markets.',
    },
    {
        icon: Clock,
        title: 'Quick & Cost-Effective',
        description: 'UK trademark registration is faster and more affordable than many other jurisdictions - typically 4-6 months with competitive government fees.',
    },
];

const includedItems = [
    "Comprehensive UK Trademark Search - UKIPO database + common law search",
    "Application Preparation - Professional UKIPO application drafting",
    "UKIPO Filing - Electronic filing with appropriate fees",
    "Examination Handling - Response to UKIPO examination (if needed)",
    "Amazon Brand Registry Support - UK and EU setup assistance",
    "Registration Certificate - Final registration documentation",
    "1-Year Monitoring - Trademark watching service included",
    "Lifetime Support - Ongoing questions and guidance",
];

const processSteps = [
    { number: 1, title: 'Comprehensive UK Search', description: 'We search UKIPO database and common law sources to assess availability and identify potential conflicts in the UK market.', time: '2-3 days' },
    { number: 2, title: 'Professional UK Application', description: 'We prepare your UKIPO application with proper classifications, descriptions, and supporting documentation for UK registration.', time: '3-5 days' },
    { number: 3, title: 'UKIPO Review Process', description: 'UKIPO examining attorney reviews application for registrability and searches for conflicting marks in the UK database.', time: '2-4 weeks' },
    { number: 4, title: 'Registration & EU Foundation', description: 'Once approved, you receive registration certificate and we provide foundation setup for EU market expansion.', time: '2-3 months' },
];


export default function UkTrademarkPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section {...fadeIn} className="bg-card border-b pt-16">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">
            UK Trademark Registration for Amazon Sellers
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Complete UK trademark registration with UKIPO. Professional trademark search, application filing, and Amazon Brand Registry support - everything you need for UK and EU marketplace protection.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="bg-[#E53935] text-white hover:bg-[#C62828] rounded-full shadow-lg shadow-red-500/20">
              <Link href="#">Register UK Trademark</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full bg-white">
              <Link href="#">Free UK Trademark Search</Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Why UK Trademark Section */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Why Amazon Sellers Need UK Trademark</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUkTrademarkPoints.map((point) => (
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
            <h2 className="text-3xl font-bold font-headline text-foreground mb-4">Complete UK Trademark Registration</h2>
            <p className="text-muted-foreground mb-8">
              We handle your entire UKIPO trademark registration, including all documentation and Brand Registry support.
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
              <p className="text-5xl font-bold text-foreground mb-2">£499</p>
              <p className="text-muted-foreground mb-4">(includes all government fees)</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong>Timeline:</strong> 4-6 months average</p>
                  <p><strong>Success Rate:</strong> 96% approval</p>
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
                <h2 className="text-3xl font-bold font-headline text-foreground">UKIPO Registration Process - 4 Simple Steps</h2>
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
                    <h2 className="text-3xl font-bold font-headline text-foreground">Transparent UK Trademark Pricing</h2>
                </div>
                <div className="max-w-2xl mx-auto">
                    <Card className="border-2 border-primary rounded-lg p-8 bg-white shadow-lg flex flex-col">
                        <Badge className="w-fit bg-primary mb-2">Most Popular</Badge>
                        <CardTitle className="text-2xl font-bold font-headline text-foreground">Complete Package</CardTitle>
                        <div className="flex items-baseline gap-2">
                             <p className="text-5xl font-bold text-foreground my-4">£499</p>
                             <p className="text-lg text-muted-foreground line-through">£865</p>
                        </div>
                        <p className="text-sm text-green-600 font-semibold mb-6">You save £366</p>
                        <ul className="space-y-2 text-sm text-muted-foreground mb-6 flex-grow">
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>UK trademark search and analysis (£149 value)</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>UKIPO application filing (£299 value)</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>One office action response (£199 value)</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Amazon UK Brand Registry assistance (£99 value)</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>1-year trademark monitoring (£119 value)</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Lifetime support</span></li>
                        </ul>
                        <Button asChild size="lg" className="w-full bg-primary text-primary-foreground">
                            <Link href="#">Start My UK Trademark</Link>
                        </Button>
                    </Card>
                </div>
            </div>
      </motion.section>

      {/* Post Registration */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
           <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold font-headline text-foreground">After Registration - UK & EU Protection</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-card p-6">
                    <CardHeader>
                        <CardTitle>Registration Benefits</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Legal rights across the United Kingdom</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Enhanced brand tools for Amazon UK</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Right to use the ® symbol</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Base for EU trademark applications</span></li>
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
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Ongoing use in UK commerce</span></li>
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
          <h2 className="text-4xl md:text-5xl font-semibold text-black tracking-tight mb-6">Ready to Protect Your Brand in the UK?</h2>
          <p className="text-lg text-neutral-500 mb-10">Don't risk losing your brand name in the UK market or missing out on Amazon UK Brand Registry benefits. Start your UK trademark registration now and protect your business future.</p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#E53935] text-white hover:bg-[#C62828] transition-all rounded-full shadow-lg shadow-red-500/20 px-8 py-4">
                <Link href="#">Start UK Trademark Registration</Link>
              </Button>
            </div>
             <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-neutral-600 mt-4">
                <a href="tel:+442012345678" className="flex items-center gap-2 hover:text-[#E53935]">
                  <Phone className="h-4 w-4" />
                  +44 (0) 20 1234 5678
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
