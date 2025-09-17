import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="section-padding border-b">
        <div className="section-container">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/">
              <Button variant="outline" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground text-lg">
              Last updated: September 14, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    By accessing and using Zypher's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">2. Our Services</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>Zypher provides the following professional services:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Resume Writing:</strong> Professional resume creation and optimization services</li>
                    <li><strong>Portfolio Creation:</strong> Custom portfolio website design and development</li>
                    <li><strong>Career Consultation:</strong> Strategic career guidance and coaching services</li>
                  </ul>
                  <p>
                    All services are provided according to the specific requirements and timelines agreed upon in individual project contracts.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">3. Payment Terms</h2>
                <div className="space-y-4 text-muted-foreground">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Payment Schedule:</strong> 50% advance payment required to commence work, with the remaining 50% due upon project completion</li>
                    <li><strong>Payment Methods:</strong> We accept bank transfers, UPI, and online payments</li>
                    <li><strong>Late Payments:</strong> Projects may be suspended if payments are not received within 7 days of the due date</li>
                    <li><strong>Refund Policy:</strong> Partial refunds may be considered on a case-by-case basis for work not yet commenced</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">4. Client Responsibilities</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>To ensure successful project completion, clients must:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide accurate and complete information about their background, experience, and goals</li>
                    <li>Respond to requests for information and feedback within agreed timelines</li>
                    <li>Review and approve deliverables within 5 business days</li>
                    <li>Make payments according to the agreed schedule</li>
                    <li>Communicate any concerns or changes promptly</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
                <div className="space-y-4 text-muted-foreground">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Client Ownership:</strong> Upon full payment, clients own the final deliverables (resume, portfolio, etc.)</li>
                    <li><strong>Portfolio Rights:</strong> Zypher retains the right to showcase completed work in our portfolio for marketing purposes</li>
                    <li><strong>Process and Methodology:</strong> Our proprietary processes, templates, and methodologies remain our intellectual property</li>
                    <li><strong>Third-Party Content:</strong> Any third-party assets used will be properly licensed or provided by the client</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">6. Revisions and Changes</h2>
                <div className="space-y-4 text-muted-foreground">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Included Revisions:</strong> Each service includes up to 3 rounds of revisions</li>
                    <li><strong>Additional Revisions:</strong> Additional revisions beyond the included limit may incur extra charges</li>
                    <li><strong>Scope Changes:</strong> Major changes to project scope will require a revised contract and pricing</li>
                    <li><strong>Timeline Impact:</strong> Revisions may extend project timelines accordingly</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">7. Delivery and Timelines</h2>
                <div className="space-y-4 text-muted-foreground">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Standard Timelines:</strong> Resume writing (3-5 days), Portfolio creation (7-14 days), Career consultation (as scheduled)</li>
                    <li><strong>Delivery Method:</strong> Final deliverables will be provided via email or secure file sharing</li>
                    <li><strong>Delays:</strong> Timelines may be extended due to client delays in providing feedback or information</li>
                    <li><strong>Rush Orders:</strong> Expedited delivery may be available for an additional fee</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">8. Limitations of Liability</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Zypher provides professional services to the best of our ability but cannot guarantee specific outcomes such as job placements or interview invitations. Our liability is limited to the amount paid for our services.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">9. Confidentiality</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We maintain strict confidentiality regarding all client information and project details. Personal and professional information shared with us will not be disclosed to third parties without explicit consent.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">10. Termination</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Either party may terminate services with written notice. In case of termination, payment will be due for work completed up to the termination date.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    For questions about these Terms of Service, please contact us:
                  </p>
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <p><strong>Email:</strong> zypher@zenjourney.in</p>
                    <p><strong>Phone:</strong> +91 9488742416</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">12. Changes to Terms</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Continued use of our services constitutes acceptance of modified terms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsOfService;