import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Check } from "lucide-react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const pricingPlans = [
  {
    name: "Starter",
    price: "$9.99",
    period: "per month",
    description: "Perfect for individual writers getting started",
    features: [
      "1 active project",
      "500 AI tokens/month",
      "Basic AI features (EvokeMuse, Dialogue Coach)",
      "Full Screenplay Tools (Script Editor, Scene Cards)",
      "Story Foundation (Plot, Synopsis, Characters)",
      "Limited visual generation (EvokePick)",
      "Standard export (PDF)",
      "Community support"
    ],
    cta: "Start Now",
    highlighted: false
  },
  {
    name: "Professional",
    price: "$29",
    period: "per month",
    description: "For serious screenwriters and filmmakers",
    features: [
      "10 active projects",
      "2,500 AI tokens/month",
      "All AI features unlocked",
      "Advanced Visual Tools (Storyboard, Moodboard, Film Color Palette, Film Locations)",
      "Production Management (Budget, Call Sheet, Statistics)",
      "EvokePick unlimited image generation",
      "Collaboration tools",
      "Multiple export formats",
      "Priority support"
    ],
    cta: "Get Started",
    highlighted: true
  },
  {
    name: "Studio",
    price: "$49",
    period: "per month",
    description: "For production companies and creative teams",
    features: [
      "Unlimited projects",
      "Unlimited AI tokens",
      "Everything in Professional",
      "Team collaboration (up to 10 users)",
      "Advanced Production Reports",
      "Priority AI processing",
      "API access",
      "Custom AI model training",
      "Dedicated account manager",
      "Custom integrations"
    ],
    cta: "Contact Sales",
    highlighted: false
  }
];

export function Pricing() {
  const navigate = useNavigate();

  return (
    <section id="pricing" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-foreground"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Choose the perfect plan for your screenwriting needs. All plans include core features.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className={`p-8 h-full flex flex-col ${
                  plan.highlighted
                    ? "border-foreground shadow-lg scale-105"
                    : "border-border"
                }`}
              >
                {plan.highlighted && (
                  <div className="bg-foreground text-background px-3 py-1 rounded-full text-sm w-fit mb-4">
                    Most Popular
                  </div>
                )}
                
                <h3 className="mb-2 text-foreground">{plan.name}</h3>
                
                <div className="mb-4">
                  <span className="text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
                
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  className={
                    plan.highlighted
                      ? "w-full bg-foreground text-background hover:bg-foreground/90"
                      : "w-full border-border hover:bg-accent"
                  }
                  variant={plan.highlighted ? "default" : "outline"}
                  onClick={() => navigate("/auth")}
                >
                  {plan.cta}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
