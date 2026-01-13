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
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.1 },
  transition: { duration: 0.5 },
};

const whyTrademarkPoints = [
    {
        icon: ShieldCheck,
        title: 'Unlock Amazon Brand Registry',
        description: 'Trademark is required for Amazon Brand Registry, giving you access to enhanced brand protection tools, A+ Content, and brand analytics.',
    },
    {
        icon: Building,
        title: 'Protect Your Brand from Hijackers',
        description: 'Prevent others from selling counterfeit versions of your products or using your brand name. Legal protection against infringement.',
    },
    {
        icon: TrendingUp,
        title: 'Access Enhanced Marketing Tools',
        description: 'Brand Registry unlocks A+ Content, Sponsored Brands ads, brand stores, and other premium marketing features.',
    },
    {
        icon: BadgeDollarSign,
        title: 'Build Business Value',
        description: 'A trademark is a valuable business asset that increases company valuation, enables licensing, and provides a competitive advantage.',
    },
    {
        icon: Globe,
        title: 'Expand Internationally',
        description: 'Trademark registration enables expansion to international Amazon marketplaces and protects your brand globally.',
    },
];

const trademarkServices = [
    {
        title: "US Trademark Registration (USPTO)",
        price: "From $349",
        timeline: "8-12 months",
        description: "Complete US trademark registration with USPTO. Includes comprehensive search, application filing, and Brand Registry support.",
        includes: ["Comprehensive trademark search", "Application preparation and filing", "Office action responses (1 included)", "USPTO correspondence handling", "Registration certificate", "Amazon Brand Registry assistance", "1-year trademark monitoring"],
        bestFor: "Amazon.com sellers, US market focus, Brand Registry qualification",
        cta: "Register US Trademark",
        ctaLink: "/trademark/usa"
    },
    {
        title: "UK Trademark Registration (UKIPO)",
        price: "From £299",
        timeline: "4-6 months",
        description: "UK trademark registration with UK Intellectual Property Office. Ideal for Amazon UK and EU marketplace access.",
        includes: ["UK trademark search", "Application filing with UKIPO", "Examination process handling", "Registration certificate", "Amazon UK Brand Registry support", "EU trademark guidance", "1-year monitoring service"],
        bestFor: "Amazon UK sellers, EU market access, UK business credibility",
        cta: "Register UK Trademark",
        ctaLink: "/trademark/uk"
    },
    {
        title: "EU Trademark Registration (EUIPO)",
        price: "From €599",
        timeline: "6-9 months",
        description: "European Union trademark registration covering all 27 EU countries with a single application.",
        includes: ["EU-wide trademark search", "EUIPO application filing", "Examination and opposition handling", "Registration certificate", "27-country protection", "Amazon EU Brand Registry", "Renewal reminders"],
        bestFor: "EU market expansion, comprehensive protection, international brands",
        cta: "Register EU Trademark",
        ctaLink: "/trademark/eu"
    },
    {
        title: "International Trademark (Madrid Protocol)",
        price: "From $899",
        timeline: "12-18 months",
        description: "International trademark registration covering multiple countries through the Madrid Protocol system.",
        includes: ["Multi-country trademark search", "Madrid Protocol application", "Designation of countries", "Examination process management", "Registration certificates", "Renewal management", "Global monitoring service"],
        bestFor: "Global brands, multiple countries, comprehensive protection",
        cta: "Register International Trademark",
        ctaLink: "/trademark/international"
    }
];

const processSteps = [
    { number: 1, title: 'Trademark Search & Analysis', description: 'We conduct a comprehensive search to assess availability and identify potential conflicts.', time: '2-3 days' },
    { number: 2, title: 'Application Drafting & Filing', description: 'We prepare and file your trademark application with the appropriate descriptions, classes, and specifications.', time: '3-5 days' },
    { number: 3, title: 'Examination & Prosecution', description: 'We handle all communications with the trademark office and respond to any office actions.', time: '3-6 months' },
    { number: 4, title: 'Registration & Protection', description: 'Once approved, we secure your registration certificate and provide ongoing monitoring.', time: '2-4 months' },
];

const trademarkClasses = [
    { class: 9, name: "Computer Software", items: ["Mobile apps", "Downloadable products"] },
    { class: 25, name: "Clothing", items: ["Apparel", "Footwear", "Headgear"] },
    { class: 35, name: "Retail Services", items: ["Online retail", "Advertising"] },
    { class: 42, name: "Technology Services", items: ["SaaS", "Website design"] },
];

const faqItems = [
    { question: "How long does trademark registration take?", answer: "Typically 8-12 months for US trademarks, 4-6 months for UK trademarks, and 6-9 months for EU trademarks. The timeline varies by jurisdiction and complexity." },
    { question: "What can I trademark?", answer: "You can trademark business names, logos, slogans, product names, sounds, and colors if they distinguish your goods or services." },
    { question: "Do I need a trademark for Amazon Brand Registry?", answer: "Yes, Amazon requires a registered trademark (or a pending application in some countries) for Brand Registry. The trademark must match your brand name exactly." },
    { question: "Can I trademark before starting my business?", answer: "Yes, in the US and some other countries, you can file based on an 'intent to use.' You must start using the mark in commerce to finalize the registration." },
    { question: "What happens if someone opposes my trademark?", answer: "We handle opposition proceedings. Most can be resolved through negotiation or by limiting your application's scope." },
    { question: "How long does a trademark last?", answer: "Trademarks can last forever if properly maintained. Renewals are required every 10 years in most jurisdictions." },
];

const testimonials = [
    {
      quote: "They handled my US trademark professionally and got it approved in just 8 months. Brand Registry approval was smooth and my sales increased 40% with A+ Content!",
      author: "Jennifer K.",
      business: "Beauty Products Brand",
      rating: 5,
    },
    {
      quote: "UK trademark registration was quick and hassle-free. They helped me choose the right classes and handled everything perfectly. Highly recommended!",
      author: "Robert M.",
      business: "Electronics Brand",
      rating: 5,
    },
    {
      quote: "International trademark through Madrid Protocol was complex but they made it simple. Protected my brand in 5 countries with one application.",
      author: "Maria S.",
      business: "Fashion Brand",
      rating: 5,
    },
];

export default function TrademarkRegistrationPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section {...fadeIn} className="bg-card border-b pt-16">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">
            Trademark Registration for Amazon Sellers
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Complete trademark services: US, UK, EU registration with Amazon Brand Registry support. Professional trademark search, application filing, and ongoing protection.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="bg-[#E53935] text-white hover:bg-[#C62828] rounded-full shadow-lg shadow-red-500/20">
              <Link href="#">Start Trademark Registration</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full bg-white">
              <Link href="#">Free Trademark Search</Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Why Trademark Section */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Why Amazon Sellers Need Trademarks</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyTrademarkPoints.map((point) => (
              <div key={point.title} className="text-center">
                <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center text-[#E53935] mx-auto mb-6">
                  <point.icon className="w-8 h-8" strokeWidth="1.5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{point.title}</h3>
                <p className="text-muted-foreground">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Trademark Services Section */}
      <motion.section {...fadeIn} className="py-24 bg-card border-y">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold font-headline text-foreground">Complete Trademark Registration Services</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                {trademarkServices.map((service) => (
                    <div key={service.title} className="bg-white p-8 rounded-lg border shadow-sm flex flex-col">
                        <h3 className="text-2xl font-bold font-headline text-foreground mb-2">{service.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                            <span>Price: <span className="font-semibold text-foreground">{service.price}</span></span>
                            <span>Timeline: <span className="font-semibold text-foreground">{service.timeline}</span></span>
                        </div>
                        <p className="text-muted-foreground mb-4 flex-grow">{service.description}</p>
                         <p className="text-sm font-semibold text-foreground mb-2">What's Included:</p>
                        <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                            {service.includes.slice(0, 3).map(item => <li key={item} className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>{item}</span></li>)}
                        </ul>
                        <Button asChild className="w-full mt-auto bg-accent text-accent-foreground hover:bg-accent/90">
                            <Link href={service.ctaLink}>{service.cta}</Link>
                        </Button>
                    </div>
                ))}
            </div>
        </div>
      </motion.section>

      {/* Trademark Process Section */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold font-headline text-foreground">How Trademark Registration Works</h2>
            </div>
            <div className="relative grid md:grid-cols-4 gap-8">
                 <div className="absolute top-8 left-0 w-full h-0.5 bg-border hidden md:block"></div>
                {processSteps.map((step, index) => (
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

       {/* Pricing Section */}
       <motion.section {...fadeIn} className="py-24 bg-card border-y">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold font-headline text-foreground">Transparent Trademark Pricing</h2>
                </div>
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* US Trademark */}
                    <div className="border-2 border-primary rounded-lg p-8 bg-white shadow-lg flex flex-col">
                         <p className="text-primary font-semibold mb-2 uppercase">US Trademark</p>
                        <h3 className="text-2xl font-bold font-headline text-foreground">Popular Package</h3>
                        <p className="text-5xl font-bold text-foreground my-4">$599</p>
                        <p className="text-sm text-muted-foreground mb-6">Save $266 on the total value of $865.</p>
                        <ul className="space-y-2 text-sm text-muted-foreground mb-6 flex-grow">
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Comprehensive trademark search</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>USPTO application filing (1 class)</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Office action response (1 included)</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Amazon Brand Registry support</span></li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>1-year trademark monitoring</span></li>
                        </ul>
                        <Button asChild size="lg" className="w-full bg-primary text-primary-foreground">
                            <Link href="#">Get Started</Link>
                        </Button>
                    </div>
                    {/* UK Trademark */}
                    <div className="border rounded-lg p-8 bg-white flex flex-col">
                        <p className="font-semibold mb-2 uppercase">UK Trademark</p>
                        <h3 className="text-2xl font-bold font-headline text-foreground">Popular Package</h3>
                        <p className="text-5xl font-bold text-foreground my-4">£499</p>
                        <p className="text-sm text-muted-foreground mb-6">Save £196 on the total value of £695.</p>
                        <ul className="space-y-2 text-sm text-muted-foreground mb-6 flex-grow">
                             <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>UK trademark search & filing</span></li>
                             <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Amazon UK support</span></li>
                             <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>1-year monitoring</span></li>
                        </ul>
                         <Button asChild size="lg" variant="outline" className="w-full mt-auto">
                            <Link href="#">Get Started</Link>
                        </Button>
                    </div>
                    {/* EU Trademark */}
                    <div className="border rounded-lg p-8 bg-white flex flex-col">
                         <p className="font-semibold mb-2 uppercase">EU Trademark</p>
                        <h3 className="text-2xl font-bold font-headline text-foreground">Popular Package</h3>
                        <p className="text-5xl font-bold text-foreground my-4">€899</p>
                        <p className="text-sm text-muted-foreground mb-6">Save €300 on the total value of €1,199.</p>
                        <ul className="space-y-2 text-sm text-muted-foreground mb-6 flex-grow">
                             <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>EU-wide search & filing (27 countries)</span></li>
                             <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Amazon EU support</span></li>
                             <li className="flex gap-2"><Check className="w-5 h-5 text-green-500 shrink-0"/><span>Renewal management</span></li>
                        </ul>
                         <Button asChild size="lg" variant="outline" className="w-full mt-auto">
                            <Link href="#">Get Started</Link>
                        </Button>
                    </div>
                </div>
            </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold font-headline text-foreground">Frequently Asked Questions</h2>
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

      {/* Testimonials */}
       <motion.section {...fadeIn} className="py-24 bg-card border-y">
          <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-semibold tracking-tight mb-16 text-center text-foreground">Trademark Success Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {testimonials.map(t => (
                      <div key={t.author} className="bg-white border p-8 rounded-lg flex flex-col justify-between">
                          <div>
                              <div className="flex text-yellow-400 mb-4">
                                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                              </div>
                              <p className="text-muted-foreground mb-6 italic">"{t.quote}"</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <div>
                                <div className="text-sm font-semibold text-foreground">{t.author}</div>
                                <div className="text-xs text-muted-foreground">{t.business}</div>
                            </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </motion.section>

      {/* Final CTA */}
      <section id="contact" className="py-24 bg-white relative">
        <motion.div className="max-w-4xl mx-auto px-6 text-center" {...fadeIn}>
          <h2 className="text-4xl md:text-5xl font-semibold text-black tracking-tight mb-6">Ready to Protect Your Brand?</h2>
          <p className="text-lg text-neutral-500 mb-10">Don't risk losing your brand name or missing out on Amazon Brand Registry benefits. Start your trademark registration now and protect your business future.</p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#E53935] text-white hover:bg-[#C62828] transition-all rounded-full shadow-lg shadow-red-500/20 px-8 py-4">
                <Link href="#">Start Trademark Registration</Link>
              </Button>
            </div>
             <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-neutral-600 mt-4">
                <a href="tel:+13463804251" className="flex items-center gap-2 hover:text-[#E53935]">
                  <Phone className="h-4 w-4" />
                  +1 (346) 380-4251
                </a>
                <a href="mailto:support@amazonsolutionspro.com" className="flex items-center gap-2 hover:text-[#E53935]">
                  <Mail className="h-4 w-4" />
                  support@amazonsolutionspro.com
                </a>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
