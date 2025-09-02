import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { BlogPage } from "./components/BlogPage";
import { VlogsPage } from "./components/VlogsPage";
import { NotesPage } from "./components/NotesPage";

export default function App () {
  const [currentPage, setCurrentPage] = useState<'portfolio' | 'blog' | 'vlogs' | 'notes'>('portfolio');
  const portfolioSections = [
    {
      id: "painting",
      title: "Painting",
      description: "Exploring the digital canvas with vibrant colors and abstract forms. I create digital artwork that pushes the boundaries between traditional painting techniques and modern technology, resulting in pieces that capture emotion and movement in stunning detail.",
      imageUrl: "https://images.unsplash.com/photo-1629198239973-7628f33505d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRpZ2l0YWwlMjBwYWludGluZyUyMGNvbG9yZnVsfGVufDF8fHx8MTc1Njc0MjIzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      accentColor: "linear-gradient(to right, #a855f7, #ec4899)",
      projects: [
        {
          title: "Abstract Expressions",
          description: "A series of digital paintings exploring emotion through color and form",
        },
        {
          title: "Neon Dreams",
          description: "Cyberpunk-inspired artwork with vivid neon aesthetics",
        },
      ]
    },
    {
      id: "music",
      title: "Music",
      description: "Crafting melodies that resonate with the soul. From electronic beats to orchestral arrangements, I compose music that tells stories and evokes emotions. Each track is a journey through soundscapes that blend traditional instruments with modern production techniques.",
      imageUrl: "https://images.unsplash.com/photo-1642860552637-8164f7777edf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0dWRpbyUyMGVxdWlwbWVudCUyMGNvbG9yZnVsfGVufDF8fHx8MTc1Njc0MjIzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      accentColor: "linear-gradient(to right, #06b6d4, #3b82f6)",
      projects: [
        {
          title: "Ethereal Soundscapes",
          description: "Ambient compositions that transport listeners to otherworldly realms",
        },
        {
          title: "Digital Symphony",
          description: "A fusion of classical orchestration with electronic elements",
        },
      ]
    },
    {
      id: "programming",
      title: "Programming",
      description: "Building digital experiences that make a difference. I develop web applications, mobile apps, and interactive experiences using cutting-edge technologies. Every line of code is written with purpose, creating solutions that are both functional and beautiful.",
      imageUrl: "https://images.unsplash.com/photo-1733412505442-36cfa59a4240?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjBzY3JlZW4lMjBkYXJrfGVufDF8fHx8MTc1Njc0MjIzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      accentColor: "linear-gradient(to right, #10b981, #059669)",
      projects: [
        {
          title: "React Dashboard",
          description: "A modern analytics dashboard with real-time data visualization",
        },
        {
          title: "AI Art Generator",
          description: "Web application that generates art using machine learning algorithms",
        },
      ]
    },
    {
      id: "video",
      title: "Video",
      description: "Telling stories through motion and light. I create compelling video content ranging from short films to promotional videos, combining cinematic techniques with innovative editing to produce content that captivates and inspires audiences.",
      imageUrl: "https://images.unsplash.com/photo-1502209877429-d7c6df9eb3f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjB3b3Jrc3BhY2UlMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NTY2OTI2MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      accentColor: "linear-gradient(to right, #f59e0b, #ef4444)",
      projects: [
        {
          title: "Motion Graphics Reel",
          description: "A showcase of animated graphics and visual effects",
        },
        {
          title: "Documentary Short",
          description: "An intimate portrait exploring creativity in the digital age",
        },
      ]
    },
  ];

  if (currentPage === 'blog') {
    return (
      <div className="min-h-screen bg-background text-foreground dark">
        <BlogPage
          onBack={() => setCurrentPage('portfolio')}
          onNavigate={(page) => setCurrentPage(page)}
        />
      </div>
    );
  }

  if (currentPage === 'vlogs') {
    return (
      <div className="min-h-screen bg-background text-foreground dark">
        <VlogsPage
          onBack={() => setCurrentPage('portfolio')}
          onNavigate={(page) => setCurrentPage(page)}
        />
      </div>
    );
  }

  if (currentPage === 'notes') {
    return (
      <div className="min-h-screen bg-background text-foreground dark">
        <NotesPage
          onBack={() => setCurrentPage('portfolio')}
          onNavigate={(page) => setCurrentPage(page)}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Navigation onNavigateToBlog={() => setCurrentPage('blog')} />
      <HeroSection />
      <AboutSection />

      {portfolioSections.map((section) => (
        <PortfolioSection
          key={section.id}
          {...section}
        />
      ))}

      <ContactSection />

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50 text-center text-muted-foreground">
        <p>&copy; 2025 Creative Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}