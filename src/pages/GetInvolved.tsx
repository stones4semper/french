import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Handshake, Heart, UserPlus, Lightbulb } from "lucide-react";
import BreadcrumbWithHero from "@/components/BreadcrumbWithHero";

const GetInvolved = () => {
  const volunteerOpportunities = [
    "Event coordination and support",
    "Mentorship and tutoring", 
    "Translation and interpretation",
    "Child and youth program assistance",
    "Outreach and community engagement"
  ];

  const membershipBenefits = [
    "Invitations to special events and consultations",
    "Voting rights at our Annual General Meeting",
    "Opportunities to shape future programs and initiatives"
  ];

  const donationAreas = [
    "Community events",
    "Educational and wellness programs", 
    "Materials and resources",
    "Volunteer training and mentorship"
  ];

  const ways = [
    {
      icon: Users,
      title: "Volunteer With Us",
      description: "Our volunteers play an essential role in everything we do—from helping at events to tutoring students or supporting administrative tasks.",
      benefits: [
        "Gain valuable experience",
        "Build lasting relationships", 
        "Contribute to programs that change lives"
      ],
      action: "Volunteer",
      link: "/contact"
    },
    {
      icon: Handshake,
      title: "Become a Community Partner",
      description: "We actively collaborate with schools, cultural organizations, service providers, and local businesses to expand our reach and enhance our programs.",
      benefits: [
        "Co-host events or workshops",
        "Share resources and referrals",
        "Support our advocacy initiatives",
        "Sponsor our programs or festivals"
      ],
      action: "Partner with us",
      link: "/contact"
    },
    {
      icon: UserPlus,
      title: "Join as a Member",
      description: "Become a member of La Bonne Semence Francophone Society and be part of our growing network of individuals committed to francophone well-being and development.",
      benefits: membershipBenefits,
      action: "Become a member",
      link: "/contact"
    },
    {
      icon: Heart,
      title: "Make a Donation",
      description: "Your financial support helps us offer free or low-cost programs that serve newcomers, youth, and families in need.",
      benefits: donationAreas,
      action: "Donate now",
      link: "/support"
    },
    {
      icon: Lightbulb,
      title: "Share Your Skills",
      description: "Do you have a background in education, health, social work, administration, or community development? We welcome skilled individuals who can contribute time and expertise.",
      benefits: [
        "Use your professional expertise",
        "Help us grow and serve more people",
        "Make a lasting impact in your community"
      ],
      action: "Share your skills",
      link: "/contact"
    }
  ];

  return (
    <Layout>
      <BreadcrumbWithHero title="Get Involved" breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Get Involved", href: "/get-involved" }
      ]} />
      <section className="bg-gradient-to-b from-muted/20 to-background py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Be part of something meaningful.{" "}
              <span className="text-accent">Support francophone growth and connection.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              La Bonne Semence Francophone Society thrives because of people like you—volunteers, community leaders, partners, and supporters who believe in the power of culture, inclusion, and shared purpose. Whether you're looking to give your time, share your expertise, or collaborate on a project, there are many ways to make an impact.
            </p>
            <p className="text-lg text-muted-foreground">
              Together, we can strengthen and uplift the francophone community in Alberta.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Ways to Make a Difference</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the way that works best for you to contribute to our mission and support the francophone community.
            </p>
          </div>

          <div className="space-y-12">
            {ways.map((way, index) => {
              const IconComponent = way.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`space-y-6 ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-accent" />
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold">{way.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {way.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold">
                        {way.title === "Make a Donation" ? "Your donations fund:" : 
                         way.title === "Join as a Member" ? "Membership benefits include:" :
                         way.title === "Volunteer With Us" ? "As a volunteer, you will:" : "You can:"}
                      </h4>
                      <ul className="space-y-2">
                        {way.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button asChild size="lg">
                      <Link to={way.link}>
                        {way.action}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <Card className="p-8 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
                      <CardHeader className="text-center">
                        <IconComponent className="h-16 w-16 text-accent mx-auto mb-4" />
                        <CardTitle className="text-xl">{way.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <CardDescription>
                          {way.title === "Volunteer With Us" && "We welcome volunteers of all backgrounds, and French language skills are a valuable asset."}
                          {way.title === "Become a Community Partner" && "Let's work together to create stronger, more connected communities."}
                          {way.title === "Join as a Member" && "Join our growing network of committed community members."}
                          {way.title === "Make a Donation" && "We gratefully accept one-time gifts or monthly contributions. Every gift makes a difference."}
                          {way.title === "Share Your Skills" && "Help us grow our capacity to serve the francophone community."}
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

      {/* Volunteer Opportunities Detail */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold">Volunteer Opportunities</h2>
              <p className="text-lg text-muted-foreground">
                Specific ways you can contribute your time and skills to our mission.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {volunteerOpportunities.map((opportunity, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{opportunity}</h3>
                      <p className="text-sm text-muted-foreground">
                        Join our team of dedicated volunteers making a difference in the francophone community.
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Get Involved */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Get Involved?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Fill out our Volunteer or Partner Interest Form, or contact us directly to learn how you can help. Together, we can plant the seeds of positive change in Alberta's francophone community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">
                  Contact Us Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/support">Make a Donation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GetInvolved;