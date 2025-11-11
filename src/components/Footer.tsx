import image_bcd52ef29b30d4e6c1a10271b8f5e55e0d5fefa3 from 'figma:asset/bcd52ef29b30d4e6c1a10271b8f5e55e0d5fefa3.png';
import { Twitter, Linkedin, Github, Mail } from "lucide-react";
import logo from "figma:asset/90e551d6f91867436dd424adca92a2d3866ac28f.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground dark:bg-background text-background dark:text-foreground py-12 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img 
                src={image_bcd52ef29b30d4e6c1a10271b8f5e55e0d5fefa3} 
                alt="Evokestory.ai" 
                className="h-32 w-auto px-[0px] py-[-50px]"
              />
            </div>
            <p className="text-background/70 dark:text-foreground/70 text-center">
              AI-powered screenwriting software for the next generation of storytellers.
            </p>
          </div>

          <div>
            <h4 className="mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-background/70 dark:text-foreground/70 hover:text-background dark:hover:text-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-background/70 dark:text-foreground/70 hover:text-background dark:hover:text-foreground transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#dashboard" className="text-background/70 dark:text-foreground/70 hover:text-background dark:hover:text-foreground transition-colors">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 dark:text-foreground/70 hover:text-background dark:hover:text-foreground transition-colors">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-background/70 dark:text-foreground/70 hover:text-background dark:hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 dark:text-foreground/70 hover:text-background dark:hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 dark:text-foreground/70 hover:text-background dark:hover:text-foreground transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 dark:text-foreground/70 hover:text-background dark:hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-background/70 dark:text-foreground/70 hover:text-background dark:hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 dark:text-foreground/70 hover:text-background dark:hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 dark:text-foreground/70 hover:text-background dark:hover:text-foreground transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 dark:border-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/70 dark:text-foreground/70">
            © {currentYear} Evokestory.ai. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-background/70 dark:text-foreground/70 hover:text-background dark:hover:text-foreground transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-background/70 dark:text-foreground/70 hover:text-background dark:hover:text-foreground transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-background/70 dark:text-foreground/70 hover:text-background dark:hover:text-foreground transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-background/70 dark:text-foreground/70 hover:text-background dark:hover:text-foreground transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
