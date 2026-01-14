
'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Briefcase,
  Rocket,
  Scale,
  Building2,
  Check,
  ShieldCheck,
  Star,
  Globe,
  BadgeDollarSign,
  Phone,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { AnimatedStat } from '@/components/animated-stat';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.5 },
};

const stats = [
    { value: 500, label: 'Businesses Launched', suffix: '+' },
    { value: 50, label: 'Countries Served', suffix: '+' },
    { value: 50, label: 'Amazon Sales Generated', suffix: 'M+', prefix: '$' },
]

export default function Home() {
  return (
    <main className="pt-16">
      <div className="bg-white text-neutral-600 antialiased selection:bg-primary selection:text-white">
        {/* Hero Section */}
        <section className="relative pt-16 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>

          <motion.div
            className="max-w-7xl mx-auto px-6 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-50 border border-neutral-200 text-xs font-medium text-neutral-600 mb-8">
                  <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Complete Business Launch Platform
                  </div>

                  <h1 className="text-5xl md:text-7xl font-semibold text-black tracking-tight leading-[1.1] mb-6">
                  From LLC to <br />
                  <span className="text-primary">Amazon Bestseller</span>
                  </h1>

                  <p className="text-lg md:text-xl text-neutral-500 mb-10 max-w-xl leading-relaxed">
                  Everything you need to launch your Amazon business: USA/UK company
                  formation, trademark registration, EIN/ITIN, and Amazon seller
                  services - all in one place.
                  </p>

                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <Button
                        asChild
                        size="lg"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all rounded-full shadow-lg shadow-red-500/20 group px-8 py-3.5"
                    >
                        <Link href="/contact">
                        Get Free Consultation
                        </Link>
                    </Button>
                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="px-8 py-3.5 text-black bg-white border-neutral-200 hover:bg-neutral-50 transition-all rounded-full"
                    >
                        <Link href="/services">Explore Services</Link>
                    </Button>
                  </div>
              </div>
              <div className="relative mt-12 lg:mt-0">
                   <div className="absolute -right-20 -top-20 w-[500px] h-[500px] bg-red-500/5 blur-[120px] rounded-full"></div>
                   <motion.div 
                      initial={{ opacity: 0, scale: 0.8, y: 50 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 50 }}
                      className="relative w-full max-w-lg mx-auto"
                  >
                    <Image
                      src="https://i.postimg.cc/JhxK53BS/image.png"
                      alt="Amazon Solutions Pro Dashboard"
                      width={1200}
                      height={900}
                      priority
                      className="bg-transparent"
                    />
                  </motion.div>
              </div>
            </div>

            <motion.div {...fadeIn} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 md:mt-24 pt-8 border-t border-neutral-100">
              {stats.map(stat => (
                   <div key={stat.label} className="bg-neutral-50 p-6 rounded-lg border border-neutral-200 text-center">
                    <div className="text-4xl font-semibold text-black tracking-tight mb-1">
                      <AnimatedStat from={0} to={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-neutral-500">{stat.label}</div>
                  </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-[#F5F5F5]">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeIn}>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
                <div>
                  <h2 className="text-3xl font-semibold text-black tracking-tight mb-4">
                    Complete Amazon
                    <br />
                    Business Solutions
                  </h2>
                  <p className="text-neutral-500 max-w-md">
                    End-to-end infrastructure for modern e-commerce entrepreneurs.
                  </p>
                </div>
                <Link
                  href="/services"
                  className="text-sm font-medium text-primary hover:text-black transition-colors flex items-center gap-1 self-start md:self-end"
                >
                  View all capabilities
                </Link>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div {...fadeIn}>
                <div className="group bg-white p-8 rounded-2xl border border-neutral-100 hover:shadow-xl hover:shadow-black/5 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-neutral-50 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <Building2 className="w-6 h-6" strokeWidth="1.5" />
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-3">
                    Business Formation
                  </h3>
                  <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
                    LLC & Corporation setup in USA, UK, Canada & more. Legal
                    foundation setup.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm text-neutral-600">
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary"></span>
                      USA LLC Formation
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary"></span>UK
                      Ltd Company
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary"></span>
                      EIN Registration
                    </li>
                  </ul>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-xs font-medium text-black group-hover:text-primary transition-colors"
                  >
                    Learn More 
                  </Link>
                </div>
              </motion.div>
              <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.1 }}>
                <div className="group bg-white p-8 rounded-2xl border border-neutral-100 hover:shadow-xl hover:shadow-black/5 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-neutral-50 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <Scale className="w-6 h-6" strokeWidth="1.5" />
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-3">
                    Legal Protection
                  </h3>
                  <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
                    Global trademark registration and compliance for Amazon
                    sellers.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm text-neutral-600">
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary"></span>
                      US Trademark
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary"></span>
                      Brand Registry
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary"></span>IP
                      Protection
                    </li>
                  </ul>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-xs font-medium text-black group-hover:text-primary transition-colors"
                  >
                    Learn More 
                  </Link>
                </div>
              </motion.div>
              <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.2 }}>
                <div className="group bg-white p-8 rounded-2xl border border-neutral-100 hover:shadow-xl hover:shadow-black/5 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-neutral-50 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <Briefcase className="w-6 h-6" strokeWidth="1.5" />
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-3">
                    Tax & Accounting
                  </h3>
                  <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
                    ITIN, EIN, VAT registration, bookkeeping, and filing
                    services.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm text-neutral-600">
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary"></span>
                      ITIN Application
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary"></span>
                      Bookkeeping
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary"></span>
                      Annual Tax Filing
                    </li>
                  </ul>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-xs font-medium text-black group-hover:text-primary transition-colors"
                  >
                    Learn More 
                  </Link>
                </div>
              </motion.div>
              <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.3 }}>
                <div className="group bg-white p-8 rounded-2xl border border-neutral-100 hover:shadow-xl hover:shadow-black/5 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-neutral-50 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <Rocket className="w-6 h-6" strokeWidth="1.5" />
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-3">
                    Amazon Solutions
                  </h3>
                  <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
                    Complete seller services from setup to PPC management.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm text-neutral-600">
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary"></span>
                      Account Creation
                    </li>
                  </ul>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-xs font-medium text-black group-hover:text-primary transition-colors"
                  >
                    Learn More 
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section id="packages" className="py-16 md:py-24 bg-white relative">
          <motion.div className="max-w-7xl mx-auto px-6" {...fadeIn}>
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <h2 className="text-3xl font-semibold text-black tracking-tight mb-4">
                Tailored Packages for Your Success
              </h2>
              <p className="text-neutral-500">
                We offer a range of packages designed to meet you where you are, from just starting out to scaling your enterprise. Find the perfect fit for your business goals.
              </p>
               <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/packages">View All Packages</Link>
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Trust Section */}
        <section className="py-12 bg-neutral-900 text-white">
          <motion.div className="max-w-7xl mx-auto px-6" {...fadeIn}>
            <div className="text-center mb-10">
              <h3 className="text-lg font-medium text-neutral-300">
                Why 500+ Sellers Trust Us
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center p-4">
                <ShieldCheck
                  className="text-primary mb-3 h-8 w-8"
                  strokeWidth="1.5"
                />
                <div className="font-semibold mb-2">Certified & Registered</div>
                <div className="text-xs text-neutral-400">
                  IRS Certified Acceptance Agent • Companies House • HMRC
                </div>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <Star
                  className="text-primary mb-3 h-8 w-8"
                  strokeWidth="1.5"
                />
                <div className="font-semibold mb-2">4.8/5 Rating</div>
                <div className="text-xs text-neutral-400">
                  200+ verified reviews from satisfied Amazon sellers
                </div>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <Globe
                  className="text-primary mb-3 h-8 w-8"
                  strokeWidth="1.5"
                />
                <div className="font-semibold mb-2">Global Reach</div>
                <div className="text-xs text-neutral-400">
                  Helping sellers in 50+ countries launch businesses
                </div>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <BadgeDollarSign
                  className="text-primary mb-3 h-8 w-8"
                  strokeWidth="1.5"
                />
                <div className="font-semibold mb-2">Money-Back Guarantee</div>
                <div className="text-xs text-neutral-400">
                  If state rejects your filing, we refund 100% instantly
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-16 md:py-24 bg-[#F5F5F5]">
          <motion.div className="max-w-7xl mx-auto px-6" {...fadeIn}>
            <h2 className="text-3xl font-semibold text-black tracking-tight mb-12 md:mb-16 text-center">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-8 rounded-2xl border border-neutral-100 flex flex-col justify-between">
                <div>
                  <div className="flex text-primary mb-4">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                  <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
                    "Amazon Solutions Pro helped me set up my USA LLC from
                    Pakistan, got my EIN, and launched my first product in 6
                    weeks. Sales are already at $15K/month!"
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-black font-semibold text-xs">
                    AR
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-black">
                      Ahmed R.
                    </div>
                    <div className="text-xs text-neutral-400">
                      Pakistan to Amazon.com
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-neutral-100 flex flex-col justify-between">
                <div>
                  <div className="flex text-primary mb-4">
                     <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                  <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
                    "They handled everything - UK company formation, VAT
                    registration, and Amazon UK setup. Now I'm selling in 5
                    European marketplaces."
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-black font-semibold text-xs">
                    SM
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-black">
                      Sarah M.
                    </div>
                    <div className="text-xs text-neutral-400">
                      UK to EU Marketplaces
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-neutral-100 flex flex-col justify-between">
                <div>
                  <div className="flex text-primary mb-4">
                     <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                  <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
                    "Got my trademark approved and Brand Registry done. My
                    conversion rate improved 40% with A+ content. Worth every
                    penny!"
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-black font-semibold text-xs">
                    DL
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-black">
                      David L.
                    </div>
                    <div className="text-xs text-neutral-400">
                      USA to Private Label
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Final CTA */}
        <section
          id="contact"
          className="py-16 md:py-24 bg-white border-t border-neutral-100 relative overflow-hidden"
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-red-50 to-white opacity-50 blur-3xl -z-10"></div>
          <motion.div className="max-w-4xl mx-auto px-6 text-center" {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-semibold text-black tracking-tight mb-6">
              Ready to Launch Your
              <br />
              Amazon Business?
            </h2>
            <p className="text-lg text-neutral-500 mb-10">
              Join 500+ successful sellers who started their journey with us.
            </p>
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all rounded-full shadow-lg shadow-red-500/20 px-8 py-4 w-full sm:w-auto">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-black bg-white border-neutral-200 hover:bg-neutral-50 rounded-full w-full sm:w-auto"
                >
                  <a href="tel:+13463804251">
                    <Phone className="mr-2 h-4 w-4" />
                    +1 (346) 380-4251
                  </a>
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-x-6 gap-y-2 text-xs text-neutral-500 mt-4">
                <span className="flex items-center gap-1">
                  <Check className="text-primary h-3.5 w-3.5" /> Free 30-min
                  consultation
                </span>
                <span className="flex items-center gap-1">
                  <Check className="text-primary h-3.5 w-3.5" /> No obligation
                  quote
                </span>
                <span className="flex items-center gap-1">
                  <Check className="text-primary h-3.5 w-3.5" /> 24/7 WhatsApp
                  support
                </span>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
