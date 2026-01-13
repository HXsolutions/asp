'use client';

import Link from 'next/link';
import PageHeader from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Check, ShieldCheck, Landmark, Briefcase, Store, BadgeCheck, FileText, Phone, Mail, Award, Users, GitMerge } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.5 },
};

const businessFormationServices = [
  {
    title: "USA LLC Formation",
    price: "$650",
    timeline: "45 days",
    description: "Establish your business in the US with a Limited Liability Company, complete with everything you need to start selling on Amazon.",
    cta: "Form USA LLC",
    ctaLink: "/business-formation/usa-llc"
  },
  {
    title: "UK Company Formation",
    price: "£400",
    timeline: "20 days",
    description: "Register a Private Limited Company in the UK, providing a gateway to European markets and enhancing your brand's credibility.",
    cta: "Register UK Company",
    ctaLink: "/business-formation/uk-company"
  },
  {
    title: "Canada Corporation",
    price: "CAD $750",
    timeline: "35 days",
    description: "Incorporate in Canada to access North American markets with preferential trade agreements and a stable business environment.",
    cta: "Form Canada Corp",
    ctaLink: "/business-formation/canada-corporation"
  },
  {
    title: "France Company Formation",
    price: "€1,350",
    timeline: "40 days",
    description: "Establish your presence in the heart of Europe by forming a company in France, a key market for e-commerce growth.",
    cta: "Register France Company",
    ctaLink: "/business-formation/france-company"
  }
];

const legalServices = [
  { title: "Trademark Registration", description: "Protect your brand name, logo, and slogan with federal registration in the US, UK, Canada, or France.", cta: "Register Trademark", ctaLink: "/trademark-registration" },
  { title: "Patent Filing", description: "Secure exclusive rights to your unique inventions and product designs with our professional patent filing services.", cta: "File a Patent", ctaLink: "/patent-filing" },
  { title: "Brand Protection", description: "Ongoing monitoring and enforcement to protect your brand from hijackers and counterfeiters on Amazon.", cta: "Protect My Brand", ctaLink: "/brand-protection" },
  { title: "Compliance Services", description: "Annual filings, regulatory obligations, and good standing certificates to keep your business compliant.", cta: "Stay Compliant", ctaLink: "/compliance" },
];

const whyChooseUs = [
    { 
        icon: Users,
        title: "Experienced Team", 
        description: "Our team of 9 professionals has over two years of specialized experience, having successfully formed over 100 companies globally." 
    },
    { 
        icon: Award,
        title: "Proven Track Record", 
        description: "We have a history of success, helping clients navigate complex international setups with a high rate of approval." 
    },
    { 
        icon: GitMerge,
        title: "Robust Solutions", 
        description: "With multiple proven methods for every task, we're equipped to handle difficult situations and ensure your process continues smoothly."
    },
    { 
        icon: ShieldCheck,
        title: "Full Responsibility", 
        description: "We take full responsibility for any technical problems, delays, or revisions, ensuring your needs are met with our full capacity."
    },
     { 
        icon: Briefcase,
        title: "Free Value-Added Services", 
        description: "We offer complimentary setup for essential tools like Payoneer and Wise accounts to support your business operations."
    },
    { 
        icon: Landmark,
        title: "Competitive Pricing", 
        description: "Our quotations are structured to be lower than our competitors, providing you with top-tier service at an affordable rate."
    },
];


export default function ServicesPage() {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="pt-24 md:pt-32">
        <PageHeader
          title="Complete Amazon Business Services"
          description="From business formation to Amazon domination – all services under one roof. We handle the complexities so you can focus on growth."
        />
      </div>
       <div className="container mx-auto px-4 py-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white text-black border-neutral-300 rounded-full">
                <Link href="/packages">View Packages</Link>
            </Button>
        </div>

      <main className="container mx-auto px-4 py-12 md:py-16">

        {/* Business Formation */}
        <motion.section {...fadeIn} className="mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-primary border shrink-0">
                <Briefcase className="w-6 h-6" />
            </div>
            <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-black">Business Formation Services</h2>
                <p className="text-neutral-500 max-w-2xl mt-1">Legal foundation for your global Amazon business, including bank and Amazon account setup support.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessFormationServices.map(service => (
                <Card key={service.title} className="bg-white flex flex-col hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-neutral-500">
                            <span><span className="font-semibold text-black">{service.price}</span></span>
                            <span><span className="font-semibold text-black">{service.timeline}</span></span>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-sm text-neutral-600">{service.description}</p>
                    </CardContent>
                    <CardFooter>
                         <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                            <Link href={service.ctaLink}>{service.cta}</Link>
                         </Button>
                    </CardFooter>
                </Card>
            ))}
          </div>
        </motion.section>

        {/* Legal & IP */}
        <motion.section {...fadeIn} className="mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-primary border shrink-0">
                <ShieldCheck className="w-6 h-6" />
            </div>
             <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-black">Legal, IP & Amazon Services</h2>
                <p className="text-neutral-500 max-w-2xl mt-1">Protect your brand, secure your inventions, and set up your Amazon presence for success.</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {legalServices.map(service => (
                <Card key={service.title} className="bg-white text-center p-6 flex flex-col hover:shadow-lg transition-shadow">
                    <h3 className="font-semibold text-lg mb-2 flex-grow">{service.title}</h3>
                    <p className="text-sm text-neutral-500 mb-4 flex-grow">{service.description}</p>
                     <Button asChild variant="outline" className="w-full bg-neutral-100 mt-auto">
                        <Link href={service.ctaLink}>{service.cta}</Link>
                     </Button>
                </Card>
            ))}
          </div>
        </motion.section>
        
        {/* Why Choose Us */}
        <motion.section {...fadeIn} className="mb-16 md:mb-20">
             <div className="text-center mb-12">
                 <h2 className="text-2xl md:text-3xl font-semibold text-black">Why Choose Amazon Solutions Pro</h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                {whyChooseUs.map(item => (
                    <div key={item.title} className="bg-white p-6 rounded-lg border">
                         <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center text-primary mb-4">
                            <item.icon className="w-6 h-6" />
                        </div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-sm text-neutral-500 mt-1">{item.description}</p>
                    </div>
                ))}
            </div>
        </motion.section>
        
      </main>

       {/* Final CTA */}
      <section id="contact" className="py-16 md:py-24 bg-white border-t border-neutral-100 relative">
        <motion.div className="max-w-4xl mx-auto px-6 text-center" {...fadeIn}>
          <h2 className="text-3xl md:text-5xl font-semibold text-black tracking-tight mb-6">Ready to Build Your Global Brand?</h2>
          <p className="text-lg text-neutral-500 mb-10">Choose from our comprehensive services or get a custom package tailored to your needs. Let's turn your business idea into a reality.</p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all rounded-full shadow-lg shadow-red-500/20 px-8 py-3 md:py-4">
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
            </div>
             <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-neutral-600 mt-4">
                <a href="tel:+13463804251" className="flex items-center gap-2 hover:text-primary">
                  <Phone className="h-4 w-4" />
                  +1 (346) 380-4251
                </a>
                <a href="mailto:support@amazonsolutionspro.com" className="flex items-center gap-2 hover:text-primary">
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
