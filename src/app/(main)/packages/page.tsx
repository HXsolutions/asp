
'use client';

import Link from 'next/link';
import PageHeader from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star, BadgePercent, Calculator, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.5 },
};

const packages = [
    {
        name: "Launch",
        price: "$2,499",
        savings: "Save $500",
        timeline: "4-6 weeks",
        bestFor: "New sellers",
        features: [
            "USA LLC Formation",
            "EIN Registration",
            "US Trademark Search",
            "Basic Amazon Setup",
            "30-day Support",
        ],
        link: "/packages/launch",
        isPopular: true,
    },
    {
        name: "Expansion",
        price: "$4,999",
        savings: "Save $1,000",
        timeline: "8-10 weeks",
        bestFor: "Growing brands",
        features: [
            "USA LLC + UK Ltd",
            "International Trademark",
            "Multi-marketplace Setup",
            "3 months support",
        ],
        link: "/packages/expansion",
        isPopular: false,
    },
    {
        name: "Enterprise",
        price: "$8,999",
        savings: "Save $2,000",
        timeline: "12-16 weeks",
        bestFor: "Established businesses",
        features: [
            "Multi-country (3)",
            "Global Trademark Portfolio",
            "Full Optimization",
            "1-year VIP support",
        ],
        link: "/packages/enterprise",
        isPopular: false,
    }
];

const guarantees = [
    { title: "Approval Guarantee", description: "100% refund if LLC rejected due to our error." },
    { title: "On-Time Delivery", description: "Services delivered on time or $200 credit." },
    { title: "Satisfaction Guarantee", description: "Unlimited revisions until fully satisfied." },
    { title: "Lifetime Support", description: "Free lifetime support for provided services." },
];

export default function PackagesPage() {
  return (
    <div className="bg-[#F5F5F5]">
        <div className="pt-16">
            <motion.div {...fadeIn}>
                <PageHeader
                title="Complete Amazon Seller Packages"
                description="Save Up to 30% with Bundled Services. Everything you need to launch and grow your Amazon business in one comprehensive package."
                />
                <div className="container mx-auto px-4 pb-8 flex flex-col sm:flex-row justify-center gap-4">
                    <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-lg shadow-red-500/20">
                        <Link href="#package-comparison">Compare Packages</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="bg-white text-black border-neutral-300 rounded-full">
                        <Link href="/contact">Book a Consultation</Link>
                    </Button>
                </div>
            </motion.div>
        </div>
      
      <motion.section id="package-comparison" {...fadeIn} className="py-24 container mx-auto px-6">
         <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground">Choose Your Perfect Package</h2>
        </div>
        <Card className="bg-white">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[250px] font-semibold text-foreground">Feature</TableHead>
                        <TableHead className="text-center font-semibold text-foreground">Launch</TableHead>
                        <TableHead className="text-center font-semibold text-foreground">Expansion</TableHead>
                        <TableHead className="text-center font-semibold text-foreground">Enterprise</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-semibold">Price</TableCell>
                        <TableCell className="text-center font-bold text-lg">$2,499</TableCell>
                        <TableCell className="text-center font-bold text-lg">$4,999</TableCell>
                        <TableCell className="text-center font-bold text-lg">$8,999</TableCell>
                    </TableRow>
                     <TableRow>
                        <TableCell className="font-semibold">Savings</TableCell>
                        <TableCell className="text-center text-green-600 font-semibold">Save $500</TableCell>
                        <TableCell className="text-center text-green-600 font-semibold">Save $1,000</TableCell>
                        <TableCell className="text-center text-green-600 font-semibold">Save $2,000</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-semibold">Best For</TableCell>
                        <TableCell className="text-center">New sellers</TableCell>
                        <TableCell className="text-center">Growing brands</TableCell>
                        <TableCell className="text-center">Established businesses</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-semibold">Business Formation</TableCell>
                        <TableCell className="text-center">USA LLC</TableCell>
                        <TableCell className="text-center">USA LLC + UK Ltd</TableCell>
                        <TableCell className="text-center">Multi-country (3)</TableCell>
                    </TableRow>
                     <TableRow>
                        <TableCell className="font-semibold">Trademark</TableCell>
                        <TableCell className="text-center">US Search</TableCell>
                        <TableCell className="text-center">International</TableCell>
                        <TableCell className="text-center">Global Portfolio</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-semibold">Amazon Setup</TableCell>
                        <TableCell className="text-center">Basic</TableCell>
                        <TableCell className="text-center">Multi-marketplace</TableCell>
                        <TableCell className="text-center">Full optimization</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-semibold">Support</TableCell>
                        <TableCell className="text-center">30 days</TableCell>
                        <TableCell className="text-center">3 months</TableCell>
                        <TableCell className="text-center">1 year</TableCell>
                    </TableRow>
                     <TableRow>
                        <TableCell></TableCell>
                        <TableCell className="text-center"><Button asChild><Link href="/packages/launch">Get Launch</Link></Button></TableCell>
                        <TableCell className="text-center"><Button asChild><Link href="/packages/expansion">Get Expansion</Link></Button></TableCell>
                        <TableCell className="text-center"><Button asChild><Link href="/packages/enterprise">Get Enterprise</Link></Button></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Card>
      </motion.section>

      <div className="space-y-12 py-12 container mx-auto px-6">
        {/* Launch Package */}
        <motion.section id="launch-package" {...fadeIn}>
            <Card className="p-8 border-primary border-2 shadow-lg bg-white overflow-hidden relative">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full"></div>
                <div className="relative">
                    <Badge className="bg-primary mb-4">Most Popular</Badge>
                    <h2 className="text-3xl font-bold font-headline text-foreground">Amazon Launch Package - $2,499</h2>
                    <p className="text-muted-foreground mt-2">Perfect for new Amazon sellers ready to start their journey.</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                       <div><h3 className="font-semibold text-lg mb-2">Business Foundation</h3><p className="text-sm text-muted-foreground">USA LLC Formation, EIN, Registered Agent, Operating Agreement.</p></div>
                       <div><h3 className="font-semibold text-lg mb-2">Brand Protection</h3><p className="text-sm text-muted-foreground">US Trademark Search, application guidance, Brand Registry support.</p></div>
                       <div><h3 className="font-semibold text-lg mb-2">Amazon Setup</h3><p className="text-sm text-muted-foreground">Account setup, product research, basic listing optimization.</p></div>
                    </div>
                     <div className="mt-8">
                        <Button asChild size="lg" className="bg-primary hover:bg-primary/90"><Link href="/packages/launch">Get Launch Package</Link></Button>
                    </div>
                </div>
            </Card>
        </motion.section>

        {/* Expansion Package */}
        <motion.section id="expansion-package" {...fadeIn}>
            <Card className="p-8 bg-white border">
                <Badge variant="secondary" className="mb-4">Best Value</Badge>
                <h2 className="text-3xl font-bold font-headline text-foreground">Global Expansion Package - $4,999</h2>
                <p className="text-muted-foreground mt-2">For sellers ready to scale internationally and grow their brand.</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                   <div><h3 className="font-semibold text-lg mb-2">Multi-Country Setup</h3><p className="text-sm text-muted-foreground">USA LLC & UK Ltd, tax registrations, banking setup.</p></div>
                   <div><h3 className="font-semibold text-lg mb-2">International Protection</h3><p className="text-sm text-muted-foreground">US & UK trademark applications, global protection setup.</p></div>
                   <div><h3 className="font-semibold text-lg mb-2">Multi-Marketplace Amazon</h3><p className="text-sm text-muted-foreground">Amazon US & UK setup, EU expansion, PPC campaign setup.</p></div>
                </div>
                 <div className="mt-8">
                    <Button asChild size="lg"><Link href="/packages/expansion">Get Expansion Package</Link></Button>
                </div>
            </Card>
        </motion.section>

        {/* Enterprise Package */}
        <motion.section id="enterprise-package" {...fadeIn}>
            <Card className="p-8 bg-white border">
                <Badge variant="outline" className="mb-4">VIP Service</Badge>
                <h2 className="text-3xl font-bold font-headline text-foreground">Enterprise Suite Package - $8,999</h2>
                <p className="text-muted-foreground mt-2">The complete business solution for serious, high-volume sellers.</p>
                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                   <div><h3 className="font-semibold text-lg mb-2">Global Business Setup</h3><p className="text-sm text-muted-foreground">Companies in 3 countries, full tax & compliance.</p></div>
                   <div><h3 className="font-semibold text-lg mb-2">Global IP Protection</h3><p className="text-sm text-muted-foreground">Global trademark portfolio (3 countries), IP strategy.</p></div>
                   <div><h3 className="font-semibold text-lg mb-2">Complete Amazon Solution</h3><p className="text-sm text-muted-foreground">20 product launches, A+ Content, PPC & account management.</p></div>
                </div>
                <div className="mt-8">
                    <Button asChild size="lg"><Link href="/packages/enterprise">Get Enterprise Package</Link></Button>
                </div>
            </Card>
        </motion.section>
      </div>

       <motion.section id="savings-calculator" {...fadeIn} className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold font-headline text-foreground">Calculate Your Savings</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Select the services you need to see your bundle discount.</p>
            <Card className="mt-8 max-w-lg mx-auto p-8 text-left bg-[#F5F5F5] border">
                <h3 className="font-semibold text-lg mb-4">Select Services:</h3>
                <div className="space-y-3">
                    <div className="flex items-center"><Checkbox id="c1" checked disabled /><label htmlFor="c1" className="ml-3 text-sm font-medium">USA LLC Formation</label></div>
                    <div className="flex items-center"><Checkbox id="c2" checked disabled /><label htmlFor="c2" className="ml-3 text-sm font-medium">Trademark Registration</label></div>
                    <div className="flex items-center"><Checkbox id="c3" checked disabled /><label htmlFor="c3" className="ml-3 text-sm font-medium">Amazon Account Setup</label></div>
                </div>
                <Button className="w-full mt-6" disabled>Calculate Savings</Button>
                <div className="text-center mt-6 bg-white p-4 rounded-lg border">
                    <p className="text-sm text-muted-foreground">Individual Services Total: <span className="font-bold text-foreground line-through">$1,597</span></p>
                    <p className="text-lg text-foreground mt-1">Recommended Package: <span className="font-bold text-primary">Launch Package</span></p>
                    <p className="text-2xl font-bold mt-2">You Save: <span className="text-green-600">$500+</span></p>
                </div>
            </Card>
        </div>
      </motion.section>

      <motion.section {...fadeIn} className="py-24">
        <div className="container mx-auto px-6 text-center">
             <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold font-headline text-foreground">Our Guarantees</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {guarantees.map(g => (
                    <div key={g.title} className="text-center bg-white p-6 rounded-lg border">
                        <ShieldCheck className="mx-auto text-primary bg-red-100 rounded-full p-2 w-12 h-12 mb-4" />
                        <h3 className="font-semibold text-lg">{g.title}</h3>
                        <p className="text-sm text-neutral-500 mt-1">{g.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </motion.section>

    </div>
  );
}

    