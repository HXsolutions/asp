
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
  Search,
  Building,
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

const whyLicensesMatter = [
    {
        icon: ShieldCheck,
        title: 'Operate Legally',
        description: 'Most jurisdictions require businesses to have specific licenses and permits to operate legally. Avoid fines and forced shutdowns.',
    },
    {
        icon: Building,
        title: 'Business Credibility',
        description: 'Proper licensing shows customers, suppliers, and partners that you are a legitimate and trustworthy business.',
    },
    {
        icon: Check,
        title: 'Meet Amazon\'s Requirements',
        description: 'Amazon may require sellers to provide proof of business licenses, especially for restricted categories or professional accounts.',
    },
    {
        icon: FileText,
        title: 'Unlock Business Services',
        description: 'Business licenses are often required to open wholesale accounts, secure business loans, and access other essential services.',
    },
];

const serviceIncludes = [
    { title: 'License Assessment', description: 'We analyze your business activities, location, and industry to determine the specific federal, state, and local licenses you need.' },
    { title: 'Application Preparation', description: 'We complete all the necessary application forms accurately to prevent delays or rejections.' },
    { title: 'Filing & Submission', description: 'We file the applications with the correct government agencies on your behalf.' },
    { title: 'Renewal Management', description: 'We track your renewal dates and manage the renewal process to ensure your licenses never expire.' },
];

const processSteps = [
    { number: 1, title: 'Business Assessment', description: 'You provide details about your business. We research and identify all required licenses at every level.' },
    { number: 2, title: 'Application & Filing', description: 'We prepare and file all the necessary applications with the appropriate government agencies.' },
    { number: 3, title: 'Receive Your Licenses', description: 'We monitor the process and deliver your official license documents to you electronically.' },
    { number: 4, title: 'Ongoing Renewal', description: 'We add your licenses to our renewal management system to ensure you stay compliant year after year.' },
];

export default function BusinessLicensesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section {...fadeIn} className="bg-card border-b pt-16">
        <div className="container mx-auto px-6 py-20 text-center">
          <PageHeader 
            title="Business License & Permit Services"
            description="We identify and obtain the necessary federal, state, and local licenses and permits required to operate your business legally."
          />
          <div className="flex justify-center gap-4 mt-8">
            <Button asChild size="lg" className="bg-[#E53935] text-white hover:bg-[#C62828] rounded-full">
              <Link href="#">Get My Licenses</Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Why Section */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Why Licensing is Crucial for Your Business</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {whyLicensesMatter.map((point) => (
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
                <h2 className="text-3xl font-bold font-headline text-foreground mb-4">Our Complete Licensing Service</h2>
                <p className="text-muted-foreground mb-8">
                Navigating government websites is confusing and time-consuming. We handle the entire process for you.
                </p>
                <ul className="space-y-4">
                {serviceIncludes.map((service) => (
                    <li key={service.title} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-1"/>
                    <div>
                        <h4 className="font-semibold text-foreground">{service.title}</h4>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                    </li>
                ))}
                </ul>
            </div>
            <Card className="bg-white p-8 rounded-lg shadow-lg border">
              <CardTitle className="text-2xl font-bold font-headline text-foreground mb-2">License Package</CardTitle>
              <p className="text-5xl font-bold text-foreground mb-2">$199</p>
              <p className="text-muted-foreground mb-4">+ state fees</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong>Includes:</strong> Research, preparation, and filing for all required licenses for one location.</p>
              </div>
              <Button asChild size="lg" className="w-full mt-6 bg-[#E53935] text-white hover:bg-[#C62828] rounded-full">
                  <Link href="#">Start My License Search</Link>
              </Button>
          </Card>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Our Simple 4-Step Process</h2>
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
          <h2 className="text-4xl md:text-5xl font-semibold text-black tracking-tight mb-6">Ensure Your Business is Fully Licensed</h2>
          <p className="text-lg text-neutral-500 mb-10">Don't risk fines or shutdowns. Let our experts handle the complex world of business licensing for you.</p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#E53935] text-white hover:bg-[#C62828] rounded-full">
                <Link href="#">Get My Business Licenses</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
