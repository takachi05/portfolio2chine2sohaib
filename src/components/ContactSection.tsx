import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-card">
      <div className="section-container">
        <h2 className="section-title">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            I'm currently open to new opportunities. Whether you have a question 
            or just want to say hi, feel free to reach out!
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6 opacity-0 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <a 
                href="mailto:john@example.com"
                className="flex items-center gap-4 p-4 rounded-lg bg-background hover:bg-secondary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">john@example.com</p>
                </div>
              </a>
              
              <a 
                href="tel:+1234567890"
                className="flex items-center gap-4 p-4 rounded-lg bg-background hover:bg-secondary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+1 (234) 567-890</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 p-4 rounded-lg bg-background">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">San Francisco, CA</p>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="pt-6">
                <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
                <div className="flex gap-4">
                  <a 
                    href="https://linkedin.com/in/johndoe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://github.com/johndoe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="p-6 rounded-xl bg-background border border-border opacity-0 animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <Button type="submit" className="w-full glow-effect">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
