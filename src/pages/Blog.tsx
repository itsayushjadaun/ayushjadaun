
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
      image: "/https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9d163d4c-73d3-4cab-b150-956c0cd6f49e_2174x1210.png",
      excerpt: "Welcome to a new post in the AI Agents Series - helping AI developers and researchers deploy and make sense of the next step in AI.",
      content: "form for an agent-first future - from websites optimizing for AI interaction through "agent-responsive design" to the emergence of Agent Engine Optimization (AEO) as the next SEO. We saw how tech giants like Google, Apple, OpenAI, and Anthropic are racing to define this next evolution of digital interaction, with Gartner projecting that by 2028, 33% of enterprise software applications will include agentic AI.
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
    → Vertical Agents "
    }
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
