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
      title: "Fullstack Development",
      description: "Complete fullstack development course covering both frontend and backend technologies with hands-on projects.",
      features: [
        "Frontend & Backend Integration",
        "Modern Tech Stack (React, Node.js)",
        "Database Management & APIs",
        "E-Certificate or Normal Certificate"
      ],
      price: "₹800",
      originalPrice: "₹1500"
    },
    {
      icon: Smartphone,
      title: "Frontend Development",
      description: "Comprehensive frontend development course focusing on modern UI/UX design and responsive web applications.",
      features: [
        "React & Modern JavaScript",
        "Responsive Design Principles",
        "Component-Based Architecture",
        "E-Certificate or Normal Certificate"
      ],
      price: "₹800",
      originalPrice: "₹1500"
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Master server-side development with databases, APIs, authentication, and deployment strategies.",
      features: [
        "Server Architecture & APIs",
        "Database Design & Management",
        "Authentication & Security",
        "E-Certificate or Normal Certificate"
      ],
      price: "₹800",
      originalPrice: "₹1500"
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
            Master fullstack, frontend, and backend development with our comprehensive courses.
            Get certified and advance your career in web development.
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
                      <div className="flex flex-col">
                        <span className="font-semibold text-primary">{service.price}</span>
                        <span className="text-xs text-muted-foreground line-through">MRP: {service.originalPrice}</span>
                      </div>
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
            Ready to Start Your Development Journey?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our comprehensive development courses and get certified. 
            Start building your career in fullstack, frontend, or backend development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="group">
              Enroll Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline-primary" size="lg">
              View Course Details
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;