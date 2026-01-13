
'use client';

import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Building,
  Check,
  ChevronRight,
  Globe,
  Heart,
  Landmark,
  Layers,
  LayoutPanelLeft,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
  TrendingUp,
  Users,
  Wallet,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import PageHeader from '@/components/page-header';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.5 },
};

const stats = {
  main: [
    { value: '500+', label: 'Entrepreneurs Supported' },
    { value: '50+', label: 'Countries Served' },
    { value: '$50M+', label: 'Combined Amazon Sales' },
  ],
  secondary: [
    { value: '500+', label: 'Businesses Launched' },
    { value: '50+', label: 'Countries Served' },
    { value: '$50M+', label: 'Amazon Sales Generated' },
    { value: '200+', label: '5-Star Reviews' },
    { value: '4.8/5', label: 'Average Rating' },
    { value: '24/7', label: 'Customer Support' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '0', label: 'Hidden Fees' },
  ],
};

const missionBeliefs = [
  'Access to global markets for every entrepreneur',
  'Simplified business formation',
  'Legal protection for long-term growth',
  'Amazon selling for everyone, everywhere',
  'One trusted partner beats multiple providers',
];

const whyChooseUs = [
    {
        icon: Layers,
        title: "One-Stop Solution",
        description: "Business formation, legal, tax, and Amazon optimization under one roof."
    },
    {
        icon: Briefcase,
        title: "Amazon Expertise",
        description: "Specialized knowledge for Amazon sellers to navigate the marketplace."
    },
    {
        icon: Globe,
        title: "Global Reach",
        description: "Services across USA, UK, Canada, and beyond for international growth."
    },
    {
        icon: Award,
        title: "Proven Results",
        description: "500+ businesses launched, $50M+ in sales, and a 4.8/5 average rating."
    },
    {
        icon: Users,
        title: "Ongoing Support",
        description: "We provide a long-term partnership for continuous growth and success."
    },
];

const teamMembers = [
    {
        name: "John Carter",
        role: "Lead Consultant",
        experience: "8+ years | USA, UK, Canada",
        quote: "Helping entrepreneurs turn business dreams into reality.",
        avatar: "JC"
    },
    {
        name: "Sophie Moore",
        role: "Trademark Specialist",
        experience: "10+ years | Global IP",
        quote: "Protecting your brand is protecting your future.",
        avatar: "SM"
    },
    {
        name: "Alex Johnson",
        role: "Account Manager",
        experience: "6+ years | Amazon PPC & Launches",
        quote: "Maximizing sellers’ Amazon potential.",
        avatar: "AJ"
    },
    {
        name: "Maria Garcia",
        role: "Tax Consultant",
        experience: "7+ years | E-commerce Compliance",
        quote: "Making tax compliance simple worldwide.",
        avatar: "MG"
    }
];

const testimonials = [
  {
    quote:
      'Amazon Solutions Pro made my dream of selling on Amazon USA a reality!',
    author: 'Maria R.',
    location: 'Spain',
    avatar: 'MR',
  },
  {
    quote: 'Professional, reliable, and knowledgeable. Seamless UK→USA expansion.',
    author: 'James W.',
    location: 'UK',
    avatar: 'JW',
  },
  {
    quote:
      'From Pakistan LLC setup to first Amazon sale in 8 weeks – everything simple!',
    author: 'Ahmed K.',
    location: 'Pakistan',
    avatar: 'AK',
  },
];

const commitments = [
    { title: "Transparency", description: "No hidden fees. Ever." },
    { title: "Quality", description: "Excellence in every service." },
    { title: "Support", description: "24/7 guidance, post-launch included." },
    { title: "Speed", description: "Efficient business setup." },
    { title: "Results", description: "Your growth is our success." },
];

export default function AboutPage() {
  return (
    <div className="bg-[#F5F5F5]">
      {/* Hero Section */}
      <motion.section {...fadeIn} className="bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-semibold text-black tracking-tight leading-tight mb-6">
            Your Complete Amazon Business Partner
          </h1>
          <p className="text-lg md:text-xl text-neutral-500 mb-10 max-w-3xl mx-auto">
            From company formation to Amazon domination, we help entrepreneurs
            build successful eCommerce businesses worldwide.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all rounded-full shadow-lg shadow-red-500/20 group px-8 py-3.5"
          >
            <Link href="/contact">
              Schedule Free Consultation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform h-4 w-4" />
            </Link>
          </Button>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <motion.section {...fadeIn} className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg max-w-none text-neutral-600">
              <h2 className="text-3xl font-semibold text-black tracking-tight mb-4">
                Our Story
              </h2>
              <p>
                Amazon Solutions Pro was founded to make Amazon selling
                accessible globally by providing complete business solutions
                under one roof.
              </p>
              <p>
                What started as a specialized consulting firm has evolved into a
                full business launch platform. Sellers need more than
                marketing—they need legal foundations, brand protection, tax
                compliance, and ongoing guidance.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 text-center">
              {stats.main.map((stat) => (
                <div key={stat.label} className="bg-white p-4 md:p-6 rounded-xl border border-neutral-200">
                  <div className="text-2xl md:text-3xl font-semibold text-black tracking-tight mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-neutral-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Our Mission Section */}
      <motion.section {...fadeIn} className="py-16 md:py-24 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className='max-w-md'>
                <h2 className="text-3xl font-semibold tracking-tight mb-4">Our Mission</h2>
                <p className="text-lg text-neutral-300">Empowering entrepreneurs worldwide to turn ideas into thriving Amazon businesses.</p>
            </div>
            <div>
                <h3 className="font-semibold mb-4">Core Beliefs:</h3>
                <ul className="space-y-3">
                    {missionBeliefs.map(belief => (
                        <li key={belief} className="flex items-start gap-3">
                            <Check className="text-primary mt-1 shrink-0 h-5 w-5" strokeWidth="3" />
                            <span className='text-neutral-300'>{belief}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section {...fadeIn} className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                  <h2 className="text-3xl font-semibold text-black tracking-tight mb-4">Why Choose Us</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {whyChooseUs.map(item => (
                      <div key={item.title} className="text-center p-6">
                          <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                              <item.icon className="w-8 h-8" strokeWidth="1.5" />
                          </div>
                          <h3 className="text-lg font-semibold text-black mb-2">{item.title}</h3>
                          <p className="text-neutral-500">{item.description}</p>
                      </div>
                  ))}
              </div>
          </div>
      </motion.section>

      {/* By The Numbers Section */}
      <motion.section {...fadeIn} className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                  <h2 className="text-3xl font-semibold text-black tracking-tight mb-4">By The Numbers</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {stats.secondary.map(stat => (
                    <div key={stat.label} className="bg-white p-4 md:p-6 rounded-xl border border-neutral-200 text-center">
                        <div className="text-3xl md:text-4xl font-semibold text-primary tracking-tight mb-2">{stat.value}</div>
                        <div className="text-sm text-neutral-500">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
      </motion.section>

      {/* Our Team Section */}
      <motion.section {...fadeIn} className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                <h2 className="text-3xl font-semibold text-black tracking-tight mb-4">Meet Our Team</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                    <div key={`${member.name}-${index}`} className="bg-[#F5F5F5] p-6 rounded-lg text-center border border-neutral-200">
                         <div className="w-20 h-20 rounded-full bg-neutral-200 flex items-center justify-center text-black font-semibold text-2xl mx-auto mb-4">{member.avatar}</div>
                         <h3 className="text-lg font-semibold text-black">{member.name}</h3>
                         <p className="text-sm text-primary font-medium">{member.role}</p>
                         <p className="text-xs text-neutral-500 mb-4">{member.experience}</p>
                         <p className="text-sm text-neutral-600 italic">"{member.quote}"</p>
                    </div>
                ))}
            </div>
        </div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section {...fadeIn} className="py-16">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
                <h3 className="text-lg font-semibold text-black mb-8">Certifications & Partnerships</h3>
                <div className="flex flex-wrap justify-center items-center gap-x-8 sm:gap-x-12 gap-y-4 text-neutral-500 text-sm">
                    <span className="font-medium">IRS Certified Acceptance Agent (CAA)</span>
                    <span className="font-medium">Companies House Registered Agent</span>
                    <span className="font-medium">HMRC AML Compliant</span>
                    <span className="font-medium">Better Business Bureau Accredited – A+ Rating</span>
                    <span className="font-medium">Amazon Advertising Partner</span>
                </div>
            </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section {...fadeIn} className="py-16 md:py-24 bg-neutral-900 text-white">
          <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-semibold tracking-tight mb-12 md:mb-16 text-center">What Our Clients Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {testimonials.map(t => (
                      <div key={t.author} className="bg-neutral-800 p-8 rounded-lg flex flex-col justify-between">
                          <div>
                              <div className="flex text-primary mb-4">
                                  <Star className="h-5 w-5 fill-current" />
                                  <Star className="h-5 w-5 fill-current" />
                                  <Star className="h-5 w-5 fill-current" />
                                  <Star className="h-5 w-5 fill-current" />
                                  <Star className="h-5 w-5 fill-current" />
                              </div>
                              <p className="text-neutral-300 mb-6 italic">"{t.quote}"</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center font-semibold text-sm">{t.avatar}</div>
                            <div>
                                <div className="text-sm font-semibold">{t.author}</div>
                                <div className="text-xs text-neutral-400">{t.location}</div>
                            </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section {...fadeIn} id="contact" className="py-16 md:py-24 bg-white border-t border-neutral-100 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-black tracking-tight mb-6">Ready to Launch Your<br />Amazon Business?</h2>
          <p className="text-lg text-neutral-500 mb-10">Join 500+ successful entrepreneurs who trusted us to launch their Amazon businesses.</p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-4">
               <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all rounded-full shadow-lg shadow-red-500/20 px-8 py-3 md:py-4">
                  <Link href="/contact">Start Your Journey</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 py-3 md:py-4 text-black bg-white border-neutral-200 hover:bg-neutral-50 rounded-full">
                <a href="tel:+13463804251">
                  <Phone className="mr-2 h-4 w-4" />
                  +1 (346) 380-4251
                </a>
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

    </div>
  );
}

    