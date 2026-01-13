
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
  Calculator,
  FileText,
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PageHeader from '@/components/page-header';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.5 },
};

const whyProfessionalFiling = [
    {
        icon: ShieldCheck,
        title: 'Ensure 100% Compliance',
        description: 'Avoid costly penalties, interest, and audits. Our experts ensure your tax returns are filed correctly and on time, every time.',
    },
    {
        icon: BadgeDollarSign,
        title: 'Maximize Your Deductions',
        description: 'We specialize in e-commerce and Amazon seller deductions, ensuring you claim every expense you\'re entitled to, from COGS to ad spend.',
    },
    {
        icon: UserCheck,
        title: 'Expertise for Non-US Residents',
        description: 'We navigate complex international tax treaties and filing requirements for non-US sellers to ensure compliance and minimize tax liability.',
    },
    {
        icon: TrendingUp,
        title: 'Strategic Tax Advice',
        description: 'Filing is just the start. We provide year-round advice to help you structure your business for maximum tax efficiency.',
    },
];

const filingServices = [
  {
    title: 'US LLC Tax Filing (Form 1120 & 5472)',
    price: 'From $499/year',
    description: 'For foreign-owned single-member US LLCs. Includes preparation and filing of pro-forma Form 1120 and mandatory Form 5472.',
  },
  {
    title: 'US Corporation Tax Filing (Form 1120-C)',
    price: 'From $799/year',
    description: 'Complete federal and state corporate income tax returns for US C-Corporations, including all schedules.',
  },
  {
    title: 'UK Corporation Tax (CT600)',
    price: 'From £499/year',
    description: 'Preparation and filing of your UK company\'s annual accounts and CT600 Corporation Tax return with HMRC.',
  },
  {
    title: 'Personal Tax Filing (1040-NR)',
    price: 'From $399/year',
    description: 'For non-resident individuals who need to file a US personal tax return to report income from an LLC or other sources.',
  },
];

const processSteps = [
    { number: 1, title: 'Secure Document Upload', description: 'You provide your financial statements and relevant documents through our secure client portal.' },
    { number: 2, title: 'Expert Tax Preparation', description: 'Our CPAs and tax experts prepare your tax returns, optimizing for all available e-commerce deductions.' },
    { number: 3, title: 'Review and E-sign', description: 'We send you the completed tax returns for your review and electronic signature. We\'ll answer any questions you have.' },
    { number: 4, title: 'Filing and Confirmation', description: 'We e-file your returns with the tax authorities (IRS, HMRC, etc.) and provide you with a confirmation receipt for your records.' },
];

export default function AnnualTaxFilingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section {...fadeIn} className="bg-card border-b pt-16">
        <div className="container mx-auto px-6 py-20 text-center">
          <PageHeader 
            title="Annual Tax Filing for E-commerce Businesses"
            description="Stay compliant with our hassle-free annual tax filing services for your US, UK, or Canadian e-commerce company. Specialized expertise for Amazon sellers."
          />
          <div className="flex justify-center gap-4 mt-8">
            <Button asChild size="lg" className="bg-[#E53935] text-white hover:bg-[#C62828] rounded-full">
              <Link href="/contact">Get a Tax Quote</Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Why Section */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Don't Risk Your Business with DIY Taxes</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {whyProfessionalFiling.map((point) => (
              <Card key={point.title} className="bg-transparent border-0 shadow-none">
                <CardHeader className="flex-row items-start gap-4">
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

      {/* Services Section */}
      <motion.section {...fadeIn} className="py-24 bg-card border-y">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Specialized Tax Filing Services</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {filingServices.map((service) => (
              <Card key={service.title} className="bg-white p-6 rounded-lg shadow-sm flex flex-col">
                <CardHeader>
                    <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                    <p className="text-sm font-semibold text-primary">{service.price}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/contact">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Process Section */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Our 4-Step Filing Process</h2>
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
          <h2 className="text-4xl md:text-5xl font-semibold text-black tracking-tight mb-6">File Your Taxes with Confidence</h2>
          <p className="text-lg text-neutral-500 mb-10">Get peace of mind and maximize your savings. Contact us today for a free, no-obligation quote for your business tax filing.</p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#E53935] text-white hover:bg-[#C62828] rounded-full">
                <Link href="/contact">Get My Free Tax Quote</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
