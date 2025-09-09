import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code2, 
  Smartphone, 
  Database, 
  Zap, 
  Users, 
  Lightbulb,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Code2,
      title: "Portfolio Website Design",
      description: "Custom-designed portfolio websites that showcase your work and personal brand professionally.",
      features: [
        "Modern Responsive Design",
        "Custom Branding & Colors", 
        "Mobile-First Approach",
        "Fast Loading & SEO Optimized"
      ],
      price: "Starting at $1,500"
    },
    {
      icon: Smartphone,
      title: "Content Strategy & Writing",
      description: "Professional content creation that tells your story and highlights your achievements effectively.",
      features: [
        "Professional Bio Writing",
        "Project Case Studies",
        "Achievement Highlighting",
        "SEO Content Optimization"
      ],
      price: "Starting at $800"
    },
    {
      icon: Database,
      title: "Personal Branding Package",
      description: "Complete personal branding solution including logo, color palette, and brand guidelines.",
      features: [
        "Logo & Brand Identity",
        "Color Palette Selection",
        "Typography Guidelines",
        "Brand Style Guide"
      ],
      price: "Starting at $1,200"
    },
    {
      icon: Zap,
      title: "Portfolio Optimization",
      description: "Improve your existing portfolio's performance, SEO, and conversion rates significantly.",
      features: [
        "Performance Optimization",
        "SEO Improvements",
        "User Experience Audit",
        "Conversion Rate Optimization"
      ],
      price: "Starting at $600"
    },
    {
      icon: Users,
      title: "Professional Photography",
      description: "High-quality professional photos and portfolio image curation for maximum impact.",
      features: [
        "Professional Headshots",
        "Work Environment Photos",
        "Project Documentation",
        "Image Editing & Retouching"
      ],
      price: "Starting at $400"
    },
    {
      icon: Lightbulb,
      title: "Career Coaching",
      description: "Strategic career guidance and portfolio positioning to help you land your dream opportunities.",
      features: [
        "Portfolio Strategy Session",
        "Industry-Specific Guidance",
        "Interview Preparation",
        "Career Goal Planning"
      ],
      price: "Starting at $300"
    }
  ];

  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete portfolio creation services to help you stand out and attract the right opportunities.
            From design to deployment, we handle everything for you.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="card-hover border-0 bg-card/80 backdrop-blur-sm animate-fade-up h-full">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <IconComponent className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-primary">{service.price}</span>
                      <Button variant="ghost" size="sm" className="group">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-subtle rounded-2xl p-12 animate-fade-up">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Build Your Portfolio?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create a stunning portfolio that showcases your work and opens new doors.
            Book a free consultation to discuss your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="group">
              Start Your Portfolio
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline-primary" size="lg">
              View Package Details
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;