import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO at TechStart Inc.",
      company: "TechStart Inc.",
      image: "SJ",
      rating: 5,
      testimonial: "Working with this developer was a game-changer for our company. They delivered a complex e-commerce platform that exceeded all expectations. The attention to detail and technical expertise is unmatched."
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      company: "DataCorp Solutions",
      image: "MC",
      rating: 5,
      testimonial: "Exceptional work on our analytics dashboard. The ML integration was seamless and the performance improvements were incredible. Communication was clear throughout the entire project."
    },
    {
      name: "Emily Rodriguez",
      role: "Founder & CEO",
      company: "StartupX",
      image: "ER",
      rating: 5,
      testimonial: "Our mobile app became the cornerstone of our business success. The developer's strategic thinking and technical implementation helped us secure our Series A funding."
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here's what industry leaders and satisfied clients have to say about working with me.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover border-0 bg-card/80 backdrop-blur-sm animate-fade-up relative">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6">
                  <Quote className="h-8 w-8 text-primary/20" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.testimonial}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold shadow-medium">
                    {testimonial.image}
                  </div>
                  
                  {/* Details */}
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-primary font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-12 border-t border-border/50">
          <div className="text-center animate-fade-in">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Project Success Rate</div>
          </div>
          <div className="text-center animate-fade-in">
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center animate-fade-in">
            <div className="text-3xl font-bold text-primary mb-2">25+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center animate-fade-in">
            <div className="text-3xl font-bold text-primary mb-2">2-4 weeks</div>
            <div className="text-sm text-muted-foreground">Average Delivery</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;