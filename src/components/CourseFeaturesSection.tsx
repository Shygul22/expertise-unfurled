import { Code, Database, Globe, Smartphone, Zap, Users } from "lucide-react";

const CourseFeaturesSection = () => {
  const features = [
    {
      icon: Globe,
      title: "Frontend Development",
      description: "Master React, HTML, CSS, JavaScript, and modern UI frameworks",
      topics: ["React & Next.js", "Responsive Design", "JavaScript ES6+", "UI/UX Principles"]
    },
    {
      icon: Database,
      title: "Backend Development", 
      description: "Learn server-side programming, databases, and API development",
      topics: ["Node.js & Express", "Database Design", "RESTful APIs", "Authentication"]
    },
    {
      icon: Code,
      title: "Fullstack Integration",
      description: "Connect frontend and backend to build complete applications",
      topics: ["Full Project Build", "Deployment", "Version Control", "Best Practices"]
    },
    {
      icon: Smartphone,
      title: "Portfolio Creation",
      description: "Build professional resumes and portfolios to showcase your skills",
      topics: ["Resume Builder", "Portfolio Design", "GitHub Integration", "Personal Branding"]
    },
    {
      icon: Zap,
      title: "Live Projects",
      description: "Work on real-world projects to gain practical experience",
      topics: ["E-commerce Site", "Blog Platform", "Task Manager", "Social Media App"]
    },
    {
      icon: Users,
      title: "Career Support",
      description: "Get guidance on job search, interviews, and career growth",
      topics: ["Interview Prep", "Job Search Strategy", "Industry Insights", "Networking"]
    }
  ];

  return (
    <section className="py-24 bg-background relative">
      {/* Scroll Indicator - Positioned above Complete Learning Path */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <div className="w-5 h-8 border border-primary/30 rounded-full flex justify-center bg-background/20 backdrop-blur-sm">
            <div className="w-0.5 h-2 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
      
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Complete <span className="text-gradient">Learning Path</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From beginner to job-ready developer with comprehensive curriculum and hands-on projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-card border border-border rounded-xl p-8 hover:shadow-elegant hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground mb-6">{feature.description}</p>
              
              <div className="space-y-2">
                {feature.topics.map((topic, topicIndex) => (
                  <div key={topicIndex} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseFeaturesSection;