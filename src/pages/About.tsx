import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Users, Handshake, Scale } from "lucide-react";
import michel from "@/assets/michel-shako.jpeg";
import Julie from "@/assets/Julie.jpeg";
import pelagie from "@/assets/pelagie-yapi-nianzale.jpeg";
import alfred from "@/assets/alfred-lalie-nianzale.jpeg";


const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Cultural Identity",
      description: "We celebrate and protect the unique heritage, language, and traditions of francophone communities."
    },
    {
      icon: Users,
      title: "Inclusion",
      description: "We believe everyone deserves access to opportunities, services, and support, regardless of their background."
    },
    {
      icon: Target,
      title: "Empowerment",
      description: "We equip individuals and families with the tools, knowledge, and confidence to succeed."
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description: "We work with community partners and stakeholders to achieve lasting impact."
    },
    {
      icon: Scale,
      title: "Equity",
      description: "We advocate for fair access to services, representation, and decision-making for francophone populations."
    }
  ];

  const goals = [
    "Strengthen community-based programs that support language preservation and cultural awareness.",
    "Expand integration and support services for French-speaking immigrants and newcomers.",
    "Promote mental health, education, and civic engagement in the francophone community.",
    "Build strong partnerships with local organizations, government bodies, and schools.",
    "Foster leadership and participation among francophone youth and families."
  ];

  const team = [
    {
      img: michel,
      name: "Michel Shako",
      role: "Executive Director"
    },
    {
      img: Julie,
      name: "Julie",
      role: "Program Director"
    },
    {
      img: alfred,
      name: "Alfred Lalie Nianzale",
      role: "" 
    },
    {
      img: pelagie,
      name: "Pelagie Yapi Nianzale",
      role: "" 
    }
  ];

  return (
    <Layout>
      <section className="bg-gradient-to-b from-muted/20 to-background py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="mx-auto">About Us</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Who We Are
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              La Bonne Semence Francophone Society, also known as The Right Seed Francophone Society, is a nonprofit organization based in Edmonton, Alberta. We are dedicated to promoting the richness of francophone culture, supporting French-speaking newcomers, and empowering francophone individuals and families through programs that foster inclusion, growth, and community connection.
            </p>
            <p className="text-lg text-muted-foreground">
              Founded by passionate community members, our organization was created to respond to the needs of French-speaking individuals and families seeking belonging, support, and opportunities to thrive in a bilingual society.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
              <CardHeader className="pb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A thriving and inclusive francophone community where individuals of all backgrounds feel empowered, connected, and celebrated.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardHeader className="pb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To promote and preserve the francophone culture and language while providing programs and services that support integration, education, wellness, and civic participation for French-speaking communities in Alberta.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These values guide everything we do and shape our approach to serving the francophone community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold">Our Strategic Goals</h2>
              <p className="text-lg text-muted-foreground">
                We focus on these key areas to maximize our impact and serve our community effectively.
              </p>
            </div>

            <div className="space-y-6">
              {goals.map((goal, index) => (
                <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent font-semibold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{goal}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our organization is led by a diverse group of board members, staff, and volunteers who are passionate about serving the francophone community. Together, we bring a wealth of lived experience, professional expertise, and cultural understanding to the work we do.
            </p>
          </div>

          <div className="max-w-6xl mx-auto px-4">
            <Card className="p-8 bg-gradient-to-br from-white to-gray-50 shadow-lg rounded-xl overflow-hidden">
              <CardContent>
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-3">Meet Our Leadership</h2>
                  <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Passionate leaders driving our vision forward with expertise and dedication.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                  {team.map((member, index) => (
                    <div 
                      key={index} 
                      className="group relative flex flex-col items-center transition-all duration-300 hover:scale-105"
                    >
                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-primary rounded-full opacity-10 group-hover:opacity-20 transition-all duration-500 scale-90 group-hover:scale-110"></div>
                        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10">
                          <img 
                            src={member.img} 
                            alt={member.name} 
                            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                          />
                        </div>
                      </div>

                      <div className="text-center px-2">
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                        {member.role && (
                          <p className="text-primary font-medium mb-3">{member.role}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Join Us</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We invite individuals, families, and partners to join us in creating a vibrant francophone future. Whether you are new to the community or looking to make a meaningful impact, there is a place for you at La Bonne Semence Francophone Society.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">
                Contact us today to learn more about how you can get involved
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;