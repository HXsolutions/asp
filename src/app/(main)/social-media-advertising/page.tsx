
'use client';

import { Button } from '@/components/ui/button';
import {
  Facebook,
  Check,
  Instagram,
  Phone,
  Mail,
  Youtube,
  TrendingUp,
  BadgeDollarSign,
  Users,
  Target,
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

const whySocialAds = [
    {
        icon: Users,
        title: 'Reach New Audiences',
        description: 'Tap into billions of users on platforms like Facebook, Instagram, and TikTok to find new customers outside of Amazon.',
    },
    {
        icon: TrendingUp,
        title: 'Drive External Traffic',
        description: 'Sending external traffic to your Amazon listings can boost your organic ranking and sales velocity, signaling to Amazon that your product is popular.',
    },
    {
        icon: Target,
        title: 'Precise Targeting',
        description: 'Leverage powerful demographic, interest, and behavioral targeting to reach your ideal customer with surgical precision.',
    },
    {
        icon: BadgeDollarSign,
        title: 'Lower Advertising Costs',
        description: 'Social media ads can often be more cost-effective than highly competitive keywords on Amazon PPC, leading to a better ROAS.',
    },
];

const serviceIncludes = [
  'Campaign strategy and audience research',
  'Ad creative development (images, videos, copy)',
  'Campaign setup and launch on chosen platforms',
  'Pixel and conversion tracking setup',
  'Daily campaign monitoring and optimization',
  'Detailed performance reporting and analysis',
];

const processSteps = [
    { number: 1, title: 'Strategy & Audience', description: 'We define your target audience, campaign goals, and overall strategy for driving external traffic.' },
    { number: 2, title: 'Creative Development', description: 'Our team creates compelling ad copy and visuals designed to capture attention and drive clicks.'},
    { number: 3, title: 'Campaign Launch', description: 'We set up and launch your campaigns with precise targeting and tracking to measure every result.' },
    { number: 4, title: 'Optimize & Scale', description: 'We continuously monitor performance, A/B test creatives, and optimize campaigns to scale your results.' },
];

export default function SocialMediaAdvertisingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section {...fadeIn} className="bg-card border-b pt-16">
        <div className="container mx-auto px-6 py-20 text-center">
          <PageHeader 
            title="Social Media Advertising for Amazon Sellers"
            description="Drive high-quality external traffic to your Amazon listings with targeted campaigns on Facebook, Instagram, TikTok, and more."
          />
          <div className="flex justify-center gap-4 mt-8">
            <Button asChild size="lg" className="bg-[#E53935] text-white hover:bg-[#C62828] rounded-full">
              <Link href="/contact">Launch My Ad Campaigns</Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Why Section */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Why Social Media Ads Boost Amazon Sales</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whySocialAds.map((point) => (
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
                <h2 className="text-3xl font-bold font-headline text-foreground mb-4">Our Full-Service Ad Management</h2>
                <p className="text-muted-foreground mb-8">
                 We handle everything from strategy and creative to optimization and scaling, letting you reap the benefits of external traffic.
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
              <CardTitle className="text-2xl font-bold font-headline text-foreground mb-2">Ad Management</CardTitle>
              <p className="text-5xl font-bold text-foreground mb-2">From $799</p>
              <p className="text-muted-foreground mb-4">per month + ad spend</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Our goal is to drive profitable external traffic that not only converts but also boosts your organic ranking on Amazon.</p>
              </div>
              <Button asChild size="lg" className="w-full mt-6 bg-[#E53935] text-white hover:bg-[#C62828] rounded-full">
                  <Link href="/contact">Get a Free Ad Strategy</Link>
              </Button>
          </Card>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Our Campaign Process</h2>
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
          <h2 className="text-4xl md:text-5xl font-semibold text-black tracking-tight mb-6">Drive External Traffic, Dominate Your Niche</h2>
          <p className="text-lg text-neutral-500 mb-10">Contact us today for a free consultation and a custom social media advertising strategy for your Amazon brand.</p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#E53935] text-white hover:bg-[#C62828] rounded-full">
                <Link href="/contact">Get My Free Ad Strategy</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
