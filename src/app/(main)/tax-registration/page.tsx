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
  MessageSquare,
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

const whyTaxRegistrationPoints = [
    {
        icon: ShieldCheck,
        title: 'Meet Legal Obligations',
        description: 'Proper tax registration is legally required for Amazon sellers. Avoid penalties, account suspensions, and legal issues with professional tax setup.',
    },
    {
        icon: BadgeDollarSign,
        title: 'Claim Tax Benefits',
        description: 'Professional registration ensures you can claim tax treaty benefits, input tax credits, and reduce overall tax burden legally.',
    },
    {
        icon: Store,
        title: 'Protect Your Amazon Account',
        description: 'Tax compliance issues can lead to Amazon account suspensions, payment holds, and loss of selling privileges.',
    },
    {
        icon: BadgeCheck,
        title: 'Professional Business Status',
        description: 'Proper tax registration enhances your professional credibility with customers, suppliers, and financial institutions.',
    },
    {
        icon: Globe,
        title: 'Global Market Access',
        description: 'Multi-jurisdictional tax registration enables expansion to international Amazon marketplaces with proper tax compliance.',
    },
];

const taxServices = [
  {
    title: 'US Tax Registration',
    price: 'From $199',
    description: 'Complete US tax registration including EIN, ITIN, and state tax setup for Amazon sellers.',
    includes: [
      'EIN Registration - Federal tax ID number setup',
      'ITIN Application - Individual taxpayer identification',
      'Sales Tax Registration - Multi-state sales tax permits',
      'State Tax Setup - State-specific tax registrations',
      'Tax Treaty Benefits - Treaty claim assistance',
      'IRS Communication - All IRS correspondence handling',
    ],
  },
  {
    title: 'UK Tax Registration',
    price: 'From £299',
    description: 'Complete UK tax registration including VAT, corporation tax, and business tax setup.',
    includes: [
      'VAT Registration - HMRC VAT setup',
      'Corporation Tax - CT registration and setup',
      'PAYE Registration - Payroll tax setup (if needed)',
      'Business Number - HMRC business number setup',
      'VAT MOSS - Digital services VAT (if applicable)',
      'HMRC Communication - All HMRC correspondence handling',
    ],
  },
  {
    title: 'Canada Tax Registration',
    price: 'From CAD $399',
    description: 'Complete Canadian tax registration including GST/HST, business number, and provincial tax setup.',
    includes: [
      'GST/HST Registration - CRA GST/HST setup',
      'Business Number - CRA business number registration',
      'PST/QST Registration - Provincial sales tax setup',
      'Payroll Deductions - Payroll tax registration (if needed)',
      'Import/Export Accounts - Customs and duty accounts',
      'CRA Communication - All CRA correspondence handling',
    ],
  },
  {
    title: 'Multi-Jurisdiction Tax Setup',
    price: 'From $599',
    description: 'Tax registration across multiple countries with coordinated global compliance.',
    includes: [
      'Multi-Country Setup - Coordinated tax registrations',
      'Cross-Border Compliance - International tax coordination',
      'Tax Treaty Claims - Treaty benefit applications',
      'Currency Management - Multi-currency tax handling',
      'Global Coordination - Jurisdiction-specific requirements',
      'Centralized Management - Single point of contact',
    ],
  },
];

const processSteps = [
    { number: 1, title: 'Comprehensive Tax Analysis', description: 'We analyze your business, determine tax obligations, and create an optimal registration strategy.' },
    { number: 2, title: 'Complete Documentation', description: 'We prepare all required documents, forms, and supporting materials for tax registration.' },
    { number: 3, title: 'Professional Registration Submission', description: 'We submit complete registration applications to relevant tax authorities with proper documentation.' },
    { number: 4, title: 'Account Setup & Verification', description: 'We complete account setup, verify registrations, and provide you with all tax account information.' },
];

const pricingTiers = [
    { name: "Single Jurisdiction", price: "$299", for: "One country tax registration", features: ["One tax type registration", "Complete documentation", "Government submission", "Basic support"], popular: false },
    { name: "Multi-Tax Package", price: "$499", for: "Multiple tax types in one country", features: ["Multiple tax registrations", "Complete documentation package", "Government submissions", "Priority support"], popular: true },
    { name: "Multi-Country Package", price: "$799", for: "Tax registration in multiple countries", features: ["Multiple country registrations", "Coordinated setup", "Cross-border compliance", "Dedicated support"], popular: false },
];

const successStories = [
    {
        client: 'Jennifer K. (USA)',
        challenge: 'Sales tax nexus in 12 states',
        solution: 'Multi-state sales tax registration program',
        results: 'Registered in all 12 states within 2 weeks. $8,000 in penalties avoided. Amazon compliance achieved.',
        testimonial: "Multi-state tax registration was overwhelming. They handled everything perfectly across all states!",
        rating: 5
    },
    {
        client: 'Carlos M. (Spain)',
        challenge: 'UK VAT registration for Amazon UK expansion',
        solution: 'Complete UK tax registration package',
        results: 'VAT registration completed in 5 days. Amazon UK account approved. EU expansion enabled.',
        testimonial: "UK VAT registration was smooth and professional. Enabled our EU expansion perfectly!",
        rating: 5
    },
    {
        client: 'Sarah L. (Global)',
        challenge: 'Tax registration across 5 countries',
        solution: 'Global tax registration program',
        results: 'Tax registration in US, UK, Canada, Germany, Australia. Coordinated compliance achieved.',
        testimonial: "Global tax setup was complex but they made it seamless. Perfect coordination across all countries!",
        rating: 5
    }
];

export default function TaxRegistrationPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section {...fadeIn} className="bg-card border-b pt-16">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">
            Tax Registration Services for Amazon Sellers
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Professional tax registration services: EIN, ITIN, VAT, GST/HST, sales tax, and worldwide tax compliance. Set up tax accounts correctly and maintain compliance across all jurisdictions.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="#">Start Tax Registration</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full bg-white">
              <Link href="#">Free Tax Assessment</Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Why Tax Registration Section */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Why Professional Tax Registration Matters</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyTaxRegistrationPoints.map((point) => (
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

      {/* Tax Services Section */}
      <motion.section {...fadeIn} className="py-24 bg-card border-y">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Complete Tax Registration Services</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {taxServices.map((service) => (
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
            <h2 className="text-3xl font-bold font-headline text-foreground">Our Professional Tax Registration Process</h2>
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
                  <h2 className="text-3xl font-bold font-headline text-foreground">Transparent Tax Registration Pricing</h2>
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
                            <p className="text-4xl font-bold">{tier.price}<span className="text-sm font-normal text-muted-foreground">/pkg</span></p>
                            <ul className="space-y-2 text-sm text-muted-foreground mt-6">
                                {tier.features.map(feature => <li key={feature} className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>{feature}</span></li>)}
                            </ul>
                          </CardContent>
                          <CardFooter>
                              <Button variant={tier.popular ? "default" : "outline"} asChild className="w-full">
                                  <Link href="#">Select Plan</Link>
                              </Button>
                          </CardFooter>
                      </Card>
                  ))}
              </div>
          </div>
      </motion.section>

      {/* Success Stories Section */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Tax Registration Success Stories</h2>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <Card key={story.client} className="bg-card flex flex-col border">
                <CardHeader>
                    <div className="flex text-yellow-400">
                        {[...Array(story.rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                    </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4 italic">"{story.testimonial}"</p>
                  <p className="text-sm"><span className="font-semibold text-foreground">Result:</span> <span className="text-muted-foreground">{story.results}</span></p>
                </CardContent>
                <CardFooter>
                  <p className="font-semibold text-foreground text-sm">{story.client}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-card border-t relative">
        <motion.div className="max-w-4xl mx-auto px-6 text-center" {...fadeIn}>
          <h2 className="text-4xl md:text-5xl font-semibold text-black tracking-tight mb-6">Ready to Set Up Your Tax Registration?</h2>
          <p className="text-lg text-neutral-500 mb-10">Don't let tax registration complexities hold back your business. Let our tax experts handle all your tax registrations professionally and efficiently.</p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="#">Start Tax Registration</Link>
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
              <a href="mailto:tax@amazonsolutionspro.com" className="flex items-center gap-2 hover:text-primary">
                <Mail className="h-4 w-4" />
                tax@amazonsolutionspro.com
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

    