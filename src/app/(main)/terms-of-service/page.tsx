import PageHeader from "@/components/page-header";

export default function TermsOfServicePage() {
  return (
    <div className="pt-16">
      <PageHeader 
        title="Terms of Service"
        description="Last updated: October 26, 2024"
      />
      <div className="container mx-auto px-4 py-16 prose prose-lg max-w-4xl">
        <h2>1. Agreement to Terms</h2>
        <p>
            By using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. We may update these terms from time to time, and your continued use of our services constitutes your acceptance of those changes.
        </p>

        <h2>2. Our Services</h2>
        <p>
            Amazon Solutions Pro provides a range of business services including, but not limited to, company formation, trademark registration, tax and accounting services, and Amazon seller consulting ("Services"). All services are provided based on the information you provide to us. It is your responsibility to provide accurate and complete information.
        </p>
        
        <h2>3. No Legal Advice</h2>
        <p>
            While we provide guidance on business formation, compliance, and legal structures, Amazon Solutions Pro is not a law firm and does not provide legal advice. The information and services provided are for informational purposes only and should not be considered a substitute for advice from a qualified attorney. We strongly recommend consulting with a legal professional for your specific needs.
        </p>
        
        <h2>4. Fees and Payment</h2>
        <p>
            You agree to pay all fees associated with the Services you purchase. All fees are non-refundable once a service has commenced, except as stated in our Money-Back Guarantee. We reserve the right to change our fees at any time.
        </p>

        <h2>5. Money-Back Guarantee</h2>
        <p>
            We offer a money-back guarantee for certain services, such as LLC or trademark filings, if the relevant government agency rejects your application due to an error on our part. This guarantee does not cover rejections based on factors outside of our control, such as the unavailability of a company name or trademark conflicts.
        </p>
        
        <h2>6. Limitation of Liability</h2>
        <p>
            To the fullest extent permitted by law, Amazon Solutions Pro shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use the services; (b) any conduct or content of any third party on the services.
        </p>

        <h2>7. Governing Law</h2>
        <p>
            These Terms shall be governed and construed in accordance with the laws of the State of Wyoming, United States, without regard to its conflict of law provisions.
        </p>

        <h2>Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us at:</p>
        <p>Email: support@amazonsolutionspro.com</p>
      </div>
    </div>
  );
}
