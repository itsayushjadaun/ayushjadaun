
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'next-themes';
import { ThemeToggle } from '@/components/ThemeToggle';
import ScrollAnimation from '@/components/ScrollAnimation';
import portfolioData from '@/data/portfolio.json';
import { Github, Instagram, Linkedin, ExternalLink, Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

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

          {/* Add placeholder sections for now */}
          <section id="about" className="min-h-screen py-20">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold mb-8">About</h2>
              {/* Content will be added in next iteration */}
            </div>
          </section>

          <section id="experience" className="min-h-screen py-20">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold mb-8">Experience</h2>
              {/* Content will be added in next iteration */}
            </div>
          </section>

          <section id="projects" className="min-h-screen py-20">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold mb-8">Projects</h2>
              {/* Content will be added in next iteration */}
            </div>
          </section>

          <section id="skills" className="min-h-screen py-20">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold mb-8">Skills</h2>
              {/* Content will be added in next iteration */}
            </div>
          </section>

          <section id="contact" className="min-h-screen py-20">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold mb-8">Contact</h2>
              {/* Content will be added in next iteration */}
            </div>
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Index;
