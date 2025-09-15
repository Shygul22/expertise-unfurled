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
      title: "Resume Writing",
      description: "Professional resume writing services that highlight your skills and achievements effectively.",
      features: [
        "ATS-Optimized Format",
        "Industry-Specific Keywords", 
        "Achievement Highlighting",
        "Professional Language & Tone"
      ],
      price: "₹499 Only"
    },
    {
      icon: Smartphone,
      title: "Portfolio Creation",
      description: "Custom-designed portfolio websites that showcase your work and personal brand professionally.",
      features: [
        "Modern Responsive Design",
        "Custom Branding & Colors",
        "Mobile-First Approach",
        "Fast Loading & SEO Optimized"
      ],
      price: "₹499 Only"
    },
    {
      icon: Users,
      title: "Career Consultation",
      description: "Strategic career guidance and personalized coaching to help you achieve your professional goals.",
      features: [
        "One-on-One Consultation",
        "Career Path Planning",
        "Interview Preparation",
        "Industry Insights & Trends"
      ],
      price: "₹499 Only"
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