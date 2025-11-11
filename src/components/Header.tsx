import { Button } from "./ui/button";
import { Menu, Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "./ThemeProvider";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";
import logo from "figma:asset/c80501a5f69fd6df3d6b27b262c7da295d871dd2.png";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionClick = (sectionId: string) => {
    if (location.pathname !== "/") {
      // Eğer ana sayfada değilsek, önce ana sayfaya git
      navigate("/");
      // Scroll işlemini bir miktar geciktir ki sayfa yüklensin
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      // Ana sayfadaysak direkt scroll yap
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-6 py-6 px-[24px] py-[10px]">
        <div className="flex items-center justify-between mx-[0px] my-[-100px] px-[0px] py-[-40px]">
          <a href="/" onClick={handleLogoClick} className="flex items-center cursor-pointer">
            <img 
              src={logo} 
              alt="Evokestory.ai" 
              className="h-72 w-auto dark:invert"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8 text-base">
            <button 
              onClick={() => handleSectionClick("features")}
              className="text-muted-foreground hover:text-foreground transition-colors bg-transparent border-0 cursor-pointer"
            >
              Features
            </button>
            <button 
              onClick={() => handleSectionClick("pricing")}
              className="text-muted-foreground hover:text-foreground transition-colors bg-transparent border-0 cursor-pointer"
            >
              Pricing
            </button>
            <button 
              onClick={() => navigate("/marketplace")}
              className="text-muted-foreground hover:text-foreground transition-colors bg-transparent border-0 cursor-pointer"
            >
              Marketplace
            </button>
            <button 
              onClick={() => navigate("/academy")}
              className="text-muted-foreground hover:text-foreground transition-colors bg-transparent border-0 cursor-pointer"
            >
              Academy
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-accent"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </Button>
            {isAuthenticated ? (
              <Button 
                className="bg-foreground text-background hover:bg-foreground/90"
                onClick={() => navigate("/dashboard")}
              >
                Dashboard
              </Button>
            ) : (
              <>
                <Button 
                  variant="ghost" 
                  className="hidden md:inline-flex text-lg"
                  onClick={() => navigate("/auth")}
                >
                  Sign In
                </Button>
                <Button 
                  className="bg-foreground text-background hover:bg-foreground/90"
                  onClick={() => navigate("/auth")}
                >
                  Get Started
                </Button>
              </>
            )}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
