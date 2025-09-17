import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Users, Award } from "lucide-react";

const CourseHeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/95 to-background/90" />
      </div>

      {/* Hero Content */}
      <div className="section-container relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 animate-fade-in">
            <Award className="w-4 h-4 mr-2" />
            Professional Online Learning Platform
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl lg:text-8xl font-bold mb-8 animate-fade-up">
            <span className="text-gradient">Zypher</span>
          </h1>
          
          <div className="text-3xl lg:text-5xl font-bold mb-6 animate-fade-up">
            Master <span className="text-gradient">Fullstack Development</span>
          </div>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-up">
            Learn <strong>Frontend</strong>, <strong>Backend</strong>, and <strong>Fullstack Development</strong> with hands-on projects. 
            Build your professional <strong>resume and portfolio</strong> while earning industry-recognized certificates.
          </p>

          {/* Course Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-slide-up">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6">
              <Play className="w-8 h-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">Live Online Classes</h3>
              <p className="text-sm text-muted-foreground">Interactive sessions with expert instructors</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6">
              <Users className="w-8 h-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">Portfolio Builder</h3>
              <p className="text-sm text-muted-foreground">Create stunning resumes and portfolios</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6">
              <Award className="w-8 h-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">Industry Certificates</h3>
              <p className="text-sm text-muted-foreground">E-certificates and premium certificates</p>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mb-12 animate-scale-in">
            <div className="text-lg text-muted-foreground mb-2">Special Launch Price</div>
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-2xl text-muted-foreground line-through">₹1,500</span>
              <span className="text-5xl font-bold text-primary">₹800</span>
            </div>
            <div className="text-sm text-muted-foreground mb-6">
              E-certificate: <span className="text-primary font-medium">Free</span> • 
              Normal certificate: <span className="text-primary font-medium">+₹250</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up">
            <Button 
              variant="hero" 
              size="hero"
              className="group text-lg px-8 py-4"
            >
              Enroll Now
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline-primary" 
              size="hero"
              className="group text-lg px-8 py-4"
            >
              <Play className="mr-2 h-6 w-6 group-hover:scale-110 transition-transform" />
              View Demo
            </Button>
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

export default CourseHeroSection;