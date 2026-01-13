
'use client';

import { Button } from '@/components/ui/button';
import {
  ShieldCheck,
  Check,
  Star,
  Phone,
  Mail,
  Calculator,
  FileText,
  Map,
  Clock,
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import PageHeader from '@/components/page-header';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.5 },
};

const whyAutomate = [
    {
        icon: ShieldCheck,
        title: 'Avoid Costly Penalties',
        description: 'Sales tax laws are complex and constantly changing. Automation ensures accurate calculations and on-time filings, helping you avoid penalties.',
    },
    {
        icon: Clock,
        title: 'Save Dozens of Hours',
        description: 'Stop spending time manually tracking sales, calculating rates across thousands of jurisdictions, and filing returns.',
    },
    {
        icon: Map,
        title: 'Manage Multi-State Nexus',
        description: 'Economic nexus means you could owe sales tax in states where you have no physical presence. Our service tracks your nexus obligations.',
    },
    {
        icon: FileText,
        title: 'Simplify Filing',
        description: 'We handle the registration in each state and automate the preparation and filing of all your sales tax returns.',
    },
];

const serviceIncludes = [
  'Economic nexus analysis to determine where you owe taxes.',
  'Sales tax permit registration in all required states.',
  'Automated, real-time sales tax calculation at checkout.',
  'Automated preparation and filing of all state and local returns.',
  'Management of all remittances to tax authorities.',
  'A central dashboard to monitor your compliance status.',
];

const processSteps = [
    { number: 1, title: 'Connect Your Store', description: 'We connect to your Amazon account and any other sales channels to monitor your sales volume in real-time.' },
    { number: 2, title: 'Nexus Analysis', description: 'Our system automatically tracks your sales against economic nexus thresholds in every state.'},
    { number: 3, title: 'Registration & Filing', description: 'We register you for sales tax permits where required and automate the filing of your returns.' },
    { number: 4, title: 'Monitor & Comply', description: 'You get a clear view of your compliance status from a single dashboard while we handle the rest.' },
];

export default function SalesTaxCompliancePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section {...fadeIn} className="bg-card border-b pt-16">
        <div className="container mx-auto px-6 py-20 text-center">
          <PageHeader 
            title="Sales Tax Compliance for E-commerce"
            description="Navigate the complexities of US sales tax with our automated compliance solutions. We handle nexus tracking, registration, filing, and remittance."
          />
          <div className="flex justify-center gap-4 mt-8">
            <Button asChild size="lg" className="bg-[#E53935] text-white hover:bg-[#C62828] rounded-full">
              <Link href="#">Get a Free Nexus Analysis</Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Why Section */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Stop Worrying About Sales Tax</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {whyAutomate.map((point) => (
              <Card key={point.title} className="bg-transparent border-0 shadow-none">
                <CardHeader className="flex-row items-start gap-4 p-4">
                  <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center text-primary shrink-0">
                    <point.icon className="w-6 h-6" strokeWidth="1.5" />
                  </div>
                  <div>
                    <CardTitle>{point.title}</CardTitle>
                    <CardDescription className="mt-1">{point.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Service Section */}
      <motion.section {...fadeIn} className="py-24 bg-card border-y">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-bold font-headline text-foreground mb-4">Our All-in-One Sales Tax Service</h2>
                <p className="text-muted-foreground mb-8">
                 From nexus tracking to automated filing, we provide a complete, hands-off solution for US sales tax compliance.
                </p>
                <ul className="space-y-3">
                {serviceIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 shrink-0 mt-1"/>
                        <span className="text-sm text-foreground">{item}</span>
                    </li>
                ))}
                </ul>
            </div>
            <Card className="bg-white p-8 rounded-lg shadow-lg border">
              <CardTitle className="text-2xl font-bold font-headline text-foreground mb-2">Sales Tax Automation</CardTitle>
              <p className="text-5xl font-bold text-foreground mb-2">From $99</p>
              <p className="text-muted-foreground mb-4">per month</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Pricing is based on the number of states where you have nexus and require filing.</p>
              </div>
              <Button asChild size="lg" className="w-full mt-6 bg-[#E53935] text-white hover:bg-[#C62828] rounded-full">
                  <Link href="#">Get a Custom Quote</Link>
              </Button>
          </Card>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">How It Works</h2>
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
      
      {/* CTA Section */}
      <section id="contact" className="py-24 bg-card border-t relative">
        <motion.div className="max-w-4xl mx-auto px-6 text-center" {...fadeIn}>
          <h2 className="text-4xl md:text-5xl font-semibold text-black tracking-tight mb-6">Automate Your Sales Tax Today</h2>
          <p className="text-lg text-neutral-500 mb-10">Get a free, no-obligation analysis of your sales tax nexus and see how our automated service can save you time and money.</p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#E53935] text-white hover:bg-[#C62828] rounded-full">
                <Link href="#">Start My Free Analysis</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
