import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

interface Vlog {
  id: string;
  title: string;
  date: string;
  duration: string;
  views?: string;
  description?: string;
}

interface VlogsPageProps {
  onBack: () => void;
  onNavigate: (page: 'blog' | 'notes') => void;
}

export function VlogsPage({ onBack, onNavigate }: VlogsPageProps) {
  const vlogs: Vlog[] = [
    {
      id: "1",
      title: "Studio Setup Tour 2025",
      date: "Jan 15",
      duration: "12:45",
      views: "2.1K"
    },
    {
      id: "2", 
      title: "My Creative Process: Painting to Code",
      date: "Jan 8",
      duration: "18:30",
      views: "1.8K"
    },
    {
      id: "3",
      title: "Behind the Scenes: Music Production",
      date: "Dec 28, 2024",
      duration: "15:20",
      views: "3.2K"
    },
    {
      id: "4",
      title: "Day in the Life of a Creative Developer",
      date: "Dec 15, 2024",
      duration: "22:15",
      views: "4.5K"
    },
    {
      id: "5",
      title: "Video Editing Workflow & Tips",
      date: "Dec 2, 2024",
      duration: "16:40",
      views: "2.9K"
    },
    {
      id: "6",
      title: "Creative Block: How I Overcome It",
      date: "Nov 18, 2024",
      duration: "11:25",
      views: "1.7K"
    },
    {
      id: "7",
      title: "Reviewing My Art from 2024",
      date: "Nov 5, 2024",
      duration: "19:55",
      views: "3.8K"
    },
    {
      id: "8",
      title: "Learning New Music Software",
      date: "Oct 22, 2024",
      duration: "25:10",
      views: "2.3K"
    },
    {
      id: "9",
      title: "Programming Challenge: 48 Hour Build",
      date: "Oct 8, 2024",
      duration: "13:30",
      views: "5.1K"
    },
    {
      id: "10",
      title: "Q&A: Your Creative Questions Answered",
      date: "Sep 25, 2024",
      duration: "20:45",
      views: "1.9K"
    }
  ];

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
            <span className="text-foreground">Vlogs</span>
            <button 
              onClick={() => onNavigate('notes')}
              className="opacity-50 hover:opacity-100 hover:text-foreground transition-all"
            >
              Notes
            </button>
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

        {/* Vlogs */}
        <div className="space-y-8">
          {vlogs.map((vlog) => (
            <article 
              key={vlog.id}
              className="group cursor-pointer"
            >
              <div className="hover:bg-accent/10 -mx-4 px-4 py-2 rounded-md transition-colors">
                <div className="flex items-baseline justify-between gap-8">
                  <h2 className="group-hover:text-cyan-400 transition-colors flex-1">
                    {vlog.title}
                  </h2>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground shrink-0">
                    <span className="text-purple-400" style={{ fontSize: '12px' }}>
                      {vlog.duration}
                    </span>
                    {vlog.views && (
                      <>
                        <span className="opacity-50">·</span>
                        <span>{vlog.views} views</span>
                      </>
                    )}
                    <span className="opacity-50">·</span>
                    <span>{vlog.date}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer spacing */}
        <div className="mt-24 pt-12 border-t border-border/30">
          <p className="text-center text-muted-foreground text-sm">
            New vlogs every week...
          </p>
        </div>
      </div>
    </div>
  );
}