
'use client';

import PageHeader from "@/components/page-header";
import { servicesNav, primaryNav, footerNav } from "@/lib/content";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function SitemapPage() {
  const allPages = new Map<string, { title: string; children?: { title: string; href: string }[] }>();

  primaryNav.forEach(item => {
    if (!allPages.has(item.href)) {
      allPages.set(item.href, { title: item.title });
    }
  });

  servicesNav.forEach(serviceCategory => {
    serviceCategory.items.forEach(item => {
      if (!allPages.has(item.href)) {
        allPages.set(item.href, { title: item.title });
      }
    });
  });

  footerNav.forEach(footerCategory => {
      footerCategory.items.forEach(item => {
          if (!allPages.has(item.href)) {
              allPages.set(item.href, { title: item.title });
          }
      })
  });
  
  const mainPages = [
    ...primaryNav,
    {title: "Services", href: "/services"},
    {title: "Support", href: "/support"},
    {title: "Terms of Service", href: "/terms-of-service"},
    {title: "Privacy Policy", href: "/privacy-policy"},
    {title: "Cookie Policy", href: "/cookie-policy"},
  ];

  return (
    <div className="pt-16">
      <PageHeader 
        title="Sitemap"
        description="A complete overview of all pages on our website."
      />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
                <CardHeader>
                    <CardTitle>Main Pages</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-2">
                        {mainPages.map(page => (
                            <li key={page.href}><Link href={page.href} className="text-muted-foreground hover:text-primary">{page.title}</Link></li>
                        ))}
                    </ul>
                </CardContent>
            </Card>

            {servicesNav.map(category => (
                <Card key={category.title}>
                    <CardHeader>
                        <CardTitle>{category.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                            {category.items.map(item => (
                                <li key={item.href}><Link href={item.href} className="text-muted-foreground hover:text-primary">{item.title}</Link></li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </div>
  );
}
