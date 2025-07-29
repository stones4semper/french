import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Users, Heart, BookOpen, Activity, Vote } from "lucide-react";
import heroImage from "@/assets/hero-community.jpg";
import settlementImage from "@/assets/settlement-services.jpg";
import educationImage from "@/assets/education-programs.jpg";
import healthImage from "@/assets/health-wellness.jpg";
import youthImage from "@/assets/youth-family.jpg";
import civicImage from "@/assets/civic-engagement.jpg";
import eventsImage from "@/assets/cultural-events.jpg";

const Index = () => {
  const programs = [
    {
      title: "Settlement and Integration Services",
      description: "We support French-speaking newcomers by providing guidance on housing, employment, public services, and adapting to life in Alberta.",
      icon: Users,
      image: settlementImage
    },
    {
      title: "Education and Language Programs",
      description: "Our programs help children, youth, and adults strengthen their French language skills, embrace bilingualism, and grow in confidence.",
      icon: BookOpen,
      image: educationImage
    },
    {
      title: "Health and Wellness Initiatives",
      description: "We offer mental health awareness, wellness workshops, and recreation activities tailored to francophone needs and delivered in French.",
      icon: Activity,
      image: healthImage
    },
    {
      title: "Youth and Family Programs",
      description: "Through mentorship, cultural workshops, and after-school activities, we help young people and their families build strong roots and futures.",
      icon: Heart,
      image: youthImage
    },
    {
      title: "Civic Engagement and Advocacy",
      description: "We advocate for the inclusion of francophones in civic life and decision-making processes, ensuring their voices are heard.",
      icon: Vote,
      image: civicImage
    },
    {
      title: "Community Events and Cultural Celebrations",
      description: "We bring the community together through festivals, forums, and networking events that celebrate diversity and connection.",
      icon: Calendar,
      image: eventsImage
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="w-fit">
                  Welcome to La Bonne Semence Francophone Society
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Celebrating Francophone Heritage.{" "}
                  <span className="text-accent">Empowering Communities.</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  La Bonne Semence Francophone Society, also known as The Right Seed Francophone Society, is committed to promoting and preserving francophone culture and language through inclusive programs, meaningful services, and community-building initiatives across Edmonton and Alberta.
                </p>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                <h2 className="text-xl font-semibold">Our mission is simple but powerful:</h2>
                <p className="text-muted-foreground">
                  To strengthen francophone communities by supporting cultural identity, integration, education, and civic participation in both official languages.
                </p>
              </div>

              <div className="space-y-4">
                <p className="font-medium">Get started today:</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <Link to="/programs">
                      Join a program
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/get-involved">Get involved</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/support">Make a contribution</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="Community celebration with diverse families"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">What We Do</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive programs and services are designed to support every aspect of francophone community life in Alberta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-10 h-10 bg-white/90 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {program.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Highlight Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={eventsImage} 
                    alt="Francophone Family Festival"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent lg:from-transparent lg:to-black/40" />
                </div>
                <div className="p-8 lg:p-12 space-y-6">
                  <div className="space-y-2">
                    <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                      Upcoming Highlight
                    </Badge>
                    <h3 className="text-2xl lg:text-3xl font-bold">
                      Francophone Family Festival – June 15, 2025
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Experience francophone culture through music, dance, food, and storytelling at our annual community celebration.
                  </p>
                  <div className="space-y-4">
                    <p className="font-medium">
                      Register today to reserve your spot and bring your family and friends.
                    </p>
                    <Button asChild size="lg" className="w-full sm:w-auto">
                      <Link to="/events">
                        Register Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Why It Matters</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our work helps francophones feel connected, confident, and supported. We serve as a bridge between tradition and progress, ensuring that francophone voices are represented, valued, and uplifted across generations.
            </p>
          </div>
        </div>
      </section>

      {/* How You Can Help Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">How You Can Help</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                There are many ways to make a difference. Whether you are a newcomer, volunteer, donor, or partner, your contribution helps us grow and strengthen the francophone community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                  <CardTitle>Volunteer with us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Share your time and skills to support our programs and events.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/get-involved">Learn more</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
                  <CardTitle>Become a partner</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Collaborate with us to expand our impact and reach.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/get-involved">Partner with us</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Activity className="h-12 w-12 text-accent mx-auto mb-4" />
                  <CardTitle>Make a donation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Support our mission with a financial contribution.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/support">Donate now</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="pt-8">
              <Button asChild size="lg">
                <Link to="/contact">
                  Contact us to learn more or get involved today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
