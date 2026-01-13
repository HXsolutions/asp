
'use client';

import { Button } from '@/components/ui/button';
import {
  ShieldCheck,
  Check,
  Mail,
  Phone,
  Globe,
  BadgeCheck,
  Clock,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.5 },
};

const whyEuTrademarkPoints = [
    {
        icon: Globe,
        title: 'Protect Across 27 EU Countries',
        description: 'One EU trademark registration protects your brand across all 27 EU countries including major Amazon markets: UK, Germany, France, Italy, Spain, Netherlands, Poland, and more.',
    },
    {
        icon: BadgeCheck,
        title: 'Unlock EU Brand Registry',
        description: 'EU trademark gives you access to Amazon Brand Registry across all EU marketplaces with A+ Content, Sponsored Brands, and enhanced protection tools.',
    },
    {
        icon: ShieldCheck,
        title: 'More Affordable Than Individual Filings',
        description: 'One EU trademark is significantly more cost-effective than filing separate trademarks in each EU country - save thousands in fees and legal costs.',
    },
    {
        icon: Clock,
        title: 'Quick Registration Timeline',
        description: 'EU trademark registration typically takes 4-6 months - much faster than many individual country registrations, with Fast Track options available.',
    },
    {
        icon: ArrowRight,
        title: 'Future EU Expansion Ready',
        description: 'Your EU trademark automatically covers new EU member states, future-proofing your brand protection as the EU expands.',
    },
];

const includedItems = [
    "Comprehensive EU Trademark Search - EUIPO database + common law search",
    "Application Preparation - Professional EUIPO application drafting",
    "EUIPO Filing - Electronic filing with appropriate fees",
    "Examination Handling - Response to EUIPO examination (if needed)",
    "Amazon EU Brand Registry Support - All EU marketplaces setup",
    "Registration Certificate - Final registration documentation",
    "1-Year Monitoring - Trademark watching service included",
    "Lifetime Support - Ongoing questions and guidance",
];

const processSteps = [
    { number: 1, title: 'Professional EU Search', description: 'We search EUIPO database and common law sources across all 27 EU countries to assess availability and identify potential conflicts.', time: '2-3 days' },
    { number: 2, title: 'Professional EU Application', description: 'We prepare your EUIPO application with proper classifications, descriptions, and supporting documentation for EU-wide registration.', time: '3-5 days' },
    { number: 3, title: 'EUIPO Review Process', description: 'EUIPO examining attorney reviews application for registrability and searches for conflicting marks across all EU countries.', time: '2-4 weeks' },
    { number: 4, title: 'Publication & Opposition Period', description: 'Your mark is published for opposition. We monitor for oppositions and handle any that arise.', time: '3 months' },
    { number: 5, title: 'Registration & EU Setup', description: 'Once approved, you receive registration certificate and we provide EU marketplace setup support.', time: '2-3 months' },
];

const comparisonData = [
    { feature: 'Coverage', eu: '27 countries', uk: '1 country', individual: '1 country each' },
    { feature: 'Cost', eu: '€899 total', uk: '€899 each', individual: '€899+ each' },
    { feature: 'Timeline', eu: '4-6 months', uk: '4-6 months', individual: 'Varies' },
    { feature: 'Amazon Access', eu: 'All EU markets', uk: 'UK only', individual: '1 market each' },
    { feature: 'Management', eu: 'Single registration', uk: 'Single registration', individual: 'Multiple registrations' },
    { feature: 'Future-Proof', eu: 'New EU members', uk: 'No', individual: 'No' },
];


export default function EuTrademarkPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section {...fadeIn} className="bg-card border-b pt-16">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">
            EU Trademark Registration for Amazon Sellers
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Complete EU trademark registration with EUIPO. Professional trademark search, application filing, and Amazon Brand Registry support for Europe-wide protection in UK, Germany, France, Italy, Spain, Netherlands and all EU markets.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="bg-[#E53935] text-white hover:bg-[#C62828] rounded-full shadow-lg shadow-red-500/20">
              <Link href="#">Register EU Trademark</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full bg-white">
              <Link href="#">Free EU Trademark Search</Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Why EU Trademark Section */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Why Amazon Sellers Need EU Trademark</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyEuTrademarkPoints.map((point) => (
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
            <h2 className="text-3xl font-bold font-headline text-foreground mb-4">Complete EU Trademark Registration</h2>
            <p className="text-muted-foreground mb-8">
              We handle your entire EUIPO trademark registration, including all documentation and Brand Registry support.
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
              <p className="text-5xl font-bold text-foreground mb-2">€899</p>
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
                <h2 className="text-3xl font-bold font-headline text-foreground">EUIPO Registration Process - 5 Simple Steps</h2>
            </div>
            <div className="relative grid md:grid-cols-5 gap-8">
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

      {/* Coverage Map */}
      <motion.section {...fadeIn} className="py-24 bg-card border-y">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">EU Trademark Protection Coverage</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">Major Amazon Markets Covered:</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">🇬🇧 United Kingdom - Amazon.co.uk (post-Brexit separate protection needed)</li>
                <li className="flex items-center gap-2">🇩🇪 Germany - Amazon.de (largest EU market)</li>
                <li className="flex items-center gap-2">🇫🇷 France - Amazon.fr (major EU market)</li>
                <li className="flex items-center gap-2">🇮🇹 Italy - Amazon.it (significant EU market)</li>
                <li className="flex items-center gap-2">🇪🇸 Spain - Amazon.es (growing EU market)</li>
                <li className="flex items-center gap-2">🇳🇱 Netherlands - Amazon.nl (expanding market)</li>
                <li className="flex items-center gap-2">🇵🇱 Poland - Amazon.pl (emerging market)</li>
                <li className="flex items-center gap-2">🇸🇪 Sweden - Amazon.se (Nordic market)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">All 27 EU Countries Protected:</h3>
              <p className="text-muted-foreground text-sm">Western Europe: Germany, France, Netherlands, Belgium, Austria, Ireland, Luxembourg. Southern Europe: Italy, Spain, Portugal, Greece, Malta, Cyprus. Eastern Europe: Poland, Czech Republic, Hungary, Slovakia, Slovenia, Croatia, Romania, Bulgaria. Nordic Countries: Sweden, Finland, Denmark, Estonia, Latvia, Lithuania.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Pricing Section */}
       <motion.section {...fadeIn} className="py-24">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold font-headline text-foreground">Transparent EU Trademark Pricing</h2>
                </div>
                <div className="max-w-2xl mx-auto">
                    <Card className="border-2 border-primary rounded-lg p-8 bg-white shadow-lg flex flex-col">
                         <Badge className="w-fit bg-primary mb-2">Most Popular</Badge>
                        <CardTitle className="text-2xl font-bold font-headline text-foreground">Complete Package</CardTitle>
                        <div className="flex items-baseline gap-2">
                             <p className="text-5xl font-bold text-foreground my-4">€899</p>
                        </div>
                        <p className="text-sm text-muted-foreground mb-6">Total Value: €865. Your Price includes EUIPO fees.</p>
                        <ul className="space-y-2 text-sm text-muted-foreground mb-6 flex-grow">
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>EU-wide trademark search and analysis</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>EUIPO application filing (includes €850 government fee)</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Examination period handling</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Opposition defense (if needed)</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Amazon EU Brand Registry setup (all marketplaces)</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Registration certificate</span></li>
                             <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>1-year trademark monitoring</span></li>
                             <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Lifetime support</span></li>
                        </ul>
                        <Button asChild size="lg" className="w-full bg-primary text-primary-foreground">
                            <Link href="#">Start My EU Trademark</Link>
                        </Button>
                    </Card>
                </div>
            </div>
      </motion.section>

      {/* Comparison Table */}
        <motion.section {...fadeIn} className="py-24 bg-card border-y">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold font-headline text-foreground">EU Trademark vs Other Options</h2>
                </div>
                <Card>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Feature</TableHead>
                                <TableHead>EU Trademark</TableHead>
                                <TableHead>UK Trademark</TableHead>
                                <TableHead>Individual Countries</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {comparisonData.map((row) => (
                                <TableRow key={row.feature}>
                                    <TableCell className="font-medium">{row.feature}</TableCell>
                                    <TableCell>{row.eu}</TableCell>
                                    <TableCell>{row.uk}</TableCell>
                                    <TableCell>{row.individual}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Card>
                 <div className="text-center mt-4 text-sm text-muted-foreground">
                    <p>Recommendation: EU trademark is most cost-effective for Amazon sellers targeting European markets.</p>
                </div>
            </div>
        </motion.section>

      {/* Final CTA */}
      <section id="contact" className="py-24 bg-white relative">
        <motion.div className="max-w-4xl mx-auto px-6 text-center" {...fadeIn}>
          <h2 className="text-4xl md:text-5xl font-semibold text-black tracking-tight mb-6">Ready to Protect Your Brand Across Europe?</h2>
          <p className="text-lg text-neutral-500 mb-10">Don't miss out on the massive European Amazon market. Protect your brand across all 27 EU countries with one comprehensive trademark registration.</p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#E53935] text-white hover:bg-[#C62828] transition-all rounded-full shadow-lg shadow-red-500/20 px-8 py-4">
                <Link href="#">Start EU Trademark Registration</Link>
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
