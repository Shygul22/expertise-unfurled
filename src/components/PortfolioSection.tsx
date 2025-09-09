import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      client: "TechStart Inc.",
      category: "Web Application",
      description: "Full-stack e-commerce solution with advanced inventory management, payment processing, and analytics dashboard.",
      problem: "Client needed a scalable platform to handle 10k+ daily orders",
      solution: "Built with React, Node.js, and PostgreSQL with Redis caching",
      result: "300% increase in conversion rates, 99.9% uptime",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Stripe"],
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
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore some of my recent work where I've helped businesses solve complex challenges 
            and achieve remarkable results through innovative solutions.
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
                        Live Demo
                      </Button>
                      <Button variant="outline" size="sm" className="group">
                        <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                        Code
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
            Want to see more of my work or discuss your project?
          </p>
          <Button variant="hero" size="lg" className="group">
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;