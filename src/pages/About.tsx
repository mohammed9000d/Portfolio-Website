import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ExternalLink, Award, CheckCircle2, Layers, Code2, Database, Heart, Zap, Target, TrendingUp, Calendar } from 'lucide-react';

const About: React.FC = () => {
  // Set page metadata for SEO
  useEffect(() => {
    document.title = "About Mohammed Ghonaim - Full-Stack Laravel Developer & Team Lead";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Experienced Full-Stack Laravel Developer and Team Lead with 5+ years of expertise in building scalable web applications. Specializing in Laravel, PHP, MySQL, and modern development practices.'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Experienced Full-Stack Laravel Developer and Team Lead with 5+ years of expertise in building scalable web applications. Specializing in Laravel, PHP, MySQL, and modern development practices.';
      document.head.appendChild(meta);
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Mohammed Ghonaim",
      "jobTitle": "Full-Stack Laravel Developer & Team Lead",
      "url": window.location.href,
      "sameAs": [],
      "email": "mohammed9000dd@gmail.com",
      "telephone": ["+201501255871", "+201034731279"],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Cairo",
        "addressRegion": "Nasr City",
        "addressCountry": "EG"
      },
      "knowsAbout": ["Laravel", "PHP", "MySQL", "JavaScript", "REST API", "Multi-tenancy", "AWS"],
      "alumniOf": {
        "@type": "Organization",
        "name": "University of Palestine"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);


  const achievements = [
    {
      company: 'Vision Plus',
      position: 'Laravel PHP Developer',
      period: 'Jan 2020 - Sep 2020',
      description: 'Developed and maintained Laravel applications with focus on clean code and best practices.',
      metrics: '15+ features delivered, 98% code review approval rate'
    },
    {
      company: 'Ajyal Foundation',
      position: 'Laravel PHP Developer',
      period: 'Aug 2021 - Sep 2021',
      description: 'Built robust web applications using Laravel framework and modern development practices.',
      metrics: '3 major projects completed, 40% performance improvement'
    }
  ];

  const experience = [
    {
      company: 'Al-Tariq Software Projects',
      position: 'Back End Laravel Developer',
      period: 'Oct 2020 - Feb 2021',
      location: 'Gaza, Gaza Strip',
      duration: '5 mos',
      description: 'Started my professional journey building and maintaining Laravel backends with mentorship and code reviews.',
      highlights: [
        'Implemented 20+ CRUD modules with Eloquent and validation',
        'Collaborated through Git flow with 100% code review coverage',
        'Reduced production bugs by 60% through systematic debugging'
      ]
    },
    {
      company: 'DroobUni. | دروب جامعية',
      position: 'Full-stack Laravel Developer',
      period: 'May 2021 - Sep 2021',
      location: 'Gaza, Gaza Strip · Remote',
      duration: '5 mos',
      description: 'Contributed across backend and frontend to deliver new features in a fast-paced startup.',
      highlights: [
        'Designed and shipped 12+ REST endpoints and responsive Blade views',
        'Optimized queries and caching, improving page load times by 45%',
        'Collaborated with PM and designers to deliver 8 features in 3 sprints'
      ]
    },
    {
      company: 'Self-employed',
      position: 'Full-stack Laravel Developer',
      period: 'Sep 2021 - Aug 2022',
      location: 'Remote',
      duration: '1 yr',
      description: 'Delivered custom Laravel solutions end‑to‑end for multiple clients as a freelancer.',
      highlights: [
        'Successfully delivered 12 projects for 8 clients with 100% satisfaction',
        'Developed complex APIs, admin dashboards, and third-party integrations',
        'Provided ongoing maintenance and training, resulting in 3 long-term contracts'
      ]
    },
    {
      company: 'Oyoun Media',
      position: 'Full-stack Laravel Developer',
      period: 'Aug 2022 - Jul 2024',
      location: 'Ramallah, West Bank · Remote',
      duration: '2 yrs',
      description: 'Core contributor to a multi‑tenant learning platform serving 10,000+ users with seamless external integrations.',
      highlights: [
        'Built tenant-aware modules supporting 50+ clients and 10,000+ users',
        'Integrated 15+ third‑party course providers via REST APIs',
        'Improved developer experience with documentation, reducing onboarding time by 70%'
      ]
    },
    {
      company: 'Oyoun Media',
      position: 'Team Lead',
      period: 'Jul 2024 - Present',
      location: 'Ramallah, West Bank · Remote',
      duration: '1 yr 2 mos',
      description: 'Leading cross‑functional teams of 5 developers to integrate new APIs, refactor core modules, and ship reliably.',
      highlights: [
        'Leading a team of 5 developers with 95% sprint completion rate',
        'Mentored 3 junior developers, with 2 receiving promotions',
        'Coordinated 20+ API integrations with zero critical production issues'
      ]
    }
  ];

  const education = [
    {
      institution: 'University of Palestine',
      degree: 'Bachelor of IT',
      period: '2017 - 2021',
      description: 'Comprehensive study of Information Technology fundamentals and modern computing practices.'
    }
  ];

  // Motion variants for staggered reveals
  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  // Core skills with simple proficiency meters
  const coreSkills = [
    { name: 'Laravel', level: 95 },
    { name: 'PHP', level: 92 },
    { name: 'MySQL', level: 90 },
    { name: 'REST API', level: 90 },
    { name: 'Multi-tenancy', level: 88 },
    { name: 'JavaScript', level: 85 },
    { name: 'AWS', level: 75 },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-purple-50 dark:from-dark-800 dark:to-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A passionate Full-stack Laravel Developer with expertise in modern web technologies 
              and a commitment to creating exceptional digital experiences.
            </p>
          </motion.div>
          {/* CTA band */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 rounded-2xl bg-white/70 dark:bg-dark-800/80 backdrop-blur border border-gray-200 dark:border-dark-700 p-5 flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold text-gray-900 dark:text-gray-100">Let’s build something great.</span> Available for collaborations and freelance work.
            </div>
            <div className="flex gap-3">
              <a href="/cv.pdf" className="btn-secondary" aria-label="Download CV PDF">Download CV</a>
              <a href="/contact" className="btn-primary" aria-label="Go to Contact page">Contact Me</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="section-padding bg-white dark:bg-dark-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">My Journey</h2>
              <div className="text-lg text-gray-600 dark:text-gray-400 space-y-4 text-left">
                <p>
                  My journey into web development began during my university years when I discovered the power of creating digital solutions that solve real-world problems. What started as curiosity about how websites work evolved into a passionate career dedicated to building scalable, user-centric applications.
                </p>
                <p>
                  Over the past 5+ years, I've had the privilege of working with diverse teams and clients, from startups to established companies, always focusing on clean code, performance optimization, and delivering exceptional user experiences. Each project has taught me something new and reinforced my belief that great software comes from understanding both the technical challenges and the human needs behind them.
                </p>
              </div>
            </div>
            
            {/* Mission & Values */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-6 rounded-xl bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 border border-primary-200 dark:border-primary-800"
              >
                <Heart className="h-8 w-8 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Passion</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Deeply passionate about crafting elegant solutions and mentoring others to grow in their development journey.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800"
              >
                <Target className="h-8 w-8 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Mission</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  To build robust, scalable applications that make a real difference in users' lives while fostering collaborative team environments.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border border-purple-200 dark:border-purple-800"
              >
                <Zap className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Innovation</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Always exploring new technologies and methodologies to deliver cutting-edge solutions that exceed expectations.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Personal Info Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <div className="w-80 h-80 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-dark-700 profile-image-container">
                <img
                  src="/images/best.jpg"
                  alt="MOHAMMED GHONAIM"
                  className="profile-image"
                />
              </div>
            </motion.div>

            {/* Personal Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Personal Information</h2>
                
                {/* Contact Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary-600" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:mohammed9000dd@gmail.com" className="text-primary-600 hover:underline">
                        mohammed9000dd@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary-600" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+201501255871" className="text-primary-600 hover:underline">
                        +20 1501255871
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary-600" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+201034731279" className="text-primary-600 hover:underline">
                        +20 1034731279
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <ExternalLink className="h-5 w-5 text-primary-600" />
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <a href="https://wa.me/970592894632" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                        +970592894632
                      </a>
                    </div>
                  </div>
                  

                  
                  <div className="flex items-center space-x-3 md:col-span-2">
                    <MapPin className="h-5 w-5 text-primary-600" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Cairo, Nasr City, El-Nasr Rd
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Availability Status */}
                <div className="mt-8 p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="font-medium text-green-700 dark:text-green-400">Available for Work</span>
                    </div>
                    <Calendar className="h-4 w-4 text-green-600" />
                  </div>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                    Currently accepting new projects and collaborations. Response time: Within 24 hours.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Achievements Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold">Achievements & Early Experience</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                Key milestones and foundational experiences in my development journey
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card p-6 border-l-4 border-l-primary-500"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Award className="h-6 w-6 text-primary-600" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                          {achievement.position}
                        </h3>
                        <p className="text-primary-600 font-medium">{achievement.company}</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-dark-700 px-3 py-1 rounded-full mt-2 md:mt-0">
                      {achievement.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">{achievement.description}</p>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">{(achievement as any).metrics}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="section-padding bg-white dark:bg-dark-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold">Work Experience</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                My professional journey in web development
              </p>
            </div>
            
            <div className="relative pl-6">
              <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-dark-700" />
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative card p-6 mb-6"
                >
                  <span className="absolute -left-3 top-6 h-3 w-3 rounded-full bg-primary-600 ring-4 ring-primary-100 dark:ring-primary-900/20" />
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                        {exp.position}
                      </h3>
                      <p className="text-primary-600 font-medium">{exp.company}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{exp.location}</p>
                    </div>
                    <div className="flex flex-col items-end space-y-2 mt-2 md:mt-0">
                      <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-dark-700 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                      <span className="text-xs text-gray-400 dark:text-gray-500 bg-primary-100 dark:bg-primary-900/20 px-2 py-1 rounded-full">
                        {exp.duration}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">{exp.description}</p>
                  {Array.isArray((exp as any).highlights) && (
                    <ul className="list-none space-y-2">
                      {(exp as any).highlights.map((h: string) => (
                        <li key={h} className="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary-600 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>



      {/* Education Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold">Education</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                My academic background and qualifications
              </p>
            </div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="card p-6"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                        {edu.degree}
                      </h3>
                      <p className="text-primary-600 font-medium">{edu.institution}</p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-dark-700 px-3 py-1 rounded-full mt-2 md:mt-0">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section - Moved to end */}
      <section className="section-padding bg-white dark:bg-dark-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold">Skills & Technologies</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                I work with a variety of technologies to create robust and scalable web applications
              </p>
            </div>
            {/* Professional Capability Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="p-6 rounded-xl bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Code2 className="h-5 w-5 text-primary-600" />
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">Backend</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  {['Laravel (Eloquent, Queues, Events)', 'RESTful API design', 'Authentication & Authorization', 'Multi-tenancy (saas)'].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary-600 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="p-6 rounded-xl bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Layers className="h-5 w-5 text-primary-600" />
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">Frontend</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  {['Blade templating', 'JavaScript (ES6+)', 'Bootstrap & Tailwind', 'Responsive design'].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary-600 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="p-6 rounded-xl bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Database className="h-5 w-5 text-primary-600" />
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">Data & DevOps</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  {['MySQL schema design & optimization', 'Caching (Redis)', 'CI/CD & Git flow', 'AWS basics (S3, EC2)'].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary-600 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            
            {/* Core Skills with Progress Bars */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-12"
            >
              <h3 className="text-2xl font-bold text-center mb-8">Technical Proficiency</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {coreSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900 dark:text-gray-100">{skill.name}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-2 rounded-full ${
                          skill.level >= 90 ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                          skill.level >= 80 ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                          'bg-gradient-to-r from-yellow-500 to-orange-500'
                        }`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats Section - Moved to end */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-purple-600 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div className="space-y-2">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold"
              >
                5+
              </motion.div>
              <p className="text-sm md:text-base text-white/90">Years Experience</p>
            </div>
            
            <div className="space-y-2">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl md:text-4xl font-bold"
              >
                30+
              </motion.div>
              <p className="text-sm md:text-base text-white/90">Projects Completed</p>
            </div>
            
            <div className="space-y-2">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl md:text-4xl font-bold"
              >
                100%
              </motion.div>
              <p className="text-sm md:text-base text-white/90">Client Satisfaction</p>
            </div>
            
            <div className="space-y-2">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-3xl md:text-4xl font-bold"
              >
                5
              </motion.div>
              <p className="text-sm md:text-base text-white/90">Team Members Led</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

