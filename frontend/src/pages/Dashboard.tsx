import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import StudentDashboard from "@/components/dashboard/StudentDashboard";
import AuthorityDashboard from "@/components/dashboard/AuthorityDashboard";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    const id = localStorage.getItem("userId");
    
    if (!role || !id) {
      navigate("/login");
      return;
    }
    
    setUserRole(role);
    setUserId(id);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("userId");
    navigate("/login");
  };

  if (!userRole || !userId) {
    return null;
  }

  return (
    <div className="min-h-screen">
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Campus QR
            </h1>
            <p className="text-sm text-muted-foreground">
              {userRole === "student" ? `Student ID: ${userId}` : `Employee ID: ${userId}`}
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={() => navigate("/community")}>
              Community
            </Button>
            <Button variant="ghost" size="icon" onClick={handleLogout}>
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {userRole === "student" ? (
          <StudentDashboard userId={userId} />
        ) : (
          <AuthorityDashboard userId={userId} />
        )}
      </main>
    </div>
  );
};

export default Dashboard;
