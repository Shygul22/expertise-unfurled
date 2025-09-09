import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const skills = [
    "Frontend Development",
    "Backend Architecture", 
    "UI/UX Design",
    "Database Design",
    "API Development",
    "Performance Optimization",
    "Team Leadership",
    "Project Management"
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate <strong className="text-foreground">Full-Stack Developer</strong> with over 5 years of experience 
                crafting digital solutions that make a real difference. My journey began with a curiosity 
                about how things work and evolved into a mission to build technology that empowers people.
              </p>
              
              <p>
                What sets me apart is my unique blend of technical expertise and business acumen. 
                I don't just write code—I solve problems, optimize processes, and create experiences 
                that users love and businesses depend on.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, mentoring upcoming developers, 
                or working on open-source projects that give back to the community.
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
                "5+ years of professional development experience",
                "Led teams of 3-8 developers on complex projects", 
                "Delivered 50+ successful projects across various industries",
                "Strong focus on performance, scalability, and user experience"
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
                    <p className="text-sm font-medium">Professional Photo</p>
                    <p className="text-xs mt-1">Upload your photo here</p>
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