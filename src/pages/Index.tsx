
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
            <a href={`mailto:${portfolioData.personal.email}`} className="text-sm hover:opacity-75 transition-opacity">
              {portfolioData.personal.email}
            </a>
            <div className="flex items-center gap-6">
              <ThemeToggle />
              <div className="flex gap-4">
                <a href={portfolioData.personal.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 hover:opacity-75 transition-opacity" />
                </a>
                <a href={portfolioData.personal.social.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 hover:opacity-75 transition-opacity" />
                </a>
                <a href={portfolioData.personal.social.instagram} target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5 hover:opacity-75 transition-opacity" />
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
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full hover:opacity-90 transition-opacity"
                >
                  Latest Work
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </ScrollAnimation>

            <ScrollAnimation className="fade-in">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center opacity-60">
                {portfolioData.companies.map((company) => (
                  <div key={company.name} className="w-32">
                    <img src={company.logo} alt={company.name} className="w-full h-auto" />
                  </div>
                ))}
              </div>
            </ScrollAnimation>
          </section>

          <section className="container mx-auto px-6 py-20">
            <ScrollAnimation>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">
                Collaborate with brands and agencies<br />
                to create impactful results.
              </h2>
            </ScrollAnimation>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {portfolioData.services.map((service, index) => (
                <ScrollAnimation key={service.title} className="slide-up" style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="glass p-6 rounded-2xl h-full">
                    <div className="mb-4">
                      <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center mb-6">
                        <img src={`/icons/${service.icon}.svg`} alt={service.title} className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Index;
