'use client';

import { Button } from '@/components/ui/button';
import {
    ShieldCheck,
    Check,
    Lightbulb,
    FileText,
    Globe,
    Scale,
    Phone,
    Mail,
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.5 },
};

const whyPatentPoints = [
    {
        icon: ShieldCheck,
        title: 'Exclusive Rights',
        description: 'A patent gives you the legal right to stop others from making, using, or selling your invention for a set period.',
    },
    {
        icon: Lightbulb,
        title: 'Protect Your Idea',
        description: 'Safeguard your unique product designs and functionalities from competitors and copycats on Amazon and beyond.',
    },
    {
        icon: Globe,
        title: 'Valuable Business Asset',
        description: 'Patents can be bought, sold, or licensed, adding significant value and revenue streams to your business.',
    },
    {
        icon: Scale,
        title: 'Strong Market Position',
        description: 'Use your patent to create a powerful competitive advantage, block competitors, and secure a dominant market position.',
    },
];

const includedItems = [
    "Consultation with a patent specialist",
    "Prior art search to assess patentability",
    "Drafting of patent application (provisional or non-provisional)",
    "Preparation of technical drawings",
    "Filing with the relevant patent office (e.g., USPTO)",
    "Handling all office actions and correspondence",
    "Guidance on international patent strategy (PCT)",
];

const processSteps = [
    { number: 1, title: 'Invention Disclosure & Search', description: 'You provide details of your invention. We conduct a prior art search to analyze its novelty.', time: '1-2 weeks' },
    { number: 2, title: 'Application Drafting', description: 'Our patent experts draft a detailed application with technical specifications and drawings.', time: '2-4 weeks' },
    { number: 3, title: 'Filing & Examination', description: 'We file the application. The patent office assigns an examiner to review it.', time: '1-3 years' },
    { number: 4, title: 'Grant & Maintenance', description: 'Upon approval, the patent is granted. We help you manage ongoing maintenance fees to keep it active.', time: 'Ongoing' },
];

const faqItems = [
    { question: "What's the difference between a provisional and non-provisional patent?", answer: "A provisional patent application (PPA) is a less formal, lower-cost way to secure a 'patent pending' status for one year. A non-provisional application is the formal application that is examined by the patent office and can lead to a granted patent. A PPA must be converted to a non-provisional application within 12 months." },
    { question: "Can I patent an idea?", answer: "You cannot patent a mere idea. You must have a tangible description of the invention, explaining how to make and use it. A prototype is not required, but a detailed plan is." },
    { question: "How long does a patent last?", answer: "In most countries, a utility patent lasts for 20 years from the filing date, provided that maintenance fees are paid on time." },
    { question: "What is 'prior art'?", answer: "Prior art is any evidence that your invention is already known. It includes other patents, publications, or products available to the public before your filing date. A prior art search is crucial to determine if your invention is patentable." },
];

export default function PatentFilingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section {...fadeIn} className="bg-card border-b pt-24 md:pt-32">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">
            Patent Filing Services
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Protect your unique products and inventions with our professional patent filing services. We guide you from prior art search to patent grant.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Protect My Invention</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full bg-white">
              <Link href="/contact">Free Consultation</Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Why Patent Section */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Why Protecting Your Invention is Crucial</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyPatentPoints.map((point) => (
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

      {/* Main Service Section */}
      <motion.section {...fadeIn} className="py-24 bg-card border-y">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold font-headline text-foreground mb-4">Complete Patent Filing Service</h2>
            <p className="text-muted-foreground mb-8">
              Our service manages the entire patent application lifecycle, simplifying a complex process for inventors and businesses.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {includedItems.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0"/>
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <Card className="bg-white p-8 rounded-lg shadow-lg border">
              <CardTitle className="text-2xl font-bold font-headline text-foreground mb-2">Patent Services</CardTitle>
              <p className="text-4xl font-bold text-foreground mb-2">Starting at $1,500</p>
              <p className="text-muted-foreground mb-4">(Varies by complexity & type)</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong>Types:</strong> Provisional, Non-Provisional (Utility), Design.</p>
                  <p><strong>Jurisdictions:</strong> USA (USPTO), UK, EU, and International (PCT).</p>
              </div>
              <Button asChild size="lg" className="w-full mt-6">
                  <Link href="/contact">Get a Quote</Link>
              </Button>
          </Card>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold font-headline text-foreground">Our Patent Filing Process</h2>
            </div>
            <div className="relative grid md:grid-cols-4 gap-8">
                <div className="absolute top-8 left-0 w-full h-0.5 bg-border hidden md:block"></div>
                {processSteps.map((step) => (
                    <div key={step.number} className="relative text-center">
                        <div className="relative z-10 w-16 h-16 bg-card border-2 border-primary text-primary flex items-center justify-center rounded-full mx-auto mb-4 font-bold text-xl">
                            {step.number}
                        </div>
                        <h3 className="font-semibold text-foreground text-lg mb-2">{step.title}</h3>
                        <p className="text-muted-foreground text-sm mb-2">{step.description}</p>
                        <p className="text-xs text-muted-foreground font-medium">Time: {step.time}</p>
                    </div>
                ))}
            </div>
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section {...fadeIn} className="py-24 bg-card border-y">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold font-headline text-foreground">Patent Filing FAQ</h2>
            </div>
            <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                    {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                        {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground">
                        {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <section id="contact" className="py-24 bg-white relative">
        <motion.div className="max-w-4xl mx-auto px-6 text-center" {...fadeIn}>
          <h2 className="text-4xl md:text-5xl font-semibold text-black tracking-tight mb-6">Have an Invention to Protect?</h2>
          <p className="text-lg text-neutral-500 mb-10">Don't let your hard work be copied. Schedule a free, confidential consultation with our patent specialist to discuss protecting your invention.</p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Schedule Free Consultation</Link>
              </Button>
            </div>
             <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-neutral-600 mt-4">
                <a href="tel:+13463804251" className="flex items-center gap-2 hover:text-primary">
                  <Phone className="h-4 w-4" />
                  +1 (346) 380-4251
                </a>
                <a href="mailto:legal@amazonsolutionspro.com" className="flex items-center gap-2 hover:text-primary">
                  <Mail className="h-4 w-4" />
                  legal@amazonsolutionspro.com
                </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
