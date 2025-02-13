
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
    title: "The Open-Source Toolkit for Building AI Agents",
    date: "2025-02-15",
    image: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9d163d4c-73d3-4cab-b150-956c0cd6f49e_2174x1210.png",
    excerpt: "Welcome to a new post in the AI Agents Series - helping AI developers and researchers deploy and make sense of the next step in AI.",
    content: `Form for an agent-first future - from websites optimizing for AI interaction through "agent-responsive design" to the emergence of Agent Engine Optimization (AEO) as the next SEO. 
    We saw how tech giants like Google, Apple, OpenAI, and Anthropic are racing to define this next evolution of digital interaction, with Gartner projecting that by 2028, 33% of enterprise software applications will include agentic AI.

    In this post, I'll outline a curated, though non-exhaustive, overview of the open-source ecosystem for developers creating these AI agents. While numerous market maps exist for AI agents, they often cater more to venture capitalists than builders. Developers need actionable tools and frameworks to launch functional AI agents today.

    Which tools do other builders rely on to develop voice agents? What’s the leading open model for document understanding? With new packages emerging almost daily, I’ll focus solely on the libraries I’ve personally found most effective. This list is, therefore, intentionally selective rather than exhaustive.

    Every package included here supports commercial use and has a permissive open-source license.

    With the holiday season coming, there's no better time to dive into these tools and start building.

    Categories covered in this piece:
    → Frameworks for Building and Orchestrating Agents
    → Computer and Browser Use
    → Voice
    → Document Understanding  
    → Memory
    → Testing and Evaluation
    → Monitoring and Observability
    → Simulation
    → Vertical Agents`,
  },
{
    id: 2,
    title: "Mastering TypeScript: Tips and Best Practices",
    date: "2025-01-20",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
    excerpt: "Discover essential TypeScript techniques for writing clean and scalable code.",
    content: `TypeScript offers static typing, better code organization, and enhanced tooling support. 
    In this post, we’ll explore the best practices for working with TypeScript, including strict typing, interfaces, utility types, and error handling strategies...`,
  },
  {
    id: 3,
    title: "Building Scalable APIs with NestJS",
    date: "2025-02-05",
    image: "https://images.unsplash.com/photo-1551836022-deb5e9f0be30",
    excerpt: "Learn how to develop high-performance, maintainable APIs using NestJS.",
    content: `NestJS is a progressive Node.js framework that helps developers build efficient and scalable APIs. 
    This guide covers module organization, dependency injection, database integration with TypeORM, and real-world examples of structuring a NestJS project for production...`,
  },
  {
    id: 4,
    title: "The Rise of AI in Healthcare",
    date: "2025-02-10",
    image: "https://images.unsplash.com/photo-1605379399642-870262d3d051",
    excerpt: "How artificial intelligence is transforming the healthcare industry.",
    content: `AI is playing a critical role in healthcare, from diagnostics and personalized medicine to robotic surgery and predictive analytics. 
    In this article, we’ll dive into the latest AI advancements, ethical concerns, and future prospects in the medical field...`,
  },
  {
    id: 5,
    title: "Optimizing Web Performance in 2025",
    date: "2025-01-28",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    excerpt: "Speed matters! Learn how to optimize your website for better performance.",
    content: `Website performance is crucial for user experience and SEO rankings. 
    This post explores modern optimization techniques such as lazy loading, efficient caching strategies, CDNs, and advanced image formats like AVIF and WebP...`,
  },
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
