import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Fatima Al-Rashid',
      position: 'CEO at Oyoun Media',
      company: 'Oyoun Media',
      avatar: 'FA',
      rating: 5,
      quote: 'Mohammed delivered a multi-tenant platform that exceeded our expectations. His Laravel expertise enabled us to scale to 50+ clients seamlessly. The platform now handles 10,000+ users with 99.9% uptime.',
      project: 'Oyoun Academy Platform',
      results: ['50+ clients onboarded', '10,000+ active users', '99.9% uptime achieved']
    },
    {
      id: 2,
      name: 'Dr. Sarah Al-Zahra',
      position: 'Director of Scholarships',
      company: 'JEWELS Jordan',
      avatar: 'SA',
      rating: 5,
      quote: 'Mohammed transformed our scholarship management from a manual nightmare to a streamlined digital experience. The platform handles 500+ applications seamlessly with 85% process automation.',
      project: 'Educational Platform',
      results: ['500+ students served', '85% process automation', '98% user satisfaction']
    },
    {
      id: 3,
      name: 'Ahmed Mansour',
      position: 'Financial Advisor',
      company: 'Qudra Financial',
      avatar: 'AM',
      rating: 5,
      quote: 'The Qudra Calculator has become essential for our financial planning. Mohammed delivered a professional tool that our clients love and trust, with 99.9% calculation accuracy.',
      project: 'Financial Calculator Platform',
      results: ['1000+ active users', '99.9% accuracy rate', '94% user retention']
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-purple-50 dark:from-dark-800 dark:to-dark-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">What Clients Say</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Real feedback from clients whose businesses I've helped transform through technology
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-dark-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-200 dark:border-dark-600 enhanced-hover"
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Project & Results */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    {testimonial.project}
                  </h4>
                  <div className="space-y-2">
                    {testimonial.results.map((result, i) => (
                      <div key={i} className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Client Info */}
                <div className="flex items-center space-x-3 pt-4 border-t border-gray-200 dark:border-dark-600">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 dark:text-primary-400 font-bold text-lg">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-gray-100">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.position}
                    </div>
                    <div className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '100%', label: 'Client Satisfaction', icon: CheckCircle },
                { number: '30+', label: 'Projects Delivered', icon: CheckCircle },
                { number: '5+', label: 'Years Experience', icon: CheckCircle },
                { number: '10K+', label: 'Users Impacted', icon: CheckCircle }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
