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
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.5 },
};

const whyProtectPoints = [
    {
        icon: ShieldCheck,
        title: 'Eliminate Fake Products',
        description: 'Remove counterfeit listings that steal your sales, damage your reputation, and put customers at risk with fake or substandard products.',
    },
    {
        icon: UserCheck,
        title: 'Protect Your Listings',
        description: 'Stop unauthorized sellers from taking over your listings, undercutting your prices, and damaging your brand reputation.',
    },
    {
        icon: BadgeDollarSign,
        title: 'Recover Lost Revenue',
        description: 'Reclaim sales lost to counterfeiters and unauthorized sellers. Protect your market share and maintain premium pricing.',
    },
    {
        icon: TrendingUp,
        title: 'Increase Brand Worth',
        description: 'Strong brand protection increases company value, enables premium pricing, and creates licensing opportunities.',
    },
     {
        icon: Star,
        title: 'Maintain Customer Confidence',
        description: 'Protect customers from fake products and maintain the trust and loyalty you\'ve worked hard to build with authentic products.',
    },
];

const protectionServices = [
  {
    title: 'Trademark Monitoring',
    price: 'From £99/month',
    description: '24/7 monitoring of trademarks, domains, and brand mentions across marketplaces and social platforms.',
    includes: [
      'Trademark infringement detection',
      'Domain monitoring and typosquatting detection',
      'Social media brand mention tracking',
    ],
  },
  {
    title: 'Amazon Brand Protection',
    price: 'From £199/month',
    description: 'Specialized Amazon brand protection with hijacker removal and listing optimization.',
    includes: [
      'Hijacker detection and removal',
      'Counterfeit product reporting',
      'Unauthorized seller identification',
    ],
  },
  {
    title: 'Anti-Counterfeiting',
    price: 'From £299/month',
    description: 'Comprehensive anti-counterfeiting with supply chain verification and authentication systems.',
    includes: [
      'Counterfeit product detection',
      'Supply chain verification',
      'Authentication system setup',
    ],
  },
  {
    title: 'Legal Enforcement',
    price: 'From £499/case',
    description: 'Legal enforcement actions including cease & desist, takedowns, and litigation support.',
    includes: [
      'Cease & desist letters',
      'Platform takedown requests',
      'Legal action coordination',
    ],
  },
];

const processSteps = [
    { number: 1, title: 'Comprehensive Brand Audit', description: 'We analyze your brand assets, identify vulnerabilities, and create a customized protection strategy.', time: 'Audit' },
    { number: 2, title: '24/7 Monitoring Implementation', description: 'We set up comprehensive monitoring across all channels where your brand appears.', time: 'Setup' },
    { number: 3, title: 'Active Protection & Enforcement', description: 'We take immediate action against infringements, counterfeiters, and unauthorized sellers.', time: 'Enforce' },
    { number: 4, title: 'Continuous Protection & Optimization', description: 'We maintain ongoing protection with regular monitoring, reporting, and strategy optimization.', time: 'Protect' },
];

const successStories = [
    {
        client: 'Jennifer K. (UK)',
        problem: '15 hijackers on best-selling product.',
        solution: 'Comprehensive hijacker removal program.',
        results: 'All hijackers removed within 2 weeks. Sales increased 180% after cleanup.',
        testimonial: "Incredible service! They cleaned up my listings completely. Sales recovered and brand protected. Worth every penny!",
        rating: 5,
    },
    {
        client: 'Carlos M. (Spain)',
        problem: 'Counterfeit products flooding market.',
        solution: 'Anti-counterfeiting program with legal support.',
        results: '200+ counterfeit listings removed. Supply chain verification completed.',
        testimonial: "Professional counterfeiting removal saved my brand. They found and removed fakes I didn't even know existed!",
        rating: 5,
    },
    {
        client: 'Sarah L. (Global)',
        problem: 'Brand abuse across multiple countries.',
        solution: 'Global brand protection program.',
        results: 'Protection across 15 countries. 500+ infringements removed. Brand value increased 300%.',
        testimonial: "Global protection program transformed our business. Brand is now protected worldwide. Amazing results!",
        rating: 5,
    }
];

export default function BrandProtectionPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section {...fadeIn} className="bg-card border-b pt-16">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">
            Brand Protection Services for Amazon Sellers
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Complete brand protection solution: trademark monitoring, anti-counterfeiting, Amazon enforcement, and legal support. Protect your brand from hijackers, counterfeits, and unauthorized sellers.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="#">Protect My Brand</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full bg-white">
              <Link href="#">Free Brand Audit</Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Why Brand Protection Section */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Why Amazon Sellers Need Brand Protection</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyProtectPoints.map((point) => (
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
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Complete Brand Protection Solution</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {protectionServices.map((service) => (
              <Card key={service.title} className="bg-white p-6 rounded-lg shadow-sm flex flex-col">
                <CardHeader>
                    <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                    <p className="text-sm font-semibold text-primary">{service.price}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                    <ul className="space-y-2 text-sm">
                        {service.includes.map(item => (
                            <li key={item} className="flex items-start gap-2">
                                <Check className="w-4 h-4 mt-1 text-green-500 shrink-0" />
                                <span className="text-muted-foreground">{item}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Our 4-Step Brand Protection Process</h2>
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
      
      {/* Success Stories Section */}
      <motion.section {...fadeIn} className="py-24 bg-card border-y">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Brand Protection Success Stories</h2>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <Card key={story.client} className="bg-white flex flex-col">
                <CardHeader>
                    <div className="flex text-yellow-400">
                        {[...Array(story.rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                    </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4 italic">"{story.testimonial}"</p>
                  <p className="text-sm"><span className="font-semibold text-foreground">Problem:</span> <span className="text-muted-foreground">{story.problem}</span></p>
                  <p className="text-sm"><span className="font-semibold text-foreground">Result:</span> <span className="text-muted-foreground">{story.results}</span></p>
                </CardContent>
                <CardContent>
                  <p className="font-semibold text-foreground">{story.client}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-white relative">
        <motion.div className="max-w-4xl mx-auto px-6 text-center" {...fadeIn}>
          <h2 className="text-4xl md:text-5xl font-semibold text-black tracking-tight mb-6">Ready to Protect Your Brand?</h2>
          <p className="text-lg text-neutral-500 mb-10">Don't let counterfeiters and hijackers damage your brand and steal your sales. Start comprehensive brand protection now and secure your business future.</p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="#">Start Brand Protection</Link>
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-neutral-600 mt-4">
              <a href="tel:+13463804251" className="flex items-center gap-2 hover:text-primary">
                <Phone className="h-4 w-4" />
                +1 (346) 380-4251
              </a>
              <a href="https://wa.me/13463804251" className="flex items-center gap-2 hover:text-primary">
                <MessageSquare className="h-4 w-4" />
                +1 (346) 380-4251 (WhatsApp)
              </a>
              <a href="mailto:brand-protection@amazonsolutionspro.com" className="flex items-center gap-2 hover:text-primary">
                <Mail className="h-4 w-4" />
                brand-protection@amazonsolutionspro.com
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
