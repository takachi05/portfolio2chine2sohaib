import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      // Open email client with pre-filled subject and body
      const subject = "Portfolio Contact Form";
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      window.location.href = `mailto:sohaib.chine111@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Reset form and show confirmation
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };
  return <section id="contact" className="bg-card">
      <div className="section-container">
        <h2 className="section-title text-muted-foreground">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            I'm currently open to new opportunities. Whether you have a question 
            or just want to say hi, feel free to reach out!
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6 opacity-0 animate-slide-in-left" style={{
            animationDelay: '0.2s'
          }}>
              <h3 className="text-xl font-semibold mb-6 text-muted-foreground">Contact Information</h3>
              
              <a href="mailto:sohaib.chine111@gmail.com" className="flex items-center gap-4 p-4 rounded-lg bg-background hover:bg-secondary/50 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-muted-foreground">sohaib.chine111@gmail.com</p>
                </div>
              </a>
              
              <a href="tel:+213656019716" className="flex items-center gap-4 p-4 rounded-lg bg-background hover:bg-secondary/50 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium text-muted-foreground">+213 656 019 716</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 p-4 rounded-lg bg-background">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-muted-foreground">Barika, Algeria</p>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="pt-6">
                <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/in/sohaib-chine" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://github.com/takachi05" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="p-6 rounded-xl bg-background border border-border opacity-0 animate-slide-in-right" style={{
            animationDelay: '0.3s'
          }}>
              <h3 className="text-xl font-semibold mb-6 text-muted-foreground">Send a Message</h3>
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-muted-foreground">Name</label>
                  <input type="text" id="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" placeholder="Your name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-muted-foreground">Email</label>
                  <input type="email" id="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" placeholder="your@email.com" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-muted-foreground">Message</label>
                  <textarea id="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none" placeholder="Your message..." required />
                </div>
                {submitted && <p className="text-sm text-primary">Message sent! Opening your email client...</p>}
                <Button type="submit" className="w-full glow-effect">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;