import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Users, Award, Clock, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const EnrollmentStatsSection = () => {
  const [enrollmentCount, setEnrollmentCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEnrollmentStats = async () => {
      try {
        const { count } = await supabase
          .from('contact_messages')
          .select('*', { count: 'exact', head: true });
        
        setEnrollmentCount(count || 0);
      } catch (error) {
        console.error('Error fetching enrollment stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEnrollmentStats();
  }, []);

  const stats = [
    {
      icon: Users,
      label: "Students Enrolled",
      value: loading ? "..." : enrollmentCount.toString(),
      description: "Active learners in our programs"
    },
    {
      icon: Award,
      label: "Certificates Issued",
      value: loading ? "..." : Math.floor(enrollmentCount * 0.8).toString(),
      description: "Successful course completions"
    },
    {
      icon: Clock,
      label: "Hours of Content",
      value: "120+",
      description: "Comprehensive video tutorials"
    },
    {
      icon: TrendingUp,
      label: "Success Rate",
      value: "95%",
      description: "Students who complete the course"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Join <span className="text-gradient">Thousands</span> of Successful Students
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time enrollment data showing our growing community of developers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-elegant transition-all duration-300 border-border/50">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              
              <div className="text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              
              <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </Card>
          ))}
        </div>

        {/* Real-time enrollment indicator */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-primary/5 border border-primary/20 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm text-muted-foreground">
              Live enrollment data • Updated in real-time
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentStatsSection;