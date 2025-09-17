import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Send,
  Heart
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer Content */}
      <div className="section-container section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Contact */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Transform Your Career with Zypher
            </h3>
            <p className="text-background/80 mb-6 leading-relaxed">
              Ready to take your career to the next level? We're here to help you create 
              compelling resumes, stunning portfolios, and strategic career plans that open doors.
            </p>
            
            {/* Quick Contact */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>zypher@zenjourney.in</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 9488742416</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <Button variant="outline" size="icon" className="border-background/20 hover:bg-primary hover:border-primary">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-background/20 hover:bg-primary hover:border-primary">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-background/20 hover:bg-primary hover:border-primary">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-primary transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm text-background/80 mb-4">
              Get the latest insights on web development, design trends, and industry news.
            </p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60 focus:border-primary"
              />
              <Button variant="default" size="sm" className="w-full group">
                <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-background/20" />

      {/* Bottom Footer */}
      <div className="section-container py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-background/80">
          <div className="flex items-center gap-2">
            <span>© {currentYear} Zypher. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>by zenjourney.in</span>
          </div>
          
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;