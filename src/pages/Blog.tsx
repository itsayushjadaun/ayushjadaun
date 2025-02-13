
import { ThemeProvider } from 'next-themes';
import { ThemeToggle } from '@/components/ThemeToggle';
import ScrollAnimation from '@/components/ScrollAnimation';
import { Link } from 'react-router-dom';
import { Github, Instagram, Linkedin, ChevronLeft } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Getting Started with Backend Development",
      date: "2024-03-15",
      image: "/lovable-uploads/159c49f6-31da-4a84-832b-09494ff7a89a.png",
      excerpt: "My journey into backend development and how I got started with Node.js and Golang.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    // Add more blog posts as needed
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
              <h1 className="text-4xl font-bold mb-12">Blog</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {posts.map((post) => (
                  <ScrollAnimation key={post.id} className="glass rounded-2xl overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{post.date}</p>
                      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                      <p className="text-muted-foreground">{post.content}</p>
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

export default Blog;
