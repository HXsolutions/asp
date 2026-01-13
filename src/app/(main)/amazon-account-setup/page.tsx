
'use client';

import PageHeader from '@/components/page-header';
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
  ThumbsUp,
  FastForward,
  Lock,
  BarChart,
  MessageSquare,
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.5 },
};

const whyProfessionalSetupPoints = [
    {
        icon: ThumbsUp,
        title: 'Maximum Approval Chances',
        description: 'Our optimized process ensures the highest approval rates. We know what Amazon looks for and prepare your application accordingly.',
    },
    {
        icon: FastForward,
        title: 'Quick Account Activation',
        description: 'Get approved in 24-48 hours instead of waiting weeks. We expedite the process and handle issues immediately.',
    },
    {
        icon: Lock,
        title: 'Prevent Account Issues',
        description: 'Incorrect setup is the #1 cause of suspensions. We ensure everything is done right the first time to avoid future problems.',
    },
    {
        icon: Store,
        title: 'Access Restricted Categories',
        description: 'We help get approval for high-margin restricted categories like beauty, grocery, and health products.',
    },
    {
        icon: BadgeCheck,
        title: 'Brand Registry Preparation',
        description: 'We set up your account properly for future Brand Registry application, saving you time and hassle later.',
    },
];

const includedItems = [
    { text: "Account Creation & Optimization" },
    { text: "Verification Assistance" },
    { text: "Category Approval (up to 3)" },
    { text: "Tax Interview Guidance" },
    { text: "Banking Setup Assistance" },
    { text: "Brand Registry Preparation" },
    { text: "Account Settings Optimization" },
    { text: "30-Day Post-Setup Support" },
];

const setupSteps = [
    { number: 1, title: 'Gather Required Documents', description: 'We provide an exact list of documents needed and help prepare them properly.', time: '1-2 days' },
    { number: 2, title: 'Professional Account Creation', description: 'We create your seller account with optimized settings and professional configuration.', time: 'Same day' },
    { number: 3, title: 'Verification & Approval', description: 'We guide you through Amazon\'s verification process and handle any issues that arise.', time: '1-3 days' },
    { number: 4, title: 'Optimization & Handover', description: 'We optimize all settings and provide training on using your new account effectively.', time: 'Same day' },
];

const marketplaces = [
    { name: "USA", flag: "🇺🇸", description: "Largest marketplace, access to 300M+ customers." },
    { name: "UK", flag: "🇬🇧", description: "Gateway to Europe, strong purchasing power." },
    { name: "EU", flag: "🇪🇺", description: "Access Germany, France, Spain, Italy. 200M+ customers." },
    { name: "Canada", flag: "🇨🇦", description: "North American expansion with NAFTA benefits." },
];

const gatedCategories = [
    "Beauty & Personal Care",
    "Grocery & Gourmet Food",
    "Health & Household",
    "Jewelry",
    "Watches",
    "Toys & Games (seasonal)",
    "Clothing & Accessories",
];

const successStories = [
    {
        quote: "Professional setup made all the difference. Account approved in 36 hours, got the category approvals I needed, and Brand Registry went smoothly. Worth every penny!",
        author: "Jennifer K.",
        business: "Beauty Brand",
        rating: 5,
    },
    {
        quote: "As an international seller, I was worried about US account setup. They handled everything perfectly - EIN, banking, verification. Started selling within a week!",
        author: "Carlos M.",
        business: "Electronics Brand",
        rating: 5,
    },
    {
        quote: "Multi-marketplace setup was seamless. Now selling in US, UK, and Germany. Their coordinated approach saved me months of work and confusion.",
        author: "Sarah L.",
        business: "Home Goods Brand",
        rating: 5,
    },
];

export default function AmazonAccountSetupPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section {...fadeIn} className="bg-card border-b pt-16">
        <div className="container mx-auto px-6 py-20 text-center">
          <Badge variant="secondary" className="mb-4">Amazon Seller Services</Badge>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">
            Amazon Seller Account Setup
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Professional Amazon seller account setup with optimization for maximum approval chances. Includes verification assistance, category approval, and Brand Registry preparation.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="bg-[#E53935] text-white hover:bg-[#C62828] rounded-full shadow-lg shadow-red-500/20">
              <Link href="/contact">Setup My Account</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full bg-white">
              <Link href="/contact">Free Assessment</Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Why Professional Setup Section */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Why Use a Professional Setup Service?</h2>
            <p className="text-muted-foreground mt-2">Incorrect setup is the #1 cause of new account suspensions. We get it right the first time.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyProfessionalSetupPoints.map((point) => (
              <div key={point.title} className="text-center">
                <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center text-[#E53935] mx-auto mb-6">
                  <point.icon className="w-8 h-8" strokeWidth="1.5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{point.title}</h3>
                <p className="text-muted-foreground text-sm">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Main Service Section */}
      <motion.section {...fadeIn} className="py-24 bg-card border-y">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold font-headline text-foreground mb-4">Complete Amazon Account Setup</h2>
            <p className="text-muted-foreground mb-8">
              We handle your entire seller account creation process, optimized for a 98% approval rate.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {includedItems.map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0"/>
                  <span className="text-foreground text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <Card className="bg-white p-8 rounded-lg shadow-lg border">
              <CardTitle className="text-2xl font-bold font-headline text-foreground mb-2">One-Time Fee</CardTitle>
              <p className="text-5xl font-bold text-foreground mb-2">$499</p>
              <p className="text-muted-foreground mb-4">(Complete Professional Setup)</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong>Timeline:</strong> 24-48 hours approval</p>
                  <p><strong>Success Rate:</strong> 98% first-time approval</p>
                  <p><strong>Guarantee:</strong> Free re-setup if rejected</p>
              </div>
              <Button asChild size="lg" className="w-full mt-6 bg-[#E53935] text-white hover:bg-[#C62828] rounded-full">
                  <Link href="/contact">Get Started Now</Link>
              </Button>
          </Card>
        </div>
      </motion.section>

      {/* Setup Process */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold font-headline text-foreground">Our 4-Step Setup Process</h2>
            </div>
            <div className="relative grid md:grid-cols-4 gap-8">
                <div className="absolute top-8 left-0 w-full h-0.5 bg-border hidden md:block"></div>
                {setupSteps.map((step) => (
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

      {/* Account Types */}
       <motion.section {...fadeIn} className="py-24 bg-card border-y">
          <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold font-headline text-foreground">Individual vs. Professional Account</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white flex flex-col">
                    <CardHeader>
                        <CardTitle>Individual Account</CardTitle>
                        <CardDescription>Best for beginners and low-volume sellers testing the waters.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-3xl font-bold mb-2">$299 <span className="text-sm font-normal text-muted-foreground">Setup Fee</span></p>
                        <p className="text-sm text-muted-foreground mb-4">Amazon charges $0/month + $0.99 per item sold.</p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Basic selling tools</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Single user setup</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Standard listing tools</span></li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <Button variant="outline" asChild className="w-full">
                            <Link href="/contact">Select Individual</Link>
                        </Button>
                    </CardFooter>
                </Card>
                <Card className="bg-white flex flex-col border-primary border-2">
                    <CardHeader>
                        <Badge className="w-fit bg-primary">Most Popular</Badge>
                        <CardTitle className="pt-2">Professional Account</CardTitle>
                        <CardDescription>For serious businesses aiming for high volume and brand building.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-3xl font-bold mb-2">$499 <span className="text-sm font-normal text-muted-foreground">Setup Fee</span></p>
                        <p className="text-sm text-muted-foreground mb-4">Amazon charges $39.99/month, no per-item fee.</p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                           <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Advanced selling & advertising tools</span></li>
                           <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Eligibility for Brand Registry</span></li>
                           <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Bulk listing and API access</span></li>
                        </ul>
                    </CardContent>
                     <CardFooter>
                        <Button asChild className="w-full">
                            <Link href="/contact">Select Professional</Link>
                        </Button>
                    </CardFooter>
                </Card>
              </div>
          </div>
      </motion.section>

      {/* Other Features */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
            <div>
                <h3 className="text-2xl font-bold font-headline text-foreground mb-4">Multi-Marketplace Setup</h3>
                <p className="text-muted-foreground mb-6">Expand your reach globally. We offer coordinated account setup for major Amazon marketplaces.</p>
                <div className="space-y-4">
                    {marketplaces.map(m => (
                        <div key={m.name} className="flex gap-4 items-center">
                            <span className="text-2xl">{m.flag}</span>
                            <div>
                                <p className="font-semibold">{m.name}</p>
                                <p className="text-sm text-muted-foreground">{m.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
             <div>
                <h3 className="text-2xl font-bold font-headline text-foreground mb-4">Restricted Category Ungating</h3>
                <p className="text-muted-foreground mb-6">Gain access to profitable, gated categories. Our service includes application and documentation support with an 85% success rate.</p>
                <div className="flex flex-wrap gap-2">
                    {gatedCategories.map(cat => (
                        <Badge key={cat} variant="secondary">{cat}</Badge>
                    ))}
                </div>
            </div>
        </div>
      </motion.section>

       {/* Success Stories */}
       <motion.section {...fadeIn} className="py-24 bg-card border-y">
          <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-semibold tracking-tight mb-16 text-center text-foreground">Account Setup Success Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {successStories.map(t => (
                      <Card key={t.author} className="bg-white border flex flex-col justify-between">
                          <CardHeader>
                              <div className="flex text-yellow-400">
                                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                              </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground mb-6 italic">"{t.quote}"</p>
                          </CardContent>
                          <CardFooter>
                            <div>
                                <div className="text-sm font-semibold text-foreground">{t.author}</div>
                                <div className="text-xs text-muted-foreground">{t.business}</div>
                            </div>
                          </CardFooter>
                      </Card>
                  ))}
              </div>
          </div>
      </motion.section>

      {/* Final CTA */}
      <section id="contact" className="py-24 bg-white relative">
        <motion.div className="max-w-4xl mx-auto px-6 text-center" {...fadeIn}>
          <h2 className="text-4xl md:text-5xl font-semibold text-black tracking-tight mb-6">Ready to Start Selling on Amazon?</h2>
          <p className="text-lg text-neutral-500 mb-10">Don't risk account rejection or suspension with DIY setup. Let our experts handle your Amazon account setup professionally.</p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#E53935] text-white hover:bg-[#C62828] transition-all rounded-full shadow-lg shadow-red-500/20 px-8 py-4">
                <Link href="/contact">Setup My Amazon Account</Link>
              </Button>
            </div>
             <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-neutral-600 mt-4">
                <a href="tel:+13463804251" className="flex items-center gap-2 hover:text-[#E53935]">
                  <Phone className="h-4 w-4" />
                  +1 (346) 380-4251
                </a>
                <a href="mailto:support@amazonsolutionspro.com" className="flex items-center gap-2 hover:text-[#E53935]">
                  <Mail className="h-4 w-4" />
                  support@amazonsolutionspro.com
                </a>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
