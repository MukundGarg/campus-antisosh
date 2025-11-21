import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserCircle, Shield } from "lucide-react";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const [studentId, setStudentId] = useState("");
  const [employeeId, setEmployeeId] = useState("");

  const handleStudentLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentId.trim()) {
      toast.error("Please enter your enrollment number");
      return;
    }
    // Mock login - store role in localStorage
    localStorage.setItem("userRole", "student");
    localStorage.setItem("userId", studentId);
    toast.success("Welcome back, Student!");
    navigate("/dashboard");
  };

  const handleAuthorityLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!employeeId.trim()) {
      toast.error("Please enter your employee ID");
      return;
    }
    // Mock login - store role in localStorage
    localStorage.setItem("userRole", "authority");
    localStorage.setItem("userId", employeeId);
    toast.success("Welcome back, Authority!");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Campus QR
          </h1>
          <p className="text-muted-foreground">Smart Attendance System</p>
        </div>

        <Card className="shadow-card border-border/50">
          <CardHeader>
            <CardTitle>Login Portal</CardTitle>
            <CardDescription>Select your role to continue</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="student" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="student" className="gap-2">
                  <UserCircle className="h-4 w-4" />
                  Student
                </TabsTrigger>
                <TabsTrigger value="authority" className="gap-2">
                  <Shield className="h-4 w-4" />
                  Authority
                </TabsTrigger>
              </TabsList>

              <TabsContent value="student">
                <form onSubmit={handleStudentLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="studentId">Enrollment Number</Label>
                    <Input
                      id="studentId"
                      placeholder="Enter your enrollment number"
                      value={studentId}
                      onChange={(e) => setStudentId(e.target.value)}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Login as Student
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="authority">
                <form onSubmit={handleAuthorityLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="employeeId">Employee ID</Label>
                    <Input
                      id="employeeId"
                      placeholder="Enter your employee ID"
                      value={employeeId}
                      onChange={(e) => setEmployeeId(e.target.value)}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Login as Authority
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <Button variant="ghost" onClick={() => navigate("/community")}>
            Explore Community
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
