import { useEffect, useState } from 'react';
import { ThemeProvider } from 'next-themes';
import { ThemeToggle } from '@/components/ThemeToggle';
import ScrollAnimation from '@/components/ScrollAnimation';
import portfolioData from '@/data/portfolio.json';
import { Github, Instagram, Linkedin, ExternalLink, Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    document.title = `${portfolioData.personal.name} - Portfolio`;
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <div className="min-h-screen bg-background text-foreground">
        <header className="fixed top-0 w-full z-50 glass">
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-8">
              <a href={`mailto:${portfolioData.personal.email}`} className="text-sm hover:opacity-75 transition-opacity">
                {portfolioData.personal.email}
              </a>
              <div className="hidden md:flex gap-6">
                {sections.map(section => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="nav-link"
                  >
                    {section.label}
                  </button>
                ))}
                <Link to="/gallery" className="nav-link">Gallery</Link>
                <Link to="/blog" className="nav-link">Blog</Link>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <ThemeToggle />
              <div className="hidden md:flex gap-4">
                <a href={portfolioData.personal.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 hover:opacity-75 transition-opacity" />
                </a>
                <a href={portfolioData.personal.social.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 hover:opacity-75 transition-opacity" />
                </a>
              </div>
              {isMobile && (
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden"
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              )}
            </div>
          </nav>
          {/* Mobile Menu */}
          {isMenuOpen && isMobile && (
            <div className="glass md:hidden py-4">
              <div className="container mx-auto px-6 flex flex-col gap-4">
                {sections.map(section => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="text-left py-2"
                  >
                    {section.label}
                  </button>
                ))}
                <div className="flex gap-4 pt-4">
                  <a href={portfolioData.personal.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 hover:opacity-75 transition-opacity" />
                  </a>
                  <a href={portfolioData.personal.social.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 hover:opacity-75 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </header>

        <main>
          <section id="home" className="min-h-screen pt-24">
            <div className="container mx-auto px-6 py-20">
              <ScrollAnimation>
                <div className="text-center mb-20">
                  <img
                    src={portfolioData.personal.image}
                    alt={portfolioData.personal.name}
                    className="w-32 h-32 rounded-full mx-auto mb-8 object-cover"
                  />
                  <h1 className="text-4xl md:text-6xl font-bold max-w-3xl mx-auto mb-8">
                    {portfolioData.personal.title}
                  </h1>
                  <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                    {portfolioData.personal.summary}
                  </p>
<button
  onClick={() => scrollToSection('projects')}
  className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full hover:opacity-90 transition-opacity"
>
  View Projects
  <ExternalLink className="w-4 h-4" />
</button>

<button
  onClick={() => window.location.href = 'https://preview--darkmode-portfolio.lovable.app/blog'}
  className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full hover:opacity-90 transition-opacity"
>
  View Blog
  <ExternalLink className="w-4 h-4" />
</button>

                </div>
              </ScrollAnimation>

              <ScrollAnimation className="fade-in">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {portfolioData.skills.frameworks.slice(0, 4).map((skill, index) => (
                    <ScrollAnimation key={skill} className="slide-up" delay={index}>
                      <div className="glass p-6 rounded-2xl h-full">
                        <h3 className="text-xl font-semibold mb-2">{skill}</h3>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </ScrollAnimation>
            </div>
          </section>

          <section id="about" className="min-h-screen py-20">
            <div className="container mx-auto px-6">
              <ScrollAnimation>
                <h2 className="text-3xl font-bold mb-12">About Me</h2>
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <div className="glass p-6 rounded-2xl">
                      <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                      <div className="space-y-2">
                        <p>📍 {portfolioData.personal.location}</p>
                        <p>📞 {portfolioData.personal.phone}</p>
                        <p>📧 {portfolioData.personal.email}</p>
                      </div>
                    </div>
                    <div className="glass p-6 rounded-2xl">
                      <h3 className="text-xl font-semibold mb-4">Languages</h3>
                      {portfolioData.languages.map(lang => (
                        <div key={lang.name} className="mb-2">
                          <span className="font-medium">{lang.name}</span> - {lang.level}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="glass p-6 rounded-2xl">
                    <h3 className="text-xl font-semibold mb-4">Education</h3>
                    <div className="space-y-4">
                      <h4 className="font-medium">{portfolioData.education.degree}</h4>
                      <p>{portfolioData.education.field}</p>
                      <p>{portfolioData.education.school}</p>
                      <p>Duration: {portfolioData.education.duration}</p>
                      <p>CGPA: {portfolioData.education.gpa}</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </section>

          <section id="experience" className="min-h-screen py-20">
            <div className="container mx-auto px-6">
              <ScrollAnimation>
                <h2 className="text-3xl font-bold mb-12">Experience</h2>
                <div className="space-y-8">
                  {portfolioData.experience.map((exp, index) => (
                    <ScrollAnimation key={index} className="glass p-6 rounded-2xl">
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-muted-foreground mb-4">{exp.company} | {exp.duration}</p>
                      <ul className="list-disc list-inside space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-muted-foreground">{achievement}</li>
                        ))}
                      </ul>
                    </ScrollAnimation>
                  ))}
                </div>
              </ScrollAnimation>
            </div>
          </section>

          <section id="projects" className="min-h-screen py-20">
            <div className="container mx-auto px-6">
              <ScrollAnimation>
                <h2 className="text-3xl font-bold mb-12">Projects</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {portfolioData.projects.map((project, index) => (
                    <ScrollAnimation key={index} className="glass p-6 rounded-2xl">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-foreground/10 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </ScrollAnimation>
            </div>
          </section>

          <section id="skills" className="min-h-screen py-20">
            <div className="container mx-auto px-6">
              <ScrollAnimation>
                <h2 className="text-3xl font-bold mb-12">Skills</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <ScrollAnimation className="glass p-6 rounded-2xl">
                    <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      {portfolioData.skills.languages.map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-foreground/10 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </ScrollAnimation>
                  
                  <ScrollAnimation className="glass p-6 rounded-2xl">
                    <h3 className="text-xl font-semibold mb-4">Frameworks & Libraries</h3>
                    <div className="flex flex-wrap gap-2">
                      {portfolioData.skills.frameworks.map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-foreground/10 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </ScrollAnimation>
                  
                  <ScrollAnimation className="glass p-6 rounded-2xl">
                    <h3 className="text-xl font-semibold mb-4">Databases</h3>
                    <div className="flex flex-wrap gap-2">
                      {portfolioData.skills.databases.map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-foreground/10 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </ScrollAnimation>
                  
                  <ScrollAnimation className="glass p-6 rounded-2xl">
                    <h3 className="text-xl font-semibold mb-4">DevOps & Cloud Tools</h3>
                    <div className="flex flex-wrap gap-2">
                      {portfolioData.skills.devops.map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-foreground/10 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </ScrollAnimation>
                </div>
              </ScrollAnimation>
            </div>
          </section>

          <section id="contact" className="min-h-screen py-20">
            <div className="container mx-auto px-6">
              <ScrollAnimation>
                <h2 className="text-3xl font-bold mb-12">Contact</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="glass p-6 rounded-2xl">
                    <h3 className="text-xl font-semibold mb-6">Let's Connect</h3>
                    <div className="space-y-4">
                      <p>📍 {portfolioData.personal.location}</p>
                      <p>📞 {portfolioData.personal.phone}</p>
                      <p>📧 {portfolioData.personal.email}</p>
                      <div className="flex gap-4 mt-6">
                        <a 
                          href={portfolioData.personal.social.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 glass rounded-full hover:scale-110 transition-transform"
                        >
                          <Linkedin className="w-6 h-6" />
                        </a>
                        <a 
                          href={portfolioData.personal.social.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 glass rounded-full hover:scale-110 transition-transform"
                        >
                          <Github className="w-6 h-6" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="glass p-6 rounded-2xl">
                    <h3 className="text-xl font-semibold mb-6">Certifications</h3>
                    <div className="space-y-4">
                      {portfolioData.certifications.map((cert, index) => (
                        <div key={index} className="mb-4">
                          <h4 className="font-medium">{cert.title}</h4>
                          <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                          <p className="text-sm text-muted-foreground">{cert.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Index;
