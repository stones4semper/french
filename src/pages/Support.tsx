import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import BreadcrumbWithHero from "@/components/BreadcrumbWithHero";
import { ArrowRight, Heart, Gift, Users, Building, Calendar, Star } from "lucide-react";
import { comp_fone } from "@/utils/constants";

const Support = () => {
  const supportAreas = [
    "Deliver essential programs for newcomer settlement, education, and mental health",
    "Empower francophone youth and families through leadership and mentorship",
    "Host cultural events that celebrate identity and promote inclusion",
    "Provide resources and services in French that reflect the needs of our community",
    "Advocate for francophone voices in public institutions"
  ];

  const donationAreas = [
    "Community events",
    "Educational and wellness programs",
    "Materials and resources", 
    "Volunteer training and mentorship"
  ];

  const supportTypes = [
    {
      icon: Heart,
      title: "Make a Donation",
      description: "Your one-time or monthly gift helps us expand our reach and improve the quality of life for those we serve.",
      options: [
        "Donate online (secure form coming soon)",
        "Mail a cheque to our office (details provided upon request)",
        "Inquire about in-kind donations (supplies, equipment, volunteer hours)"
      ]
    },
    {
      icon: Calendar,
      title: "Become a Monthly Donor",
      description: "Monthly giving allows us to plan ahead and sustain our programs. Even a small monthly contribution has a big impact over time.",
      options: [
        "Predictable funding for ongoing programs",
        "Greater impact through sustained support",
        "Convenient automatic monthly giving"
      ]
    },
    {
      icon: Building,
      title: "Sponsor a Program or Event",
      description: "Businesses, community groups, and faith-based organizations can sponsor specific initiatives such as youth leadership camps, wellness workshops, or our annual Francophone Family Festival.",
      options: [
        "Youth leadership camps",
        "Wellness workshops",
        "Francophone Family Festival",
        "Educational programs"
      ]
    },
    {
      icon: Users,
      title: "Corporate and Community Partnerships",
      description: "Partner with us on a shared initiative or support the development of a new program. We welcome collaborative efforts that align with our mission and values.",
      options: [
        "Shared initiative partnerships",
        "New program development",
        "Mission-aligned collaborations",
        "Community impact projects"
      ]
    },
    {
      icon: Star,
      title: "Legacy and Tribute Giving",
      description: "Consider making a gift in honour or memory of someone special, or including La Bonne Semence in your estate planning.",
      options: [
        "Memorial gifts",
        "Tribute donations",
        "Estate planning inclusion",
        "Legacy giving programs"
      ]
    }
  ];

  return (
    <Layout>
      <BreadcrumbWithHero title="Support Us" breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Support Us", href: "/support" }
      ]} />
      <section className="bg-gradient-to-b from-muted/20 to-background py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Your support helps us grow{" "}
              <span className="text-accent">stronger, together.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              La Bonne Semence Francophone Society is a community-driven nonprofit organization. We rely on the generosity of individuals, families, businesses, and funders who believe in the power of language, culture, and community connection.
            </p>
            <p className="text-lg text-muted-foreground">
              Your support allows us to offer free or low-cost programs to francophone newcomers, families, youth, and seniors across Alberta. Every contribution makes a difference.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold">Why Support Matters</h2>
              <p className="text-lg text-muted-foreground">
                When you support our organization, you help us create lasting change in the francophone community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {supportAreas.map((area, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{area}</p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-muted-foreground font-medium">
                Together, we can ensure that the francophone community continues to thrive—now and for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Ways to Support</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              There are many meaningful ways to contribute to our mission and support the francophone community.
            </p>
          </div>

          <div className="space-y-12">
            {supportTypes.map((type, index) => {
              const IconComponent = type.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`space-y-6 ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-accent" />
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold">{type.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {type.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold">Options include:</h4>
                      <ul className="space-y-2">
                        {type.options.map((option, optionIndex) => (
                          <li key={optionIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{option}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <Card className="p-8 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
                      <CardHeader className="text-center">
                        <IconComponent className="h-16 w-16 text-accent mx-auto mb-4" />
                        <CardTitle className="text-xl">{type.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <CardDescription>
                          Every contribution, no matter the size, helps us create meaningful change in the francophone community.
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Donation Areas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold">Your Donations Fund</h2>
              <p className="text-lg text-muted-foreground">
                Here's how your financial support directly impacts our programs and services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {donationAreas.map((area, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Gift className="h-8 w-8 text-accent mx-auto mb-2" />
                    <CardTitle className="text-lg">{area}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Essential funding that enables us to deliver high-quality programs and services to the francophone community.
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Thank You</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are deeply grateful for every person, family, and organization that invests in the vision of a stronger, more inclusive francophone Alberta. Your generosity plants seeds of hope, opportunity, and transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Ready to Give */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to give or learn more?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Contact us at donate@labonnesemence.ca or call us at {comp_fone}. We would be happy to discuss how your support can make a lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">
                  Contact Us About Giving
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/get-involved">Get Involved in Other Ways</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Support;