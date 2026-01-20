import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "Diplôme d'Ingénieur & Master's in Telecommunications",
    institution: "ENSREESD - École Nationale Supérieure des Énergies Renouvelables",
    year: "2022 - 2025",
    description: "Specializing in Industrial Networks & AI. Covering AI, big data (Hadoop), smart grids, embedded networks, cloud computing, IoT, digital communications, and signal processing.",
  },
  {
    degree: "Preparatory Classes in Science and Technology",
    institution: "ENSREESD",
    year: "2020 - 2022",
    description: "Built strong foundations in advanced mathematics, physics, computer science, engineering sciences, and industrial design (AutoCAD). Passed national competitive examination.",
  },
  {
    degree: "Baccalaureate in Experimental Sciences",
    institution: "Lycée Maajouj El-Amri, Barika",
    year: "2020",
    description: "Successfully completed high school with focus on experimental sciences.",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="bg-background">
      <div className="section-container">
        <h2 className="section-title">
          My <span className="gradient-text">Education</span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
            
            {education.map((item, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row gap-6 md:gap-12 mb-12 opacity-0 animate-fade-in`}
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 mt-2 glow-effect" />
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                  <div className="p-6 rounded-xl bg-card card-hover border border-border">
                    <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <GraduationCap className="w-5 h-5 text-primary" />
                      <span className="text-sm font-mono text-primary">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{item.degree}</h3>
                    <p className="text-muted-foreground font-medium mb-3">{item.institution}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
