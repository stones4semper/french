import Layout from "@/components/Layout";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, Activity, Heart, Vote, Calendar } from "lucide-react";
import BreadcrumbWithHero from "@/components/BreadcrumbWithHero";
import settlementImage from "@/assets/settlement-services.jpg";
import educationImage from "@/assets/education-programs.jpg";
import healthImage from "@/assets/health-wellness.jpg";
import youthImage from "@/assets/youth-family.jpg";
import civicImage from "@/assets/civic-engagement.jpg";
import eventsImage from "@/assets/cultural-events.jpg";

const Programs = () => {
  const programs = [
    {
      title: "Settlement and Integration Services",
      description: "We provide French-speaking immigrants and newcomers with practical support to help them settle and succeed in Alberta. Services include help with housing, job search, navigating government services, and adapting to a new culture while maintaining one's linguistic identity.",
      icon: Users,
      image: settlementImage,
      features: [
        "Newcomer Orientation",
        "Employment and Job Readiness Support", 
        "Housing Support",
        "Language Navigation Services",
        "Referrals and Case Management",
        "Settlement Workshops and Information Sessions"
      ]
    },
    {
      title: "Education and French Language Development",
      description: "From literacy support for children to adult bilingual education, we offer programs that enhance French language skills, encourage academic achievement, and promote lifelong learning in both French and English.",
      icon: BookOpen,
      image: educationImage,
      features: [
        "French Language Learning for Adults",
        "Bilingual Early Childhood Development",
        "Homework Help and Tutoring",
        "Literacy Support for Families",
        "Digital Literacy Workshops"
      ]
    },
    {
      title: "Health and Wellness Programs",
      description: "We promote well-being in the francophone community through culturally sensitive mental health workshops, wellness programs, and recreational activities delivered in French to ensure accessibility and comfort.",
      icon: Activity,
      image: healthImage,
      features: [
        "Mental Health Awareness Workshops",
        "Wellness and Self-Care Sessions",
        "Fitness and Recreational Activities",
        "Culturally Relevant Support Groups",
        "Health Information and Navigation"
      ]
    },
    {
      title: "Youth and Family Empowerment",
      description: "We support youth and families through mentorship programs, family events, leadership development, and after-school activities that foster confidence, connection, and cultural pride.",
      icon: Heart,
      image: youthImage,
      features: [
        "Youth Mentorship and Leadership Development",
        "After-School and Weekend Programs",
        "Family Engagement and Education",
        "Cultural Identity Workshops",
        "Summer Camps and Family Events"
      ]
    },
    {
      title: "Civic Engagement and Advocacy",
      description: "We encourage active participation in civic life by educating community members on their rights, facilitating access to public services in French, and promoting representation in decision-making spaces.",
      icon: Vote,
      image: civicImage,
      features: [
        "Civic Education Sessions",
        "Francophone Voter Awareness Campaigns",
        "Public Service Navigation Support",
        "Community Consultations and Forums",
        "Leadership and Advocacy Training"
      ]
    },
    {
      title: "Community Events and Cultural Celebrations",
      description: "We bring people together to celebrate francophone heritage through festivals, cultural nights, community forums, and networking events that strengthen social ties and intercultural dialogue.",
      icon: Calendar,
      image: eventsImage,
      features: [
        "Francophone Family Festival",
        "Cultural Heritage Month Activities",
        "Intercultural Dialogues and Community Forums",
        "Seasonal Celebrations and Holiday Events",
        "Talent Shows and Youth Cultural Nights",
        "Volunteer and Community Appreciation Days"
      ]
    }
  ];

  return (
    <Layout>
      <BreadcrumbWithHero title="Programs" breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Programs", href: "/programs" }
      ]} />
      <section className="bg-gradient-to-b from-muted/20 to-background py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Comprehensive Programs for Every Need
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At La Bonne Semence Francophone Society, we design and deliver inclusive programs and services that address the real needs of francophone individuals and families in Alberta. Whether you're a newcomer, a parent, a youth, or a community leader, our programs are created to support your journey, strengthen cultural identity, and build community resilience.
            </p>
          </div>
        </div>
      </section>

      {/* Program Areas Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Our Program Areas</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Six comprehensive program areas designed to support every aspect of francophone community life.
            </p>
          </div>

          <div className="space-y-16">
            {programs.map((program, index) => {
              const IconComponent = program.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`space-y-6 ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-accent" />
                        </div>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold">{program.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {program.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold">What We Offer:</h4>
                      <ul className="space-y-2">
                        {program.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-lg">
                      <img 
                        src={program.image} 
                        alt={program.title}
                        className="w-full h-[400px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Our Programs Matter */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Why Our Programs Matter</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our programs are more than just services—they are pathways to connection, opportunity, and empowerment. Designed in consultation with the community, each program addresses specific challenges faced by francophones, ensuring no one is left behind.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are committed to building a future where francophone voices are heard, supported, and celebrated in every area of life.
            </p>
          </div>
        </div>
      </section>

      {/* Interested in a Program */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">Interested in a Program?</h2>
              <p className="text-lg text-muted-foreground">
                Explore each of our key program areas to find the right support for you and your family.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((program, index) => {
                const IconComponent = program.icon;
                return (
                  <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <IconComponent className="h-8 w-8 text-accent mx-auto mb-2" />
                      <CardTitle className="text-lg">{program.title}</CardTitle>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;