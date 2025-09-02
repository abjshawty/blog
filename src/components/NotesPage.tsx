import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

interface Note {
  id: string;
  content: string;
  date: string;
  tags?: string[];
}

interface NotesPageProps {
  onBack: () => void;
  onNavigate: (page: 'blog' | 'vlogs') => void;
}

export function NotesPage({ onBack, onNavigate }: NotesPageProps) {
  const notes: Note[] = [
    {
      id: "1",
      content: "Sometimes the best creative breakthroughs happen when you're not actively trying to be creative.",
      date: "Jan 20",
      tags: ["creativity", "process"]
    },
    {
      id: "2", 
      content: "CSS Grid + Flexbox = Perfect layout harmony. Still amazed by how powerful this combination is.",
      date: "Jan 18",
      tags: ["css", "webdev"]
    },
    {
      id: "3",
      content: "Found an old melody I recorded on my phone 6 months ago. Sometimes ideas need time to breathe.",
      date: "Jan 15",
      tags: ["music", "inspiration"]
    },
    {
      id: "4",
      content: "The difference between good and great art often lies in the details that nobody notices consciously.",
      date: "Jan 12",
      tags: ["art", "philosophy"]
    },
    {
      id: "5",
      content: "Debugging is like solving a puzzle where you created the puzzle and forgot how you made it.",
      date: "Jan 10",
      tags: ["programming", "humor"]
    },
    {
      id: "6",
      content: "Color theory in digital vs traditional painting: similar principles, completely different execution.",
      date: "Jan 8",
      tags: ["painting", "theory"]
    },
    {
      id: "7",
      content: "Video editing tip: Let the content dictate the cuts, not the other way around.",
      date: "Jan 5",
      tags: ["video", "editing"]
    },
    {
      id: "8",
      content: "React hooks changed how I think about component lifecycle. State feels more natural now.",
      date: "Jan 3",
      tags: ["react", "javascript"]
    },
    {
      id: "9",
      content: "The best creative work happens at the intersection of different disciplines.",
      date: "Dec 30, 2024",
      tags: ["creativity", "interdisciplinary"]
    },
    {
      id: "10",
      content: "Sound design is just painting with frequencies instead of colors.",
      date: "Dec 28, 2024",
      tags: ["audio", "music", "philosophy"]
    },
    {
      id: "11",
      content: "Version control for creative projects: Git for code, but what about everything else?",
      date: "Dec 25, 2024",
      tags: ["workflow", "organization"]
    },
    {
      id: "12",
      content: "AI tools are like having a very knowledgeable apprentice who never gets tired.",
      date: "Dec 22, 2024",
      tags: ["ai", "tools", "productivity"]
    }
  ];

  const getTagColor = (tag: string) => {
    const colors: { [key: string]: string } = {
      creativity: "text-purple-400",
      programming: "text-green-400",
      music: "text-blue-400",
      art: "text-pink-400",
      video: "text-orange-400",
      webdev: "text-cyan-400",
      css: "text-cyan-400",
      react: "text-blue-400",
      javascript: "text-yellow-400",
      philosophy: "text-purple-400",
      ai: "text-red-400"
    };
    return colors[tag] || "text-muted-foreground";
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-8 text-muted-foreground">
            <button 
              onClick={() => onNavigate('blog')}
              className="opacity-50 hover:opacity-100 hover:text-foreground transition-all"
            >
              Blog
            </button>
            <button 
              onClick={() => onNavigate('vlogs')}
              className="opacity-50 hover:opacity-100 hover:text-foreground transition-all"
            >
              Vlogs
            </button>
            <span className="text-foreground">Notes</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="hover:bg-accent/50 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
        </div>

        {/* Notes */}
        <div className="space-y-8">
          {notes.map((note) => (
            <article 
              key={note.id}
              className="group cursor-pointer"
            >
              <div className="hover:bg-accent/10 -mx-4 px-4 py-3 rounded-md transition-colors">
                <div className="space-y-2">
                  <p className="group-hover:text-cyan-400 transition-colors leading-relaxed">
                    {note.content}
                  </p>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 flex-wrap">
                      {note.tags && note.tags.map((tag) => (
                        <span 
                          key={tag}
                          className={`text-xs ${getTagColor(tag)} opacity-60`}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground shrink-0">
                      {note.date}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer spacing */}
        <div className="mt-24 pt-12 border-t border-border/30">
          <p className="text-center text-muted-foreground text-sm">
            Random thoughts and quick insights...
          </p>
        </div>
      </div>
    </div>
  );
}