
'use client';

import Link from 'next/link';
import PageHeader from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Calculator, FileText, Landmark, Percent } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.5 },
};

const taxServices = [
  {
    icon: Landmark,
    title: 'Tax Registration',
    description: 'Complete registration for EIN, ITIN, VAT, GST/HST, and sales tax permits to ensure you are fully compliant from day one.',
    link: '/tax-registration',
  },
  {
    icon: Calculator,
    title: 'Bookkeeping Services',
    description: 'Professional monthly bookkeeping to keep your finances accurate, organized, and ready for tax time.',
    link: '/bookkeeping',
  },
  {
    icon: FileText,
    title: 'Annual Tax Filing',
    description: 'Expert preparation and filing of your US, UK, or Canadian corporate and personal tax returns.',
    link: '/annual-tax-filing',
  },
  {
    icon: Percent,
    title: 'Sales Tax Compliance',
    description: 'Automated sales tax nexus tracking, collection, filing, and remittance for e-commerce sellers in the US.',
    link: '/sales-tax-compliance',
  },
];

export default function TaxServicesPage() {
  return (
    <div className="bg-background">
      <div className="pt-16">
        <motion.div {...fadeIn}>
          <PageHeader 
            title="Tax & Accounting Services Hub"
            description="Comprehensive tax and accounting solutions designed for e-commerce and Amazon sellers to ensure compliance and maximize profitability."
          />
        </motion.div>
      </div>

      <motion.section {...fadeIn} className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {taxServices.map((service) => (
              <Card key={service.title} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-card rounded-lg flex items-center justify-center text-primary shrink-0">
                        <service.icon className="w-6 h-6" />
                    </div>
                    <div>
                        <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                        <CardDescription className="mt-1">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardFooter className="mt-auto">
                    <Button asChild variant="outline" className="w-full">
                        <Link href={service.link}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-card border-t relative">
        <motion.div className="max-w-4xl mx-auto px-6 text-center" {...fadeIn}>
          <h2 className="text-4xl md:text-5xl font-semibold text-black tracking-tight mb-6">Take Control of Your Finances</h2>
          <p className="text-lg text-neutral-500 mb-10">Stop worrying about tax compliance and bookkeeping. Let our experts handle it for you. Contact us for a free financial assessment.</p>
          <div className="flex flex-col items-center gap-6">
            <Button asChild size="lg" className="bg-[#E53935] text-white hover:bg-[#C62828] rounded-full">
                <Link href="/contact">Get a Free Assessment</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
