
'use client';

import { Button } from '@/components/ui/button';
import {
  Truck,
  Check,
  PackageSearch,
  Phone,
  Mail,
  Box,
  TrendingUp,
  BadgeDollarSign,
  ClipboardList,
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

const fbaBenefits = [
    {
        icon: Box,
        title: 'Prime Eligibility',
        description: 'FBA products are eligible for Amazon Prime free two-day shipping, which is a major driver of sales.',
    },
    {
        icon: TrendingUp,
        title: 'Higher Buy Box Chance',
        description: 'Amazon\'s algorithm heavily favors FBA sellers for the Buy Box, leading to significantly more sales.',
    },
    {
        icon: Truck,
        title: 'Hands-Free Logistics',
        description: 'Amazon handles storage, packing, shipping, customer service, and returns, freeing you to focus on growth.',
    },
    {
        icon: BadgeDollarSign,
        title: 'Increased Customer Trust',
        description: 'Customers trust Amazon\'s fulfillment and are more likely to purchase FBA products.',
    },
];

const serviceIncludes = [
  { title: 'FBA Strategy & Setup', description: 'We help you create a profitable FBA strategy and set up your account for success.' },
  { title: 'Shipment Plan Creation', description: 'We manage the creation of FBA shipping plans, ensuring your products are sent to the right fulfillment centers efficiently.' },
  { title: 'Inventory Management', description: 'We monitor your inventory levels, advise on restocks, and help you avoid storage fees and stockouts.' },
  { title: 'FBA Reimbursements', description: 'We audit your account for lost or damaged inventory and file reimbursement claims on your behalf to recover your money.' },
];

const processSteps = [
    { number: 1, title: 'FBA Feasibility Analysis', description: 'We analyze your products to determine their suitability and profitability for the FBA program.' },
    { number: 2, title: 'Account Setup & Configuration', description: 'We configure your Seller Central account settings for FBA and prepare your products for shipment.' },
    { number: 3, title: 'First Shipment Management', description: 'We guide you step-by-step through creating and sending your first FBA shipment to Amazon.' },
    { number: 4, title: 'Ongoing Management', description: 'We provide ongoing support with inventory planning, shipment creation, and performance monitoring.' },
];

export default function FbaServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section {...fadeIn} className="bg-card border-b pt-16">
        <div className="container mx-auto px-6 py-20 text-center">
          <PageHeader 
            title="Amazon FBA Services"
            description="Leverage the power of Fulfillment by Amazon. Our services help you with strategy, shipment creation, inventory management, and reimbursements."
          />
          <div className="flex justify-center gap-4 mt-8">
            <Button asChild size="lg" className="bg-[#E53935] text-white hover:bg-[#C62828] rounded-full">
              <Link href="#">Get FBA Support</Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Why Section */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Why Use Fulfillment by Amazon (FBA)?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fbaBenefits.map((point) => (
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

      {/* Service Section */}
      <motion.section {...fadeIn} className="py-24 bg-card border-y">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-bold font-headline text-foreground mb-4">Our FBA Management Services</h2>
                <p className="text-muted-foreground mb-8">
                    From strategy to daily management, we handle the complexities of FBA so you can reap the rewards.
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
              <CardTitle className="text-2xl font-bold font-headline text-foreground mb-2">FBA Service Packages</CardTitle>
              <p className="text-5xl font-bold text-foreground mb-2">From $399</p>
              <p className="text-muted-foreground mb-4">per month</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Packages are tailored to your specific needs, based on number of ASINs and shipment volume.</p>
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
            <h2 className="text-3xl font-bold font-headline text-foreground">Our FBA Onboarding Process</h2>
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
          <h2 className="text-4xl md:text-5xl font-semibold text-black tracking-tight mb-6">Ready to Supercharge Your Logistics?</h2>
          <p className="text-lg text-neutral-500 mb-10">Let us handle the complexities of Fulfillment by Amazon. Contact us today for a free consultation on how FBA can transform your business.</p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#E53935] text-white hover:bg-[#C62828] rounded-full">
                <Link href="#">Optimize My FBA Strategy</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
