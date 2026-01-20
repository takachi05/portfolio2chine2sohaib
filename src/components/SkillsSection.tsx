const skills = {
  "Programming": [
    { name: "Python", level: 90 },
    { name: "Java", level: 80 },
    { name: "C/C++", level: 75 },
    { name: "JavaScript", level: 80 },
  ],
  "AI & Data": [
    { name: "TensorFlow/Keras", level: 85 },
    { name: "NumPy/Pandas", level: 88 },
    { name: "SQL/Oracle", level: 82 },
    { name: "Hadoop", level: 70 },
  ],
  "Networking & Security": [
    { name: "TCP/IP, DNS, VLANs", level: 85 },
    { name: "Kali Linux/Metasploit", level: 80 },
    { name: "Cisco Packet Tracer", level: 85 },
    { name: "Burp Suite/Nmap", level: 78 },
  ],
  "Tools & Platforms": [
    { name: "Linux/Windows", level: 90 },
    { name: "VS Code/VMware", level: 88 },
    { name: "Arduino/IoT", level: 80 },
    { name: "HTML/CSS/Tailwind", level: 85 },
  ],
};

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-background">
      <div className="section-container">
        <h2 className="section-title">
          My <span className="gradient-text">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
