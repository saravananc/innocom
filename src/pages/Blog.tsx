
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SectionHeading from "@/components/SectionHeading";

const BlogPost = ({
  title,
  excerpt,
  date,
  author,
  category,
  imageUrl,
  slug,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
      <div className="aspect-video">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-innocom-600 font-medium px-3 py-1 bg-innocom-50 rounded-full">
            {category}
          </span>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-4 w-4 mr-1" />
            {date}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">
          <Link
            to={`/blog/${slug}`}
            className="hover:text-innocom-600 transition-colors"
          >
            {title}
          </Link>
        </h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1 text-gray-500" />
            <span className="text-sm text-gray-500">By {author}</span>
          </div>
          <Link
            to={`/blog/${slug}`}
            className="inline-flex items-center text-innocom-600 hover:underline font-medium"
          >
            Read More <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      title: "Top 5 Trends in Custom Software Development for 2023",
      excerpt:
        "Explore the latest trends in custom software development and how they can benefit your business in 2023 and beyond.",
      date: "August 15, 2023",
      author: "John Doe",
      category: "Development",
      imageUrl:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2369",
      slug: "top-5-trends-custom-software-development-2023",
    },
    {
      title: "How Digital Marketing Is Transforming Business Growth",
      excerpt:
        "Discover how strategic digital marketing approaches are revolutionizing how businesses connect with customers and drive growth.",
      date: "July 28, 2023",
      author: "Sarah Johnson",
      category: "Digital Marketing",
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426",
      slug: "digital-marketing-transforming-business-growth",
    },
    {
      title: "The Importance of UX/UI Design in Software Development",
      excerpt:
        "Learn why user experience and interface design are critical components of successful software development projects.",
      date: "June 12, 2023",
      author: "Michael Chen",
      category: "Design",
      imageUrl:
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2370",
      slug: "importance-ux-ui-design-software-development",
    },
    {
      title: "Leveraging Cloud Solutions for Business Efficiency",
      excerpt:
        "Explore how cloud-based solutions can enhance business operations, reduce costs, and improve scalability.",
      date: "May 3, 2023",
      author: "Emily Wilson",
      category: "Cloud Computing",
      imageUrl:
        "https://images.unsplash.com/photo-1484820540004-14229fe36ca4?q=80&w=2424",
      slug: "leveraging-cloud-solutions-business-efficiency",
    },
    {
      title: "Cybersecurity Best Practices for Small Businesses",
      excerpt:
        "Essential cybersecurity measures that small businesses should implement to protect their data and systems from threats.",
      date: "April 17, 2023",
      author: "David Brown",
      category: "Cybersecurity",
      imageUrl:
        "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2370",
      slug: "cybersecurity-best-practices-small-businesses",
    },
    {
      title: "The Rise of AI in Business Process Automation",
      excerpt:
        "How artificial intelligence is revolutionizing business process automation and creating new opportunities for efficiency.",
      date: "March 5, 2023",
      author: "Jessica Lee",
      category: "Artificial Intelligence",
      imageUrl:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2232",
      slug: "rise-ai-business-process-automation",
    },
  ];

  const categories = [
    "All",
    "Development",
    "Design",
    "Digital Marketing",
    "Cloud Computing",
    "Cybersecurity",
    "Artificial Intelligence",
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-innocom-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2370')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-down">
              Our Blog
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-up">
              Insights, tips, and updates from our team of IT experts.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Blog Posts */}
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.map((post, index) => (
                  <BlogPost key={index} {...post} />
                ))}
              </div>

              <div className="mt-12 flex justify-center">
                <Button variant="outline" className="mr-2">
                  Previous
                </Button>
                <Button className="bg-innocom-600 hover:bg-innocom-700">
                  Next
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/4 space-y-8">
              {/* Search */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Search</h3>
                <div className="relative">
                  <Input placeholder="Search articles..." className="pr-10" />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link
                        to={`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-gray-600 hover:text-innocom-600 transition-colors flex items-center"
                      >
                        <span className="mr-2">•</span>
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
                <ul className="space-y-4">
                  {blogPosts.slice(0, 3).map((post, index) => (
                    <li key={index} className="flex space-x-3">
                      <div className="w-16 h-16 flex-shrink-0">
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">
                          <Link
                            to={`/blog/${post.slug}`}
                            className="hover:text-innocom-600 transition-colors"
                          >
                            {post.title}
                          </Link>
                        </h4>
                        <p className="text-gray-500 text-xs">{post.date}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="bg-innocom-50 p-6 rounded-lg shadow-md border border-innocom-100">
                <h3 className="text-xl font-bold mb-2">Subscribe</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Get the latest posts delivered right to your inbox.
                </p>
                <Input
                  placeholder="Your email address"
                  className="mb-3"
                  type="email"
                />
                <Button className="w-full bg-innocom-600 hover:bg-innocom-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
