
'use client';

import Link from 'next/link';
import PageHeader from '@/components/page-header';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ArrowRight,
  Building2,
  Rocket,
  Scale,
  Briefcase,
  Wrench,
  PlaySquare,
  Download,
  Star,
  BookOpen,
  FileText,
  Calculator,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.1 },
  transition: { duration: 0.5 },
};

const resourceCategories = [
  {
    title: 'Business Formation Guides',
    icon: Building2,
    description:
      'Step-by-step guides for forming companies, tax registration, and legal setup.',
    count: '15+ guides',
    href: '#formation-guides',
  },
  {
    title: 'Amazon Selling Guides',
    icon: Rocket,
    description:
      'Complete guides for Amazon sellers - from beginner to advanced strategies.',
    count: '25+ guides',
    href: '#amazon-guides',
  },
  {
    title: 'Legal & IP Resources',
    icon: Scale,
    description:
      'Trademark guides, legal templates, and intellectual property protection resources.',
    count: '12+ resources',
    href: '#legal-resources',
  },
  {
    title: 'Tax & Accounting Tools',
    icon: Briefcase,
    description: 'Tax guides, accounting templates, and compliance checklists.',
    count: '18+ resources',
    href: '#tax-resources',
  },
  {
    title: 'Free Tools & Templates',
    icon: Wrench,
    description: 'Downloadable templates, checklists, and business tools.',
    count: '30+ tools',
    href: '#tools-templates',
  },
  {
    title: 'Video Tutorials',
    icon: PlaySquare,
    description: 'Step-by-step video guides and recorded webinars.',
    count: '40+ videos',
    href: '#video-tutorials',
  },
];

const featuredResources = [
  {
    type: 'Downloadable PDF',
    title: 'The Ultimate Amazon Launch Checklist',
    description:
      '50-point checklist covering everything from product research to launch strategy.',
    stats: '2,500+ downloads',
    icon: Download,
    href: '/download/amazon-launch-checklist/',
  },
  {
    type: 'Comprehensive Guide',
    title: 'Business Formation Guide for Amazon Sellers',
    description:
      'Step-by-step guide to forming LLC, getting EIN, and setting up business structure.',
    stats: '5,200+ views',
    icon: BookOpen,
    href: '/guides/business-formation-guide/',
  },
  {
    type: 'Video Tutorial',
    title: 'How to Register Trademark for Amazon Brand Registry',
    description:
      'Complete walkthrough of US trademark registration process.',
    stats: '3,800+ views',
    icon: PlaySquare,
    href: '/videos/trademark-registration-tutorial/',
  },
    {
    type: 'Online Tool',
    title: 'Amazon Seller Tax Calculator',
    description:
      'Calculate estimated taxes for different business structures and countries.',
    stats: '1,800+ users',
    icon: Calculator,
    href: '/tools/tax-calculator/',
  },
  {
    type: 'Excel Template',
    title: 'Amazon Product Research Spreadsheet',
    description:
      'Comprehensive spreadsheet with formulas for product analysis.',
    stats: '3,200+ downloads',
    icon: FileText,
    href: '/download/product-research-spreadsheet/',
  },
  {
    type: 'Template Bundle',
    title: 'Essential Legal Templates for Amazon Sellers',
    description:
      'Operating agreements, contracts, and legal document templates.',
    stats: '1,500+ bundles',
    icon: Download,
    href: '/download/legal-templates-pack/',
  },
];

const latestPosts = [
    {
        title: "How to Choose Between LLC and Corporation for Amazon Business",
        author: "John Smith",
        date: "December 15, 2024",
        category: "Business Formation",
        readTime: "8 minutes",
        excerpt: "Compare LLC vs Corporation structures for Amazon sellers, including tax implications, liability protection, and operational differences...",
        href: "/blog/llc-vs-corporation-amazon/"
    },
    {
        title: "Amazon Brand Registry Requirements 2024: Complete Guide",
        author: "Sarah Johnson",
        date: "December 12, 2024",
        category: "Amazon Selling",
        readTime: "12 minutes",
        excerpt: "Updated guide on Amazon Brand Registry requirements, including trademark specifications, application process, and common mistakes...",
        href: "/blog/amazon-brand-registry-guide-2024/"
    },
     {
        title: "UK vs USA Company Formation: Which is Better for Amazon Sellers?",
        author: "Michael Chen",
        date: "December 10, 2024",
        category: "Business Formation",
        readTime: "10 minutes",
        excerpt: "Comprehensive comparison of UK and USA company formations for Amazon sellers, including costs, benefits, and market access...",
        href: "/blog/uk-vs-usa-company-formation/"
    },
    {
        title: "ITIN Application Process for Amazon Sellers: Step-by-Step Guide",
        author: "Lisa Rodriguez",
        date: "December 8, 2024",
        category: "Tax & Accounting",
        readTime: "15 minutes",
        excerpt: "Complete walkthrough of ITIN application process for non-US Amazon sellers, including required documents and common mistakes...",
        href: "/blog/itlin-application-guide-amazon-sellers/"
    }
]

export default function ResourcesPage() {
  return (
    <div className="bg-white">
      <motion.section {...fadeIn} className="bg-card border-b pt-16">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">
            Amazon Seller Resources Center
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Free guides, tools, and expert insights to help you launch and grow your Amazon business. Updated regularly with the latest strategies and best practices.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-[#E53935] text-white hover:bg-[#C62828] rounded-full shadow-lg shadow-red-500/20">
              <Link href="#categories">Browse All Resources</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full bg-white">
              <Link href="#">Subscribe for Updates</Link>
            </Button>
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeIn} id="categories" className="py-16 md:py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Browse by Category</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceCategories.map((category) => (
              <Link href={category.href} key={category.title}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 group bg-white">
                    <CardHeader>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center text-[#E53935]">
                                <category.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <CardTitle className="font-headline text-xl">{category.title}</CardTitle>
                                <Badge variant="secondary" className="mt-1">{category.count}</Badge>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>{category.description}</CardDescription>
                        <p className="text-sm font-medium text-[#E53935] mt-4 flex items-center gap-1 group-hover:gap-2 transition-all">
                            View Guides <ArrowRight className="w-4 h-4" />
                        </p>
                    </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeIn} id="formation-guides" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                <h2 className="text-3xl font-bold font-headline text-foreground">Most Popular Resources</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredResources.map((resource) => (
                    <Card key={resource.title} className="flex flex-col bg-card">
                        <CardHeader>
                            <Badge className="w-fit bg-[#E53935] text-white">{resource.type}</Badge>
                            <CardTitle className="font-headline text-xl pt-2">{resource.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground text-sm">{resource.description}</p>
                        </CardContent>
                        <CardFooter className="flex-col items-start gap-4">
                            <div className="text-xs text-muted-foreground font-medium flex items-center gap-4">
                                <span>{resource.stats}</span>
                                <div className="flex items-center gap-0.5 text-yellow-500">
                                    <Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" />
                                </div>
                            </div>
                            <Button asChild variant="outline" className="w-full">
                                <Link href={resource.href}>
                                    <resource.icon className="w-4 h-4 mr-2" />
                                    {resource.type.startsWith('Download') || resource.type.endsWith('Template') || resource.type.endsWith('Bundle') ? 'Download' : resource.type.startsWith('Video') ? 'Watch' : resource.type.startsWith('Online') ? 'Use' : 'Read'} Now
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
      </motion.section>
      
      <motion.section {...fadeIn} id="blog-posts" className="py-16 md:py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                <h2 className="text-3xl font-bold font-headline text-foreground">Latest Articles & Insights</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                {latestPosts.map((post, index) => (
                    <Card key={index} className="bg-white group">
                       <CardHeader>
                        <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground font-medium">
                            <Badge variant="secondary">{post.category}</Badge>
                            <span>{post.date}</span>
                            <span>{post.readTime}</span>
                        </div>
                         <CardTitle className="font-headline text-xl pt-2 group-hover:text-[#E53935] transition-colors">{post.title}</CardTitle>
                       </CardHeader>
                       <CardContent>
                            <p className="text-muted-foreground text-sm">{post.excerpt}</p>
                            <Button variant="link" asChild className="p-0 h-auto mt-4">
                                <Link href={post.href}>Read More <ArrowRight className="ml-1 w-4 h-4" /></Link>
                            </Button>
                       </CardContent>
                    </Card>
                ))}
            </div>
            <div className="text-center mt-12">
                 <Button asChild size="lg">
                    <Link href="/blog">View All Blog Posts</Link>
                 </Button>
            </div>
        </div>
      </motion.section>

    </div>
  );
}
