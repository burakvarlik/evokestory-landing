import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Play, Clock, Award } from "lucide-react";
import { Footer } from "./Footer";
import { useNavigate } from "react-router-dom";

const tutorialSteps = [
  {
    id: 1,
    step: "Step 1",
    title: "EvokeMuse - AI-Powered Inspiration Hub",
    category: "IDEATION",
    description: "Discover EvokeMuse, your creative companion. Learn how to generate loglines, explore story concepts, and refine your ideas with AI assistance. Transform a simple concept into a compelling narrative foundation.",
    videoTitle: "Getting Started with EvokeMuse",
    duration: "4 Minutes",
    level: "Beginner",
    tags: ["Beginner", "AI Tools", "Ideation"],
    imagePosition: "left"
  },
  {
    id: 2,
    step: "Step 2",
    title: "Character Creation & Casting Dashboard",
    category: "CHARACTER DEVELOPMENT",
    description: "Build memorable characters from the ground up. Learn to use the Character Creator with AI-powered development tools. Explore the Casting Dashboard to visualize your characters and manage character relationships with intelligent suggestions.",
    videoTitle: "Character Development with AI",
    duration: "6 Minutes",
    level: "Beginner",
    tags: ["Character", "AI Tools", "Casting"],
    imagePosition: "right"
  },
  {
    id: 3,
    step: "Step 3",
    title: "Plot Timeline, Synopsis & Treatment",
    category: "STORY STRUCTURE",
    description: "Master the art of story planning. Use Plot Timeline to structure your narrative with proven frameworks (Three-Act, Hero's Journey, Save the Cat). Create professional synopsis and treatment documents with AI-powered guidance to pitch your story effectively.",
    videoTitle: "Building Your Story Foundation",
    duration: "8 Minutes",
    level: "Intermediate",
    tags: ["Structure", "Plot", "Treatment"],
    imagePosition: "left"
  },
  {
    id: 4,
    step: "Step 4",
    title: "Title Page & Script Editor",
    category: "SCREENPLAY WRITING",
    description: "Start writing in industry-standard format. Learn how to create a professional title page and use the Script Editor with automatic formatting. Discover AI features for scene headings, action lines, and dialogue. Export your screenplay in PDF or Word format.",
    videoTitle: "Professional Script Writing",
    duration: "7 Minutes",
    level: "Intermediate",
    tags: ["Editor", "Writing", "AI Tools"],
    imagePosition: "right"
  },
  {
    id: 5,
    step: "Step 5",
    title: "Scene Cards - Visual Story Planning",
    category: "SCENE ORGANIZATION",
    description: "Organize your screenplay visually with digital Scene Cards. Learn to create, arrange, and color-code scenes on a virtual corkboard. Get instant AI analysis from master theorists like Aristotle, Syd Field, and Campbell. Sync cards directly with your script.",
    videoTitle: "Scene Cards & Theorist Analysis",
    duration: "6 Minutes",
    level: "Intermediate",
    tags: ["Structure", "Scene Cards", "AI Analysis"],
    imagePosition: "left"
  },
  {
    id: 6,
    step: "Step 6",
    title: "Dialogue Coach - AI-Powered Writing Assistant",
    category: "DIALOGUE MASTERY",
    description: "Elevate your dialogue with intelligent feedback. Use the Dialogue Coach to analyze pacing, detect subtext, identify clichés, and ensure natural conversation flow. Get real-time suggestions to make your characters' voices authentic and compelling.",
    videoTitle: "Mastering Dialogue with AI",
    duration: "5 Minutes",
    level: "Advanced",
    tags: ["Dialogue", "AI Coach", "Writing"],
    imagePosition: "right"
  },
  {
    id: 7,
    step: "Step 7",
    title: "Visual Tools Suite",
    category: "VISUAL DEVELOPMENT",
    description: "Bring your screenplay to visual life. Explore Storyboard creation for shot planning, Moodboard for visual inspiration, Film Color Palette to define your movie's aesthetic, and Location scouting tools. Create a comprehensive visual guide for your production.",
    videoTitle: "Visual Planning & Pre-Production",
    duration: "9 Minutes",
    level: "Advanced",
    tags: ["Storyboard", "Moodboard", "Visual", "Pre-Production"],
    imagePosition: "left"
  },
  {
    id: 8,
    step: "Step 8",
    title: "EvokePick - Professional Pitch Deck",
    category: "PITCHING",
    description: "Create stunning pitch decks to sell your screenplay. Learn to use EvokePick to design professional presentations with AI-generated insights, compelling visuals, and persuasive storytelling. Perfect for pitching to producers, studios, and investors.",
    videoTitle: "Building Your Pitch Deck",
    duration: "7 Minutes",
    level: "Advanced",
    tags: ["Pitch Deck", "Marketing", "Professional"],
    imagePosition: "right"
  },
  {
    id: 9,
    step: "Step 9",
    title: "Budget & Call Sheet Generator",
    category: "PRODUCTION PLANNING",
    description: "Move from screenplay to production. Master the Budget tool to plan your project finances with detailed breakdowns. Use the Call Sheet Generator to create professional daily schedules for your cast and crew. Streamline your production workflow.",
    videoTitle: "Production Management Tools",
    duration: "8 Minutes",
    level: "Professional",
    tags: ["Budget", "Call Sheet", "Production"],
    imagePosition: "left"
  }
];

export function Academy() {
  const navigate = useNavigate();
  
  const scrollToFirstStep = () => {
    document.getElementById("tutorial-steps")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6 text-foreground">
              From Idea to Screen: Master Evokestory.
            </h1>
            <p className="text-muted-foreground mb-8 max-w-xl">
              Unlock the full potential of AI-powered screenwriting. The Academy is here to guide your creative journey, from your first logline to your final production plan.
            </p>
            <Button 
              size="lg"
              onClick={scrollToFirstStep}
              className="bg-foreground text-background hover:bg-foreground/90"
            >
              View Complete Guide
            </Button>
          </motion.div>

          {/* Right Side - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl border border-border bg-accent/50 p-8 min-h-[400px] flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-foreground rounded-2xl flex items-center justify-center mx-auto">
                  <Play className="w-10 h-10 text-background" />
                </div>
                <h3 className="text-foreground">Your Creative Journey Starts Here</h3>
                <p className="text-muted-foreground">
                  9 comprehensive tutorials covering every aspect of screenwriting
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Creative Flow - Tutorial Steps */}
      <section id="tutorial-steps" className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-foreground">The Creative Flow</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Follow the professional workflow of screenwriting, from concept to production
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-24">
          {tutorialSteps.map((tutorial, index) => (
            <motion.div
              key={tutorial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`grid lg:grid-cols-2 gap-0 ${tutorial.imagePosition === "right" ? "lg:grid-flow-dense" : ""}`}>
                  {/* Video Thumbnail */}
                  <div 
                    className={`relative bg-accent/50 min-h-[300px] lg:min-h-[400px] flex items-center justify-center group cursor-pointer ${tutorial.imagePosition === "right" ? "lg:col-start-2" : ""}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-foreground/10" />
                    <div className="relative z-10 text-center">
                      <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-background ml-1" />
                      </div>
                      <Badge variant="secondary" className="mb-2">
                        {tutorial.category}
                      </Badge>
                      <p className="text-muted-foreground">Click to watch tutorial</p>
                    </div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Badge variant="outline" className="bg-background/80 backdrop-blur">
                        <Clock className="w-3 h-3 mr-1" />
                        {tutorial.duration}
                      </Badge>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className={`p-8 lg:p-12 flex flex-col justify-center ${tutorial.imagePosition === "right" ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                    <div className="mb-4">
                      <Badge className="mb-2 bg-foreground text-background">
                        {tutorial.step}
                      </Badge>
                    </div>
                    <h3 className="mb-4 text-foreground">
                      {tutorial.title}
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="mb-2 text-foreground">
                          {tutorial.videoTitle}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {tutorial.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {tutorial.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                        <Badge variant="outline">
                          {tutorial.duration}
                        </Badge>
                      </div>

                      <Button className="w-full sm:w-auto mt-4">
                        <Play className="w-4 h-4 mr-2" />
                        Watch Tutorial
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-12 text-center bg-accent/50">
            <div className="max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-foreground rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-background" />
              </div>
              <h2 className="mb-4 text-foreground">
                Ready to Create Your Masterpiece?
              </h2>
              <p className="text-muted-foreground mb-8">
                Apply what you've learned and start writing your screenplay today.
              </p>
              <Button 
                size="lg" 
                onClick={() => navigate("/auth")}
                className="bg-foreground text-background hover:bg-foreground/90"
              >
                Start Your Free Trial
              </Button>
            </div>
          </Card>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
