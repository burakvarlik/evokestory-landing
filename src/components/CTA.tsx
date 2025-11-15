import { Button } from "./ui/button";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

export function CTA() {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-6 bg-foreground">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-background">
            Ready to Write Your Masterpiece?
          </h2>
          <p className="mb-8 text-background/80 max-w-2xl mx-auto">
            Join thousands of screenwriters who are already using Evokestory.ai to bring their stories to life.
            Start for free, no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-background text-foreground hover:bg-background/90 group"
              onClick={() => window.location.href = 'https://evokestory-app.vercel.app'}
            >
              Start Writing for Free
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              "Free forever plan",
              "No credit card required",
              "Cancel anytime"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 text-background"
              >
                <div className="w-6 h-6 bg-background/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
