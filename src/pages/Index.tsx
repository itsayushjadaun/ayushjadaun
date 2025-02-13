import { useEffect, useState } from 'react';
import { ThemeProvider } from 'next-themes';
import { ThemeToggle } from '@/components/ThemeToggle';
import ScrollAnimation from '@/components/ScrollAnimation';
import portfolioData from '@/data/portfolio.json';
import { Github, Linkedin, ExternalLink, Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

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
            </div>
            <div className="flex items-center gap-6">
              <ThemeToggle />
            </div>
          </nav>
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
                    onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full hover:opacity-90 transition-opacity"
                  >
                    View Projects
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <div className="mt-6 flex gap-4 justify-center">
                    <a
                      href="https://preview--darkmode-portfolio.lovable.app/gallery"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:opacity-90 transition-opacity"
                    >
                      View Gallery
                    </a>
                    <a
                      href="https://preview--darkmode-portfolio.lovable.app/blog"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full hover:opacity-90 transition-opacity"
                    >
                      Visit Blog
                    </a>
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
