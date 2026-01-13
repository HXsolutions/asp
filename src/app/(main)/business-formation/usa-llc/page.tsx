
'use client';

import PageHeader from '@/components/page-header';
import { Button } from '@/components/ui/button';
import {
  ShieldCheck,
  Building,
  Check,
  Mail,
  Phone,
  Globe,
  FileSignature,
  FileText,
  Users,
  MessageSquare,
  Landmark,
  BadgeDollarSign,
  Briefcase,
  Star,
  ChevronDown,
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.5 },
};

const usMarketAdvantages = [
    { icon: Globe, title: 'Largest Market', description: "Access the world's biggest consumer market and sell directly on Amazon.com." },
    { icon: Landmark, title: 'Multiple State Options', description: 'Choose the optimal state for your business needs, from Texas to Wyoming.' },
    { icon: Briefcase, title: 'Fast Setup', description: 'Our streamlined process ensures your US business is fully established within 45 days.' },
    { icon: Star, title: 'Professional Image', description: 'A US entity enhances your business credibility with customers, suppliers, and Amazon.' },
];

const servicePackages = [
    {
        title: 'Trademark Registration',
        price: '$580',
        description: 'A complete US trademark registration package to protect your brand.',
        features: [
            'US Trademark Filing',
            'Website with Domain & Hosting',
            'Amazon Brand Approval Support',
        ],
        freebies: ['Domain + Hosting', 'Brand Approval'],
        totalCost: '$580 (All inclusive)'
    },
    {
        title: 'Patent Filing',
        price: '$1,000',
        description: 'US patent filing service to protect your unique product or invention.',
        features: [
            'One Class Filing Fee Included',
            'Complete patent application preparation',
            '18-month average processing timeline',
        ],
        freebies: ['Advance Patent Check', 'Professional patent guidance'],
        totalCost: '$1,000'
    }
];

const llcPackages = [
    {
        state: 'Wyoming',
        price: '$650',
        description: 'Low cost, privacy, business-friendly',
        isPopular: true,
        features: [
            'Article of Organization',
            'Operating Agreement',
            'EIN',
            'Seller Permit',
            'Registered Agent (1Year)',
            'Unique Verified Address (1Year)',
            'Business Wise',
            'Amazon Seller Central (Business Details)',
        ]
    },
    {
        state: 'Delaware',
        price: '$650',
        description: 'Court system, corporate law, prestige',
        isPopular: false,
        features: [
            'Article of Organization',
            'Operating Agreement',
            'EIN',
            'Seller Permit',
            'Registered Agent (1Year)',
            'Unique Verified Address (1Year)',
            'Business Wise',
            'Amazon Seller Central (Business Details)',
        ]
    },
    {
        state: 'Texas',
        price: '$650',
        description: 'No state income tax, large economy',
        isPopular: false,
        features: [
            'Article of Organization',
            'Operating Agreement',
            'EIN',
            'Seller Permit',
            'Registered Agent (1Year)',
            'Unique Verified Address (1Year)',
            'Business Wise',
            'Amazon Seller Central (Business Details)',
        ]
    },
    {
        state: 'Florida',
        price: '$650',
        description: 'Growing economy, no personal income tax',
        isPopular: false,
        features: [
            'Article of Organization',
            'Operating Agreement',
            'EIN',
            'Seller Permit',
            'Registered Agent (1Year)',
            'Unique Verified Address (1Year)',
            'Business Wise',
            'Amazon Seller Central (Business Details)',
        ]
    },
]

const processSteps = [
    { number: 1, title: 'Document Collection & State Registration', time: '7 days' },
    { number: 2, title: 'State Filing & Approval', time: '21 days' },
    { number: 3, title: 'Bank Account Setup', time: '10 days' },
    { number: 4, title: 'Final Setup & Documentation', time: '7 days' },
];


export default function UsaLlcPage() {
    const [expandedCard, setExpandedCard] = useState<string | null>(null);

    const toggleExpand = (state: string) => {
        setExpandedCard(expandedCard === state ? null : state);
    };
  
  return (
    <div className="bg-white pt-16">
      {/* Hero Section */}
      <motion.section {...fadeIn} className="bg-card border-b pt-24 md:pt-32">
        <div className="container mx-auto px-6 py-20 text-center">
           <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">
            Complete Business Solutions in the United States
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Professional business services in the US: LLC formation in Texas, Florida, Wyoming, New York, Kentucky, and C-Corp formation. Complete trademark registration and patent filing with Amazon Brand Registry support.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">Start US Business Setup</Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* US Market Advantages */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">US Market Advantages</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {usMarketAdvantages.map((point) => (
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
      
       <motion.section {...fadeIn} className="py-24 bg-card border-y">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Best States for Amazon Sellers</h2>
            <p className="text-muted-foreground mt-2">Most Amazon sellers choose Wyoming for its unmatched cost-efficiency and privacy.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {llcPackages.map(pkg => {
              const isExpanded = expandedCard === pkg.state;
              return (
                <Card key={pkg.state} className={cn("bg-white flex flex-col cursor-pointer transition-all duration-300 hover:shadow-xl", pkg.isPopular && 'border-primary border-2')}>
                  {pkg.isPopular && <Badge className="w-fit self-center -mt-3 z-10">MOST POPULAR</Badge>}
                  <div onClick={() => toggleExpand(pkg.state)}>
                      <CardHeader className="text-center">
                          <CardTitle className="font-headline text-2xl">{pkg.state}</CardTitle>
                          <CardDescription>{pkg.description}</CardDescription>
                      </CardHeader>
                      <CardContent className={cn("flex-grow transition-all duration-300 ease-in-out", isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden')}>
                          <p className="font-semibold text-sm mb-2 text-center">Package Includes:</p>
                          <ul className="space-y-1 text-sm text-muted-foreground text-center">
                              {pkg.features.map(feature => (
                                  <li key={feature}>{feature}</li>
                              ))}
                          </ul>
                      </CardContent>
                      <CardFooter className="flex-col">
                           <p className="text-4xl font-bold mb-4">${pkg.price}</p>
                          <Button variant="link" className="text-muted-foreground">
                              {isExpanded ? 'Show Less' : 'Show More'}
                              <ChevronDown className={cn("w-4 h-4 ml-2 transition-transform", isExpanded && "rotate-180")} />
                          </Button>
                      </CardFooter>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </motion.section>

      {/* US Service Packages */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Other US Services</h2>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {servicePackages.map(pkg => (
              <Card key={pkg.title} className="bg-white flex flex-col">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">{pkg.title}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-5xl font-bold mb-4">{pkg.price}</p>
                  <h4 className="font-semibold text-sm mb-2">What's Included:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {pkg.features.map(feature => (
                      <li key={feature} className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500 shrink-0"/>{feature}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex-col items-start bg-slate-50 p-4 mt-4">
                    <h4 className="font-semibold text-sm mb-2">Free Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                        {pkg.freebies.map(freebie => (
                            <Badge key={freebie} variant="secondary">{freebie}</Badge>
                        ))}
                    </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>


      {/* Process Section */}
      <motion.section {...fadeIn} className="py-24 bg-card border-y">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold font-headline text-foreground">US LLC Formation Process (45 Days)</h2>
            </div>
            <div className="relative grid md:grid-cols-4 gap-8">
                <div className="absolute top-8 left-0 w-full h-0.5 bg-border hidden md:block"></div>
                {processSteps.map((step) => (
                    <div key={step.number} className="relative text-center">
                        <div className="relative z-10 w-16 h-16 bg-background border-2 border-primary text-primary flex items-center justify-center rounded-full mx-auto mb-4 font-bold text-xl">
                            {step.number}
                        </div>
                        <h3 className="font-semibold text-foreground text-lg mb-2">{step.title}</h3>
                        <p className="text-xs text-muted-foreground font-medium">Time: {step.time}</p>
                    </div>
                ))}
            </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <section id="contact" className="py-24 bg-white relative">
        <motion.div className="max-w-4xl mx-auto px-6 text-center" {...fadeIn}>
          <h2 className="text-4xl md:text-5xl font-semibold text-black tracking-tight mb-6">Ready to Establish Your Business in the US?</h2>
          <p className="text-lg text-neutral-500 mb-10">Complete US Business Setup - Multiple States Available. Establish your business in the US with professional services including US LLC formation (multiple states), trademark registration, and patent filing. Complete setup with 1-year address and full compliance support.</p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">Start US Business Setup</Link>
              </Button>
            </div>
             <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-neutral-600 mt-4">
                <a href="tel:+13463804251" className="flex items-center gap-2 hover:text-primary">
                  <Phone className="h-4 w-4" />
                  +1 (346) 380-4251
                </a>
                 <a href="https://wa.me/13463804251" className="flex items-center gap-2 hover:text-primary">
                    <MessageSquare className="h-4 w-4" />
                    +1 (346) 380-4251
                </a>
                <a href="mailto:us@amazonsolutionspro.com" className="flex items-center gap-2 hover:text-primary">
                  <Mail className="h-4 w-4" />
                  us@amazonsolutionspro.com
                </a>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
