const skills = {
  "Frontend": [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Next.js", level: 85 },
  ],
  "Backend": [
    { name: "Node.js", level: 88 },
    { name: "Python", level: 82 },
    { name: "PostgreSQL", level: 85 },
    { name: "GraphQL", level: 78 },
  ],
  "Tools & Others": [
    { name: "Git", level: 90 },
    { name: "Docker", level: 80 },
    { name: "AWS", level: 75 },
    { name: "CI/CD", level: 82 },
  ],
};

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-background">
      <div className="section-container">
        <h2 className="section-title">
          My <span className="gradient-text">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, categorySkills], categoryIndex) => (
            <div 
              key={category}
              className="p-6 rounded-xl bg-card card-hover border border-border opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.2 + categoryIndex * 0.15}s` }}
            >
              <h3 className="text-xl font-semibold mb-6 text-center">
                {category}
              </h3>
              
              <div className="space-y-5">
                {categorySkills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-sm text-muted-foreground font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          background: 'var(--gradient-primary)',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
