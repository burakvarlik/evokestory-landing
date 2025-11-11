import React, { useState, useRef } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Textarea } from './ui/textarea';
import { ScrollArea } from './ui/scroll-area';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './ui/dialog';
import { 
  Upload, 
  Sparkles,
  Trash2,
  GripVertical,
  Download,
  ChevronLeft,
  Plus,
  Loader2,
  Check,
  Film,
  LogOut
} from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

interface StoryboardPanel {
  id: string;
  imageUrl: string | null;
  aiPrompt: string;
  description: string;
  order: number;
  panelNumber: number;
}

interface StoryboardEditorProps {
  onBack?: () => void;
}

export const StoryboardEditor: React.FC<StoryboardEditorProps> = ({ onBack }) => {
  const [panels, setPanels] = useState<StoryboardPanel[]>([
    {
      id: 'panel-1',
      imageUrl: 'https://images.unsplash.com/photo-1758611973584-0cf8371fa080?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjB3YWtpbmclMjB1cCUyMG1vcm5pbmd8ZW58MXx8fHwxNzYyNjIyODAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      aiPrompt: 'Opening shot: Character waking up in the morning, soft natural light',
      description: 'ACT 1 - SETUP: Close-up, intimate framing. Mood: Peaceful beginning. Narrative: The ordinary world before the journey.',
      order: 0,
      panelNumber: 1
    },
    {
      id: 'panel-2',
      imageUrl: 'https://images.unsplash.com/photo-1762089424593-c66eb5c51aaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBsb29raW5nJTIwd2luZG93JTIwY29udGVtcGxhdGl2ZXxlbnwxfHx8fDE3NjI2MjI4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      aiPrompt: 'Character looking out window, contemplative moment of decision',
      description: 'ACT 1 - CALL TO ADVENTURE: Medium shot, window lighting. Mood: Thoughtful, uncertain. Narrative: Something calls them to action.',
      order: 1,
      panelNumber: 2
    },
    {
      id: 'panel-3',
      imageUrl: 'https://images.unsplash.com/photo-1623222316492-d7bddd11a0de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjB3YWxraW5nJTIwYWxvbmUlMjBwYXRofGVufDF8fHx8MTc2MjYyMjgwMnww&ixlib=rb-4.1.0&q=80&w=1080',
      aiPrompt: 'Wide shot of character walking alone on a path, beginning the journey',
      description: 'ACT 2 - DEPARTURE: Wide establishing shot. Mood: Determined, isolated. Narrative: Crossing the threshold into unknown.',
      order: 2,
      panelNumber: 3
    },
    {
      id: 'panel-4',
      imageUrl: 'https://images.unsplash.com/photo-1669699739247-54f20092f9d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBkaXNjb3ZlcmluZyUyMHNvbWV0aGluZ3xlbnwxfHx8fDE3NjI2MjI4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      aiPrompt: 'Character discovering something important, moment of revelation',
      description: 'ACT 2 - DISCOVERY: Close-up on hands/object. Mood: Wonder, realization. Narrative: Finding the key to their quest.',
      order: 3,
      panelNumber: 4
    },
    {
      id: 'panel-5',
      imageUrl: 'https://images.unsplash.com/photo-1670923704508-d1d53f407c7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmFtYXRpYyUyMGNvbmZyb250YXRpb24lMjBzY2VuZXxlbnwxfHx8fDE3NjI2MjI4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      aiPrompt: 'Dramatic confrontation scene, peak tension and conflict',
      description: 'ACT 2 - CLIMAX: Dynamic angle, high tension. Mood: Intense, dramatic. Narrative: The ultimate challenge arrives.',
      order: 4,
      panelNumber: 5
    },
    {
      id: 'panel-6',
      imageUrl: 'https://images.unsplash.com/photo-1713946598568-7e9f962eefef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjB0cml1bXBoJTIwdmljdG9yeXxlbnwxfHx8fDE3NjI2MjI4MDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      aiPrompt: 'Victory pose, character triumphant after overcoming the challenge',
      description: 'ACT 3 - RESOLUTION: Hero angle, upward framing. Mood: Triumphant, emotional. Narrative: The transformation complete.',
      order: 5,
      panelNumber: 6
    }
  ]);
  const [draggedPanelId, setDraggedPanelId] = useState<string | null>(null);
  const [generatingPanelId, setGeneratingPanelId] = useState<string | null>(null);
  const [showExportDialog, setShowExportDialog] = useState(false);
  const [exportStep, setExportStep] = useState<'idle' | 'generating' | 'ready'>('idle');
  const [exportBlobUrl, setExportBlobUrl] = useState<string | null>(null);
  const fileInputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

  // Add new panel
  const handleAddPanel = () => {
    console.log('➕ [STORYBOARD] Adding new panel');
    
    const newPanel: StoryboardPanel = {
      id: `panel-${Date.now()}`,
      imageUrl: null,
      aiPrompt: '',
      description: '',
      order: panels.length,
      panelNumber: panels.length + 1
    };

    setPanels([...panels, newPanel]);
    toast.success(`Panel ${newPanel.panelNumber} added`);
    console.log('✅ [STORYBOARD] Panel added:', newPanel.id);
  };

  // Handle AI generation for specific panel
  const handleGenerateForPanel = async (panelId: string) => {
    const panel = panels.find(p => p.id === panelId);
    if (!panel) return;

    console.log('🎨 [STORYBOARD] Generating image for panel:', panelId);
    
    if (!panel.aiPrompt.trim()) {
      toast.error('Please enter a prompt');
      return;
    }

    setGeneratingPanelId(panelId);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const placeholderUrl = `https://placehold.co/1920x1080/6366f1/white?text=Panel+${panel.panelNumber}`;
      
      setPanels(prevPanels => prevPanels.map(p => 
        p.id === panelId ? { ...p, imageUrl: placeholderUrl } : p
      ));
      
      toast.success(`Panel ${panel.panelNumber} generated!`);
      console.log('✅ [STORYBOARD] Generation complete');
    } catch (error) {
      console.error('❌ [STORYBOARD] Generation error:', error);
      toast.error('Failed to generate image');
    } finally {
      setGeneratingPanelId(null);
    }
  };

  // Handle image upload for specific panel
  const handleUploadForPanel = (panelId: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    console.log('📤 [STORYBOARD] Uploading image for panel:', panelId);

    if (!file.type.startsWith('image/')) {
      toast.error('Please upload an image file');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const imageUrl = e.target?.result as string;
      
      setPanels(prevPanels => prevPanels.map(p => 
        p.id === panelId ? { ...p, imageUrl } : p
      ));
      
      const panel = panels.find(p => p.id === panelId);
      toast.success(`Panel ${panel?.panelNumber} image uploaded`);
      console.log('✅ [STORYBOARD] Upload complete');
    };

    reader.onerror = () => {
      toast.error('Failed to read image file');
    };

    reader.readAsDataURL(file);
  };

  // Handle panel deletion
  const handleDeletePanel = (panelId: string) => {
    console.log('🗑️ [STORYBOARD] Deleting panel:', panelId);
    
    setPanels(prevPanels => {
      const filtered = prevPanels.filter(p => p.id !== panelId);
      // Renumber remaining panels
      return filtered.map((p, index) => ({
        ...p,
        order: index,
        panelNumber: index + 1
      }));
    });
    
    toast.success('Panel deleted');
  };

  // Update panel fields
  const handleUpdatePanel = (panelId: string, field: 'aiPrompt' | 'description', value: string) => {
    setPanels(prevPanels => prevPanels.map(p => 
      p.id === panelId ? { ...p, [field]: value } : p
    ));
  };

  // Handle drag and drop
  const handleDragStart = (panelId: string) => {
    console.log('🎯 [STORYBOARD] Drag started:', panelId);
    setDraggedPanelId(panelId);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (targetPanelId: string) => {
    console.log('📍 [STORYBOARD] Drop on:', targetPanelId);
    
    if (!draggedPanelId || draggedPanelId === targetPanelId) return;

    const draggedIndex = panels.findIndex(p => p.id === draggedPanelId);
    const targetIndex = panels.findIndex(p => p.id === targetPanelId);

    if (draggedIndex === -1 || targetIndex === -1) return;

    const newPanels = [...panels];
    const [draggedPanel] = newPanels.splice(draggedIndex, 1);
    newPanels.splice(targetIndex, 0, draggedPanel);

    // Renumber all panels
    const renumbered = newPanels.map((p, index) => ({
      ...p,
      order: index,
      panelNumber: index + 1
    }));

    setPanels(renumbered);
    setDraggedPanelId(null);
    toast.success('Panel reordered');
    console.log('✅ [STORYBOARD] Reorder complete');
  };

  // Handle PDF Export - Server-Side Generation
  const handleExportPDF = async () => {
    console.log('📄 [STORYBOARD] Export PDF started (server-side)');
    
    if (panels.length === 0) {
      toast.error('No panels to export');
      return;
    }
    
    // Step 1: Show "Processing..." modal immediately
    setShowExportDialog(true);
    setExportStep('generating');

    try {
      // Step 2: Prepare HTML/CSS data for server
      const storyboardHTML = generateStoryboardHTML(panels);
      
      console.log('📤 [STORYBOARD] Sending data to server...');
      console.log(`  - Panels: ${panels.length}`);
      console.log(`  - HTML size: ${storyboardHTML.length} chars`);

      // Simulate server processing (in production, this would be a real API call)
      await new Promise(resolve => setTimeout(resolve, 2000));

      // For now, create a fallback HTML file
      const blob = new Blob([storyboardHTML], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      
      setExportBlobUrl(url);
      setExportStep('ready');
      toast.success('Storyboard PDF ready for download!');
      console.log('✅ [STORYBOARD] PDF generated');
    } catch (error) {
      console.error('❌ [STORYBOARD] Export error:', error);
      toast.error('PDF generation failed. Please try again.');
      setShowExportDialog(false);
      setExportStep('idle');
    }
  };

  // Generate HTML for server-side rendering
  const generateStoryboardHTML = (panelsToExport: StoryboardPanel[]): string => {
    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Storyboard Export</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      padding: 40px;
      background: white;
    }
    .page-header {
      text-align: center;
      margin-bottom: 40px;
      border-bottom: 3px solid #2563eb;
      padding-bottom: 20px;
    }
    .page-header h1 {
      font-size: 32px;
      color: #1f2937;
      margin-bottom: 8px;
    }
    .page-header .meta {
      font-size: 14px;
      color: #6b7280;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      margin-bottom: 40px;
    }
    .panel {
      border: 2px solid #e5e7eb;
      border-radius: 8px;
      overflow: hidden;
      page-break-inside: avoid;
      background: white;
    }
    .panel-header {
      background: linear-gradient(to right, #f3f4f6, #e5e7eb);
      padding: 12px 16px;
      border-bottom: 1px solid #d1d5db;
    }
    .panel-number {
      font-size: 16px;
      font-weight: 600;
      color: #1f2937;
    }
    .panel-image {
      width: 100%;
      aspect-ratio: 16/9;
      background: #111827;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }
    .panel-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .panel-image .placeholder {
      color: #9ca3af;
      font-size: 14px;
    }
    .panel-content {
      padding: 16px;
    }
    .panel-section {
      margin-bottom: 12px;
    }
    .panel-section:last-child {
      margin-bottom: 0;
    }
    .panel-label {
      font-size: 11px;
      font-weight: 600;
      color: #6b7280;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 4px;
    }
    .panel-text {
      font-size: 13px;
      color: #1f2937;
      line-height: 1.5;
      word-wrap: break-word;
    }
    .empty-text {
      color: #9ca3af;
      font-style: italic;
    }
    @media print {
      body { padding: 20px; }
      .grid { gap: 16px; }
      .page-break { page-break-before: always; }
    }
  </style>
</head>
<body>
  <div class="page-header">
    <h1>Storyboard</h1>
    <div class="meta">
      ${panelsToExport.length} Panels • Generated ${new Date().toLocaleDateString()}
    </div>
  </div>

  <div class="grid">
    ${panelsToExport.map((panel, index) => `
      ${index > 0 && index % 9 === 0 ? '<div class="page-break"></div>' : ''}
      <div class="panel">
        <div class="panel-header">
          <div class="panel-number">Panel ${panel.panelNumber}</div>
        </div>
        <div class="panel-image">
          ${panel.imageUrl 
            ? `<img src="${panel.imageUrl}" alt="Panel ${panel.panelNumber}" />`
            : '<div class="placeholder">No image</div>'
          }
        </div>
        <div class="panel-content">
          <div class="panel-section">
            <div class="panel-label">AI Prompt</div>
            <div class="panel-text ${!panel.aiPrompt ? 'empty-text' : ''}">
              ${panel.aiPrompt || 'No prompt'}
            </div>
          </div>
          <div class="panel-section">
            <div class="panel-label">Notes</div>
            <div class="panel-text ${!panel.description ? 'empty-text' : ''}">
              ${panel.description || 'No notes'}
            </div>
          </div>
        </div>
      </div>
    `).join('')}
  </div>
</body>
</html>
    `.trim();
  };

  const handleDownloadPDF = () => {
    console.log('💾 [STORYBOARD] Downloading PDF...');
    
    if (!exportBlobUrl) return;

    const link = document.createElement('a');
    link.href = exportBlobUrl;
    link.download = `storyboard-${Date.now()}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success('Storyboard downloaded!');
    setShowExportDialog(false);
    setExportStep('idle');
    
    if (exportBlobUrl) {
      URL.revokeObjectURL(exportBlobUrl);
      setExportBlobUrl(null);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Top Bar - Minimal */}
      <div className="bg-white border-b px-6 py-4 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-4">
          {onBack && (
            <Button variant="ghost" size="sm" onClick={onBack}>
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back
            </Button>
          )}
          <div className="flex items-center gap-3">
            <Film className="w-6 h-6 text-blue-600" />
            <div>
              <h1 className="text-2xl text-gray-900">Storyboard</h1>
              <p className="text-sm text-gray-500">{panels.length} {panels.length === 1 ? 'panel' : 'panels'}</p>
            </div>
          </div>
        </div>
        
        <Button 
          onClick={handleExportPDF}
          disabled={panels.length === 0}
          size="lg"
        >
          <Download className="w-5 h-5 mr-2" />
          Export as PDF
        </Button>
      </div>

      {/* Main Canvas - 3-Column Grid */}
      <ScrollArea className="flex-1">
        <div className="p-6">
          {panels.length === 0 ? (
            // Empty state
            <div className="max-w-2xl mx-auto">
              <Card className="p-16 text-center border-2 border-dashed">
                <Film className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h3 className="text-xl mb-2 text-gray-900">No storyboard panels yet</h3>
                <p className="text-sm text-gray-600 mb-6">
                  Start creating your visual storyboard by adding panels
                </p>
                <Button size="lg" onClick={handleAddPanel}>
                  <Plus className="w-5 h-5 mr-2" />
                  Add Storyboard Panel
                </Button>
              </Card>
            </div>
          ) : (
            // 3-Column Grid Layout
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
              {/* Storyboard Panels */}
              {panels.map((panel) => (
                <Card
                  key={panel.id}
                  className="bg-white overflow-hidden shadow hover:shadow-lg transition-shadow"
                  draggable
                  onDragStart={() => handleDragStart(panel.id)}
                  onDragOver={handleDragOver}
                  onDrop={() => handleDrop(panel.id)}
                >
                  {/* Panel Header - Compact */}
                  <div className="bg-gradient-to-r from-gray-100 to-gray-50 px-3 py-2 flex items-center justify-between border-b">
                    <div className="flex items-center gap-2">
                      <GripVertical className="w-4 h-4 text-gray-400 cursor-move" />
                      <span className="text-base">Panel {panel.panelNumber}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeletePanel(panel.id)}
                      className="h-7 w-7 p-0 hover:bg-red-50 hover:text-red-600"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </Button>
                  </div>

                  {/* Panel Content - Compact */}
                  <div className="p-3 space-y-3">
                    {/* 16:9 Visual Area - Smaller */}
                    <div 
                      className="aspect-video bg-gray-900 rounded relative overflow-hidden border border-gray-200 cursor-pointer"
                      onDoubleClick={() => fileInputRefs.current[panel.id]?.click()}
                      title="Double-click to upload image"
                    >
                      {panel.imageUrl ? (
                        // Image is loaded
                        <img
                          src={panel.imageUrl}
                          alt={`Panel ${panel.panelNumber}`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        // Empty state - Compact buttons
                        <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-2">
                          <input
                            ref={el => fileInputRefs.current[panel.id] = el}
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleUploadForPanel(panel.id, e)}
                            className="hidden"
                          />
                          
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={() => fileInputRefs.current[panel.id]?.click()}
                            className="bg-white/90 hover:bg-white text-xs h-8 w-full"
                          >
                            <Upload className="w-3 h-3 mr-1" />
                            Upload
                          </Button>

                          <Button
                            size="sm"
                            onClick={() => handleGenerateForPanel(panel.id)}
                            disabled={generatingPanelId === panel.id || !panel.aiPrompt.trim()}
                            className="bg-blue-600 hover:bg-blue-700 text-xs h-8 w-full"
                          >
                            {generatingPanelId === panel.id ? (
                              <>
                                <Loader2 className="w-3 h-3 mr-1 animate-spin" />
                                Generating...
                              </>
                            ) : (
                              <>
                                <Sparkles className="w-3 h-3 mr-1" />
                                Generate AI
                              </>
                            )}
                          </Button>
                        </div>
                      )}
                    </div>

                    {/* AI Prompt Field - Compact */}
                    <div>
                      <label className="text-xs text-gray-600 mb-1 block">AI Prompt</label>
                      <Textarea
                        value={panel.aiPrompt}
                        onChange={(e) => handleUpdatePanel(panel.id, 'aiPrompt', e.target.value)}
                        placeholder="Describe the shot..."
                        className="min-h-[50px] resize-none text-xs"
                      />
                      <Button
                        size="sm"
                        onClick={() => handleGenerateForPanel(panel.id)}
                        disabled={generatingPanelId === panel.id || !panel.aiPrompt.trim()}
                        className="w-full mt-2 h-7 text-xs"
                      >
                        {generatingPanelId === panel.id ? (
                          <>
                            <Loader2 className="w-3 h-3 mr-1 animate-spin" />
                            Generating...
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-3 h-3 mr-1" />
                            {panel.imageUrl ? 'Regenerate' : 'Generate'}
                          </>
                        )}
                      </Button>
                    </div>

                    {/* Description Field - Compact */}
                    <div>
                      <label className="text-xs text-gray-600 mb-1 block">Notes</label>
                      <Textarea
                        value={panel.description}
                        onChange={(e) => handleUpdatePanel(panel.id, 'description', e.target.value)}
                        placeholder="Camera, action, dialogue..."
                        className="min-h-[50px] resize-none text-xs"
                      />
                    </div>
                  </div>
                </Card>
              ))}

              {/* Add Panel Card */}
              <Card 
                className="border-2 border-dashed border-gray-300 hover:border-blue-400 hover:bg-blue-50/30 transition-all cursor-pointer flex items-center justify-center min-h-[400px]"
                onClick={handleAddPanel}
              >
                <div className="p-8 text-center">
                  <Plus className="w-10 h-10 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm text-gray-900">Add Panel</p>
                </div>
              </Card>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Export PDF Dialog */}
      <Dialog open={showExportDialog} onOpenChange={setShowExportDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {exportStep === 'generating' && 'Generating Storyboard PDF...'}
              {exportStep === 'ready' && 'Storyboard Ready!'}
            </DialogTitle>
            <DialogDescription>
              {exportStep === 'generating' && 'Creating your storyboard PDF...'}
              {exportStep === 'ready' && `Your storyboard with ${panels.length} panels is ready to download.`}
            </DialogDescription>
          </DialogHeader>

          <div className="py-6">
            {exportStep === 'generating' && (
              <div className="flex flex-col items-center gap-4">
                <Loader2 className="w-12 h-12 animate-spin text-blue-500" />
                <div className="text-center">
                  <p className="text-sm text-gray-600">Formatting panels...</p>
                  <p className="text-xs text-gray-500 mt-1">{panels.length} panels</p>
                </div>
              </div>
            )}

            {exportStep === 'ready' && (
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-700 mb-1">Storyboard generated successfully!</p>
                  <p className="text-xs text-gray-500">
                    Professional storyboard format
                  </p>
                </div>
              </div>
            )}
          </div>

          <DialogFooter>
            {exportStep === 'ready' && (
              <>
                <Button variant="outline" onClick={() => setShowExportDialog(false)}>
                  Cancel
                </Button>
                <Button onClick={handleDownloadPDF}>
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

// Main Dashboard component with header
export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Dashboard Header with Logout */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Film className="w-6 h-6 text-blue-600" />
            <div>
              <h1 className="text-foreground">Evokestory.ai</h1>
              <p className="text-sm text-muted-foreground">Welcome back, {user?.name || 'User'}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={() => navigate('/')}>
              Home
            </Button>
            <Button onClick={handleLogout} variant="outline">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Storyboard Editor */}
      <StoryboardEditor />
    </div>
  );
}
