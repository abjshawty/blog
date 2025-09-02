import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { motion } from "motion/react";

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Let's Create Together
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Whether it's art, music, code, or video, 
            I'd love to hear about your vision and see how we can bring it to life.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2">Name</label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="bg-background/50"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">Email</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-background/50"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2">Subject</label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="What's this about?"
                  className="bg-background/50"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="bg-background/50 resize-none"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-3"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="flex justify-center gap-6">
            <Button 
              variant="outline" 
              onClick={() => window.open('mailto:contact@portfolio.com', '_blank')}
              className="hover:bg-accent"
            >
              Email
            </Button>
            <Button 
              variant="outline" 
              onClick={() => window.open('https://linkedin.com', '_blank')}
              className="hover:bg-accent"
            >
              LinkedIn
            </Button>
            <Button 
              variant="outline" 
              onClick={() => window.open('https://github.com', '_blank')}
              className="hover:bg-accent"
            >
              GitHub
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}