
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
  FileText,
  Clock,
  CircleDollarSign,
  BadgeCheck,
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.5 },
};

const whyComplianceMatters = [
    {
        icon: CircleDollarSign,
        title: 'Prevent Costly Fines',
        description: 'Late filings, missed deadlines, and non-compliance can result in hefty fines, penalties, and interest charges that eat into your profits.',
    },
    {
        icon: BadgeCheck,
        title: 'Keep Business Active',
        description: 'Stay in good standing with government agencies, maintain business licenses, and preserve your ability to operate legally.',
    },
    {
        icon: ShieldCheck,
        title: 'Protect Your Amazon Account',
        description: 'Compliance issues can lead to Amazon account suspensions, banking problems, and loss of business privileges.',
    },
    {
        icon: UserCheck,
        title: 'Business Peace of Mind',
        description: 'Never worry about missing deadlines, forgetting filings, or compliance issues. Focus on growing your business while we handle compliance.',
    },
    {
        icon: Star,
        title: 'Maintain Professional Status',
        description: 'Good compliance status enhances your professional image with customers, suppliers, investors, and financial institutions.',
    },
];

const complianceServices = [
  {
    title: 'Annual Compliance',
    price: 'From £199/month',
    description: 'Complete annual filing and compliance management for all ongoing obligations.',
    includes: [
      'Annual return/confirmation statement filing',
      'Corporate tax return preparation and filing',
      'Business license renewals',
    ],
  },
  {
    title: 'Tax Compliance',
    price: 'From £299/month',
    description: 'Complete tax compliance including registration, filings, and ongoing tax obligations.',
    includes: [
      'Tax registration and setup (VAT, GST, sales tax)',
      'Monthly/quarterly tax filings',
      'Annual tax return preparation',
    ],
  },
  {
    title: 'Regulatory Compliance',
    price: 'From £249/month',
    description: 'Industry-specific regulatory compliance and license management.',
    includes: [
      'Industry license renewals',
      'Regulatory filing requirements',
      'Compliance reporting',
    ],
  },
  {
    title: 'Multi-Jurisdiction Compliance',
    price: 'From £399/month',
    description: 'Compliance management across multiple countries and jurisdictions.',
    includes: [
        'Multi-country annual filings',
        'Cross-border tax compliance',
        'Global compliance coordination',
    ],
  },
];

const processSteps = [
    { number: 1, title: 'Complete Compliance Audit', description: 'We analyze your current compliance status, identify gaps, and create a comprehensive compliance roadmap.', time: 'Audit' },
    { number: 2, title: 'System Setup & Registration', description: 'We set up all necessary registrations, accounts, and systems for ongoing compliance management.', time: 'Setup' },
    { number: 3, title: 'Active Compliance Management', description: 'We actively manage all compliance requirements, handle filings, and maintain good standing status.', time: 'Manage' },
    { number: 4, title: 'Continuous Monitoring & Updates', description: 'We continuously monitor compliance status, track changes in requirements, and update strategies accordingly.', time: 'Monitor' },
];

const pricingTiers = [
    {
        name: "Basic Compliance",
        price: "£199",
        freq: "/month",
        for: "Single jurisdiction, basic requirements",
        features: ["Annual filings", "Basic tax compliance", "Deadline management", "Email support"],
        popular: false,
    },
    {
        name: "Standard Compliance",
        price: "£299",
        freq: "/month",
        for: "Single jurisdiction, comprehensive requirements",
        features: ["All filings and returns", "Tax compliance", "Regulatory compliance", "Phone support", "Monthly reports"],
        popular: true,
    },
    {
        name: "Premium Compliance",
        price: "£399",
        freq: "/month",
        for: "Multiple jurisdictions or complex requirements",
        features: ["Multi-jurisdiction compliance", "Advanced tax compliance", "Priority support", "Weekly reports", "Dedicated manager"],
        popular: false,
    }
];

const successStories = [
    {
        client: 'Jennifer K. (Global)',
        problem: 'Missing deadlines across 3 countries.',
        solution: 'Global compliance management program.',
        results: 'Zero missed deadlines in 2 years. £15,000 in penalties avoided. Perfect compliance record maintained.',
        testimonial: "Complete peace of mind! They handle everything across all countries. Never worry about compliance again!",
        rating: 5,
    },
    {
        client: 'Carlos M. (EU)',
        problem: 'Tax compliance issues across Europe.',
        solution: 'European tax compliance program.',
        results: 'All tax filings brought current. £8,000 in penalties avoided. VAT compliance optimized.',
        testimonial: "European tax compliance was a nightmare. They sorted everything perfectly. Highly recommend!",
        rating: 5,
    },
     {
        client: 'Sarah L. (UK)',
        problem: 'Amazon compliance issues threatening account.',
        solution: 'Amazon-specific compliance program.',
        results: 'Account compliance restored. Verification issues resolved. Business licenses updated.',
        testimonial: "Saved my Amazon account! Compliance issues resolved professionally. Account now fully protected!",
        rating: 5,
    }
];

export default function CompliancePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section {...fadeIn} className="bg-card border-b pt-16">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">
            Business Compliance Services for Amazon Sellers
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Complete compliance management: annual filings, regulatory requirements, tax compliance, and ongoing obligations. Keep your business in good standing and avoid costly penalties or account suspensions.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="#">Get Compliance Assessment</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full bg-white">
              <Link href="#">Compliance Checklist</Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Why Compliance Matters Section */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Why Business Compliance is Critical</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyComplianceMatters.map((point) => (
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

      {/* Services Section */}
      <motion.section {...fadeIn} className="py-24 bg-card border-y">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Complete Compliance Management</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {complianceServices.map((service) => (
              <Card key={service.title} className="bg-white p-6 rounded-lg shadow-sm flex flex-col">
                <CardHeader>
                    <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                    <p className="text-sm font-semibold text-primary">{service.price}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                    <ul className="space-y-2 text-sm">
                        {service.includes.map(item => (
                            <li key={item} className="flex items-start gap-2">
                                <Check className="w-4 h-4 mt-1 text-green-500 shrink-0" />
                                <span className="text-muted-foreground">{item}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Process Section */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Our Compliance Management Process</h2>
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

      {/* Pricing Section */}
      <motion.section {...fadeIn} className="py-24 bg-card border-y">
          <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold font-headline text-foreground">Transparent Compliance Pricing</h2>
              </div>
              <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                  {pricingTiers.map(tier => (
                      <Card key={tier.name} className={`bg-white flex flex-col ${tier.popular ? 'border-primary border-2' : 'border-border'}`}>
                          <CardHeader>
                            {tier.popular && <Badge className="w-fit bg-primary mb-2">Most Popular</Badge>}
                            <CardTitle>{tier.name}</CardTitle>
                            <CardDescription>{tier.for}</CardDescription>
                          </CardHeader>
                          <CardContent className="flex-grow">
                            <p className="text-4xl font-bold">{tier.price}<span className="text-sm font-normal text-muted-foreground">{tier.freq}</span></p>
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

      {/* Success Stories Section */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Compliance Success Stories</h2>
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
          <h2 className="text-4xl md:text-5xl font-semibold text-black tracking-tight mb-6">Ready to Simplify Compliance?</h2>
          <p className="text-lg text-neutral-500 mb-10">Don't let compliance issues threaten your business. Let our experts handle all your compliance requirements while you focus on growth.</p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="#">Get Compliance Assessment</Link>
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
              <a href="mailto:compliance@amazonsolutionspro.com" className="flex items-center gap-2 hover:text-primary">
                <Mail className="h-4 w-4" />
                compliance@amazonsolutionspro.com
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
