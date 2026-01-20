import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="section-container text-center relative z-10">
        <div className="space-y-6 max-w-3xl mx-auto">
          <p className="text-primary font-mono text-sm md:text-base tracking-wider opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Hello, I'm
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="gradient-text">John Doe</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-light opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Full Stack Developer
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Passionate about crafting beautiful, performant web applications 
            that solve real-world problems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <Button size="lg" className="group glow-effect" asChild>
              <a href="#contact">
                Get In Touch
              </a>
            </Button>
            <Button size="lg" variant="outline" className="group" asChild>
              <a href="/cv.pdf" download>
                <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
        
        <a 
          href="#about" 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors opacity-0 animate-fade-in"
          style={{ animationDelay: '0.7s' }}
        >
          <ArrowDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
