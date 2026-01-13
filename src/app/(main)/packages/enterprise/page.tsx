
'use client';

import { Button } from '@/components/ui/button';
import { Check, Star, Phone, Mail, ArrowRight, Briefcase, ShieldCheck, Landmark, Store } from 'lucide-react';
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

const packageFeatures = [
    { 
        category: 'Business Formation',
        features: [
            'Company Formation in up to 3 Countries (e.g., USA, UK, Canada)',
            'All Tax Registrations (EIN, VAT, GST)',
            'Registered Agent Service in all locations (1 year)',
            'Multi-Currency Banking Setup Assistance',
        ],
    },
    { 
        category: 'Legal & IP Protection',
        features: [
            'Global Trademark Portfolio Strategy',
            'Trademark Registration in 3 Countries',
            'Amazon Brand Registry in all applicable marketplaces',
            'Ongoing IP Monitoring & Enforcement',
        ],
    },
    { 
        category: 'Amazon & Growth',
        features: [
            'Full Account Management for 1 Year',
            'Launch Strategy for up to 20 Products',
            'A+ Content and Brand Store Creation',
            'Advanced PPC & DSP Campaign Management',
            'Supply Chain & Logistics Consulting',
        ],
    },
    {
        category: 'Support & Strategy',
        features: [
            'Dedicated Senior Account Manager',
            'Weekly Strategy Calls & Performance Reviews',
            '24/7 Priority Support (Phone, Email, WhatsApp)',
            'Quarterly Business Reviews with Leadership',
        ]
    }
];

export default function EnterprisePackagePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section {...fadeIn} className="bg-card border-b pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-6 text-center">
          <Badge className="mb-4 bg-primary text-primary-foreground">Enterprise Package</Badge>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">
            The Enterprise Suite
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A complete, done-for-you solution for serious sellers and established brands aiming for global domination on Amazon and beyond.
          </p>
          <Button asChild size="lg" className="bg-[#E53935] text-white hover:bg-[#C62828] rounded-full">
            <Link href="/contact">Book a Strategy Call</Link>
          </Button>
        </div>
      </motion.section>

      {/* Main Content Section */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-12 items-start">
            {/* Left Side - Features */}
            <div className="lg:col-span-2 space-y-8">
                <h2 className="text-3xl font-bold font-headline text-foreground">What's Included in the Enterprise Package?</h2>
                <div className="space-y-8">
                    {packageFeatures.map(category => (
                        <Card key={category.category} className="bg-card">
                            <CardHeader>
                                <CardTitle>{category.category}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {category.features.map(feature => (
                                        <li key={feature} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-green-500 shrink-0 mt-1"/>
                                            <span className="text-muted-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Right Side - Pricing & CTA */}
            <div className="lg:sticky top-24">
                <Card className="bg-white p-8 rounded-lg shadow-lg border">
                    <CardTitle className="text-2xl font-bold font-headline text-foreground mb-2">Enterprise Suite</CardTitle>
                    <p className="text-5xl font-bold text-foreground mb-2">$8,999</p>
                    <p className="text-muted-foreground mb-4">One-time package fee</p>
                    <Badge variant="destructive" className="mb-6">Save over $2,000</Badge>
                    <p className="text-sm text-muted-foreground mb-6">This all-inclusive package provides the global infrastructure and expert management needed to build a dominant brand on Amazon.</p>
                    <Button asChild size="lg" className="w-full bg-[#E53935] text-white hover:bg-[#C62828] rounded-full mb-4">
                        <Link href="#">Get Started</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="w-full rounded-full">
                        <Link href="/contact">Speak to a Consultant</Link>
                    </Button>
                </Card>
                <Card className="mt-8">
                    <CardHeader>
                        <CardTitle>Who is this for?</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 shrink-0 mt-1 text-primary"/><span>Established brands moving to Amazon.</span></li>
                            <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 shrink-0 mt-1 text-primary"/><span>Successful sellers ready for global expansion.</span></li>
                            <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 shrink-0 mt-1 text-primary"/><span>Investors and aggregators launching new brands.</span></li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
      </motion.section>
    </div>
  );
}
