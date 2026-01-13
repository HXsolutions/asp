
'use client';

import { Button } from '@/components/ui/button';
import {
  ShieldCheck,
  Check,
  Star,
  Phone,
  Mail,
  TrendingUp,
  BadgeDollarSign,
  Truck,
  Tag,
  BarChart,
  Award,
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

const buyBoxFactors = [
    {
        icon: Truck,
        title: 'Fulfillment Method',
        description: 'Fulfillment by Amazon (FBA) is heavily favored by the Buy Box algorithm due to its fast and reliable shipping.',
    },
    {
        icon: Tag,
        title: 'Competitive Pricing',
        description: 'Your landed price (price + shipping) must be competitive. We use smart repricing to win the Buy Box without a race to the bottom.',
    },
    {
        icon: Star,
        title: 'Seller Performance',
        description: 'Metrics like Order Defect Rate, Cancellation Rate, and Late Shipment Rate are critical. We monitor and manage these for you.',
    },
    {
        icon: BarChart,
        title: 'Inventory Availability',
        description: 'Having sufficient stock to handle demand is crucial. Out-of-stock items can\'t win the Buy Box.',
    },
];

const serviceIncludes = [
  { title: 'Buy Box Eligibility Analysis', description: 'We first ensure your account is eligible to compete for the Buy Box.' },
  { title: 'Pricing Strategy & Repricing', description: 'Implementation of intelligent repricing software and strategies to maximize Buy Box ownership and profit.' },
  { title: 'Seller Metrics Monitoring', description: 'Continuous monitoring of your account health and performance metrics to keep them in the top tier.' },
  { title: 'Inventory Health Analysis', description: 'We analyze your inventory levels and FBA status to ensure you always have products available to win the Buy Box.' },
  { title: 'Competitive Analysis', description: 'Ongoing monitoring of competitors on your listings to adjust strategy in real-time.' },
];

export default function BuyBoxOptimizationPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section {...fadeIn} className="bg-card border-b pt-16">
        <div className="container mx-auto px-6 py-20 text-center">
          <PageHeader 
            title="Amazon Buy Box Optimization Service"
            description="Over 80% of Amazon sales go through the Buy Box. Our expert service helps you win it more often, increasing your visibility and sales."
          />
          <div className="flex justify-center gap-4 mt-8">
            <Button asChild size="lg" className="bg-[#E53935] text-white hover:bg-[#C62828] rounded-full">
              <Link href="/contact">Win The Buy Box</Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Factors Section */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Key Factors to Winning the Buy Box</h2>
            <p className="text-muted-foreground mt-2">Amazon's algorithm considers multiple factors. We optimize them all.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {buyBoxFactors.map((point) => (
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
                <h2 className="text-3xl font-bold font-headline text-foreground mb-4">Our Buy Box Optimization Service</h2>
                <p className="text-muted-foreground mb-8">
                    We employ a data-driven strategy to improve every variable that influences the Buy Box algorithm.
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
              <CardTitle className="text-2xl font-bold font-headline text-foreground mb-2">Optimization Service</CardTitle>
              <p className="text-5xl font-bold text-foreground mb-2">From $499</p>
              <p className="text-muted-foreground mb-4">per month</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong>Results:</strong> Clients see an average 20-50% increase in Buy Box ownership within 60 days.</p>
              </div>
              <Button asChild size="lg" className="w-full mt-6 bg-[#E53935] text-white hover:bg-[#C62828] rounded-full">
                  <Link href="/contact">Get Free Analysis</Link>
              </Button>
          </Card>
        </div>
      </motion.section>
      
      {/* CTA Section */}
      <section id="contact" className="py-24 bg-white relative">
        <motion.div className="max-w-4xl mx-auto px-6 text-center" {...fadeIn}>
          <h2 className="text-4xl md:text-5xl font-semibold text-black tracking-tight mb-6">Stop Losing Sales to Competitors</h2>
          <p className="text-lg text-neutral-500 mb-10">It's time to dominate the Buy Box. Contact us for a free analysis and find out how much more revenue you could be generating.</p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#E53935] text-white hover:bg-[#C62828] rounded-full">
                <Link href="/contact">Get My Free Buy Box Analysis</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
