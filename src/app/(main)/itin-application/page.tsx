
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
    BadgeDollarSign,
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

const whyItinPoints = [
    {
        icon: Store,
        title: 'Amazon Tax Reporting',
        description: 'ITIN is required for Amazon sellers who need to file US tax returns, claim tax treaty benefits, or report US-source income from Amazon sales.',
    },
    {
        icon: BadgeDollarSign,
        title: 'Claim Tax Treaty Benefits',
        description: 'ITIN allows you to claim tax treaty benefits between your country and the US, potentially reducing withholding taxes on your Amazon earnings.',
    },
    {
        icon: FileText,
        title: 'US Tax Return Filing',
        description: 'Required for filing US federal tax returns (Form 1040-NR) to report Amazon income, claim refunds, or comply with US tax obligations.',
    },
    {
        icon: Landmark,
        title: 'Banking & Financial Services',
        description: 'ITIN enables opening US bank accounts, applying for business credit, and accessing various financial services for your Amazon business.',
    },
    {
        icon: BadgeCheck,
        title: 'Business Credibility',
        description: 'ITIN provides legitimacy to your US business activities and demonstrates compliance with US tax requirements.',
    },
];

const includedItems = [
    "Complete Form W-7 preparation",
    "IRS Certified Acceptance Agent (CAA) services",
    "Federal tax return completion (if required)",
    "Complete application package submission",
    "Application progress monitoring",
    "All IRS correspondence handling",
    "ITIN notification and documentation",
    "Ongoing ITIN-related questions and support",
];

const processSteps = [
    { number: 1, title: 'Eligibility & Documents', description: 'We assess your ITIN eligibility and help you gather all required documents for the application.', time: '1-2 days' },
    { number: 2, title: 'IRS Certified Authentication', description: 'As IRS Certified Acceptance Agents, we authenticate your documents and complete Form W-7 professionally.', time: 'Same day' },
    { number: 3, title: 'Application Submission', description: 'We submit your complete ITIN application package to the IRS with proper documentation and tracking.', time: 'Same day' },
    { number: 4, title: 'ITIN Issuance & Support', description: 'We track your application progress and provide your ITIN once issued by the IRS.', time: '6-11 weeks' },
];

const successStories = [
    {
        testimonial: "Professional service made everything easy. ITIN approved quickly and tax refund was bonus!",
        author: "Ahmed R.",
        business: "Pakistani Amazon Seller",
        rating: 5,
    },
    {
        testimonial: "Complex situation handled perfectly. ITIN approval was smooth and professional throughout!",
        author: "Sarah M.",
        business: "UK Business Owner",
        rating: 5,
    },
    {
        testimonial: "Student ITIN process was confusing but they made it simple. Excellent service and results!",
        author: "David L.",
        business: "Canadian Student",
        rating: 5,
    },
];


export default function ItinApplicationPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section {...fadeIn} className="bg-card border-b pt-16">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">
            ITIN Application Service for Amazon Sellers
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Professional ITIN application service for non-US Amazon sellers. IRS Certified Acceptance Agent (CAA) with 99% approval rate. Fast processing, document authentication, and complete application support.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="#">Apply for ITIN</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full bg-white">
              <Link href="#">Free ITIN Assessment</Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Why ITIN Section */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Why Amazon Sellers Need an ITIN</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyItinPoints.map((point) => (
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
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold font-headline text-foreground mb-4">Complete ITIN Application Service</h2>
            <p className="text-muted-foreground mb-8">
              We are IRS Certified Acceptance Agents (CAA) and handle the entire ITIN application process for you.
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
              <p className="text-5xl font-bold text-foreground mb-2">$299</p>
              <p className="text-muted-foreground mb-4">(Complete Service)</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong>Timeline:</strong> 6-11 weeks average</p>
                  <p><strong>Success Rate:</strong> 99% approval</p>
                  <p><strong>Guarantee:</strong> Free re-file if rejected due to our error</p>
              </div>
              <Button asChild size="lg" className="w-full mt-6">
                  <Link href="#">Get Started Now</Link>
              </Button>
          </Card>
        </div>
      </motion.section>

      {/* ITIN Process */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold font-headline text-foreground">Our 4-Step ITIN Application Process</h2>
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

       {/* Requirements Section */}
      <motion.section {...fadeIn} className="py-24 bg-card border-y">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Who Needs an ITIN & What are the Requirements?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white p-6">
              <CardHeader>
                <CardTitle>Who Needs an ITIN?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/>Non-US Amazon Sellers with US tax obligations</li>
                  <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/>International business owners with US-source income</li>
                  <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/>Non-resident aliens filing US tax returns</li>
                  <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/>Dependents or spouses of US taxpayers</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white p-6">
              <CardHeader>
                <CardTitle>Document Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">The simplest way is to provide a valid foreign passport. Alternatively, you can provide a combination of other official documents.</p>
                 <p className="text-sm font-semibold text-foreground">Primary Document (1 required):</p>
                 <p className="text-sm text-muted-foreground mb-4">Valid Foreign Passport</p>
                 <p className="text-sm font-semibold text-foreground">Or Secondary Documents (2 required):</p>
                 <p className="text-sm text-muted-foreground">National ID Card, Foreign Driver's License, Birth Certificate, etc.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Success Stories */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">ITIN Application Success Stories</h2>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <Card key={story.author} className="bg-card flex flex-col border">
                <CardHeader>
                    <div className="flex text-yellow-400">
                        {[...Array(story.rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                    </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4 italic">"{story.testimonial}"</p>
                </CardContent>
                <CardFooter>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{story.author}</p>
                    <p className="text-xs text-muted-foreground">{story.business}</p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <section id="contact" className="py-24 bg-card border-t relative">
        <motion.div className="max-w-4xl mx-auto px-6 text-center" {...fadeIn}>
          <h2 className="text-4xl md:text-5xl font-semibold text-black tracking-tight mb-6">Ready to Get Your ITIN?</h2>
          <p className="text-lg text-neutral-500 mb-10">Don't struggle with the complex ITIN application process. Let our IRS Certified Acceptance Agents handle everything for you with guaranteed results.</p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="#">Apply for ITIN Now</Link>
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
              <a href="mailto:itin@amazonsolutionspro.com" className="flex items-center gap-2 hover:text-primary">
                <Mail className="h-4 w-4" />
                itin@amazonsolutionspro.com
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
