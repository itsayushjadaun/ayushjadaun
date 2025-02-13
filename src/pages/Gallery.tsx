
import { ThemeProvider } from 'next-themes';
import { ThemeToggle } from '@/components/ThemeToggle';
import ScrollAnimation from '@/components/ScrollAnimation';
import { Link } from 'react-router-dom';
import { Github, Instagram, Linkedin, ChevronLeft } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

const Gallery = () => {
  const images = [
    {
      id: 1,
      src: "/lovable-uploads/159c49f6-31da-4a84-832b-09494ff7a89a.png",
      title: "Profile Picture",
      description: "Professional headshot"
    },
     {
      id: 1,
      src: "/lovable-uploads/159c49f6-31da-4a84-832b-09494ff7a89a.png",
      title: "Profile Picture",
      description: "Professional headshot"
    }
    // Add more images as needed
  ];

  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <div className="min-h-screen bg-background text-foreground">
        <header className="fixed top-0 w-full z-50 glass">
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 hover:opacity-75 transition-opacity">
              <ChevronLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
            <ThemeToggle />
          </nav>
        </header>

        <main className="pt-24">
          <div className="container mx-auto px-6 py-20">
            <ScrollAnimation>
              <h1 className="text-4xl font-bold mb-12">Gallery</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {images.map((image) => (
                  <ScrollAnimation key={image.id} className="glass rounded-2xl overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                      <p className="text-muted-foreground">{image.description}</p>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Gallery;
