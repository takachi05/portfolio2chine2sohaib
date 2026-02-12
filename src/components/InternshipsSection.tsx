import { Briefcase, Calendar, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import samsung1 from "@/assets/internships/samsung-1.jpg";
import samsung2 from "@/assets/internships/samsung-2.jpg";
import samsung3 from "@/assets/internships/samsung-3.jpg";
import samsung4 from "@/assets/internships/samsung-4.jpg";
import samsung6 from "@/assets/internships/samsung-6.jpg";
import samsung7 from "@/assets/internships/samsung-7.jpg";
import schneider1 from "@/assets/internships/schneider-1.jpg";

interface Internship {
  id: number;
  title: string;
  company: string;
  location: string;
  year: string;
  description: string;
  images: string[];
}

const internships: Internship[] = [
  {
    id: 1,
    title: "QA/QC & Control Systems Intern",
    company: "SAMSUNG C&T CORPORATION",
    location: "Mostaganem, Algeria",
    year: "2024",
    description: `I completed an internship at Samsung C&T Corporation, a global engineering and construction company, within the Quality Assurance / Quality Control (QA/QC) department on a 1,450 MW combined cycle power plant project for SONALGAZ.

During this internship, I contributed to the Control & Command operations and quality validation of critical power plant systems. My responsibilities included participating in testing and inspection activities for electrical cabinets and supervising automated control systems used to monitor and operate gas and steam turbines, steam generators, transformers, cooling systems, and other core plant equipment through industrial control systems and human–machine interfaces (HMI).

I worked closely with Electrical & Instrumentation (E&I), Mechanical Engineering, and Control & Command teams to ensure compliance with technical standards, safety requirements, and project specifications.`,
    images: [samsung1, samsung2, samsung3, samsung4, samsung6, samsung7],
  },
  {
    id: 2,
    title: "Electrical Safety Training & Certification (NF C18-510)",
    company: "SCHNEIDER ELECTRIC",
    location: "Algiers, Algeria",
    year: "2024",
    description: `I completed an electrical safety training and certification program (Habilitation électrique HTA ET BT - AS+BS) at the Schneider Training Institute of Algeria (ISFA), in compliance with the NF C18-510 standard.

The program covered risk identification for low voltage (BT) and high voltage (HTA) electrical installations, safety regulations, lockout/tagout procedures, and intervention protocols. The training included both theoretical and practical assessments, culminating in a QCM-based evaluation to validate competency in working safely on and around electrical installations.`,
    images: [schneider1],
  },
];

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative group">
      <div className="overflow-hidden rounded-xl aspect-video bg-muted">
        <img
          src={images[currentIndex]}
          alt={`Internship image ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-500"
        />
      </div>
      
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-6"
                    : "bg-foreground/50 hover:bg-foreground/70"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const InternshipsSection = () => {
  return (
    <section id="internships" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">&lt;</span>
            Internships
            <span className="text-primary">/&gt;</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional experiences that shaped my career in engineering
          </p>
        </div>

        <div className="space-y-16">
          {internships.map((internship, index) => (
            <div
              key={internship.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-6 p-6">
                  {/* Image Carousel */}
                  <div className="order-2 md:order-1">
                    <ImageCarousel images={internship.images} />
                  </div>

                  {/* Content */}
                  <div className="order-1 md:order-2 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-primary mb-3">
                      <Briefcase className="w-5 h-5" />
                      <span className="text-sm font-medium">{internship.company}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {internship.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-4 text-muted-foreground text-sm mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{internship.year}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{internship.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {internship.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipsSection;
