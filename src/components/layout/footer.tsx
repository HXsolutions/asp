
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Instagram, Twitter, Linkedin, Mail, Phone, MessageCircle, Box } from 'lucide-react';
import { servicesNav, footerNav } from '@/lib/content';

export function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
                <div className="col-span-2 md:col-span-1">
                    <Link href="/" className="flex items-center gap-2 mb-6">
                        <Logo />
                    </Link>
                    <p className="text-xs text-neutral-500 leading-relaxed mb-6">
                        Complete Amazon business infrastructure for modern entrepreneurs. Forming companies and building brands globally.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="text-neutral-400 hover:text-primary transition-colors"><Instagram className="h-[18px] w-[18px]" /></a>
                        <a href="#" className="text-neutral-400 hover:text-primary transition-colors"><Twitter className="h-[18px] w-[18px]" /></a>
                        <a href="#" className="text-neutral-400 hover:text-primary transition-colors"><Linkedin className="h-[18px] w-[18px]" /></a>
                    </div>
                </div>

                {footerNav.map(section => (
                    <div key={section.title}>
                        <h4 className="text-sm font-semibold text-black mb-4">{section.title}</h4>
                        <ul className="space-y-3 text-sm text-neutral-500">
                            {section.items.map(item => (
                                <li key={item.href}><Link href={item.href} className="hover:text-primary transition-colors">{item.title}</Link></li>
                            ))}
                        </ul>
                    </div>
                ))}

                <div>
                    <h4 className="text-sm font-semibold text-black mb-4">Contact</h4>
                    <ul className="space-y-3 text-sm text-neutral-500">
                        <li className="flex items-center gap-2">
                            <Mail className="h-3.5 w-3.5" /> support@amazonsolutionspro.com
                        </li>
                        <li className="flex items-center gap-2">
                            <Phone className="h-3.5 w-3.5" /> +1 (346) 380-4251
                        </li>
                        <li className="flex items-center gap-2">
                            <MessageCircle className="h-3.5 w-3.5" /> +1 (346) 380-4251 (WhatsApp)
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs text-neutral-400">© 2024 Amazon Solutions Pro. All rights reserved.</p>
                <div className="flex gap-6 text-xs text-neutral-400">
                    <Link href="/privacy-policy" className="hover:text-black">Privacy Policy</Link>
                    <Link href="/terms-of-service" className="hover:text-black">Terms of Service</Link>
                    <Link href="/cookie-policy" className="hover:text-black">Cookie Policy</Link>
                </div>
            </div>
        </div>
    </footer>
  );
}
