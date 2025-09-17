import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Clock, Download, Award } from "lucide-react";

const CourseOffersSection = () => {
  const handleEnrollNow = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Pre-fill form with course enrollment data
      setTimeout(() => {
        // Dispatch a custom event with enrollment data
        window.dispatchEvent(new CustomEvent('enrollmentClicked', {
          detail: {
            projectType: 'Course Enrollment - Zypher Fullstack Development',
            budget: '₹800 (Special Launch Price)',
            message: 'I am interested in enrolling for the Zypher Fullstack Development course (₹800). Please provide enrollment details and payment instructions.'
          }
        }));
      }, 100);
    }
  };

  const highlights = [
    "Frontend: React, HTML, CSS, JavaScript mastery",
    "Backend: Node.js, Express, Database design",
    "Fullstack: Complete project integration",
    "Portfolio: Professional resume & portfolio builder",
    "Live sessions with expert instructors",
    "Hands-on projects and real-world applications",
    "Job placement assistance and career guidance",
    "Lifetime access to course materials"
  ];

  return (
    <section className="py-24 bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
            Limited Time Offer
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Transform Your <span className="text-gradient">Career Today</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Master fullstack development with our comprehensive course and build your professional future
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Offer Card */}
          <Card className="p-8 lg:p-12 border-primary/20 bg-gradient-to-br from-background to-primary/5">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Course Details */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Star className="w-6 h-6 text-yellow-500 fill-current" />
                  <span className="text-lg font-semibold">Complete Development Bundle</span>
                </div>

                <h3 className="text-3xl font-bold mb-6">
                  Fullstack Development Mastery
                </h3>

                <div className="space-y-3 mb-8">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Certificate Options */}
                <div className="bg-muted/50 rounded-lg p-6 mb-8">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Certificate Options
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Download className="w-4 h-4 text-primary" />
                        <span>E-Certificate</span>
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">Free</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-primary" />
                        <span>Physical Certificate</span>
                      </div>
                      <Badge variant="outline">+₹250</Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="text-center lg:text-left">
                <div className="bg-card border border-border rounded-xl p-8 mb-8">
                  <div className="text-sm text-muted-foreground mb-2">Limited Time Price</div>
                  <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                    <span className="text-2xl text-muted-foreground line-through">₹1,500</span>
                    <span className="text-5xl font-bold text-primary">₹800</span>
                  </div>
                  <div className="text-sm text-muted-foreground mb-6">
                    Save ₹700 • 47% off regular price
                  </div>

                  <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-muted-foreground mb-6">
                    <Clock className="w-4 h-4" />
                    <span>Offer valid for limited time only</span>
                  </div>

                  <Button size="lg" className="w-full text-lg py-6" variant="hero" onClick={handleEnrollNow}>
                    <Download className="w-5 h-5 mr-2" />
                    Enroll Now - ₹800
                  </Button>

                  <p className="text-xs text-muted-foreground mt-4">
                    Secure payment • Instant access • 30-day money-back guarantee
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <div className="text-2xl font-bold text-primary">120+</div>
                    <div className="text-sm text-muted-foreground">Hours Content</div>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <div className="text-2xl font-bold text-primary">∞</div>
                    <div className="text-sm text-muted-foreground">Lifetime Access</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CourseOffersSection;