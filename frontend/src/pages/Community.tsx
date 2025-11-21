import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home, BookOpen, Users, Trophy } from "lucide-react";
import NotesTab from "@/components/community/NotesTab";
import SeniorsTab from "@/components/community/SeniorsTab";
import ClubsTab from "@/components/community/ClubsTab";

const Community = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Campus QR
            </h1>
            <p className="text-sm text-muted-foreground">Community Hub</p>
          </div>
          <Button variant="outline" onClick={() => navigate("/")}>
            <Home className="mr-2 h-4 w-4" />
            Home
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6 animate-fade-in">
          <h2 className="text-3xl font-bold mb-2">Community</h2>
          <p className="text-muted-foreground">
            Connect, learn, and grow with your campus community
          </p>
        </div>

        <Tabs defaultValue="notes" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="notes" className="gap-2">
              <BookOpen className="h-4 w-4" />
              Notes
            </TabsTrigger>
            <TabsTrigger value="seniors" className="gap-2">
              <Users className="h-4 w-4" />
              Connect with Seniors
            </TabsTrigger>
            <TabsTrigger value="clubs" className="gap-2">
              <Trophy className="h-4 w-4" />
              Clubs
            </TabsTrigger>
          </TabsList>

          <TabsContent value="notes">
            <NotesTab />
          </TabsContent>

          <TabsContent value="seniors">
            <SeniorsTab />
          </TabsContent>

          <TabsContent value="clubs">
            <ClubsTab />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Community;
