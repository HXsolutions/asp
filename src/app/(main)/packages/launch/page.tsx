
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
        icon: Briefcase,
        features: [
            'USA LLC Formation in Wyoming (or state of choice)',
            'EIN (Federal Tax ID) Registration with the IRS',
            'Registered Agent Service for 1 Year',
            'US Business Address & Mail Forwarding (1 year)',
            'Operating Agreement & Banking Resolution',
        ],
    },
    { 
        category: 'Legal & IP Protection',
        icon: ShieldCheck,
        features: [
            'US Trademark Comprehensive Search',
            'US Trademark Application Filing (1 class)',
            'Amazon Brand Registry Enrollment Assistance',
        ],
    },
    { 
        category: 'Amazon & Growth',
        icon: Store,
        features: [
            'Professional Amazon Seller Account Setup',
            'Initial Product Listing Optimization',
            '30-Day Post-Launch Email Support',
        ],
    },
];

export default function LaunchPackagePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section {...fadeIn} className="bg-card border-b pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-6 text-center">
          <Badge className="mb-4 bg-primary text-primary-foreground">Launch Package</Badge>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">
            The Amazon Launch Package
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            For new entrepreneurs ready to get their business off the ground. The complete legal and operational foundation for your Amazon US business.
          </p>
          <Button asChild size="lg" className="bg-[#E53935] text-white hover:bg-[#C62828] rounded-full">
            <Link href="/contact">Get a Free Consultation</Link>
          </Button>
        </div>
      </motion.section>

      {/* Main Content Section */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-12 items-start">
            {/* Left Side - Features */}
            <div className="lg:col-span-2 space-y-8">
                <h2 className="text-3xl font-bold font-headline text-foreground">What's Included in the Launch Package?</h2>
                {packageFeatures.map(category => (
                    <Card key={category.category}>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <category.icon className="w-6 h-6 text-primary"/>
                                {category.category}
                            </CardTitle>
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

            {/* Right Side - Pricing & CTA */}
            <div className="lg:sticky top-24">
                <Card className="bg-white p-8 rounded-lg shadow-lg border">
                    <CardTitle className="text-2xl font-bold font-headline text-foreground mb-2">Launch Package</CardTitle>
                    <p className="text-5xl font-bold text-foreground mb-2">$2,499</p>
                    <p className="text-muted-foreground mb-4">One-time package fee</p>
                    <Badge variant="destructive" className="mb-6">Save over $500</Badge>
                    <p className="text-sm text-muted-foreground mb-6">This is the most cost-effective way to get everything you need for a successful and legally compliant Amazon launch.</p>
                    <Button asChild size="lg" className="w-full bg-[#E53935] text-white hover:bg-[#C62828] rounded-full mb-4">
                        <Link href="#">Get Started</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="w-full rounded-full">
                        <Link href="/contact">Ask a Question</Link>
                    </Button>
                </Card>
                 <Card className="mt-8">
                    <CardHeader>
                        <CardTitle>Who is this for?</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 shrink-0 mt-1 text-primary"/><span>First-time Amazon sellers.</span></li>
                            <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 shrink-0 mt-1 text-primary"/><span>International sellers entering the US market.</span></li>
                            <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 shrink-0 mt-1 text-primary"/><span>Entrepreneurs who want to start right, from day one.</span></li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
      </motion.section>
    </div>
  );
}
