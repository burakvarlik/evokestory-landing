import { useState } from "react";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Separator } from "./ui/separator";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuth } from "./AuthContext";
import { supabase } from "../supabaseClient";
import aiIcon from "figma:asset/825f57ba1965160b6b03c77785086278398c9519.png";

export function Auth() {
  const navigate = useNavigate();
  const { login: authLogin, signup: authSignup } = useAuth();
  const [activeTab, setActiveTab] = useState("signup");
  const [isLoading, setIsLoading] = useState(false);
  
  // Sign Up form state
  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    password: "",
    termsAccepted: false
  });

  // Login form state
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  // Handle Sign Up
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!signupForm.name || !signupForm.email || !signupForm.password) {
      toast.error("Please fill in all fields");
      return;
    }

    if (!signupForm.termsAccepted) {
      toast.error("Please accept the Terms of Service and Privacy Policy");
      return;
    }

    if (signupForm.password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }

    setIsLoading(true);
    
    try {
      await authSignup(signupForm.name, signupForm.email, signupForm.password);
  toast.success("Account created successfully! Welcome to Evokestory.ai");
  window.location.href = "https://evokestory-7mw5eoskc-evokestory.vercel.app";
    } catch (error) {
      toast.error("Failed to create account. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!loginForm.email || !loginForm.password) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    
    try {
      await authLogin(loginForm.email, loginForm.password);
    toast.success("Welcome back! Logging you in...");
  window.location.href = "https://evokestory-7mw5eoskc-evokestory.vercel.app";
    } catch (error) {
      toast.error("Failed to login. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Google OAuth
  const handleGoogleAuth = async () => {
    setIsLoading(true);
    toast.info("Redirecting to Google...");
    try {
      const { error } = await supabase.auth.signInWithOAuth({
  provider: 'google',
  options: { redirectTo: 'https://evokestory-7mw5eoskc-evokestory.vercel.app' }
      });
      if (error) throw error;
    } catch (error: any) {
      toast.error(error.message || 'Google sign-in failed');
      setIsLoading(false);
    }
  };

  // Handle Apple OAuth
  const handleAppleAuth = async () => {
    setIsLoading(true);
    toast.info("Redirecting to Apple...");
    try {
      const { error } = await supabase.auth.signInWithOAuth({
  provider: 'apple',
  options: { redirectTo: 'https://evokestory-7mw5eoskc-evokestory.vercel.app' }
      });
      if (error) throw error;
    } catch (error: any) {
      toast.error(error.message || 'Apple sign-in failed');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 -ml-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img src={aiIcon} alt="AI" className="w-48 h-48" />
            <h1 className="text-foreground">Evokestory.ai</h1>
          </div>
          <p className="text-muted-foreground">
            {activeTab === "signup" 
              ? "Start your screenwriting journey today" 
              : "Welcome back to your creative workspace"}
          </p>
        </div>

        <Card className="p-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
              <TabsTrigger value="login">Login</TabsTrigger>
            </TabsList>

            <TabsContent value="signup" className="space-y-4">
              <form onSubmit={handleSignUp} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-name">Full Name</Label>
                  <Input 
                    id="signup-name" 
                    placeholder="John Doe" 
                    type="text"
                    value={signupForm.name}
                    onChange={(e) => setSignupForm({ ...signupForm, name: e.target.value })}
                    disabled={isLoading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input 
                    id="signup-email" 
                    placeholder="you@example.com" 
                    type="email"
                    value={signupForm.email}
                    onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
                    disabled={isLoading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input 
                    id="signup-password" 
                    placeholder="Create a strong password (min. 8 characters)" 
                    type="password"
                    value={signupForm.password}
                    onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })}
                    disabled={isLoading}
                  />
                </div>

                <div className="flex items-center space-x-2 pt-2">
                  <Checkbox 
                    id="terms"
                    checked={signupForm.termsAccepted}
                    onCheckedChange={(checked) => 
                      setSignupForm({ ...signupForm, termsAccepted: checked as boolean })
                    }
                    disabled={isLoading}
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the{" "}
                    <a href="#" className="text-foreground hover:underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-foreground hover:underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <Button className="w-full mt-6" size="lg" type="submit" disabled={isLoading}>
                  {isLoading ? "Creating Account..." : "Create Account"}
                </Button>
              </form>

              <div className="relative my-6">
                <Separator />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-sm text-muted-foreground">
                  or continue with
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button 
                  variant="outline" 
                  className="w-full" 
                  type="button"
                  onClick={handleGoogleAuth}
                  disabled={isLoading}
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Google
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  type="button"
                  onClick={handleAppleAuth}
                  disabled={isLoading}
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  Apple
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="login" className="space-y-4">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email">Email</Label>
                  <Input 
                    id="login-email" 
                    placeholder="you@example.com" 
                    type="email"
                    value={loginForm.email}
                    onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                    disabled={isLoading}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="login-password">Password</Label>
                    <a 
                      href="#" 
                      className="text-sm text-muted-foreground hover:text-foreground"
                      onClick={(e) => {
                        e.preventDefault();
                        toast.info("Password reset link sent to your email");
                      }}
                    >
                      Forgot password?
                    </a>
                  </div>
                  <Input 
                    id="login-password" 
                    placeholder="Enter your password" 
                    type="password"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                    disabled={isLoading}
                  />
                </div>

                <div className="flex items-center space-x-2 pt-2">
                  <Checkbox 
                    id="remember"
                    checked={loginForm.rememberMe}
                    onCheckedChange={(checked) => 
                      setLoginForm({ ...loginForm, rememberMe: checked as boolean })
                    }
                    disabled={isLoading}
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remember me for 30 days
                  </label>
                </div>

                <Button className="w-full mt-6" size="lg" type="submit" disabled={isLoading}>
                  {isLoading ? "Signing In..." : "Sign In"}
                </Button>
              </form>

              <div className="relative my-6">
                <Separator />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-sm text-muted-foreground">
                  or continue with
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button 
                  variant="outline" 
                  className="w-full"
                  type="button"
                  onClick={handleGoogleAuth}
                  disabled={isLoading}
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Google
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  type="button"
                  onClick={handleAppleAuth}
                  disabled={isLoading}
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  Apple
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-6">
          By signing up, you agree to our Terms of Service and Privacy Policy
        </p>
      </motion.div>
    </div>
  );
}
