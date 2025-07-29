import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/20 to-background py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="mx-auto">Contact Us</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              We'd love to hear from you.{" "}
              <span className="text-accent">Let's stay connected.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Whether you are looking for support, have questions about our programs, want to partner with us, or are ready to get involved—we are here to help. Reach out to us using the information below or fill out the contact form, and a member of our team will get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  We aim to respond to all inquiries within 2 business days.
                </p>
              </div>

              {/* Office Location */}
              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <CardTitle className="text-lg">Office Location</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-0 space-y-2">
                  <p className="font-medium">La Bonne Semence Francophone Society</p>
                  <p className="text-muted-foreground">Edmonton, Alberta, Canada</p>
                  <p className="text-muted-foreground">13407 97 St NW Edmonton, Alberta T5E 4C7</p>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-lg">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">(Insert phone number)</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">info@labonnesemence.ca</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium">Office Hours</p>
                      <p className="text-muted-foreground">Monday to Friday: 9:00 AM – 5:00 PM</p>
                      <p className="text-muted-foreground">Closed on weekends and statutory holidays</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-lg">Connect With Us</CardTitle>
                  <CardDescription>
                    Follow us on social media to stay informed about upcoming events, new programs, and opportunities to get involved.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="p-2">
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="p-2">
                      <Instagram className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="p-2">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="p-2">
                      <Youtube className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    (Links to be added)
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-8">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl">General Inquiries Form</CardTitle>
                  <CardDescription>
                    Send us a message and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Your Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number (optional)</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Website Information */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold">Visit Our Website</h2>
            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="h-5 w-5 text-accent" />
                  <span className="font-medium">Website</span>
                </div>
                <p className="text-lg font-mono">www.labonnesemence.ca</p>
                <p className="text-sm text-muted-foreground">
                  Visit our website for the latest updates, program information, and community resources.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;