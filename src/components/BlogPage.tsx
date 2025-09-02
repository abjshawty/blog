import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  readTime?: string;
  description?: string;
}

interface BlogPageProps {
  onBack: () => void;
  onNavigate: (page: 'vlogs' | 'notes') => void;
}

export function BlogPage({ onBack, onNavigate }: BlogPageProps) {
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "Categorize Your Dependencies",
      date: "Apr 29",
      category: "Work",
      readTime: "5min"
    },
    {
      id: "2", 
      title: "科技と心、間",
      date: "Apr 9",
      category: "Work"
    },
    {
      id: "3",
      title: "Hello Tokyo!",
      date: "Apr 8",
      category: "Work"
    },
    {
      id: "4",
      title: "Photos Page",
      date: "Apr 3",
      category: "Work"
    },
    {
      id: "5",
      title: "Async Sync in Between",
      date: "Mar 3",
      category: "Work"
    },
    {
      id: "6",
      title: "Move on to ESM-only",
      date: "Feb 5",
      category: "Open"
    },
    {
      id: "7",
      title: "Epoch Semantic Versioning",
      date: "Jan 7",
      category: "Open"
    },
    {
      id: "8",
      title: "Introducing Nuxt Icon v1",
      date: "Nov 29, 2023",
      category: "Open"
    },
    {
      id: "9",
      title: "Initiative on Sponsorship Forwarding", 
      date: "Aug 20, 2023",
      category: "Open"
    },
    {
      id: "10",
      title: "Refreshed Nuxt ESLint Integrations",
      date: "Jun 19, 2023",
      category: "Open"
    },
    {
      id: "11",
      title: "Introducing ESLint Config Inspector",
      date: "Apr 5, 2023",
      category: "Open"
    },
    {
      id: "12",
      title: "月光の影間は",
      date: "Dec 7, 2022",
      category: "Life"
    },
    {
      id: "13",
      title: "Mental Health in Open Source",
      date: "May 18, 2022",
      category: "Open"
    },
    {
      id: "14",
      title: "The Evolution of Shiki v1.0",
      date: "Mar 11, 2022",
      category: "Open"
    },
    {
      id: "15",
      title: "The Magic in Shiki Magic Move",
      date: "Mar 4, 2022",
      category: "Open"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Work":
        return "text-cyan-400";
      case "Open":
        return "text-green-400";
      case "Life":
        return "text-purple-400";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-8 text-muted-foreground">
            <span className="text-foreground">Blog</span>
            <button 
              onClick={() => onNavigate('vlogs')}
              className="opacity-50 hover:opacity-100 hover:text-foreground transition-all"
            >
              Vlogs
            </button>
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

        {/* Blog Posts */}
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="group cursor-pointer"
            >
              <div className="hover:bg-accent/10 -mx-4 px-4 py-2 rounded-md transition-colors">
                <div className="flex items-baseline justify-between gap-8">
                  <h2 className="group-hover:text-cyan-400 transition-colors flex-1">
                    {post.title}
                  </h2>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground shrink-0">
                    <span className={getCategoryColor(post.category)} style={{ fontSize: '12px' }}>
                      {post.category}
                    </span>
                    <span className="opacity-50">·</span>
                    <span>{post.date}</span>
                    {post.readTime && (
                      <>
                        <span className="opacity-50">·</span>
                        <span>{post.readTime}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer spacing */}
        <div className="mt-24 pt-12 border-t border-border/30">
          <p className="text-center text-muted-foreground text-sm">
            More posts coming soon...
          </p>
        </div>
      </div>
    </div>
  );
}