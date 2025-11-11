import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card } from "./ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Evokestory.ai has revolutionized our screenplay development process. The AI-powered tools save us weeks of work.",
    author: "Sarah Mitchell",
    role: "Head of Development",
    company: "Skyline Productions",
    logo: "https://images.unsplash.com/photo-1612544409025-e1f6a56c1152?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMGNvbXBhbnl8ZW58MXx8fHwxNzYyNjIyODkzfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    quote: "The budget management and call sheet features are game-changers. We're more organized than ever.",
    author: "Michael Chen",
    role: "Executive Producer",
    company: "Horizon Studios",
    logo: "https://images.unsplash.com/photo-1667840606426-367750aa381d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJuZXIlMjBicm9zJTIwbG9nb3xlbnwxfHx8fDE3NjI2MjI4OTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    quote: "EvokeMuse helped us break through writer's block on multiple projects. The AI understands story structure perfectly.",
    author: "Jennifer Rodriguez",
    role: "Creative Director",
    company: "Summit Entertainment",
    logo: "https://images.unsplash.com/photo-1662467150566-f3f12de2ee57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJhbW91bnQlMjBwaWN0dXJlcyUyMGxvZ298ZW58MXx8fHwxNzYyNjIyODkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    quote: "The pitch deck creator is phenomenal. We've secured funding faster than ever with professional presentations.",
    author: "David Park",
    role: "Senior Producer",
    company: "Atlas Pictures",
    logo: "https://images.unsplash.com/photo-1581863575451-b8ba94788958?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzYWwlMjBzdHVkaW9zJTIwbG9nb3xlbnwxfHx8fDE3NjI2MjI4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

const trustedCompanies = [
  { name: "Warner Bros", logo: "https://images.unsplash.com/photo-1723815264281-731a4d8ab658?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJuZXIlMjBicm9zJTIwbG9nbyUyMHdoaXRlfGVufDF8fHx8MTc2MjYyMzg1OHww&ixlib=rb-4.1.0&q=80&w=1080" },
  { name: "Disney", logo: "https://images.unsplash.com/photo-1463109598173-3864231fade5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXNuZXklMjBsb2dvJTIwd2hpdGV8ZW58MXx8fHwxNzYyNjIzODU4fDA&ixlib=rb-4.1.0&q=80&w=1080" },
  { name: "Netflix", logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXRmbGl4JTIwbG9nb3xlbnwxfHx8fDE3NjI1NTI3MjR8MA&ixlib=rb-4.1.0&q=80&w=1080" },
  { name: "Universal Pictures", logo: "https://images.unsplash.com/photo-1755445477542-649565d2c985?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzYWwlMjBwaWN0dXJlcyUyMGxvZ298ZW58MXx8fHwxNzYyNjIzODU5fDA&ixlib=rb-4.1.0&q=80&w=1080" },
  { name: "Paramount Pictures", logo: "https://images.unsplash.com/photo-1662467150566-f3f12de2ee57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJhbW91bnQlMjBsb2dvfGVufDF8fHx8MTc2MjYyMzg2MHww&ixlib=rb-4.1.0&q=80&w=1080" },
  { name: "Sony Pictures", logo: "https://images.unsplash.com/photo-1662948261149-3f0a0ab0181b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb255JTIwcGljdHVyZXMlMjBsb2dvfGVufDF8fHx8MTc2MjYyMzg2MHww&ixlib=rb-4.1.0&q=80&w=1080" }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-foreground">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From independent filmmakers to major production companies, creative professionals trust Evokestory.ai
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-8 h-full hover:shadow-lg transition-shadow duration-300 border-border hover:border-foreground/30">
                <Quote className="w-10 h-10 text-foreground/20 mb-4" />
                <blockquote className="mb-6">
                  <p className="text-foreground mb-6">"{testimonial.quote}"</p>
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-accent flex-shrink-0">
                    <ImageWithFallback
                      src={testimonial.logo}
                      alt={testimonial.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-foreground">{testimonial.author}</div>
                    <div className="text-muted-foreground">{testimonial.role}</div>
                    <div className="text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-border pt-12"
        >
          <p className="text-center text-muted-foreground mb-8">
            Powering creativity at leading production companies
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {trustedCompanies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <div className="w-full h-20 flex items-center justify-center p-4">
                  <ImageWithFallback
                    src={company.logo}
                    alt={company.name}
                    className="max-w-full max-h-full object-contain filter brightness-0 dark:brightness-100 dark:invert"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
