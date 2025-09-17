import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Send,
  Linkedin,
  Github,
  Twitter
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    whatsappNumber: '',
    message: '',
    projectType: '',
    budget: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Listen for enrollment events
  useEffect(() => {
    const handleEnrollmentClick = (event: any) => {
      const { projectType, budget, message } = event.detail;
      setFormData(prev => ({
        ...prev,
        projectType,
        budget,
        message
      }));
    };

    window.addEventListener('enrollmentClicked', handleEnrollmentClick);
    return () => window.removeEventListener('enrollmentClicked', handleEnrollmentClick);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.mobileNumber || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert({
          name: formData.name,
          email: formData.email,
          mobile_number: formData.mobileNumber,
          whatsapp_number: formData.whatsappNumber,
          project_details: formData.message,
          project_type: formData.projectType || null,
          budget: formData.budget || null
        });

      if (error) {
        console.error('Error submitting form:', error);
        toast.error("Failed to send message. Please try again.");
        return;
      }

      toast.success("Message sent successfully! We'll get back to you within 24 hours.");
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        mobileNumber: '',
        whatsappNumber: '',
        message: '',
        projectType: '',
        budget: ''
      });

    } catch (error) {
      console.error('Error:', error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-section" className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Enroll in <span className="text-gradient">Online Classes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Master web development with our comprehensive online courses. Learn Fullstack, Frontend, 
            or Backend development from industry experts with hands-on projects and certification.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-up">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Start Your Learning Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                Join our online development courses and get certified in your chosen field. 
                Expert-led classes with practical projects and lifetime access to course materials.
              </p>
              
              {/* Course Highlights */}
              <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <h4 className="font-semibold text-primary mb-3">Course Highlights:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Live online classes with expert instructors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Hands-on projects and real-world applications</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Lifetime access to course materials</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Industry-relevant curriculum and latest technologies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Certificate upon completion (E-Certificate free, Normal Certificate +₹250)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">zypher@zenjourney.in</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-sm text-muted-foreground">+91 9488742416</p>
                </div>
              </div>


              <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Course Inquiry</p>
                  <p className="text-sm text-muted-foreground">Get details about our online classes</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="font-medium mb-4">Connect on Social</p>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white">
                  <Twitter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-up">
            <Card className="border-0 shadow-large bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Enroll Now</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">
                  <span className="font-semibold text-primary">Special Offer:</span> Course Fee ₹800 only 
                  <span className="line-through text-muted-foreground ml-2">MRP: ₹1500</span>
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input 
                      id="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name" 
                      className="h-11 focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Gmail *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@gmail.com" 
                      className="h-11 focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mobileNumber">Mobile Number *</Label>
                    <Input 
                      id="mobileNumber" 
                      type="tel"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      placeholder="+91 9876543210" 
                      className="h-11 focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="whatsappNumber">WhatsApp Number</Label>
                    <Input 
                      id="whatsappNumber" 
                      type="tel"
                      value={formData.whatsappNumber}
                      onChange={handleInputChange}
                      placeholder="+91 9876543210 (if different from mobile)" 
                      className="h-11 focus:ring-primary focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Basic Question *</Label>
                    <Textarea 
                      id="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Which course are you interested in? Do you have any prior programming experience? Any specific questions about the courses?"
                      rows={4}
                      className="resize-none focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>

                  <div className="text-center pt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    Start your development career today! We'll respond within 24 hours.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;