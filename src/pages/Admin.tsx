import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Phone, MapPin, Calendar, User, Building, DollarSign, FileText, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  company?: string;
  project_type?: string;
  budget?: string;
  project_details?: string;
  created_at: string;
}

const Admin = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if admin is logged in
    const adminToken = localStorage.getItem('adminToken');
    if (!adminToken) {
      navigate('/admin-login');
      return;
    }
    
    fetchMessages();
  }, [navigate]);

  const fetchMessages = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching messages:', error);
        return;
      }

      setMessages(data || []);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading contact messages...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="outline"
            onClick={() => navigate('/admin-dashboard')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Button>
          <h1 className="text-3xl font-bold">Contact Messages (Legacy View)</h1>
          <Button
            variant="outline"
            onClick={() => navigate('/admin-dashboard')}
            className="ml-auto flex items-center gap-2"
          >
            <Settings className="h-4 w-4" />
            Full Dashboard
          </Button>
          <Badge variant="secondary" className="">
            {messages.length} Total Messages
          </Badge>
        </div>

        {/* Messages Grid */}
        {messages.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <Mail className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No Messages Yet</h3>
              <p className="text-muted-foreground">
                Contact form submissions will appear here.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {messages.map((message) => (
              <Card key={message.id} className="card-hover">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <User className="h-5 w-5 text-primary" />
                      {message.name}
                    </CardTitle>
                    <Badge variant="outline" className="text-xs">
                      <Calendar className="h-3 w-3 mr-1" />
                      {format(new Date(message.created_at), 'MMM dd, yyyy')}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Email */}
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                    <a 
                      href={`mailto:${message.email}`}
                      className="text-primary hover:underline break-all"
                    >
                      {message.email}
                    </a>
                  </div>

                  {/* Company */}
                  {message.company && (
                    <div className="flex items-center gap-2 text-sm">
                      <Building className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                      <span className="text-muted-foreground">{message.company}</span>
                    </div>
                  )}

                  {/* Project Type */}
                  {message.project_type && (
                    <div className="flex items-center gap-2 text-sm">
                      <FileText className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                      <Badge variant="secondary" className="text-xs">
                        {message.project_type}
                      </Badge>
                    </div>
                  )}

                  {/* Budget */}
                  {message.budget && (
                    <div className="flex items-center gap-2 text-sm">
                      <DollarSign className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                      <Badge variant="outline" className="text-xs">
                        {message.budget}
                      </Badge>
                    </div>
                  )}

                  {/* Project Details */}
                  {message.project_details && (
                    <div className="border-t pt-4">
                      <p className="text-sm text-muted-foreground font-medium mb-2">
                        Project Details:
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {message.project_details.length > 150
                          ? `${message.project_details.substring(0, 150)}...`
                          : message.project_details}
                      </p>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="border-t pt-4 flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(`mailto:${message.email}`, '_blank')}
                      className="flex-1"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Reply
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;