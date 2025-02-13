
import { useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import { ThemeToggle } from '@/components/ThemeToggle';
import ScrollAnimation from '@/components/ScrollAnimation';
import portfolioData from '@/data/portfolio.json';
import { Github, Instagram, Linkedin, ExternalLink } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    document.title = `${portfolioData.personal.name} - Portfolio`;
  }, []);

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
                <a href="/" className="nav-link active">Home</a>
                <a href="/about" className="nav-link">About</a>
                <a href="/experience" className="nav-link">Experience</a>
                <a href="/projects" className="nav-link">Projects</a>
                <a href="/skills" className="nav-link">Skills</a>
                <a href="/contact" className="nav-link">Contact</a>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <ThemeToggle />
              <div className="flex gap-4">
                <a href={portfolioData.personal.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 hover:opacity-75 transition-opacity" />
                </a>
                <a href={portfolioData.personal.social.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 hover:opacity-75 transition-opacity" />
                </a>
              </div>
            </div>
          </nav>
        </header>

        <main className="pt-24">
          <section className="container mx-auto px-6 py-20">
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
                <a
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full hover:opacity-90 transition-opacity"
                >
                  View Projects
                  <ExternalLink className="w-4 h-4" />
                </a>
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
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Index;
