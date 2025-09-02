import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Grid3x3, CheckSquare, Palette, Settings, Menu } from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  onNavigateToBlog?: () => void;
}

export function Navigation({ onNavigateToBlog }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu after navigation
  };

  const openApp = (appName: string) => {
    // For now, these would open in new windows/tabs
    // In a real app, these might be routes or separate pages
    console.log(`Opening ${appName} app`);
    // window.open(`/${appName.toLowerCase().replace(' ', '-')}`, '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">P</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Portfolio
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('painting')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Painting
          </button>
          <button 
            onClick={() => scrollToSection('music')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Music
          </button>
          <button 
            onClick={() => scrollToSection('programming')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Programming
          </button>
          <button 
            onClick={() => scrollToSection('video')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Video
          </button>
          <button 
            onClick={onNavigateToBlog}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Blog
          </button>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Apps Dropdown - Desktop */}
          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="w-10 h-10 border-border/50 hover:bg-accent"
                >
                  <Grid3x3 className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem onClick={() => openApp('Todo List')} className="cursor-pointer">
                  <CheckSquare className="mr-2 h-4 w-4" />
                  <span>Todo List</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => openApp('Component Gallery')} className="cursor-pointer">
                  <Palette className="mr-2 h-4 w-4" />
                  <span>Component Gallery</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => openApp('BackOffice')} className="cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>BackOffice</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <Button 
            onClick={() => scrollToSection('contact')}
            className="hidden md:flex bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white"
          >
            Contact Me
          </Button>
          
          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col gap-6 mt-6">
                <div className="flex flex-col gap-4">
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-left p-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About
                  </button>
                  <button 
                    onClick={() => scrollToSection('painting')}
                    className="text-left p-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Painting
                  </button>
                  <button 
                    onClick={() => scrollToSection('music')}
                    className="text-left p-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Music
                  </button>
                  <button 
                    onClick={() => scrollToSection('programming')}
                    className="text-left p-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Programming
                  </button>
                  <button 
                    onClick={() => scrollToSection('video')}
                    className="text-left p-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Video
                  </button>
                  <button 
                    onClick={onNavigateToBlog}
                    className="text-left p-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Blog
                  </button>
                </div>
                
                <div className="border-t border-border pt-6">
                  <h3 className="px-3 mb-3 font-semibold">Apps</h3>
                  <div className="flex flex-col gap-2">
                    <button 
                      onClick={() => openApp('Todo List')}
                      className="flex items-center gap-3 p-3 text-left text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <CheckSquare className="h-4 w-4" />
                      Todo List
                    </button>
                    <button 
                      onClick={() => openApp('Component Gallery')}
                      className="flex items-center gap-3 p-3 text-left text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Palette className="h-4 w-4" />
                      Component Gallery
                    </button>
                    <button 
                      onClick={() => openApp('BackOffice')}
                      className="flex items-center gap-3 p-3 text-left text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Settings className="h-4 w-4" />
                      BackOffice
                    </button>
                  </div>
                </div>
                
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="mt-6 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white"
                >
                  Contact Me
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}