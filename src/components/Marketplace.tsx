import { motion } from "motion/react";
import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Input } from "./ui/input";
import { 
  Lock, 
  DollarSign, 
  ShoppingCart,
  Mail,
  Upload,
  Store
} from "lucide-react";
import { Footer } from "./Footer";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

// The Vault Projects - 13 exclusive projects
const vaultProjects = [
  {
    id: "001",
    title: "Digital Ghosts",
    owner: "Marcus Chen",
    genre: "SCI-FI",
    format: "Feature Film",
    logline: "When an AI begins to steal its creator's memories, the creator must confront his own digital ghosts to stop it.",
    coverImage: "https://images.unsplash.com/photo-1713837515856-5e84f6fb132a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBjaXR5JTIwZnV0dXJpc3RpY3xlbnwxfHx8fDE3NjI2MzUzMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "002",
    title: "The Vatican Archives",
    owner: "Sofia Romano",
    genre: "DRAMA",
    format: "Feature Film",
    logline: "A historian trying to solve his family's disappearance finds his own surname in the Vatican's secret archives.",
    coverImage: "https://images.unsplash.com/photo-1739619285912-d34c8c707208?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmFtYXRpYyUyMHBvcnRyYWl0JTIwbXlzdGVyeXxlbnwxfHx8fDE3NjI2MzUzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "003",
    title: "The Shared Dream",
    owner: "Dr. Elena Price",
    genre: "THRILLER",
    format: "Limited Series",
    logline: "A woman in an insomnia clinic discovers that all other patients are having the exact same dream every night.",
    coverImage: "https://images.unsplash.com/photo-1563905463861-7d77975b3a44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aHJpbGxlciUyMHN1c3BlbnNlJTIwZGFya3xlbnwxfHx8fDE3NjI2MTgwNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "004",
    title: "Cosmic Kitchen",
    owner: "Jake Morrison",
    genre: "COMEDY",
    format: "Short Film",
    logline: "A food delivery driver accidentally sent to Mars must open the planet's first and only restaurant.",
    coverImage: "https://images.unsplash.com/photo-1758600588149-70e102bd5503?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21lZHklMjBmdW4lMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjI2MzUzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "005",
    title: "The Lighthouse Signal",
    owner: "Hannah Blake",
    genre: "HORROR",
    format: "Feature Film",
    logline: "A couple restoring an old lighthouse discovers its light doesn't just guide ships—it calls 'something else' from the sea.",
    coverImage: "https://images.unsplash.com/photo-1552819401-700b5e342b9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3Jyb3IlMjBkYXJrJTIwYXRtb3NwaGVyZXxlbnwxfHx8fDE3NjI1ODUzNzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "006",
    title: "Words of Power",
    owner: "Aria Winters",
    genre: "FANTASY",
    format: "Animated Film",
    logline: "A librarian, thought to be a myth, protects a world where written words manifest into physical power.",
    coverImage: "https://images.unsplash.com/photo-1686474057987-9b32824344f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwbWFnaWNhbCUyMHdvcmxkfGVufDF8fHx8MTc2MjYzMTQ0MHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "007",
    title: "The Memory Heist",
    owner: "Vincent Cole",
    genre: "DRAMA/CRIME",
    format: "Feature Film",
    logline: "To save his grandson, a retired con artist must pull one last heist—not to steal money, but to steal a memory.",
    coverImage: "https://images.unsplash.com/photo-1739619285912-d34c8c707208?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmFtYXRpYyUyMHBvcnRyYWl0JTIwbXlzdGVyeXxlbnwxfHx8fDE3NjI2MzUzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "008",
    title: "Foresight",
    owner: "Dr. Kenji Tanaka",
    genre: "SCI-FI",
    format: "Limited Series",
    logline: "A drug is invented that lets people see the future, but its side effect is that they can only see their own death.",
    coverImage: "https://images.unsplash.com/photo-1713837515856-5e84f6fb132a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBjaXR5JTIwZnV0dXJpc3RpY3xlbnwxfHx8fDE3NjI2MzUzMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "009",
    title: "The Clockmaker's Secret",
    owner: "Ayşe Demir",
    genre: "HISTORICAL/DRAMA",
    format: "Documentary",
    logline: "In 1920s Istanbul, a watchmaker working on a mechanism that can slow time becomes the target of spies.",
    coverImage: "https://images.unsplash.com/photo-1739619285912-d34c8c707208?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmFtYXRpYyUyMHBvcnRyYWl0JTIwbXlzdGVyeXxlbnwxfHx8fDE3NjI2MzUzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "010",
    title: "Nine Lives Boss",
    owner: "Tommy Russo",
    genre: "COMEDY",
    format: "Animated Film",
    logline: "A mafia boss, sent back to Earth as a cat due to a clerical error in the afterlife, must run his criminal empire.",
    coverImage: "https://images.unsplash.com/photo-1758600588149-70e102bd5503?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21lZHklMjBmdW4lMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjI2MzUzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "011",
    title: "Signal from Below",
    owner: "Dr. Lars Eriksson",
    genre: "THRILLER",
    format: "Documentary",
    logline: "An Antarctic research team finds an ancient structure miles beneath the ice that is sending a signal out.",
    coverImage: "https://images.unsplash.com/photo-1563905463861-7d77975b3a44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aHJpbGxlciUyMHN1c3BlbnNlJTIwZGFya3xlbnwxfHx8fDE3NjI2MTgwNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "012",
    title: "The Last Taste",
    owner: "Chef Antoine Laurent",
    genre: "DRAMA",
    format: "Short Film",
    logline: "The world's best chef, on the day he loses his sense of taste, must cook for the most important critic of his life.",
    coverImage: "https://images.unsplash.com/photo-1739619285912-d34c8c707208?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmFtYXRpYyUyMHBvcnRyYWl0JTIwbXlzdGVyeXxlbnwxfHx8fDE3NjI2MzUzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "013",
    title: "The Cartographer's Mistake",
    owner: "Emma Cartwright",
    genre: "FANTASY",
    format: "Feature Film",
    logline: "A mapmaker who discovers his maps can alter reality must try to restore a city he accidentally erased.",
    coverImage: "https://images.unsplash.com/photo-1686474057987-9b32824344f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwbWFnaWNhbCUyMHdvcmxkfGVufDF8fHx8MTc2MjYzMTQ0MHww&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

// Creative Assets
const creativeAssets = [
  // CHARACTER PACKS
  {
    id: 1,
    title: "Cyberpunk 5-Character Pack",
    description: "1 Mercenary, 1 Hacker, 1 Corporate Agent, 1 Street Doc, 1 Fixer - AI-enhanced profiles",
    creator: "@neonwriter",
    price: 10.00,
    image: "https://images.unsplash.com/photo-1697482612084-70a4c3cecca1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyYWN0ZXIlMjBkZXNpZ24lMjBjb25jZXB0fGVufDF8fHx8MTc2MjYzNTMyOXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Character Pack"
  },
  {
    id: 2,
    title: "Medieval Fantasy Heroes",
    description: "1 Wizard, 1 Warrior, 1 Elf Archer - Complete character bios with backstories",
    creator: "@fantasyforge",
    price: 8.00,
    image: "https://images.unsplash.com/photo-1697482612084-70a4c3cecca1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyYWN0ZXIlMjBkZXNpZ24lMjBjb25jZXB0fGVufDF8fHx8MTc2MjYzNTMyOXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Character Pack"
  },
  
  // STORY STARTER PACKS
  {
    id: 3,
    title: "10 Sci-Fi Logline Pack",
    description: "Tested, curiosity-driven loglines ready to develop",
    creator: "@scifistarter",
    price: 5.00,
    image: "https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc2MjU1NDYyOXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Story Starter"
  },
  {
    id: 4,
    title: "Horror Night - 3 Synopsis Pack",
    description: "3 different horror film synopses - One-paragraph starters",
    creator: "@horrorvault",
    price: 15.00,
    image: "https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc2MjU1NDYyOXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Story Starter"
  },
  
  // STRUCTURE TEMPLATES
  {
    id: 5,
    title: "Hero's Journey - 12 Card Template",
    description: "Joseph Campbell's 12 steps - Empty, annotated scene cards",
    creator: "@mythbuilder",
    price: 7.00,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9yeSUyMHN0cnVjdHVyZSUyMHRlbXBsYXRlfGVufDF8fHx8MTc2MjYzNTM0OXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Structure Template"
  },
  {
    id: 6,
    title: "Syd Field Paradigm - 40 Card Treatment",
    description: "3-Act structure with plot points, midpoint & finale - Detailed card set",
    creator: "@fieldmaster",
    price: 12.00,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9yeSUyMHN0cnVjdHVyZSUyMHRlbXBsYXRlfGVufDF8fHx8MTc2MjYzNTM0OXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Structure Template"
  },
  
  // AI VISUAL ASSETS
  {
    id: 7,
    title: "20 Fantasy Location Visuals",
    description: "Enchanted forests, lost cities - AI-generated concept art",
    creator: "@aiartisan",
    price: 15.00,
    image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwbGFuZHNjYXBlJTIwY29uY2VwdHxlbnwxfHx8fDE3NjI2MzUzNTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "AI Visual Pack"
  },
  {
    id: 8,
    title: "Sci-Fi Character Portraits",
    description: "15 futuristic character portraits - High-quality AI art",
    creator: "@futureface",
    price: 10.00,
    image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwbGFuZHNjYXBlJTIwY29uY2VwdHxlbnwxfHx8fDE3NjI2MzUzNTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "AI Visual Pack"
  },
  
  // DIALOGUE & SCENE LIBRARIES
  {
    id: 9,
    title: "10 Intense Interrogation Scene Dialogues",
    description: "High-stakes dialogue for thriller/crime scenes",
    creator: "@dialoguepro",
    price: 5.00,
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmFtYXRpYyUyMHNjZW5lJTIwZGFya3xlbnwxfHx8fDE3NjI2MzUzNTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Dialogue Library"
  },
  {
    id: 10,
    title: "Meet-Cute Dialogue Pack",
    description: "8 charming first encounter dialogues for romantic comedies",
    creator: "@romancewriter",
    price: 4.00,
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmFtYXRpYyUyMHNjZW5lJTIwZGFya3xlbnwxfHx8fDE3NjI2MzUzNTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Dialogue Library"
  }
];

export function Marketplace() {
  const [activeTab, setActiveTab] = useState("vault");
  
  // Vault Filters
  const [vaultFormatFilter, setVaultFormatFilter] = useState<string>("all");
  const [vaultGenreFilter, setVaultGenreFilter] = useState<string>("all");
  
  // Asset Store Filters
  const [assetCategoryFilter, setAssetCategoryFilter] = useState<string>("all");
  
  // Filter vault projects
  const filteredVaultProjects = vaultProjects.filter(project => {
    const matchesFormat = vaultFormatFilter === "all" || project.format === vaultFormatFilter;
    const matchesGenre = vaultGenreFilter === "all" || project.genre === vaultGenreFilter;
    
    return matchesFormat && matchesGenre;
  });
  
  // Filter assets
  const filteredAssets = creativeAssets.filter(asset => {
    const matchesCategory = assetCategoryFilter === "all" || asset.category === assetCategoryFilter;
    
    return matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content - Tabs */}
      <section className="container mx-auto px-6 pb-20 pt-32">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* THE VAULT TAB */}
          <TabsContent value="vault">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="mb-6 text-foreground" style={{ fontSize: '60px' }}>
                Where Creativity Begins—And Scales.
              </h1>
              <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
                Explore the Evokestory ecosystem. Buy creative assets to accelerate your project, or browse 'The Project Vault' for exclusive, production-ready stories.
              </p>
              <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
                An exclusive showcase of 13 production-ready projects. Full project details and scripts require access. Request access for projects you are interested in.
              </p>
            </motion.div>

            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-16">
              <TabsTrigger value="vault">The Project Vault</TabsTrigger>
              <TabsTrigger value="assets">Asset Store</TabsTrigger>
            </TabsList>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              
              {/* Vault Filters */}
              <div className="flex flex-wrap gap-4 justify-center items-center max-w-4xl mx-auto">
                <Select value={vaultFormatFilter} onValueChange={setVaultFormatFilter}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Formats</SelectItem>
                    <SelectItem value="Feature Film">Feature Film</SelectItem>
                    <SelectItem value="Short Film">Short Film</SelectItem>
                    <SelectItem value="Documentary">Documentary</SelectItem>
                    <SelectItem value="Animated Film">Animated Film</SelectItem>
                    <SelectItem value="Limited Series">Limited Series</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={vaultGenreFilter} onValueChange={setVaultGenreFilter}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Genre" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Genres</SelectItem>
                    <SelectItem value="SCI-FI">Sci-Fi</SelectItem>
                    <SelectItem value="DRAMA">Drama</SelectItem>
                    <SelectItem value="THRILLER">Thriller</SelectItem>
                    <SelectItem value="COMEDY">Comedy</SelectItem>
                    <SelectItem value="HORROR">Horror</SelectItem>
                    <SelectItem value="FANTASY">Fantasy</SelectItem>
                    <SelectItem value="DRAMA/CRIME">Drama/Crime</SelectItem>
                    <SelectItem value="HISTORICAL/DRAMA">Historical/Drama</SelectItem>
                  </SelectContent>
                </Select>

                {(vaultFormatFilter !== "all" || vaultGenreFilter !== "all") && (
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setVaultFormatFilter("all");
                      setVaultGenreFilter("all");
                    }}
                  >
                    Clear Filters
                  </Button>
                )}
              </div>
            </motion.div>

            {filteredVaultProjects.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground">No projects found matching your filters.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {filteredVaultProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 hover:border-foreground/20">
                    {/* Project Cover */}
                    <div className="relative h-64 overflow-hidden">
                      <ImageWithFallback
                        src={project.coverImage}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      {/* Lock Icon */}
                      <div className="absolute top-4 right-4">
                        <div className="w-10 h-10 bg-foreground/90 backdrop-blur rounded-full flex items-center justify-center">
                          <Lock className="w-5 h-5 text-background" />
                        </div>
                      </div>

                      {/* Genre & Format Badges */}
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        <Badge className="bg-foreground/90 text-background backdrop-blur">
                          {project.genre}
                        </Badge>
                        <Badge variant="outline" className="bg-background/90 backdrop-blur border-foreground/20">
                          {project.format}
                        </Badge>
                      </div>
                      
                      {/* Project ID */}
                      <div className="absolute bottom-4 right-4">
                        <div className="flex items-center gap-2 bg-background/90 backdrop-blur px-3 py-1 rounded">
                          <span className="text-xs text-foreground">#{project.id}</span>
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-foreground mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          by <span className="text-foreground">{project.owner}</span>
                        </p>
                      </div>

                      {/* Logline */}
                      <div className="border-l-4 border-foreground pl-4 py-2">
                        <p className="text-sm text-muted-foreground leading-relaxed italic">
                          "{project.logline}"
                        </p>
                      </div>

                      {/* Action Button */}
                      <div className="pt-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="w-full bg-foreground text-background hover:bg-foreground/90">
                              <Mail className="w-4 h-4 mr-2" />
                              Request Access
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Request Project Access</DialogTitle>
                              <DialogDescription>
                                Submit your access request for Project #{project.id} - {project.title}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4 pt-4">
                              <div>
                                <Label htmlFor="name">Your Name</Label>
                                <Input id="name" placeholder="Full Name" />
                              </div>
                              <div>
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="email@example.com" />
                              </div>
                              <div>
                                <Label htmlFor="company">Company/Studio</Label>
                                <Input id="company" placeholder="Company Name (Optional)" />
                              </div>
                              <div>
                                <Label htmlFor="message">Message</Label>
                                <Textarea 
                                  id="message" 
                                  placeholder="Why are you interested in this project?"
                                  rows={4}
                                />
                              </div>
                              <Button className="w-full bg-foreground text-background">
                                Send Request
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
            )}
          </TabsContent>

          {/* ASSET STORE TAB */}
          <TabsContent value="assets">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="mb-6 text-foreground" style={{ fontSize: '60px' }}>
                Where Creativity Begins—And Scales.
              </h1>
              <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
                Explore the Evokestory ecosystem. Buy creative assets to accelerate your project, or browse 'The Project Vault' for exclusive, production-ready stories.
              </p>
              <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
                Ready-made character packs, templates, and creative resources to accelerate your project
              </p>
            </motion.div>

            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-16">
              <TabsTrigger value="vault">The Project Vault</TabsTrigger>
              <TabsTrigger value="assets">Asset Store</TabsTrigger>
            </TabsList>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              
              {/* Asset Store Filters */}
              <div className="flex flex-wrap gap-4 justify-center items-center max-w-4xl mx-auto">
                <Select value={assetCategoryFilter} onValueChange={setAssetCategoryFilter}>
                  <SelectTrigger className="w-[220px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="Character Pack">Character Packs</SelectItem>
                    <SelectItem value="Story Starter">Story Starters</SelectItem>
                    <SelectItem value="Structure Template">Structure Templates</SelectItem>
                    <SelectItem value="AI Visual Pack">AI Visual Packs</SelectItem>
                    <SelectItem value="Dialogue Library">Dialogue Libraries</SelectItem>
                  </SelectContent>
                </Select>

                {assetCategoryFilter !== "all" && (
                  <Button 
                    variant="outline" 
                    onClick={() => setAssetCategoryFilter("all")}
                  >
                    Clear Filter
                  </Button>
                )}
              </div>
            </motion.div>

            {filteredAssets.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground">No assets found matching your filter.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {filteredAssets.map((asset, index) => (
                <motion.div
                  key={asset.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                    {/* Asset Image */}
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={asset.image}
                        alt={asset.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="backdrop-blur bg-background/80">
                          {asset.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Asset Info */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-foreground mb-2">
                          {asset.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {asset.description}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          by <span className="text-foreground">{asset.creator}</span>
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-border">
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-5 h-5 text-foreground" />
                          <span className="text-foreground">${asset.price.toFixed(2)}</span>
                        </div>
                        <Button className="bg-foreground text-background hover:bg-foreground/90">
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Buy Now
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
            )}
          </TabsContent>
        </Tabs>
      </section>

      {/* Become a Seller Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Sell Assets */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 h-full bg-accent/50 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-foreground rounded-lg flex items-center justify-center">
                  <Store className="w-6 h-6 text-background" />
                </div>
                <h3 className="text-foreground">Sell Your Assets</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Sell your characters, templates, and loglines directly to the community. Turn your creativity into income.
              </p>
              <Button className="w-full" variant="outline">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Apply to the Asset Store
              </Button>
            </Card>
          </motion.div>

          {/* Submit to Vault */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 h-full bg-gradient-to-br from-foreground/10 to-foreground/5 border-2 border-foreground/20 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-foreground rounded-lg flex items-center justify-center">
                  <Lock className="w-6 h-6 text-background" />
                </div>
                <h3 className="text-foreground">Submit to The Vault</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Have a production-ready project? Submit your project to be featured in our exclusive vault and connect with producers.
              </p>
              <Button className="w-full bg-foreground text-background hover:bg-foreground/90">
                <Upload className="w-4 h-4 mr-2" />
                Submit Your Project
              </Button>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
