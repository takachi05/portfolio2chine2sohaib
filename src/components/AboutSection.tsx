import { User, Code, GraduationCap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="bg-card">
      <div className="section-container">
        <h2 className="section-title">
          <span className="gradient-text">About</span> Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 opacity-0 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Computer Engineer driven by the challenge of designing 
              intelligent systems that operate in real-world and resource-constrained 
              environments. My interests span machine learning, system optimization, 
              and data-driven engineering, where I focus on turning complex ideas into 
              practical, efficient solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not building or experimenting, you'll find me exploring emerging 
              technologies, refining research ideas, and continuously learning—often in 
              challenging environments—driven by curiosity, resilience, and the desire 
              to create systems that truly make an impact.
            </p>
            
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center p-4 rounded-lg bg-secondary/50">
                <Code className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-2xl font-bold">3</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary/50">
                <GraduationCap className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-2xl font-bold">Fresh</p>
                <p className="text-sm text-muted-foreground">Graduate</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary/50">
                <User className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-2xl font-bold">∞</p>
                <p className="text-sm text-muted-foreground">Curiosity</p>
              </div>
            </div>
          </div>
          
          <div className="relative opacity-0 animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center">
              <div className="w-full h-full rounded-xl bg-muted/50 flex items-center justify-center">
                <User className="w-32 h-32 text-primary/30" />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
