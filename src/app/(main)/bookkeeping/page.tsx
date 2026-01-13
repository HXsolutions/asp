
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
  Calculator,
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

const whyBookkeepingPoints = [
    {
        icon: Calculator,
        title: 'Know Your True Profitability',
        description: 'Professional bookkeeping gives you accurate profit margins, real financial performance, and clear visibility into what\'s actually working in your Amazon business.',
    },
    {
        icon: ShieldCheck,
        title: 'Stay Tax Compliant',
        description: 'Proper bookkeeping ensures accurate tax filings, maximizes deductions, and keeps you compliant with tax authorities across all jurisdictions.',
    },
    {
        icon: Clock,
        title: 'Focus on Growing Your Business',
        description: 'Stop spending hours on spreadsheets and accounting. Let professionals handle bookkeeping while you focus on product development and business growth.',
    },
    {
        icon: TrendingUp,
        title: 'Make Informed Decisions',
        description: 'Accurate financial data helps you make better decisions about inventory, pricing, advertising spend, and business expansion.',
    },
    {
        icon: BadgeCheck,
        title: 'Professional Business Status',
        description: 'Professional books enhance your credibility with suppliers, investors, lenders, and potential business partners.',
    },
];

const bookkeepingServices = [
  {
    name: 'Basic Bookkeeping',
    price: '£199/month',
    for: 'New sellers, 1-2 products, basic requirements',
    features: [
      'Monthly transaction recording',
      'Bank reconciliation',
      'Basic financial statements',
      'Amazon fee categorization',
      'Email support',
      'Xero/QuickBooks setup',
    ],
    popular: false,
  },
  {
    name: 'Standard Bookkeeping',
    price: '£299/month',
    for: 'Growing sellers, 3-10 products, comprehensive needs',
    features: [
      'Weekly transaction recording',
      'Detailed financial statements',
      'Inventory tracking',
      'VAT/GST compliance support',
      'Monthly performance reports',
      'Phone support',
      'Multi-currency handling',
    ],
    popular: true,
  },
  {
    name: 'Premium Bookkeeping',
    price: '£399/month',
    for: 'Established sellers, 10+ products, advanced needs',
    features: [
      'Daily transaction recording',
      'Advanced financial analysis',
      'Multi-marketplace tracking',
      'Tax return preparation support',
      'Weekly performance reports',
      'Dedicated account manager',
      'Advanced analytics',
    ],
    popular: false,
  },
    {
    name: 'Enterprise Bookkeeping',
    price: '£599/month',
    for: 'Large sellers, complex operations, enterprise needs',
    features: [
      'Real-time transaction recording',
      'Custom financial modeling',
      'Multi-entity consolidation',
      'Strategic financial planning',
      'Daily performance dashboards',
      'Senior accounting team',
    ],
    popular: false,
  },
];

const processSteps = [
    { number: 1, title: 'System Setup & Amazon Integration', description: 'We set up professional accounting software and integrate with your Amazon seller account and bank accounts.' },
    { number: 2, title: 'Complete Data Import & Organization', description: 'We import all historical data and properly categorize all transactions for accurate financial tracking.' },
    { number: 3, title: 'Professional Monthly Bookkeeping', description: 'We maintain accurate books with regular transaction recording, reconciliation, and financial statement preparation.' },
    { number: 4, title: 'Financial Reporting & Analysis', description: 'We provide comprehensive financial reports, analysis, and insights to help you understand your business performance.' },
];

const successStories = [
    {
        client: 'Jennifer K. (UK)',
        challenge: 'Rapid growth, financial complexity, no clear profitability picture',
        solution: 'Premium bookkeeping with advanced analytics',
        results: 'Identified 5 unprofitable products, increased overall profit margin by 15%, and improved cash flow by £50K/month.',
        testimonial: "Professional bookkeeping transformed our business. Found profit leaks and optimization opportunities we never knew existed!",
        rating: 5
    },
    {
        client: 'Carlos M. (Spain)',
        challenge: 'Amazon operations across 5 countries, currency complexity',
        solution: 'Multi-marketplace bookkeeping with currency management',
        results: 'Accurate profit tracking by marketplace, currency gains optimization, and 25% improvement in overall profitability.',
        testimonial: "Multi-marketplace bookkeeping was a game-changer. Finally understand true profitability by country!",
        rating: 5
    },
    {
        client: 'Sarah L. (Global)',
        challenge: 'Complex international operations, tax optimization needs',
        solution: 'Enterprise bookkeeping with tax planning',
        results: 'Identified £30K in annual tax savings, optimized international tax structure, and streamlined VAT/GST compliance.',
        testimonial: "Enterprise bookkeeping with tax planning saved us thousands. Professional service worth every penny!",
        rating: 5
    }
];

export default function BookkeepingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section {...fadeIn} className="bg-card border-b pt-16">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">
            Bookkeeping Services for Amazon Sellers
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Complete bookkeeping and accounting services for Amazon sellers: monthly bookkeeping, financial statements, tax preparation, and e-commerce accounting. Xero/QuickBooks setup with Amazon integration for accurate financial tracking.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="#">Start Bookkeeping</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full bg-white">
              <Link href="#">Free Financial Review</Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Why Bookkeeping Section */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Why Amazon Sellers Need Professional Bookkeeping</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyBookkeepingPoints.map((point) => (
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

      {/* Pricing Section */}
      <motion.section {...fadeIn} className="py-24 bg-card border-y">
          <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold font-headline text-foreground">Transparent Bookkeeping Pricing</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {bookkeepingServices.map(tier => (
                      <Card key={tier.name} className={`bg-white flex flex-col ${tier.popular ? 'border-primary border-2' : 'border-border'}`}>
                          <CardHeader>
                            {tier.popular && <Badge className="w-fit bg-primary mb-2">Most Popular</Badge>}
                            <CardTitle>{tier.name}</CardTitle>
                            <CardDescription>{tier.for}</CardDescription>
                          </CardHeader>
                          <CardContent className="flex-grow">
                            <p className="text-4xl font-bold">{tier.price}</p>
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

      {/* Process Section */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Our Professional Bookkeeping Process</h2>
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

      {/* Features Section */}
      <motion.section {...fadeIn} className="py-24 bg-card border-y">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Comprehensive Accounting Features</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardHeader><CardTitle>Amazon-Specific Accounting</CardTitle></CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><Check className="w-5 h-5 text-primary shrink-0"/>Amazon Fee Breakdown</li>
                  <li className="flex gap-2"><Check className="w-5 h-5 text-primary shrink-0"/>Multi-Marketplace Tracking</li>
                  <li className="flex gap-2"><Check className="w-5 h-5 text-primary shrink-0"/>FBA Inventory Accounting</li>
                  <li className="flex gap-2"><Check className="w-5 h-5 text-primary shrink-0"/>Advertising Cost Tracking</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardHeader><CardTitle>Financial Reporting</CardTitle></CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><Check className="w-5 h-5 text-primary shrink-0"/>Profit & Loss Statements</li>
                  <li className="flex gap-2"><Check className="w-5 h-5 text-primary shrink-0"/>Balance Sheets</li>
                  <li className="flex gap-2"><Check className="w-5 h-5 text-primary shrink-0"/>Cash Flow Statements</li>
                  <li className="flex gap-2"><Check className="w-5 h-5 text-primary shrink-0"/>KPI Dashboards</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardHeader><CardTitle>Advanced Analytics</CardTitle></CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><Check className="w-5 h-5 text-primary shrink-0"/>Product Profitability Analysis</li>
                  <li className="flex gap-2"><Check className="w-5 h-5 text-primary shrink-0"/>Marketplace Performance</li>
                  <li className="flex gap-2"><Check className="w-5 h-5 text-primary shrink-0"/>Advertising ROI Analysis</li>
                  <li className="flex gap-2"><Check className="w-5 h-5 text-primary shrink-0"/>Cash Flow Forecasting</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Success Stories Section */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Bookkeeping Success Stories</h2>
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
          <h2 className="text-4xl md:text-5xl font-semibold text-black tracking-tight mb-6">Ready for Professional Bookkeeping?</h2>
          <p className="text-lg text-neutral-500 mb-10">Stop struggling with spreadsheets and incomplete financial data. Get professional bookkeeping that gives you the insights you need to grow profitably.</p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="#">Start Bookkeeping Now</Link>
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
              <a href="mailto:bookkeeping@amazonsolutionspro.com" className="flex items-center gap-2 hover:text-primary">
                <Mail className="h-4 w-4" />
                bookkeeping@amazonsolutionspro.com
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

    