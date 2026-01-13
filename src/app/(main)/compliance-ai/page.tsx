import PageHeader from "@/components/page-header";
import { ComplianceForm } from "./compliance-form";

export default function ComplianceAiPage() {
  return (
    <div className="pt-16">
      <PageHeader 
        title="AI-Powered Compliance Tool"
        description="Get preliminary, AI-driven guidance to understand the potential compliance landscape for your business. Simply provide your details to get started."
      />
      <div className="container mx-auto px-4 py-16">
        <ComplianceForm />
      </div>
    </div>
  );
}
