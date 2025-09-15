import { useState } from "react";
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
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          company: formData.company || null,
          project_type: formData.projectType || null,
          budget: formData.budget || null,
          project_details: formData.message
        });

      if (error) {
        console.error('Error submitting form:', error);
        toast.error("Failed to send message. Please try again.");
        return;
      }

      toast.success("Message sent successfully! We'll get back to you within 24 hours.");
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        message: ''
      });

    } catch (error) {
      console.error('Error:', error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? Get in touch and let's discuss how we can 
            create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-up">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you have a project in mind, need technical consultation, or just want to say hello, 
                I'd love to hear from you. Let's start a conversation about your next big idea.
              </p>
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
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">Kovilpalayam, Coimbatore</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Schedule a Call</p>
                  <p className="text-sm text-muted-foreground">Book a free 30-min consultation</p>
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
                <CardTitle className="text-2xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input 
                        id="firstName" 
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John" 
                        className="h-11 focus:ring-primary focus:border-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input 
                        id="lastName" 
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe" 
                        className="h-11 focus:ring-primary focus:border-primary"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com" 
                      className="h-11 focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input 
                      id="company" 
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your Company" 
                      className="h-11 focus:ring-primary focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type</Label>
                    <select 
                      id="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full h-11 px-3 py-2 border border-input bg-background rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                    >
                      <option value="">Select service type</option>
                      <option value="resume-writing">Resume Writing</option>
                      <option value="portfolio-creation">Portfolio Creation</option>
                      <option value="career-consultation">Career Consultation</option>
                      <option value="combo-package">Combo Package</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Project Budget</Label>
                    <select 
                      id="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full h-11 px-3 py-2 border border-input bg-background rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                    >
                      <option value="">Select budget range</option>
                      <option value="499-only">₹499 Only</option>
                      <option value="500-1000">₹500 - ₹1,000</option>
                      <option value="1000-2500">₹1,000 - ₹2,500</option>
                      <option value="2500-5000">₹2,500 - ₹5,000</option>
                      <option value="5000+">₹5,000+</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea 
                      id="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, timeline, and any specific requirements..."
                      rows={5}
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
                    I'll get back to you within 24 hours
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