import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { comp_fone, comp_email } from "@/utils/constants";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">LBS</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  La Bonne Semence
                </h3>
                <p className="text-sm text-muted-foreground">
                  Francophone Society
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Celebrating Francophone Heritage. Empowering Communities.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  13407 97 St NW Edmonton, AB T5E 4C7
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {comp_fone}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {comp_email}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                About Us
              </Link>
              <Link to="/programs" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Programs & Services
              </Link>
              <Link to="/events" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Events
              </Link>
              <Link to="/get-involved" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Get Involved
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Our Programs</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/programs" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Settlement Services
              </Link>
              <Link to="/programs" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Education & Literacy
              </Link>
              <Link to="/programs" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Health & Wellness
              </Link>
              <Link to="/programs" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Youth & Family
              </Link>
              <Link to="/programs" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Civic Engagement
              </Link>
              <Link to="/programs" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Community Events
              </Link>
            </nav>
          </div>

          {/* Connect & Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Connect & Support</h3>
            <div className="space-y-3">
              <Button asChild variant="outline" className="w-full justify-start">
                <Link to="/support">Make a Donation</Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link to="/get-involved">Volunteer</Link>
              </Button>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">Follow Us</p>
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm" className="p-2">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <Youtube className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} La Bonne Semence Francophone Society. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;