
'use client';
import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.5 },
};

const blogPosts = [
    { id: 1, category: 'Business Tips', title: 'The Ultimate Guide to Choosing Your Business Structure', description: 'LLC, Corporation, or Sole Proprietorship? We break down the pros and cons...', imageId: 'blog-1', href: '/blog/ultimate-guide-to-choosing-business-structure' },
    { id: 2, category: 'Amazon FBA', title: '5 Common Mistakes to Avoid When Starting on Amazon', description: 'Learn from the missteps of others. Our expert tips for a smoother launch...', imageId: 'blog-2', href: '/blog/5-common-mistakes-to-avoid-on-amazon' },
    { id: 3, category: 'Trademarks', title: 'Why Trademarking Your Brand is Non-Negotiable', description: 'Discover how a registered trademark can be your most valuable asset...', imageId: 'blog-3', href: '/blog/why-trademarking-is-non-negotiable' },
    { id: 4, category: 'Tax', title: 'Understanding Sales Tax Compliance for E-commerce', description: 'A simple guide to navigating the complex world of sales tax for online sellers.', imageId: 'blog-4', href: '/blog/understanding-sales-tax-compliance' },
    { id: 5, category: 'Marketing', title: 'How to Optimize Your Amazon PPC Campaigns', description: 'Stop wasting money on ads that don\'t convert. Follow these steps for success.', imageId: 'blog-5', href: '/blog/how-to-optimize-amazon-ppc' },
    { id: 6, category: 'Legal', title: 'The Difference Between Copyright and Trademark', description: 'A crucial distinction every brand owner needs to understand to protect their IP.', imageId: 'blog-6', href: '/blog/copyright-vs-trademark' },
];

export default function BlogPage() {
    
  return (
    <div className="bg-background">
      <PageHeader
        title="Blog"
        description="Insights, guides, and updates from the Launchpad team to help you build and grow your business."
      />
      <motion.div {...fadeIn} className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => {
            const image = placeholderImages.find(p => p.id === post.imageId);
            return (
                <Card key={post.id} className="overflow-hidden flex flex-col group bg-card">
                {image && (
                    <div className="relative h-48 w-full overflow-hidden">
                    <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={image.imageHint}
                    />
                    </div>
                )}
                <CardHeader>
                    <Badge variant="secondary" className="w-fit">{post.category}</Badge>
                    <CardTitle className="font-headline text-xl pt-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                    <p className="text-muted-foreground flex-grow">{post.description}</p>
                    <Button variant="link" asChild className="p-0 h-auto mt-4 self-start text-primary">
                    <Link href={post.href}>Read article <ArrowRight className="ml-1 h-4 w-4" /></Link>
                    </Button>
                </CardContent>
                </Card>
            )
        })}
        </div>
      </motion.div>
    </div>
  );
}

    