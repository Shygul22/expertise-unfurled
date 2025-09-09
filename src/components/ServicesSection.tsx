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
      title: "Full-Stack Development",
      description: "End-to-end web application development using modern technologies and best practices.",
      features: [
        "React/Next.js Frontend",
        "Node.js/Python Backend", 
        "Database Design & Optimization",
        "API Development & Integration"
      ],
      price: "Starting at $5,000"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications that deliver native performance and user experience.",
      features: [
        "React Native Development",
        "iOS & Android Compatible",
        "Real-time Features",
        "App Store Deployment"
      ],
      price: "Starting at $8,000"
    },
    {
      icon: Database,
      title: "System Architecture",
      description: "Scalable system design and architecture consulting for enterprise-level applications.",
      features: [
        "Microservices Architecture",
        "Cloud Infrastructure Setup",
        "Performance Optimization",
        "Security Best Practices"
      ],
      price: "Starting at $3,000"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed up your existing applications and improve user experience significantly.",
      features: [
        "Code Audit & Refactoring",
        "Database Optimization",
        "Caching Strategies",
        "Load Testing & Monitoring"
      ],
      price: "Starting at $2,500"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Technical leadership and mentorship for development teams and complex projects.",
      features: [
        "Technical Team Management",
        "Code Review & Standards",
        "Developer Mentoring",
        "Project Planning & Execution"
      ],
      price: "Starting at $4,000"
    },
    {
      icon: Lightbulb,
      title: "Technical Consulting",
      description: "Strategic technology advice and solution architecture for your business needs.",
      features: [
        "Technology Stack Selection",
        "Project Feasibility Analysis",
        "Technical Due Diligence",
        "Digital Transformation Strategy"
      ],
      price: "Starting at $1,500"
    }
  ];

  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Services & <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive development services to help your business thrive in the digital landscape.
            From concept to deployment, I've got you covered.
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
            Ready to Start Your Project?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create a custom solution that drives results.
            Book a free consultation to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="group">
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline-primary" size="lg">
              View Pricing Details
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;