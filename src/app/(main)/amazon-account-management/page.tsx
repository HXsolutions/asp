
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
  BarChart,
  ClipboardList,
  Store,
  Headset,
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

const whyManagementPoints = [
    {
        icon: TrendingUp,
        title: 'Maximize Sales & Growth',
        description: 'Our experts optimize every aspect of your account—listings, PPC, pricing, and promotions—to increase sales, improve rankings, and accelerate your growth on Amazon.',
    },
    {
        icon: Headset,
        title: 'Save Time & Reduce Stress',
        description: 'Focus on your products and business strategy while we handle the complex, time-consuming daily operations of your Amazon seller account.',
    },
    {
        icon: ShieldCheck,
        title: 'Proactive Account Health',
        description: 'We constantly monitor your account health, address issues before they become problems, and ensure full compliance with Amazon\'s policies to prevent suspensions.',
    },
    {
        icon: UserCheck,
        title: 'Expert Strategy & Insights',
        description: 'Leverage our deep Amazon expertise. We provide data-driven insights and strategic guidance to navigate the competitive marketplace and stay ahead of trends.',
    },
     {
        icon: BadgeDollarSign,
        title: 'Improve Profitability',
        description: 'We analyze your performance to identify and eliminate unprofitable activities, optimize ad spend, and implement strategies that boost your bottom line.',
    },
];

const managementServices = [
  {
    title: 'Listing & Content Management',
    description: 'Full optimization of product listings, including titles, bullets, descriptions, A+ Content, and imagery to maximize conversion rates.',
    includes: [
      'Keyword research & integration',
      'Compelling copywriting',
      'A+ Content creation & management',
      'Image & video optimization',
    ],
  },
  {
    title: 'PPC & Advertising Management',
    description: 'Strategic management of Amazon PPC campaigns (Sponsored Products, Brands, Display) to increase visibility and drive profitable sales.',
    includes: [
      'Campaign setup & structuring',
      'Keyword targeting & bid management',
      'Performance analysis & optimization',
      'Budget allocation & ROI tracking',
    ],
  },
  {
    title: 'Account Health & Support',
    description: 'Proactive monitoring of account health metrics and fast resolution of any issues, including performance notifications and cases.',
    includes: [
      'Daily account health checks',
      'Policy compliance monitoring',
      'Case log management & escalation',
      'Stranded inventory resolution',
    ],
  },
  {
    title: 'Inventory & FBA Management',
    description: 'Management of FBA inventory levels, shipment creation, and reimbursement claims to ensure optimal stock and minimize costs.',
    includes: [
        'Inventory forecasting & planning',
        'FBA shipment creation & tracking',
        'Reimbursement & claims management',
        'Storage fee monitoring',
    ],
  },
];

const processSteps = [
    { number: 1, title: 'Comprehensive Account Audit', description: 'We start with a deep-dive audit of your entire seller account to identify strengths, weaknesses, and opportunities.', time: 'Audit' },
    { number: 2, title: 'Strategic Growth Plan', description: 'Based on the audit, we develop a tailored 90-day growth strategy with clear goals and KPIs for your brand.', time: 'Strategize' },
    { number: 3, title: 'Active Daily Management', description: 'Our team executes the strategy, managing all day-to-day operations, from PPC campaigns to customer service.', time: 'Execute' },
    { number: 4, title: 'Reporting & Optimization', description: 'We provide detailed weekly and monthly reports, and continuously refine our strategy based on performance data.', time: 'Optimize' },
];

const pricingTiers = [
    {
        name: "Growth",
        price: "From $999",
        freq: "/month",
        for: "Sellers with up to 10 ASINs",
        features: ["PPC Management", "Basic Listing Optimization", "Account Health Monitoring", "Monthly Reporting"],
        popular: false,
    },
    {
        name: "Professional",
        price: "From $1,999",
        freq: "/month",
        for: "Sellers with up to 50 ASINs",
        features: ["Full PPC & Ad Management", "A+ Content Creation", "Inventory Management", "Weekly Reporting", "Dedicated Manager"],
        popular: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        freq: "",
        for: "Large brands with 50+ ASINs",
        features: ["Complete End-to-End Management", "Strategic Growth Consulting", "Multi-Marketplace Management", "Daily Huddles"],
        popular: false,
    }
];

export default function AmazonAccountManagementPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section {...fadeIn} className="bg-card border-b pt-16">
        <div className="container mx-auto px-6 py-20 text-center">
          <Badge variant="secondary" className="mb-4">Amazon Seller Services</Badge>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">
            Full-Service Amazon Account Management
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Let our team of Amazon experts manage the day-to-day operations of your seller account, so you can focus on growing your brand.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="bg-[#E53935] text-white hover:bg-[#C62828] rounded-full">
              <Link href="/contact">Get a Free Proposal</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full bg-white">
              <Link href="/contact">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Why Use Management Section */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Focus on Your Brand, We'll Handle Amazon</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyManagementPoints.map((point) => (
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
            <h2 className="text-3xl font-bold font-headline text-foreground">What Our Management Service Includes</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {managementServices.map((service) => (
              <Card key={service.title} className="bg-white p-6 rounded-lg shadow-sm flex flex-col">
                <CardHeader>
                    <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
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
            <h2 className="text-3xl font-bold font-headline text-foreground">Our Management Process</h2>
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

      {/* Pricing Section */}
      <motion.section {...fadeIn} className="py-24 bg-card border-y">
          <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold font-headline text-foreground">Flexible Management Plans</h2>
              </div>
              <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                  {pricingTiers.map(tier => (
                      <Card key={tier.name} className={`bg-white flex flex-col ${tier.popular ? 'border-primary border-2' : 'border-border'}`}>
                          <CardHeader>
                            {tier.popular && <Badge className="w-fit bg-primary mb-2">Most Popular</Badge>}
                            <CardTitle>{tier.name}</CardTitle>
                            <CardDescription>{tier.for}</CardDescription>
                          </CardHeader>
                          <CardContent className="flex-grow">
                            <p className="text-4xl font-bold">{tier.price}<span className="text-sm font-normal text-muted-foreground">{tier.freq}</span></p>
                            <ul className="space-y-2 text-sm text-muted-foreground mt-6">
                                {tier.features.map(feature => <li key={feature} className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>{feature}</span></li>)}
                            </ul>
                          </CardContent>
                          <CardFooter>
                              <Button variant={tier.popular ? "default" : "outline"} asChild className="w-full">
                                  <Link href="/contact">Select Plan</Link>
                              </Button>
                          </CardFooter>
                      </Card>
                  ))}
              </div>
               <div className="text-center mt-8">
                    <p className="text-muted-foreground text-sm">Need a custom solution? <Link href="/contact" className="text-primary font-semibold underline">Contact us for a tailored proposal</Link>.</p>
                </div>
          </div>
      </motion.section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-white relative">
        <motion.div className="max-w-4xl mx-auto px-6 text-center" {...fadeIn}>
          <h2 className="text-4xl md:text-5xl font-semibold text-black tracking-tight mb-6">Ready to Grow on Autopilot?</h2>
          <p className="text-lg text-neutral-500 mb-10">Schedule a free discovery call to learn how our expert account management can help you scale your Amazon business faster.</p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#E53935] text-white hover:bg-[#C62828] rounded-full">
                <Link href="/schedule-call">Book My Free Call</Link>
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-neutral-600 mt-4">
              <a href="tel:+13463804251" className="flex items-center gap-2 hover:text-primary">
                <Phone className="h-4 w-4" />
                +1 (346) 380-4251
              </a>
              <a href="mailto:management@amazonsolutionspro.com" className="flex items-center gap-2 hover:text-primary">
                <Mail className="h-4 w-4" />
                management@amazonsolutionspro.com
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
