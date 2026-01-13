
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
  Lightbulb,
  BarChart,
  Target,
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

const consultationTopics = [
    {
        icon: TrendingUp,
        title: 'Growth Strategy',
        description: 'Develop a roadmap for scaling your sales, expanding your product line, and entering new marketplaces.',
    },
    {
        icon: ShieldCheck,
        title: 'Account Health & Suspension',
        description: 'Get expert help to resolve account health issues, appeal suspensions, and implement preventive measures.',
    },
    {
        icon: BarChart,
        title: 'PPC & Advertising',
        description: 'Audit your current campaigns and get strategies to lower your ACoS, improve ROI, and increase visibility.',
    },
    {
        icon: Target,
        title: 'Product Launch',
        description: 'Plan and execute a successful product launch, from pre-launch buzz to post-launch ranking strategies.',
    },
     {
        icon: UserCheck,
        title: 'Brand Protection',
        description: 'Discuss strategies for trademarking, Brand Registry, and protecting your listings from hijackers.',
    },
     {
        icon: Lightbulb,
        title: 'Listing Optimization',
        description: 'Receive an in-depth analysis of your listings and actionable advice to improve conversion rates.',
    },
];

const howItWorks = [
    { number: 1, title: 'Book Your Session', description: 'Choose a time that works for you and provide details about your specific challenges.'},
    { number: 2, title: 'Strategy Call', description: 'Join a one-on-one video call with a senior Amazon consultant to dive deep into your issues.'},
    { number: 3, title: 'Actionable Plan', description: 'Receive a summarized report with a clear, step-by-step action plan to implement in your business.'},
    { number: 4, title: 'Follow-up Support', description: 'Get follow-up email support for 7 days after your call to clarify any questions about your plan.'},
];


const consultantProfiles = [
    {
        name: "John Carter",
        role: "Lead Consultant & Founder",
        specialties: ["Growth Strategy", "International Expansion", "Brand Protection"],
        experience: "8+ years helping sellers scale to 7-figures on Amazon.",
        avatar: "JC"
    },
    {
        name: "Samantha Ray",
        role: "PPC & Advertising Specialist",
        specialties: ["PPC Optimization", "DSP Campaigns", "Product Launches"],
        experience: "Managed over $10M in ad spend with an average 3.5x ROAS.",
        avatar: "SR"
    },
    {
        name: "Michael Chen",
        role: "Account Health Expert",
        specialties: ["Suspension Appeals", "Policy Compliance", "Performance Metrics"],
        experience: "Successfully reinstated over 100 suspended Amazon accounts.",
        avatar: "MC"
    },
]

export default function AmazonConsultationPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section {...fadeIn} className="bg-card border-b pt-16">
        <div className="container mx-auto px-6 py-20 text-center">
            <PageHeader 
                title="1-on-1 Amazon Consultation"
                description="Get personalized, expert advice to solve your most pressing Amazon challenges and unlock your brand's growth potential."
            />
          <div className="flex justify-center gap-4 mt-8">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
              <Link href="/contact">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Topics Section */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Get Expert Help With Any Challenge</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultationTopics.map((point) => (
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

      {/* How it Works Section */}
      <motion.section {...fadeIn} className="py-24 bg-card border-y">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">How It Works</h2>
          </div>
          <div className="relative grid md:grid-cols-4 gap-8">
            <div className="absolute top-8 left-0 w-full h-0.5 bg-border hidden md:block"></div>
            {howItWorks.map((step) => (
              <div key={step.number} className="relative text-center">
                <div className="relative z-10 w-16 h-16 bg-background border-2 border-primary text-primary flex items-center justify-center rounded-full mx-auto mb-4 font-bold text-xl">
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
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6 max-w-2xl">
           <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Consultation Packages</h2>
          </div>
            <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white flex flex-col">
                    <CardHeader>
                        <CardTitle>Strategy Session</CardTitle>
                        <CardDescription>A single, focused 60-minute call to tackle a specific problem.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-4xl font-bold mb-4">$299</p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>60-minute video call</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Action plan summary</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>7-day email support</span></li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <Button asChild className="w-full">
                            <Link href="/contact">Book Now</Link>
                        </Button>
                    </CardFooter>
                </Card>
                 <Card className="bg-white flex flex-col">
                    <CardHeader>
                        <CardTitle>Growth Accelerator</CardTitle>
                        <CardDescription>A package of 3 calls for ongoing support and strategy refinement.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-4xl font-bold mb-4">$799</p>
                         <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Three 60-minute video calls</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>In-depth action plans</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>30-day priority email support</span></li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <Button asChild className="w-full">
                            <Link href="/contact">Book Now</Link>
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
      </motion.section>

       {/* Our Team Section */}
      <section className="py-16 md:py-24 bg-card border-y">
         <motion.div {...fadeIn} className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                <h2 className="text-3xl font-semibold text-black tracking-tight mb-4">Meet Our Consultants</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {consultantProfiles.map((member, index) => (
                    <Card key={`${member.name}-${index}`} className="bg-white text-center border">
                        <CardHeader>
                             <div className="w-20 h-20 rounded-full bg-neutral-200 flex items-center justify-center text-black font-semibold text-2xl mx-auto mb-4">{member.avatar}</div>
                             <h3 className="text-lg font-semibold text-black">{member.name}</h3>
                             <p className="text-sm text-primary font-medium">{member.role}</p>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground italic">"{member.experience}"</p>
                            <div className='mt-4'>
                                <h4 className='text-xs font-semibold uppercase text-muted-foreground mb-2'>Specialties</h4>
                                <div className='flex flex-wrap justify-center gap-2'>
                                {member.specialties.map(spec => (
                                    <Badge key={spec} variant="secondary">{spec}</Badge>
                                ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-white relative">
        <motion.div className="max-w-4xl mx-auto px-6 text-center" {...fadeIn}>
          <h2 className="text-4xl md:text-5xl font-semibold text-black tracking-tight mb-6">Ready to Solve Your Amazon Puzzle?</h2>
          <p className="text-lg text-neutral-500 mb-10">Stop guessing and start growing. Book a 1-on-1 consultation with an Amazon expert today and get a clear path to success.</p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                <Link href="/contact">Book My Consultation</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
