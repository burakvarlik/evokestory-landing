import { Card } from "./ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { 
  FileCode2, 
  LayoutGrid, 
  Users, 
  BookText, 
  Lightbulb,
  MessageSquare,
  DollarSign,
  Presentation,
  ClipboardList,
  Droplet,
  MapPin,
  ShoppingBag,
  GitBranch
} from "lucide-react";
import { motion } from "motion/react";
import aiIcon from "figma:asset/825f57ba1965160b6b03c77785086278398c9519.png";

const features = [
  {
    icon: FileCode2,
    title: "Professional Script Editor",
    description: "Industry-standard screenplay formatting with Courier font and automatic scene numbering.",
    hoverContent: "Write in professional screenplay format with automatic formatting. Includes element types (Scene Headings, Action, Character, Dialogue), scene navigation, and real-time formatting as you type. Full screenplay editor with Index Cards integration.",
    gifPlaceholder: "Professional screenplay editor interface"
  },
  {
    icon: MessageSquare,
    title: "AI Dialogue Coach",
    description: "Get intelligent feedback on dialogue pacing, subtext, and natural flow.",
    hoverContent: "The Sandbox lets you write or paste dialogue, while The AI Coach analyzes it in real-time. Get feedback on Pacing (flowing vs. rushed), Subtext analysis for deeper meaning, and Clichés detection. Ensures natural pauses, varied line lengths, and authentic character voices.",
    gifPlaceholder: "Dialogue Coach analysis interface"
  },
  {
    icon: LayoutGrid,
    title: "Digital Scene Cards",
    description: "Visualize and organize scenes with a digital corkboard interface.",
    hoverContent: "Organize scenes visually with our digital corkboard. Apply story structure templates like Sergei Eisenstein's Montage Structure. Use color labels (Thesis, Antithesis, Synthesis) and sync directly with your script. Track progress and rearrange scenes with drag-and-drop.",
    gifPlaceholder: "Scene cards corkboard view"
  },
  {
    icon: GitBranch,
    title: "Plot Timeline",
    description: "Build your story structure with professional screenplay framework templates.",
    hoverContent: "Create your story skeleton using proven screenplay theory templates from master theorists. Choose from frameworks like the Three-Act Structure, Hero's Journey, Save the Cat, Syd Field's Paradigm, and more. Visual timeline shows key plot points, character arcs, and story beats. Drag and drop to rearrange story elements. Perfect for planning your narrative before diving into the screenplay. Each template provides guidance on beat placement and story progression.",
    gifPlaceholder: "Plot Timeline structure builder"
  },
  {
    icon: Users,
    title: "Character Development",
    description: "Build rich character profiles and track their development throughout the story.",
    hoverContent: "Create detailed character profiles with backstory, motivations, and arcs. Track character appearances and development across your screenplay. AI helps ensure character consistency and realistic dialogue.",
    gifPlaceholder: "Character development interface"
  },
  {
    icon: "ai-icon",
    title: "EvokeMuse - AI Brainstorming",
    description: "AI-powered brainstorming to overcome writer's block with creative ideas.",
    hoverContent: "Enter a theme, keyword, or concept and generate creative content instantly. Generate compelling loglines, develop rich characters, or explore 'What If' scenarios. Perfect for breaking through writer's block and exploring new story directions. Each generation provides multiple unique options to spark your creativity.",
    gifPlaceholder: "EvokeMuse brainstorming interface"
  },
  {
    icon: DollarSign,
    title: "Project Budget Management",
    description: "Comprehensive financial planning and tracking for your production.",
    hoverContent: "Track Total Budget, Total Spent, Remaining funds, and Projected Variance. Visual budget breakdown with detailed categories. AI-powered insights including warnings for overspending, suggestions for optimization, and cost-saving recommendations. Perfect for indie filmmakers and production planning.",
    gifPlaceholder: "Project Budget dashboard"
  },
  {
    icon: Presentation,
    title: "EvokePick - Pitch Deck Creator",
    description: "Design stunning pitch decks with AI-powered visual editor and templates.",
    hoverContent: "Create professional pitch decks with Live Preview mode. Includes pre-designed slides: Cover, Logline, Notebook, Tone & Style, Visual References, Main Characters, Character Arc, and Director's Vision. Add text, shapes, images, or AI-generated images. Full layer management and export capabilities. Perfect for presenting your screenplay to producers and investors.",
    gifPlaceholder: "EvokePick pitch deck editor"
  },
  {
    icon: Droplet,
    title: "Film Color Palette",
    description: "Design cinematic color schemes and maintain visual consistency.",
    hoverContent: "Create and manage color palettes for your film's visual identity. Extract colors from reference images, generate harmonious color schemes, and ensure consistency across scenes. Perfect for collaborating with cinematographers and production designers to establish your film's unique visual language.",
    gifPlaceholder: "Film Color Palette generator"
  },
  {
    icon: MapPin,
    title: "Film Locations",
    description: "Organize and manage all filming locations with details and references.",
    hoverContent: "Comprehensive location management system. Track location details, contact information, permits, and logistics. Upload reference photos, add notes about technical requirements, and coordinate with your location scout. Plan shooting schedules based on location availability and optimize production logistics.",
    gifPlaceholder: "Film Locations manager"
  },
  {
    icon: ClipboardList,
    title: "Call Sheet Generator",
    description: "Generate professional production call sheets with crew and schedule details.",
    hoverContent: "Create industry-standard call sheets for your production. Includes Production info, Episode, Day and Call Time, Director/Producer/1st AD/UPM assignments. Auto-populates General Information (Date, Weather, Sunrise/Sunset, Est. Wrap) and Schedule (Shuttle Departures, Meal Times). Complete Scene Breakdown table with all essential details. Export and share with your entire crew for seamless production coordination.",
    gifPlaceholder: "Call Sheet generator interface"
  },
  {
    icon: Users,
    title: "Cast & Characters Management",
    description: "Comprehensive cast tracking and character breakdown for production planning.",
    hoverContent: "Manage your cast members, track character assignments, and generate detailed character breakdowns. Monitor availability, contact information, and scheduling. Perfect for coordinating large casts and ensuring production continuity.",
    gifPlaceholder: "Cast management interface"
  },
  {
    icon: ShoppingBag,
    title: "Marketplace",
    description: "Professional platform to sell and license your screenplay projects.",
    hoverContent: "List your completed screenplays, treatments, and story concepts on the Evokestory.ai Marketplace. Set your pricing, manage licensing options, and connect directly with producers, studios, and fellow creators. Track views, inquiries, and sales analytics. Secure payment processing and contract templates included. Transform your creative work into opportunities with our professional marketplace designed specifically for screenwriters.",
    gifPlaceholder: "Marketplace listing interface"
  },
  {
    icon: DollarSign,
    title: "Budget Tracking",
    description: "Real-time budget management with AI insights and variance tracking.",
    hoverContent: "Complete financial control with Total Budget, Total Spent, Remaining funds, and Projected Variance tracking. Visual Budget Breakdown with category distribution. AI-powered Warnings, Suggestions, and Optimizations for cost-saving. Switch between Summary Dashboard, Detailed Worksheet, and Reports views.",
    gifPlaceholder: "Budget dashboard interface"
  },
  {
    icon: LayoutGrid,
    title: "Production Statistics",
    description: "Visual analytics and progress tracking for your entire production.",
    hoverContent: "Track production progress with comprehensive statistics and visual charts. Monitor shooting days, scene completion rates, budget utilization, and timeline adherence. Data-driven insights to keep your production on schedule and under budget.",
    gifPlaceholder: "Statistics dashboard"
  },
  {
    icon: BookText,
    title: "Production Reports",
    description: "Generate detailed reports for Scenes, Cast, and Locations.",
    hoverContent: "Professional production reports including Scene Breakdowns with timing and requirements, Cast Reports with availability and scheduling, and Location Reports with logistics and permits. Export reports in multiple formats for your production team.",
    gifPlaceholder: "Production reports interface"
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-foreground">
            Everything You Need to Write Professional Screenplays
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hover over each feature to see how it works in the dashboard
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <HoverCard openDelay={200}>
                <HoverCardTrigger>
                  <div>
                    <Card className="p-5 h-full cursor-pointer hover:shadow-xl hover:border-foreground/20 transition-all duration-300 hover:-translate-y-1 bg-card">
                      <div className="w-11 h-11 bg-accent rounded-lg flex items-center justify-center mb-3">
                        {feature.icon === "ai-icon" ? (
                          <img src={aiIcon} alt="AI" className="w-30 h-30" />
                        ) : (
                          <feature.icon className="w-5 h-5 text-foreground" />
                        )}
                      </div>
                      <h3 className="mb-2 text-foreground">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm leading-snug">{feature.description}</p>
                    </Card>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80" side="top">
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
                        <p className="text-muted-foreground">{feature.hoverContent}</p>
                      </div>
                    </div>
                    <div className="bg-accent rounded-lg p-4 border border-border">
                      <div className="flex items-center justify-center h-32 bg-muted rounded">
                        <p className="text-muted-foreground text-center">[Preview: {feature.gifPlaceholder}]</p>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
