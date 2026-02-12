import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";
const projects = [{
  title: "Portfolio Webpage",
  description: "Designed and developed a modern, responsive personal portfolio website to showcase my skills, education, internships, and projects. Built with React, TypeScript, and Tailwind CSS, featuring smooth animations and a clean dark theme.",
  tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
  github: "https://github.com/takachi05",
  live: "https://portfolio2chine2sohaib.lovable.app"
}, {
  title: "USB Activity Monitoring & Alerting System",
  description: "Designed and developed a system to monitor USB device activity in real time, detect unauthorized connections, and generate automated alerts. Logs all USB events for traceability and improved security in sensitive environments.",
  tech: ["Python", "System APIs", "Logging", "Event Detection"],
  github: "https://github.com/takachi05",
  live: "#"
}, {
  title: "Log-Based Alerting & Monitoring Platform",
  description: "Built a log monitoring system that analyzes system and application logs to detect anomalies, errors, and suspicious behavior. Triggers alerts based on predefined rules for quick incident response.",
  tech: ["Python", "Log Parsing", "Linux", "Automation"],
  github: "https://github.com/takachi05",
  live: "#"
}];
const ProjectsSection = () => {
  return <section id="projects" className="bg-card">
      <div className="section-container">
        <h2 className="section-title text-muted-foreground">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => <div key={index} className="group p-6 rounded-xl bg-background card-hover border border-border opacity-0 animate-scale-in" style={{
          animationDelay: `${0.1 + index * 0.1}s`
        }}>
              <div className="flex items-start justify-between mb-4 text-inherit">
                <Folder className="w-10 h-10 text-primary" />
                <div className="flex gap-3">
                  <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => <span key={techIndex} className="px-3 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded-full">
                    {tech}
                  </span>)}
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default ProjectsSection;