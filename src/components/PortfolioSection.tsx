import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Creative Designer Portfolio",
      client: "Sarah Chen - UX Designer",
      category: "Design Portfolio",
      description: "Modern portfolio showcasing UI/UX design projects with interactive case studies and detailed design process documentation.",
      problem: "Client had amazing work but no professional way to showcase it to potential employers",
      solution: "Built clean, modern portfolio with case study format and interactive prototypes",
      result: "Landed senior UX role at tech startup within 2 months, 40% salary increase",
      technologies: ["Portfolio Design", "Case Studies", "Interactive Prototypes", "SEO", "Personal Branding"],
      image: "gradient-primary",
      links: {
        live: "#",
        github: "#"
      }
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-muted/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Client <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how we've helped professionals transform their careers through stunning portfolios 
            that showcase their work and attract new opportunities.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover border-0 bg-card/50 backdrop-blur-sm animate-fade-up">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Project Image/Visual */}
                  <div className={`bg-${project.image} rounded-l-lg lg:rounded-r-none rounded-t-lg lg:rounded-t-lg min-h-[300px] lg:min-h-[400px] flex items-center justify-center relative overflow-hidden`}>
                    <div className="text-center text-white/90">
                      <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                        <div className="w-12 h-12 bg-white/30 rounded-xl"></div>
                      </div>
                      <p className="font-semibold">{project.title}</p>
                      <p className="text-sm opacity-75 mt-1">{project.category}</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20"></div>
                  </div>

                  {/* Project Details */}
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <div className="mb-4">
                      <Badge variant="secondary" className="mb-3">
                        {project.client}
                      </Badge>
                      <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Problem, Solution, Result */}
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-primary mb-1">Problem</h4>
                        <p className="text-sm text-muted-foreground">{project.problem}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-primary mb-1">Solution</h4>
                        <p className="text-sm text-muted-foreground">{project.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-primary mb-1">Result</h4>
                        <p className="text-sm font-medium text-foreground">{project.result}</p>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button variant="default" size="sm" className="group">
                        <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                        View Portfolio
                      </Button>
                      <Button variant="outline" size="sm" className="group">
                        <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                        Case Study
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-up">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to create your own success story with a stunning portfolio?
          </p>
          <Button variant="hero" size="lg" className="group">
            Start Your Portfolio Project
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;