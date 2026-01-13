import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SupportPage() {
  return (
    <div className="pt-16">
      <PageHeader 
        title="Support Center"
        description="We're here to help you succeed. Find the resources you need below."
      />
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card p-8 rounded-lg text-center">
                <h3 className="text-2xl font-headline font-semibold">Check our FAQ</h3>
                <p className="text-muted-foreground mt-2 mb-4">Find quick answers to common questions.</p>
                <Button asChild>
                    <Link href="/faq">Go to FAQ</Link>
                </Button>
            </div>
            <div className="bg-card p-8 rounded-lg text-center">
                <h3 className="text-2xl font-headline font-semibold">Contact Us Directly</h3>
                <p className="text-muted-foreground mt-2 mb-4">Can't find an answer? Get in touch with our team.</p>
                <Button asChild>
                    <Link href="/contact">Contact Us</Link>
                </Button>
            </div>
        </div>
      </div>
    </div>
  );
}
