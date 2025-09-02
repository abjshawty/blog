import { Card } from "./ui/card";
import { motion } from "motion/react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-muted/20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <Card className="p-8 md:p-12 border-border/50 bg-card/50 backdrop-blur-sm">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                I love the feeling of creating something that transcends the ordinary and captures imagination. 
                Whether it's through vibrant paintings, melodic compositions, innovative code, or compelling video narratives, 
                I find joy in bringing ideas to life across multiple mediums.
              </p>
              
              <p className="text-lg leading-relaxed">
                These days, I'm exploring the intersection of technology and art, crafting digital experiences 
                that blur the lines between creativity and functionality. Every project is an opportunity to push boundaries 
                and discover new ways of expression.
              </p>
              
              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-4">What I Do</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">🎨</span>
                    </div>
                    <span className="text-sm font-medium">Digital Art</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">🎵</span>
                    </div>
                    <span className="text-sm font-medium">Music Production</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">💻</span>
                    </div>
                    <span className="text-sm font-medium">Web Development</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">🎬</span>
                    </div>
                    <span className="text-sm font-medium">Video Editing</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}