import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  FileCode2,
  LayoutGrid,
  BookText,
  MessageSquare,
  FolderTree,
  Presentation,
  DollarSign,
  ClipboardList,
  Frame,
  Settings
} from "lucide-react";
import aiIcon from "figma:asset/825f57ba1965160b6b03c77785086278398c9519.png";
import dashboardEvokeroom from "figma:asset/5c2fc9cfafdf1fd30191b1448f1c692dd08e52fe.png";
import dashboardScript from "figma:asset/004a471f61b6e68c0f6a9cfc6afbfdceeb58ed4c.png";
import dashboardDialogueCoach from "figma:asset/f9f6e61de72ca79fe8978fe93bed4788d789102b.png";
import dashboardSceneCards from "figma:asset/b807261bd0529d7c5325409a57ef11ddc57368e3.png";
import dashboardStoryboard from "figma:asset/95fcd3875217e7602e1c298b4480fb06a4ff64b3.png";
import dashboardEvokePick from "figma:asset/17b396031ddcfbac5130e0b8abd7322f3a67cc2a.png";
import dashboardEvokeMuse from "figma:asset/ae0f088c5a27abbbea2201bd43d38ef8e893cf9b.png";
import dashboardBudget from "figma:asset/1c4e617ed4b700ce5bca2c391f4eb1b7796399be.png";
import dashboardCallSheet from "figma:asset/fbc89cc1b1b3b146283e5383609097973b6b8dbe.png";

const dashboardFeatures = [
  {
    id: "evokeroom",
    title: "Evokeroom - Project Hub & Dashboard",
    description: "Complete project overview with progress tracking, budget management, and recent activity feed.",
    image: dashboardEvokeroom,
    icon: FolderTree,
    details: "Your central command center for managing every aspect of your screenplay project. Track General Progress across all stages (Logline, Synopsis, Treatment, Characters, Script, Pitch Deck). Monitor Budget Overview with Total Budget ($1.5M), Above-the-Line ($450), Below-the-Line ($1.1M), and real-time Funding Progress (50% funded - $750/$1.5M). Quick-access action buttons for Continue Writing, Develop Characters, Edit Synopsis, and Pitch Deck. Stay updated with Recent Activity feed showing edits, new characters, and saved synopses with timestamps. All integrated into your project sidebar with Project Development, Story Foundation, Screenplay, Visual Tools, and Production categories."
  },
  {
    id: "script-editor",
    title: "Professional Script Editor",
    description: "Write in industry-standard screenplay format with automatic formatting, scene numbering, and real-time collaboration.",
    image: dashboardScript,
    icon: FileCode2,
    details: "Full-featured screenplay editor with Courier New font, automatic formatting for Scene Headings, Action, Character, and Dialogue. Includes scene navigation (Scene #44), Reports, Index Cards integration, and Evoke AI Assistance toggle."
  },
  {
    id: "dialogue-coach",
    title: "AI Dialogue Coach",
    description: "Intelligent feedback on dialogue pacing, subtext, clichés, and natural conversation flow.",
    image: dashboardDialogueCoach,
    icon: MessageSquare,
    details: "The Sandbox lets you write or paste dialogue, while The AI Coach analyzes it in real-time. Get feedback on Pacing (flowing vs. rushed), Subtext analysis (Rich insights), and Clichés detection. Ensures natural pauses, varied line lengths, and authentic character voices."
  },
  {
    id: "scene-cards",
    title: "Digital Scene Cards",
    description: "Organize scenes visually with templates, color labels, and direct script synchronization.",
    image: dashboardSceneCards,
    icon: LayoutGrid,
    details: "Kanban-style scene organization with story structure templates (like Sergei Eisenstein's Montage Structure). Apply color labels for Thesis, Antithesis, and Synthesis. Sync directly with your script. Track progress with visual indicators."
  },
  {
    id: "storyboard",
    title: "AI-Powered Storyboard",
    description: "Create visual storyboards with AI-generated images from your scene descriptions.",
    image: dashboardStoryboard,
    icon: Frame,
    details: "Transform your screenplay into visual storyboards with AI assistance. Each panel features AI-generated images based on your scene descriptions (ACT 1 - SETUP: Close-up, intimate framing. Mood: Peaceful beginning. Narrative: The ordinary world before the journey). Add detailed notes for framing, mood, and narrative direction. Regenerate any panel with one click to get different visual variations. Organize 6+ panels per board with scene numbers. Perfect for pitch decks, director prep, and visual planning. Export as PDF for sharing with your crew and investors."
  },
  {
    id: "evokepick",
    title: "EvokePick - Pitch Deck Creator",
    description: "Design professional pitch decks with visual editor, AI images, and presentation templates.",
    image: dashboardEvokePick,
    icon: Presentation,
    details: "Create stunning pitch decks with Live Preview mode. Features pre-designed slide templates: Cover, Logline, Notebook, Tone & Style, Visual References, Main Characters, Character Arc, and Director's Vision. Add text, shapes, images, or AI-generated visuals. Complete layer management, formatting tools, and one-click export to present your screenplay to producers and investors."
  },
  {
    id: "evokemuse",
    title: "EvokeMuse - AI Brainstorming",
    description: "AI-powered brainstorming to overcome writer's block and spark creative ideas.",
    image: dashboardEvokeMuse,
    icon: "ai-icon",
    details: "Enter any theme, keyword, or concept and let AI generate creative content instantly. Three powerful modes: Generate Loglines for compelling story hooks, Generate Characters with rich backgrounds and motivations, and Generate 'What If' Scenarios for exploring new narrative directions. Each generation provides multiple unique options to inspire your creativity and break through writer's block."
  },
  {
    id: "budget",
    title: "Project Budget Management",
    description: "Comprehensive financial planning and tracking for your production with AI insights.",
    image: dashboardBudget,
    icon: DollarSign,
    details: "Complete budget management with Total Budget, Total Spent, Remaining funds, and Projected Variance tracking. Visual Budget Breakdown chart with category distribution. AI-powered insights including Warnings (e.g., 'Location costs are 25% over budget'), Suggestions (e.g., 'Reduce shooting schedule by one day'), and Optimizations for cost-saving. Switch between Summary Dashboard, Detailed Worksheet, and Reports & Scenarios views. Perfect for indie filmmakers and production planning."
  },
  {
    id: "call-sheet",
    title: "Call Sheet Generator",
    description: "Generate professional production call sheets with all essential crew and schedule information.",
    image: dashboardCallSheet,
    icon: ClipboardList,
    details: "Create industry-standard call sheets for your production. Includes Production details, Episode info, Day and Call Time, Director/Producer/1st AD/UPM assignments. Automatically populates General Information (Date, Weather, Sunrise/Sunset, Est. Wrap) and Schedule (Shuttle Departures, Meal Times). Scene Breakdown table with Scene #, I/E, Location, D/N, Description, Pages, Cast, and Notes. Export and share with your entire crew for seamless production coordination."
  }
];

const sidebarFeatures = [
  {
    title: "Project Development",
    items: ["Evokeroom", "EvokeMuse"],
    icon: FolderTree
  },
  {
    title: "Story Foundation",
    items: ["Plot", "Synopsis", "Treatment", "Characters"],
    icon: BookText
  },
  {
    title: "Screenplay",
    items: ["Title Page", "Script", "Scene Cards", "Dialogue Coach"],
    icon: FileCode2
  },
  {
    title: "Visual Tools",
    items: ["EvokePick", "Storyboard", "Moodboard", "Film Color Palette", "Film Locations"],
    icon: Presentation
  },
  {
    title: "Production",
    items: ["Call Sheet Generator", "Cast & Characters", "Budget", "Statistics", "Reports", "Marketplace"],
    icon: ClipboardList
  },
  {
    title: "Settings",
    items: ["Team Access", "Language & Theme", "Help & Tutorials"],
    icon: Settings
  }
];

export function DashboardShowcase() {
  return (
    <section id="dashboard" className="py-20 px-6 bg-accent/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-foreground">
            Powerful Dashboard, Intuitive Interface
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hover over each preview to learn more about the features
          </p>
        </motion.div>

        {/* Main Dashboard Previews */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {dashboardFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={index === 0 ? "lg:col-span-2" : ""}
            >
              <HoverCard openDelay={200}>
                <HoverCardTrigger asChild>
                  <div className="cursor-pointer group">
                    <div className="relative rounded-xl overflow-hidden border-2 border-border hover:border-foreground/30 transition-all duration-300 bg-card shadow-lg hover:shadow-2xl">
                      <div className="aspect-video relative overflow-hidden">
                        <img 
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                            {feature.icon === "ai-icon" ? (
                              <img src={aiIcon} alt="AI" className="w-36 h-36" />
                            ) : (
                              <feature.icon className="w-6 h-6 text-foreground" />
                            )}
                          </div>
                          <div>
                            <h3 className="mb-2 text-foreground">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-96" side="top">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        {feature.icon === "ai-icon" ? (
                          <img src={aiIcon} alt="AI" className="w-30 h-30" />
                        ) : (
                          <feature.icon className="w-5 h-5 text-foreground" />
                        )}
                      </div>
                      <div>
                        <h4 className="mb-1 text-foreground">{feature.title}</h4>
                        <p className="text-muted-foreground">{feature.details}</p>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </motion.div>
          ))}
        </div>

        {/* Sidebar Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="mb-2 text-foreground">Complete Workflow Management</h3>
            <p className="text-muted-foreground">Organize every aspect of your screenplay from one sidebar</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sidebarFeatures.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-lg p-6 border border-border hover:border-foreground/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <h4 className="text-foreground">{section.title}</h4>
                </div>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-foreground/50 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <h3 className="mb-4 text-foreground">
              Designed for Maximum Productivity
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every feature is built to enhance your creative flow and streamline your screenwriting process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                name: "Evoke AI Assistance", 
                icon: "ai-icon",
                description: "Intelligent writing suggestions and creative brainstorming powered by AI"
              },
              { 
                name: "Auto-Save", 
                icon: FileCode2,
                description: "Never lose your work with automatic cloud synchronization"
              },
              { 
                name: "Multiple Export Formats", 
                icon: BookText,
                description: "Export to PDF, Final Draft, Fountain, and industry-standard formats"
              },
              { 
                name: "Real-time Sync", 
                icon: LayoutGrid,
                description: "Seamlessly collaborate with your team across all devices"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border hover:border-foreground/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon === "ai-icon" ? (
                      <img src={aiIcon} alt="AI" className="w-12 h-12" />
                    ) : (
                      <feature.icon className="w-8 h-8 text-foreground" />
                    )}
                  </div>
                  <h4 className="mb-2 text-foreground">{feature.name}</h4>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
