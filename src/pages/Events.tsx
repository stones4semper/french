import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import eventsImage from "@/assets/cultural-events.jpg";

const Events = () => {
  const featuredEvents = [
    {
      title: "Francophone Family Festival",
      date: "June",
      description: "This flagship summer celebration brings together families from all walks of life to enjoy live music, traditional food, games, cultural performances, and more. A day filled with fun, connection, and pride in francophone identity.",
      time: "All Day",
      location: "Community Centre",
      type: "Annual Event"
    },
    {
      title: "Francophonie Month",
      date: "March",
      description: "In honor of International Francophonie Day, we host a month-long series of events including storytelling nights, art exhibits, workshops, and film screenings. These events highlight the history, contributions, and diversity of French-speaking communities.",
      time: "Various Times",
      location: "Multiple Venues",
      type: "Month-long Celebration"
    },
    {
      title: "Back-to-School Community Picnic",
      date: "September",
      description: "A family-focused event designed to prepare students and parents for the school year. Includes school supply giveaways, games, food, and information booths about our education and youth programs.",
      time: "12:00 PM - 5:00 PM",
      location: "Community Park",
      type: "Annual Event"
    },
    {
      title: "Civic Engagement Forums",
      date: "Spring and Fall",
      description: "These forums bring the community together to discuss important topics like voter participation, community safety, language rights, and public policy affecting francophones. Open to all, with sessions delivered in French.",
      time: "7:00 PM - 9:00 PM",
      location: "Community Centre",
      type: "Bi-Annual"
    },
    {
      title: "Holiday Celebrations",
      date: "December",
      description: "Our end-of-year gatherings bring warmth and joy to the community with holiday meals, music, cultural dances, gift exchanges, and messages of hope. A special time to connect and reflect as a community.",
      time: "Various Times",
      location: "Community Centre",
      type: "Seasonal"
    }
  ];

  const upcomingEvents = [
    {
      title: "Spring Wellness Workshop Series",
      date: "April to May 2025",
      topics: "Mental health, stress management, physical wellness",
      location: "Community centre and virtual",
      audience: "Adults and seniors"
    },
    {
      title: "Youth Leadership Day Camp",
      date: "July 2025",
      description: "An immersive experience for francophone youth ages 12 to 17 focused on leadership, team building, and cultural pride.",
      location: "TBD",
      audience: "Youth ages 12-17"
    },
    {
      title: "Parent Information Night: Navigating Bilingual Education",
      date: "May 2025",
      description: "A session for parents of school-aged children to learn how to support academic success in French and access local bilingual resources.",
      location: "Community Centre",
      audience: "Parents"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-muted/20 to-background py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="outline" className="w-fit">Events</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Celebrating culture, connection, and community{" "}
                <span className="text-accent">year-round</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                At La Bonne Semence Francophone Society, our events are at the heart of our mission to bring people together. Through cultural celebrations, educational forums, family gatherings, and civic engagement activities, we create inclusive spaces where francophone voices are celebrated, and all are welcome.
              </p>
              <p className="text-lg text-muted-foreground">
                We invite you to join us throughout the year as we highlight the richness of francophone heritage and build stronger community ties.
              </p>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={eventsImage} 
                  alt="Community cultural celebration"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Annual Events */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Featured Annual Events</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our signature events that bring the francophone community together throughout the year.
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {featuredEvents.map((event, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                  <div className="bg-muted/30 p-6 flex flex-col justify-center text-center md:text-left">
                    <Badge variant="outline" className="w-fit mx-auto md:mx-0 mb-2">
                      {event.type}
                    </Badge>
                    <h3 className="font-bold text-lg mb-2">{event.date}</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center justify-center md:justify-start space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start space-x-1">
                        <MapPin className="h-3 w-3" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-3 p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <CardDescription className="text-sm leading-relaxed">
                        {event.description}
                      </CardDescription>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Upcoming Events</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Mark your calendars for these upcoming programs and special events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="h-5 w-5 text-accent" />
                    <Badge variant="secondary">{event.date}</Badge>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {event.topics && (
                    <div>
                      <h4 className="font-medium text-sm mb-1">Topics:</h4>
                      <p className="text-sm text-muted-foreground">{event.topics}</p>
                    </div>
                  )}
                  {event.description && (
                    <CardDescription className="text-sm leading-relaxed">
                      {event.description}
                    </CardDescription>
                  )}
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span>Open to: {event.audience}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Host or Sponsor */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Host or Sponsor an Event</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We welcome partners, performers, and community contributors to help us plan and deliver impactful events. Sponsorship and collaboration opportunities are available throughout the year.
            </p>
            <Button asChild size="lg">
              <Link to="/get-involved">
                Learn About Partnership Opportunities
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stay Connected */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Stay Connected</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Visit this page regularly for updates on upcoming events, registration information, and volunteer opportunities. You can also subscribe to our newsletter or follow us on social media for the latest announcements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">
                  Subscribe to Newsletter
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Follow Us on Social Media</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;