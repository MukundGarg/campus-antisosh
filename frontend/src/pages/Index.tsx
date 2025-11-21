import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { QrCode, Users, BookOpen, BarChart3 } from "lucide-react";
const Index = () => {
  const navigate = useNavigate();
  const features = [{
    icon: QrCode,
    title: "QR Attendance",
    description: "Smart QR-based attendance tracking for students and visitors"
  }, {
    icon: BarChart3,
    title: "Real-time Stats",
    description: "Monitor attendance rates and campus activity in real-time"
  }, {
    icon: Users,
    title: "Community Hub",
    description: "Connect with seniors, join clubs, and access study materials"
  }, {
    icon: BookOpen,
    title: "Resource Sharing",
    description: "Share and download notes, assignments, and learning resources"
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Campus QR
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Smart attendance system with QR technology. Streamline campus management and foster community engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => navigate("/login")} className="text-lg">
              Login to Dashboard
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/community")} className="text-lg">
              Explore Community
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-serif">Features</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, idx) => {
            const Icon = feature.icon;
            return <Card key={idx} className="shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1" style={{
              animationDelay: `${idx * 100}ms`
            }}>
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 inline-flex p-4 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="max-w-4xl mx-auto shadow-card bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Join hundreds of students and faculty using Campus QR for seamless attendance management.
            </p>
            <Button size="lg" onClick={() => navigate("/login")} className="text-lg">
              Access Your Dashboard
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p>&copy; 2025 Campus QR. Smart Attendance System.</p>
        </div>
      </footer>
    </div>;
};
export default Index;