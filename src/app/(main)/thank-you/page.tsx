import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="pt-16">
      <PageHeader 
        title="Thank You!"
      />
      <div className="container mx-auto px-4 py-16 text-center">
        <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold mb-2">Your submission has been received.</h2>
        <p className="text-muted-foreground mb-6">We'll get back to you as soon as possible.</p>
        <Button asChild>
          <Link href="/">Return to Homepage</Link>
        </Button>
      </div>
    </div>
  );
}
