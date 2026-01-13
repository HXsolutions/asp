
'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { primaryNav, servicesNav } from '@/lib/content';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const allServiceItems = servicesNav.flatMap(service => service.items);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 flex h-16 items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2 text-sm font-medium">
          <NavigationMenu>
            <NavigationMenuList>
              {primaryNav.filter(item => item.title !== 'Home' && item.title !== 'Services').map(item => (
                 <NavigationMenuItem key={item.href}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}

              <NavigationMenuItem>
                 <div className="flex items-center">
                    <Link href="/services" legacyBehavior passHref>
                      <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), '!rounded-r-none !pr-2')}>
                        Services
                      </NavigationMenuLink>
                    </Link>
                    <NavigationMenuTrigger className="!rounded-l-none !pl-1" />
                  </div>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {allServiceItems.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
             
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <Button className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-black hover:bg-primary transition-colors rounded-full" asChild>
            <Link href="/contact">Get Started</Link>
          </Button>

          {/* Mobile Navigation */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full max-w-sm p-0 flex flex-col">
               <SheetHeader className="p-4 border-b flex-shrink-0">
                 <SheetTitle className="sr-only">Main Menu</SheetTitle>
                 <Logo />
               </SheetHeader>
               <div className="overflow-y-auto flex-grow">
                  <nav className="flex flex-col space-y-2 p-4">
                     {primaryNav.filter(item => item.title !== 'Home' && item.title !== 'Services').map(item => (
                      <Link key={item.href} href={item.href} className="block py-2 text-lg font-medium text-muted-foreground hover:text-primary">{item.title}</Link>
                    ))}
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1" className="border-b-0">
                        <div className="flex items-center justify-between">
                           <Link href="/services" className="py-2 text-lg font-medium text-muted-foreground hover:text-primary">Services</Link>
                           <AccordionTrigger className="w-10 shrink-0 p-2 hover:no-underline [&>svg]:ml-auto" />
                        </div>
                        <AccordionContent className="pl-4 pt-2">
                          <div className="flex flex-col space-y-2">
                            {servicesNav.map((service) => (
                              <div key={service.title}>
                                <h4 className="font-semibold text-md text-foreground mb-1 mt-2">{service.title}</h4>
                                {service.items.map(item => (
                                  <Link key={item.href} href={item.href} className="block py-1 text-base font-normal text-muted-foreground hover:text-primary">
                                    {item.title}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </nav>
               </div>
                <div className="p-4 border-t flex-shrink-0">
                  <Button asChild className="w-full bg-black text-white hover:bg-primary">
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
