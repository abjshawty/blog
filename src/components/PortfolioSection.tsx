import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

interface PortfolioSectionProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  accentColor: string;
  projects?: Array<{
    title: string;
    description: string;
    link?: string;
  }>;
}

export function PortfolioSection({ 
  id, 
  title, 
  description, 
  imageUrl, 
  accentColor,
  projects = []
}: PortfolioSectionProps) {
  return (
    <section id={id} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span 
                className="bg-clip-text text-transparent"
                style={{ 
                  backgroundImage: accentColor 
                }}
              >
                {title}
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {description}
            </p>
            
            {projects.length > 0 && (
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold">Featured Projects</h3>
                {projects.map((project, index) => (
                  <Card key={index} className="p-4 border-border/50 hover:border-border transition-colors">
                    <h4 className="font-medium mb-2">{project.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                    {project.link && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(project.link, '_blank')}
                        className="hover:bg-accent"
                      >
                        View Project
                      </Button>
                    )}
                  </Card>
                ))}
              </div>
            )}
            
            <Button 
              className="text-white px-6 py-3"
              style={{ 
                backgroundImage: accentColor 
              }}
            >
              Explore More
            </Button>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div 
              className="absolute inset-0 rounded-2xl blur-2xl opacity-20"
              style={{ 
                backgroundImage: accentColor 
              }}
            />
            <ImageWithFallback
              src={imageUrl}
              alt={title}
              className="relative z-10 w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}