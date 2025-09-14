import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const skills = [
    "Resume Writing",
    "Portfolio Creation", 
    "Career Consultation",
    "ATS Optimization",
    "Personal Branding",
    "Interview Preparation",
    "Career Strategy",
    "Professional Writing"
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              About <span className="text-gradient">Zypher</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                We're <strong className="text-foreground">Zypher</strong> - your career success partner with expertise in 
                resume writing, portfolio creation, and career consultation. Our mission is to help 
                professionals showcase their potential and land their dream opportunities.
              </p>
              
              <p>
                What sets us apart is our deep understanding of what employers look for. 
                We don't just write resumes or build portfolios—we craft strategic career narratives, 
                optimize for ATS systems, and create compelling professional stories.
              </p>
              
              <p>
                From fresh graduates to seasoned professionals, we've helped hundreds of 
                individuals transform their careers through expertly crafted resumes and stunning portfolios.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Core Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index}
                    variant="secondary" 
                    className="px-3 py-1 text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Key Points */}
            <div className="mt-8 space-y-3">
              {[
                "Specialized in resume writing and portfolio creation",
                "200+ successful career transformations delivered", 
                "99% client satisfaction with measurable results",
                "Expert in career strategy and professional branding"
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Photo Placeholder */}
          <div className="animate-fade-up lg:animate-fade-in">
            <div className="relative">
              {/* Main photo container */}
              <div className="aspect-[4/5] bg-gradient-subtle rounded-2xl overflow-hidden shadow-large border border-border/50 hover:shadow-glow transition-all duration-500">
                <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-12 h-12 bg-primary/40 rounded-full"></div>
                    </div>
                    <p className="text-sm font-medium">Our Team</p>
                    <p className="text-xs mt-1">Portfolio experts ready to help</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;