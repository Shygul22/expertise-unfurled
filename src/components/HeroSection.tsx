import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional workspace showcasing modern development environment"
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/95 to-background/90" />
      </div>

      {/* Hero Content */}
      <div className="section-container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
            Professional Portfolio Creation
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fade-up">
            Build Your{" "}
            <span className="text-gradient">Perfect</span>{" "}
            <span className="text-gradient">Portfolio</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-up">
            We help <strong>professionals and businesses</strong> create{" "}
            <strong>stunning portfolio websites</strong> that showcase their work and{" "}
            <strong>attract new opportunities</strong>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button 
              variant="hero" 
              size="hero"
              className="group"
            >
              View Our Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline-primary" 
              size="hero"
              className="group"
            >
              <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Get Started
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/50">
            <div className="text-center animate-fade-in">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Portfolios Created</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">99%</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Client Satisfaction</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">3+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Years in Business</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;