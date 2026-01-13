import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="pt-16">
      <PageHeader 
        title="Pricing"
        description="Find the right plan for your business needs."
      />
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-lg text-muted-foreground mb-4">For detailed pricing information, please see our packages.</p>
        <Button asChild>
          <Link href="/packages">View Packages</Link>
        </Button>
      </div>
    </div>
  );
}
