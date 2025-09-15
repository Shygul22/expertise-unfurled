import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  Users,
  Mail,
  FileText,
  Settings,
  LogOut,
  Calendar,
  TrendingUp,
  Phone,
  Building,
  IndianRupee,
  Eye,
  Download
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { toast } from "sonner";

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

const AdminDashboard = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalMessages: 0,
    todayMessages: 0,
    weekMessages: 0,
    monthMessages: 0
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Check admin authentication
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
      calculateStats(data || []);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = (messages: ContactMessage[]) => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    const monthAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);

    const stats = {
      totalMessages: messages.length,
      todayMessages: messages.filter(m => new Date(m.created_at) >= today).length,
      weekMessages: messages.filter(m => new Date(m.created_at) >= weekAgo).length,
      monthMessages: messages.filter(m => new Date(m.created_at) >= monthAgo).length
    };

    setStats(stats);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminEmail');
    toast.success("Logged out successfully");
    navigate('/admin-login');
  };

  const exportData = () => {
    const csv = [
      ['Name', 'Email', 'Company', 'Project Type', 'Budget', 'Created At'],
      ...messages.map(m => [
        m.name,
        m.email,
        m.company || '',
        m.project_type || '',
        m.budget || '',
        format(new Date(m.created_at), 'yyyy-MM-dd HH:mm:ss')
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `contacts-${format(new Date(), 'yyyy-MM-dd')}.csv`;
    a.click();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">ZenJourney Admin</h1>
              <p className="text-muted-foreground">CRM & Contact Management</p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary">
                <Mail className="h-3 w-3 mr-1" />
                admin@zenjourney.in
              </Badge>
              <Button variant="outline" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="contacts">Contacts</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Messages</CardTitle>
                  <Mail className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalMessages}</div>
                  <p className="text-xs text-muted-foreground">All time</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Today</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.todayMessages}</div>
                  <p className="text-xs text-muted-foreground">New messages</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">This Week</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.weekMessages}</div>
                  <p className="text-xs text-muted-foreground">Last 7 days</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">This Month</CardTitle>
                  <BarChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.monthMessages}</div>
                  <p className="text-xs text-muted-foreground">Last 30 days</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Messages */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Messages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {messages.slice(0, 5).map((message) => (
                    <div key={message.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-4">
                          <div>
                            <p className="font-medium">{message.name}</p>
                            <p className="text-sm text-muted-foreground">{message.email}</p>
                          </div>
                          {message.project_type && (
                            <Badge variant="secondary">{message.project_type}</Badge>
                          )}
                          {message.budget && (
                            <Badge variant="outline">
                              <IndianRupee className="h-3 w-3 mr-1" />
                              {message.budget}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">
                          {format(new Date(message.created_at), 'MMM dd, yyyy')}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contacts Tab */}
          <TabsContent value="contacts" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Contact Messages</h2>
              <Button onClick={exportData} variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </Button>
            </div>

            <div className="grid gap-6">
              {messages.map((message) => (
                <Card key={message.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div>
                          <CardTitle className="text-lg">{message.name}</CardTitle>
                          <div className="flex items-center gap-2 mt-1">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{message.email}</span>
                          </div>
                        </div>
                      </div>
                      <Badge variant="outline">
                        {format(new Date(message.created_at), 'MMM dd, yyyy HH:mm')}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {message.company && (
                        <div className="flex items-center gap-2">
                          <Building className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{message.company}</span>
                        </div>
                      )}
                      {message.project_type && (
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <Badge variant="secondary">{message.project_type}</Badge>
                        </div>
                      )}
                      {message.budget && (
                        <div className="flex items-center gap-2">
                          <IndianRupee className="h-4 w-4 text-muted-foreground" />
                          <Badge variant="outline">{message.budget}</Badge>
                        </div>
                      )}
                    </div>

                    {message.project_details && (
                      <div className="border-t pt-4">
                        <p className="font-medium text-sm mb-2">Project Details:</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {message.project_details}
                        </p>
                      </div>
                    )}

                    <div className="flex gap-2 pt-2">
                      <Button
                        size="sm"
                        onClick={() => window.open(`mailto:${message.email}`, '_blank')}
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        Reply
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports" className="space-y-6">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Project Types</h4>
                      <div className="space-y-2">
                        {['resume-writing', 'portfolio-creation', 'career-consultation'].map(type => {
                          const count = messages.filter(m => m.project_type === type).length;
                          return (
                            <div key={type} className="flex justify-between">
                              <span className="text-sm capitalize">{type.replace('-', ' ')}</span>
                              <span className="text-sm font-medium">{count}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Budget Ranges</h4>
                      <div className="space-y-2">
                        {['499-only', '500-1000', '1000-2500', '2500-5000'].map(budget => {
                          const count = messages.filter(m => m.budget === budget).length;
                          return (
                            <div key={budget} className="flex justify-between">
                              <span className="text-sm">{budget}</span>
                              <span className="text-sm font-medium">{count}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Admin Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>admin@zenjourney.in</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>+91 9488742416</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4 text-muted-foreground" />
                  <span>ZenJourney.in</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Email Configuration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Hostinger Email Setup:</strong>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Access your email at: <a href="https://mail.hostinger.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://mail.hostinger.com/</a>
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Use your ZenJourney email credentials to access the admin email interface.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;