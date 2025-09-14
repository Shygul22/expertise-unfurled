import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
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
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
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
                <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    At Zypher, we collect information that you provide directly to us when using our services:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Contact Information:</strong> Name, email address, phone number, and location when you contact us or request our services.</li>
                    <li><strong>Project Details:</strong> Information about your career goals, project requirements, budget, and timeline.</li>
                    <li><strong>Professional Information:</strong> Resume details, work experience, skills, and achievements for portfolio and resume creation services.</li>
                    <li><strong>Communication Records:</strong> Records of our consultations, email exchanges, and project communications.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide resume writing, portfolio creation, and career consultation services</li>
                    <li>Communicate with you about your projects and service requests</li>
                    <li>Improve our services and develop new offerings</li>
                    <li>Send you updates about your projects and relevant career opportunities</li>
                    <li>Respond to your inquiries and provide customer support</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">3. Information Sharing and Disclosure</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>When required by law or to comply with legal processes</li>
                    <li>To protect our rights, property, or safety, or that of our users</li>
                    <li>With trusted service providers who assist in delivering our services (under strict confidentiality agreements)</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Encrypted data transmission and storage</li>
                    <li>Regular security assessments and updates</li>
                    <li>Limited access to personal information on a need-to-know basis</li>
                    <li>Secure backup and recovery procedures</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy. Project files and communications are typically retained for 2 years after project completion to provide ongoing support.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access and receive a copy of your personal information</li>
                    <li>Correct inaccurate or incomplete information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Withdraw consent for processing your information</li>
                    <li>File a complaint with relevant data protection authorities</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <p><strong>Email:</strong> zypher@zenjourney.in</p>
                    <p><strong>Phone:</strong> +91 9488742416</p>
                    <p><strong>Address:</strong> Kovilpalayam, Coimbatore</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">8. Changes to This Policy</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued use of our services after any changes constitutes acceptance of the updated policy.
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

export default PrivacyPolicy;