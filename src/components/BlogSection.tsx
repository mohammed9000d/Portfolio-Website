import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Clock, ArrowRight } from 'lucide-react';

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Building Multi-Tenant Applications with Laravel',
      excerpt: 'Deep dive into scalable architecture patterns for SaaS platforms. Learn how to design tenant isolation, shared resources, and efficient data management.',
      readTime: '8 min read',
      publishedDate: '2024-01-15',
      tags: ['Laravel', 'Architecture', 'Multi-tenancy'],
      url: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Optimizing Laravel Performance for 10K+ Users',
      excerpt: 'Performance optimization strategies that helped scale applications to handle thousands of concurrent users. Database optimization, caching, and queue management.',
      readTime: '6 min read',
      publishedDate: '2024-01-10',
      tags: ['Laravel', 'Performance', 'Scalability'],
      url: '#'
    },
    {
      id: 3,
      title: 'Modern API Design Patterns for Laravel',
      excerpt: 'Best practices for building RESTful APIs with Laravel. Authentication, validation, rate limiting, and comprehensive error handling.',
      readTime: '7 min read',
      publishedDate: '2024-01-05',
      tags: ['Laravel', 'API Design', 'Best Practices'],
      url: '#'
    }
  ];

  return (
    <section className="section-padding bg-gray-50 dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Technical Insights & Articles</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Sharing knowledge and best practices from my experience building scalable applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-dark-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-dark-600 enhanced-hover"
              >
                <div className="p-6 space-y-4">
                  {post.featured && (
                    <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm rounded-full font-medium">
                      Featured
                    </span>
                  )}
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href={post.url}
                      className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium text-sm hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200 group-hover:translate-x-1"
                    >
                      Read Article
                      <ArrowRight className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200"
            >
              View All Articles
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
