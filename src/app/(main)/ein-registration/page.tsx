
'use client';

import { Button } from '@/components/ui/button';
import {
  ShieldCheck,
  Check,
  Star,
  Phone,
  Mail,
  MessageSquare,
  FileText,
  Building,
  Landmark,
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

const whyEinPoints = [
    {
        icon: Building,
        title: 'Required for Business Operations',
        description: 'An EIN is essential for opening a US business bank account, hiring employees, and establishing credit for your business.',
    },
    {
        icon: FileText,
        title: 'Necessary for Tax Filing',
        description: 'The IRS uses the EIN to identify your business for all tax-related purposes. It\'s mandatory for filing federal tax returns.',
    },
    {
        icon: Landmark,
        title: 'Needed for Amazon & Banking',
        description: 'Amazon requires an EIN for professional seller accounts. It\'s also a primary requirement for opening US-based payment gateways and bank accounts.',
    },
    {
        icon: ShieldCheck,
        title: 'Prevents Use of Personal SSN',
        description: 'An EIN helps protect you from identity theft by allowing you to use a business identification number instead of your personal Social Security Number.',
    },
];

const includedServices = [
  'Confirmation of Eligibility',
  'Preparation of Form SS-4',
  'Submission to the IRS',
  'Handling All IRS Correspondence',
  'Delivery of Your Official EIN Confirmation Letter',
  'Lifetime Support for EIN-related Questions',
];

const processSteps = [
    { number: 1, title: 'Complete Our Simple Form', description: 'You provide the necessary information about your business entity in our 5-minute online form.' },
    { number: 2, title: 'Application Preparation & Submission', description: 'Our experts prepare Form SS-4 accurately and submit it to the IRS on your behalf.'},
    { number: 3, title: 'IRS Processing', description: 'The IRS processes your application. We handle any follow-up questions from the IRS.' },
    { number: 4, title: 'Receive Your EIN', description: 'We receive your official EIN confirmation and deliver it to you securely via email.' },
];

export default function EinRegistrationPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section {...fadeIn} className="bg-card border-b pt-16">
        <div className="container mx-auto px-6 py-20 text-center">
          <PageHeader 
            title="EIN Registration Service"
            description="Obtain your Employer Identification Number (EIN) from the IRS quickly and easily with our professional filing service. Essential for US companies."
          />
          <div className="flex justify-center gap-4 mt-8">
            <Button asChild size="lg" className="bg-[#E53935] text-white hover:bg-[#C62828] rounded-full">
              <Link href="#">Get My EIN Now</Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Why Section */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Why Do You Need an EIN?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {whyEinPoints.map((point) => (
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
                <h2 className="text-3xl font-bold font-headline text-foreground mb-4">Our Hassle-Free EIN Service</h2>
                <p className="text-muted-foreground mb-8">
                 We handle the entire process with the IRS, saving you time and ensuring your application is done correctly.
                </p>
                <ul className="space-y-3 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                {includedServices.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 shrink-0 mt-1"/>
                        <span className="text-sm text-foreground">{item}</span>
                    </li>
                ))}
                </ul>
            </div>
            <Card className="bg-white p-8 rounded-lg shadow-lg border">
              <CardTitle className="text-2xl font-bold font-headline text-foreground mb-2">EIN Filing Service</CardTitle>
              <p className="text-5xl font-bold text-foreground mb-2">$149</p>
              <p className="text-muted-foreground mb-4">One-time fee</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong>Timeline:</strong> Varies (from 1 day to 4 weeks depending on IRS processing times)</p>
                  <p><strong>Requirement:</strong> A registered US business entity (LLC or Corporation).</p>
              </div>
              <Button asChild size="lg" className="w-full mt-6 bg-[#E53935] text-white hover:bg-[#C62828] rounded-full">
                  <Link href="#">Order EIN Service</Link>
              </Button>
          </Card>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Our 4-Step EIN Process</h2>
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
          <h2 className="text-4xl md:text-5xl font-semibold text-black tracking-tight mb-6">Get Your Business Tax ID Today</h2>
          <p className="text-lg text-neutral-500 mb-10">Finalize your business setup with an official Employer Identification Number from the IRS.</p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#E53935] text-white hover:bg-[#C62828] rounded-full">
                <Link href="#">Get My EIN</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
