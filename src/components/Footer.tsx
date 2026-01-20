import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
          Made with <Heart className="w-4 h-4 text-primary fill-primary" /> by Chine Sohaib
        </p>
        <p className="text-muted-foreground text-xs mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
