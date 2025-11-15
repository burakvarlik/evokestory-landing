import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import aiIcon from "figma:asset/825f57ba1965160b6b03c77785086278398c9519.png";

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="pt-32 pb-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center px-[0px] py-[-50px]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-foreground text-6xl md:text-7xl lg:text-8xl leading-tight"
          >
            Write Your Story with
            <br />
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Artificial Intelligence
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-muted-foreground max-w-2xl mx-auto text-xl md:text-2xl"
          >
            Evokestory.ai combines the power of AI with professional screenwriting tools
            to help you craft compelling narratives, develop rich characters, and format
            your scripts perfectly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="bg-foreground text-background hover:bg-foreground/90 group"
              onClick={() => window.location.href = 'https://evokestory-app.vercel.app'}
            >
              Start Writing for Free
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-accent">
              Watch Demo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl border border-border">
              <div className="bg-accent/50 p-8 min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-foreground rounded-lg flex items-center justify-center mx-auto mb-4">
                    <img src={aiIcon} alt="AI" className="w-48 h-48 invert" />
                  </div>
                  <p className="text-muted-foreground">Dashboard Preview</p>
                  <p className="text-muted-foreground/60">Hover over features below to see it in action</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
