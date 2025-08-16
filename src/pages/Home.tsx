import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Linkedin, Mail, Phone, Code, Code2, Database, Layers, GitBranch, Cloud, Globe, Braces, Users, TrendingUp, Award, Calendar, CheckCircle2, Star, MessageSquare, ExternalLink } from 'lucide-react';
import ScrollProgress from '../components/ScrollProgress';
// import BlogSection from '../components/BlogSection';
// import TestimonialsSection from '../components/TestimonialsSection';



const Home: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Full-stack Laravel Developer';

  // Professional project data with real images and links
  const projects = useMemo(() => [
    {
      id: 1,
      title: 'Oyoun Academy',
      subtitle: 'Multi-Tenant Learning Platform',
      description: 'Comprehensive e-learning platform serving 10,000+ users across 50+ organizations with real-time content delivery, course management, and seamless integrations.',
      longDescription: 'A sophisticated multi-tenant SaaS platform that revolutionizes online learning. Built with advanced Laravel architecture to handle complex organizational structures, user management, and content delivery at scale.',
      metrics: '10K+ Users • 50+ Tenants • 99.9% Uptime',
      technologies: ['Laravel', 'Multi-tenancy', 'MySQL', 'Redis', 'Vue.js'],
      impact: '70% faster onboarding',
      results: {
        performance: '99.9% uptime with 50+ concurrent tenants',
        efficiency: '70% faster user onboarding process',
        userGrowth: '10,000+ active users across 50+ organizations',
        satisfaction: '94% client retention rate'
      },
      testimonial: {
        client: 'Fatima Al-Rashid, CEO at Oyoun Media',
        quote: 'Mohammed delivered a multi-tenant platform that exceeded our expectations. His Laravel expertise enabled us to scale to 50+ clients seamlessly.',
        rating: 5
      },
      status: 'Live',
      url: 'https://oyoun.academy',
      category: 'web',
      images: [
        '/images/projects/Oyoun Academy/screencapture-oyoun-academy-2025-08-10-16_23_21.png',
        '/images/projects/Oyoun Academy/screencapture-oyoun-academy-2025-08-10-16_25_10.png',
        '/images/projects/Oyoun Academy/screencapture-oyoun-academy-demo-request-2025-08-10-16_24_46.png',
        '/images/projects/Oyoun Academy/screencapture-oyoun-academy-pricing-2025-08-10-16_24_15.png',
        '/images/projects/Oyoun Academy/screencapture-oyoun-academy-solutions-2025-08-10-16_24_00.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 153027.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 153042.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 153106.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 153121.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 153155.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 153215.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 153240.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 153321.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 153344.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 153354.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 153404.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 153426.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 153435.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 153446.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 153455.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 153627.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 153709.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 153744.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 153754.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 153804.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 153836.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 153923.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 153931.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 153948.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 154042.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 154051.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 154102.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 154112.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 154138.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 154147.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 154159.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 154235.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 154243.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 154252.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 154312.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 154334.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 154345.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 154405.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 154424.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 154430.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 154442.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 154454.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 154510.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 154519.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 154529.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 154538.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 154546.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 154556.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 154603.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 154615.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 154625.png',
        '/images/projects/Oyoun Academy/Screenshot 2025-08-10 154636.png'
      ],
      featured: true
    },
    {
      id: 2,
      title: 'JEWELS Jordan',
      subtitle: 'Educational Platform',
      description: 'Professional educational platform for scholarship management, success stories, and team collaboration with modern UI/UX design.',
      longDescription: 'A comprehensive educational platform designed for scholarship programs and educational initiatives. Features advanced user management, content publishing, and community building tools.',
      metrics: '500+ Students • 20+ Scholarships • 95% Success Rate',
      technologies: ['Laravel', 'Educational Tech', 'MySQL', 'Bootstrap'],
      impact: '85% process automation',
      results: {
        performance: 'Reduced application processing time by 65%',
        efficiency: '85% process automation achieved',
        userGrowth: '300% increase in student applications',
        satisfaction: '98% user satisfaction rate'
      },
      testimonial: {
        client: 'Dr. Sarah Al-Zahra, Director of Scholarships',
        quote: 'Mohammed transformed our scholarship management from a manual nightmare to a streamlined digital experience. The platform handles 500+ applications seamlessly.',
        rating: 5
      },
      status: 'Live',
      url: 'https://jewelsjordan.org',
      category: 'web',
      images: [
        '/images/projects/JEWELS/screencapture-jewelsjordan-org-2025-08-10-16_03_28.png',
        '/images/projects/JEWELS/screencapture-jewelsjordan-org-contact-us-2025-08-10-16_06_23.png',
        '/images/projects/JEWELS/screencapture-jewelsjordan-org-posts-2025-08-10-16_06_07.png',
        '/images/projects/JEWELS/screencapture-jewelsjordan-org-scholarship-2025-08-10-16_06_54.png',
        '/images/projects/JEWELS/screencapture-jewelsjordan-org-sign-in-2025-08-10-16_06_36.png',
        '/images/projects/JEWELS/screencapture-jewelsjordan-org-success-stories-2025-08-10-16_05_03.png',
        '/images/projects/JEWELS/screencapture-jewelsjordan-org-team-members-2025-08-10-16_04_49.png'
      ],
      featured: true
    },
    {
      id: 3,
      title: 'Qudra Calculator',
      subtitle: 'Financial Calculation Platform',
      description: 'Advanced financial calculation platform with multiple calculators for loans, investments, and business planning.',
      longDescription: 'A comprehensive financial calculation platform designed for professionals and businesses. Features multiple specialized calculators with advanced algorithms and user-friendly interfaces.',
      metrics: '15+ Calculators • 1000+ Users • Real-time Calculations',
      technologies: ['Laravel', 'Financial Tech', 'MySQL', 'JavaScript'],
      impact: '90% calculation accuracy',
      results: {
        performance: '99.9% calculation accuracy rate',
        efficiency: 'Real-time calculations in under 200ms',
        userGrowth: '1000+ active users within 3 months',
        satisfaction: '94% user retention rate'
      },
      testimonial: {
        client: 'Ahmed Mansour, Financial Advisor',
        quote: 'The Qudra Calculator has become essential for our financial planning. Mohammed delivered a professional tool that our clients love and trust.',
        rating: 5
      },
      status: 'Live',
      url: 'https://qcalculator.qudra.ps',
      category: 'web',
      images: [
        '/images/projects/Qudra/screencapture-qcalculator-qudra-ps-2025-08-10-15_59_00.png',
        '/images/projects/Qudra/screencapture-qcalculator-qudra-ps-2025-08-10-15_59_21.png',
        '/images/projects/Qudra/screencapture-qcalculator-qudra-ps-2025-08-10-16_00_02.png',
        '/images/projects/Qudra/screencapture-qcalculator-qudra-ps-2025-08-10-16_00_21.png',
        '/images/projects/Qudra/screencapture-qudra-ps-2025-08-10-15_52_53.png',
        '/images/projects/Qudra/screencapture-qudra-ps-about-us-2025-08-10-15_53_14.png',
        '/images/projects/Qudra/screencapture-qudra-ps-category-news-en-2025-08-10-15_54_04.png',
        '/images/projects/Qudra/screencapture-qudra-ps-projects-2025-08-10-15_53_46.png'
      ],
      featured: true
    },
    {
      id: 4,
      title: 'Top Service',
      subtitle: 'Service Management Platform',
      description: 'Comprehensive service management platform for maintenance, repairs, and customer support operations.',
      longDescription: 'A full-featured service management platform designed for businesses that provide maintenance and repair services. Features customer management, service tracking, and comprehensive reporting.',
      metrics: '20+ Service Types • 500+ Customers • 95% Satisfaction',
      technologies: ['Laravel', 'Service Management', 'MySQL', 'Bootstrap'],
      impact: '80% service efficiency',
      results: {
        performance: 'Reduced service response time by 70%',
        efficiency: '80% improvement in service tracking',
        userGrowth: '500+ customers onboarded',
        satisfaction: '95% customer satisfaction score'
      },
      testimonial: {
        client: 'Omar Khalil, Operations Manager',
        quote: 'Mohammed built a service management platform that revolutionized our operations. We now handle 3x more service requests with better customer satisfaction.',
        rating: 5
      },
      status: 'Live',
      url: 'https://topservice.ps',
      category: 'web',
      images: [
        '/images/projects/Top Service/screencapture-topservice-ps-2025-08-10-16_17_08.png',
        '/images/projects/Top Service/screencapture-topservice-ps-about-us-2025-08-10-16_17_25.png',
        '/images/projects/Top Service/screencapture-topservice-ps-approaches-2025-08-10-16_19_04.png',
        '/images/projects/Top Service/screencapture-topservice-ps-archives-featured-item-category-projects-2025-08-10-16_18_50.png',
        '/images/projects/Top Service/screencapture-topservice-ps-contact-us-2025-08-10-16_20_00.png',
        '/images/projects/Top Service/screencapture-topservice-ps-discover-vrf-2025-08-10-16_17_40.png',
        '/images/projects/Top Service/screencapture-topservice-ps-distributors-2025-08-10-16_20_12.png',
        '/images/projects/Top Service/screencapture-topservice-ps-maintenance-2025-08-10-16_19_46.png',
        '/images/projects/Top Service/screencapture-topservice-ps-shop-2025-08-10-16_18_32.png',
        '/images/projects/Top Service/screencapture-topservice-ps-warranty-2-2025-08-10-16_20_21.png',
        '/images/projects/Top Service/screencapture-topservice-ps-windfree-samsung-2025-08-10-16_18_05.png'
      ],
      featured: true
    },
    {
      id: 5,
      title: 'Dynasty Media',
      subtitle: 'Digital Media Agency Platform',
      description: 'Professional digital media agency website with portfolio showcase, team management, and client collaboration tools.',
      longDescription: 'A comprehensive digital media agency platform designed to showcase creative work, manage team collaboration, and facilitate client interactions. Features modern design and advanced content management.',
      metrics: '30+ Projects • 15+ Team Members • 100% Client Satisfaction',
      technologies: ['Laravel', 'Digital Media', 'MySQL', 'Bootstrap'],
      impact: '75% client acquisition',
      results: {
        performance: '100% client satisfaction rate achieved',
        efficiency: '75% increase in client acquisition',
        userGrowth: '30+ successful projects delivered',
        satisfaction: '100% client retention rate'
      },
      testimonial: {
        client: 'Layla Al-Masri, Creative Director',
        quote: 'Mohammed built a stunning portfolio platform that perfectly showcases our creative work. The client collaboration tools have streamlined our entire workflow.',
        rating: 5
      },
      status: 'Live',
      url: 'https://thedynastymedia.com',
      category: 'web',
      images: [
        '/images/projects/Dynasty Media/screencapture-thedynastymedia-2022-05-19-20_23_46 (1).png',
        '/images/projects/Dynasty Media/screencapture-thedynastymedia-about-us-2022-05-19-20_25_04.png',
        '/images/projects/Dynasty Media/screencapture-thedynastymedia-contact-2022-05-19-20_27_28.png',
        '/images/projects/Dynasty Media/screencapture-thedynastymedia-our-team-2022-05-19-20_25_37.png',
        '/images/projects/Dynasty Media/screencapture-thedynastymedia-projects-2022-05-19-20_26_53 (1).png',
        '/images/projects/Dynasty Media/screencapture-thedynastymedia-services-2022-05-19-20_26_01.png'
      ],
      featured: false
    },
    {
      id: 6,
      title: 'Clinic Management System',
      subtitle: 'Healthcare Management Platform',
      description: 'Comprehensive healthcare management system with patient records, appointment scheduling, and medical inventory management.',
      longDescription: 'A full-featured healthcare management platform designed for clinics and medical practices. Features patient management, appointment scheduling, medical records, and inventory tracking.',
      metrics: '1000+ Patients • 50+ Staff • 24/7 Availability',
      technologies: ['Laravel', 'Healthcare Tech', 'MySQL', 'Bootstrap'],
      impact: '85% operational efficiency',
      results: {
        performance: '85% improvement in operational efficiency',
        efficiency: 'Reduced patient wait time by 60%',
        userGrowth: '1000+ patients managed successfully',
        satisfaction: '92% staff satisfaction rate'
      },
      testimonial: {
        client: 'Dr. Ahmed Hassan, Medical Director',
        quote: 'The clinic management system has transformed our operations. Patient scheduling is now seamless, and our staff can focus on providing quality care.',
        rating: 5
      },
      status: 'Completed',
      category: 'web',
      images: [
        '/images/projects/Clinic System/Screenshot 2022-01-26 003452.jpg',
        '/images/projects/Clinic System/Screenshot 2022-01-26 003732.jpg',
        '/images/projects/Clinic System/Screenshot 2022-01-26 003745.jpg',
        '/images/projects/Clinic System/Screenshot 2022-01-26 003803.jpg',
        '/images/projects/Clinic System/Screenshot 2022-01-26 003818.jpg',
        '/images/projects/Clinic System/Screenshot 2022-01-26 003840.jpg',
        '/images/projects/Clinic System/Screenshot 2022-01-26 003854.jpg',
        '/images/projects/Clinic System/Screenshot 2022-01-26 003919.jpg',
        '/images/projects/Clinic System/Screenshot 2022-01-26 004006.jpg',
        '/images/projects/Clinic System/Screenshot 2022-01-26 004057.jpg',
        '/images/projects/Clinic System/Screenshot 2022-01-26 004121.jpg',
        '/images/projects/Clinic System/Screenshot 2022-01-26 004143.jpg',
        '/images/projects/Clinic System/Screenshot 2022-01-26 004155.jpg',
        '/images/projects/Clinic System/Screenshot 2022-01-26 004215.jpg',
        '/images/projects/Clinic System/Screenshot 2022-01-26 004233.jpg',
        '/images/projects/Clinic System/Screenshot 2022-01-26 004258.jpg',
        '/images/projects/Clinic System/Screenshot 2022-01-26 004503.jpg',
        '/images/projects/Clinic System/Screenshot 2022-01-26 004555.jpg',
        '/images/projects/Clinic System/Screenshot 2022-01-26 004627.jpg',
        '/images/projects/Clinic System/Screenshot 2022-01-26 004818.jpg',
        '/images/projects/Clinic System/Screenshot 2022-01-26 004918.jpg'
      ],
      featured: false
    },
    {
      id: 7,
      title: 'Kone Admin & User System',
      subtitle: 'Dual-Interface Management Platform',
      description: 'Advanced dual-interface system with separate admin and user portals for comprehensive business management and user interaction.',
      longDescription: 'A sophisticated dual-portal system featuring separate admin and user interfaces with role-based access control, comprehensive reporting, and seamless user experience.',
      metrics: '19+ Admin Features • 8+ User Features • Role-Based Access',
      technologies: ['Laravel', 'Admin Panel', 'User Portal', 'RBAC'],
      impact: '75% management efficiency',
      status: 'Completed',
      category: 'web',
      images: [
        '/images/projects/Kone/Admin/WhatsApp Image 2022-01-27 at 2.10.46 AM.jpeg',
        '/images/projects/Kone/Admin/WhatsApp Image 2022-01-27 at 2.10.47 AM.jpeg',
        '/images/projects/Kone/Admin/WhatsApp Image 2022-01-27 at 2.10.48 AM.jpeg',
        '/images/projects/Kone/Admin/WhatsApp Image 2022-01-27 at 2.10.49 AM (1).jpeg',
        '/images/projects/Kone/Admin/WhatsApp Image 2022-01-27 at 2.10.49 AM.jpeg',
        '/images/projects/Kone/Admin/WhatsApp Image 2022-01-27 at 2.10.50 AM (1).jpeg',
        '/images/projects/Kone/Admin/WhatsApp Image 2022-01-27 at 2.10.50 AM (2).jpeg',
        '/images/projects/Kone/Admin/WhatsApp Image 2022-01-27 at 2.10.50 AM.jpeg',
        '/images/projects/Kone/Admin/WhatsApp Image 2022-01-27 at 2.10.51 AM (1).jpeg',
        '/images/projects/Kone/Admin/WhatsApp Image 2022-01-27 at 2.10.51 AM (2).jpeg',
        '/images/projects/Kone/Admin/WhatsApp Image 2022-01-27 at 2.10.51 AM.jpeg',
        '/images/projects/Kone/User/WhatsApp Image 2022-01-27 at 2.12.07 AM (1).jpeg',
        '/images/projects/Kone/User/WhatsApp Image 2022-01-27 at 2.12.07 AM.jpeg',
        '/images/projects/Kone/User/WhatsApp Image 2022-01-27 at 2.12.08 AM (1).jpeg',
        '/images/projects/Kone/User/WhatsApp Image 2022-01-27 at 2.12.08 AM (2).jpeg',
        '/images/projects/Kone/User/WhatsApp Image 2022-01-27 at 2.12.08 AM.jpeg',
        '/images/projects/Kone/User/WhatsApp Image 2022-01-27 at 2.12.09 AM (1).jpeg',
        '/images/projects/Kone/User/WhatsApp Image 2022-01-27 at 2.12.09 AM (2).jpeg',
        '/images/projects/Kone/User/WhatsApp Image 2022-01-27 at 2.26.00 AM.jpeg'
      ],
      featured: false
    },
    {
      id: 8,
      title: 'News Management System',
      subtitle: 'Content Management Platform',
      description: 'Comprehensive news and content management system with publishing workflow, category management, and user engagement features.',
      longDescription: 'A robust content management platform designed for news organizations with advanced publishing workflows, SEO optimization, and reader engagement tools.',
      metrics: '1000+ Articles • 18+ Features • SEO Optimized',
      technologies: ['Laravel', 'CMS', 'SEO', 'Publishing'],
      impact: '60% publishing efficiency',
      status: 'Completed',
      category: 'web',
      images: [
        '/images/projects/News/screencapture-127-0-0-1-8000-contact-2022-01-26-00_53_53.png',
        '/images/projects/News/Screenshot 2022-01-26 005446.jpg',
        '/images/projects/News/Screenshot 2022-01-26 005550.jpg',
        '/images/projects/News/Screenshot 2022-01-26 005716.jpg',
        '/images/projects/News/Screenshot 2022-01-26 005748.jpg',
        '/images/projects/News/Screenshot 2022-01-26 005815.jpg',
        '/images/projects/News/Screenshot 2022-01-26 005827.jpg',
        '/images/projects/News/Screenshot 2022-01-26 005850.jpg',
        '/images/projects/News/Screenshot 2022-01-26 010056.jpg',
        '/images/projects/News/Screenshot 2022-01-26 010126.jpg',
        '/images/projects/News/Screenshot 2022-01-26 010222.jpg',
        '/images/projects/News/Screenshot 2022-01-26 010254.jpg',
        '/images/projects/News/Screenshot 2022-01-26 010307.jpg',
        '/images/projects/News/Screenshot 2022-01-26 010332.jpg',
        '/images/projects/News/Screenshot 2022-01-26 010349.jpg',
        '/images/projects/News/Screenshot 2022-01-26 010409.jpg',
        '/images/projects/News/Screenshot 2022-01-26 010855.jpg',
        '/images/projects/News/Screenshot 2022-01-26 010909.jpg'
      ],
      featured: false
    },
    {
      id: 9,
      title: 'Optimal Business System',
      subtitle: 'Business Optimization Platform',
      description: 'Advanced business optimization platform with mobile and web interfaces for comprehensive business process management.',
      longDescription: 'A complete business optimization solution featuring both mobile and web applications, designed to streamline operations and enhance productivity across all business functions.',
      metrics: '17+ Features • Mobile + Web • Cross-Platform',
      technologies: ['Laravel', 'Mobile App', 'Business Intelligence', 'Cross-Platform'],
      impact: '70% process optimization',
      status: 'Completed',
      category: 'web',
      images: [
        '/images/projects/Optimal/Google Pixel 4, 4XL – 1.png',
        '/images/projects/Optimal/Google Pixel 4, 4XL – 2.png',
        '/images/projects/Optimal/Google Pixel 4, 4XL – 3.png',
        '/images/projects/Optimal/Google Pixel 4, 4XL – 4.png',
        '/images/projects/Optimal/Google Pixel 4, 4XL – 5.png',
        '/images/projects/Optimal/Screenshot 2022-01-26 002322.jpg',
        '/images/projects/Optimal/Screenshot 2022-01-26 002443.jpg',
        '/images/projects/Optimal/Screenshot 2022-01-26 002507.jpg',
        '/images/projects/Optimal/Screenshot 2022-01-26 002546.jpg',
        '/images/projects/Optimal/Screenshot 2022-01-26 002626.jpg',
        '/images/projects/Optimal/Screenshot 2022-01-26 002701.jpg',
        '/images/projects/Optimal/Screenshot 2022-01-26 002718.jpg',
        '/images/projects/Optimal/Screenshot 2022-01-26 002752.jpg',
        '/images/projects/Optimal/Screenshot 2022-01-26 002855.jpg',
        '/images/projects/Optimal/Screenshot 2022-01-26 002925.jpg',
        '/images/projects/Optimal/Screenshot 2022-01-26 002941.jpg',
        '/images/projects/Optimal/Screenshot 2022-01-26 002954.jpg'
      ],
      featured: false
    },
    {
      id: 10,
      title: 'Tasks Management App',
      subtitle: 'Productivity & Collaboration Tool',
      description: 'Modern task management application with real-time collaboration, chat integration, and comprehensive project tracking capabilities.',
      longDescription: 'A sophisticated task management platform that combines project management with real-time communication, featuring intuitive interfaces and powerful collaboration tools.',
      metrics: '15+ Features • Real-time Chat • Project Tracking',
      technologies: ['Laravel', 'Task Management', 'Real-time', 'Collaboration'],
      impact: '85% team productivity',
      status: 'Completed',
      category: 'web',
      images: [
        '/images/projects/Tasks/1 – 1.png',
        '/images/projects/Tasks/1 – 2.png',
        '/images/projects/Tasks/1 – 3.png',
        '/images/projects/Tasks/1 – 4.png',
        '/images/projects/Tasks/Chats – 1.png',
        '/images/projects/Tasks/Chats.png',
        '/images/projects/Tasks/Details – 1.png',
        '/images/projects/Tasks/Home – 1.png',
        '/images/projects/Tasks/Home – 2.png',
        '/images/projects/Tasks/Home.png',
        '/images/projects/Tasks/profile.png',
        '/images/projects/Tasks/Tasks – 1.png',
        '/images/projects/Tasks/Tasks – 1(1).png',
        '/images/projects/Tasks/Tasks.png',
        '/images/projects/Tasks/Tasks(1).png'
      ],
      featured: false
    },
    {
      id: 11,
      title: 'Tawjihi Clinic',
      subtitle: 'Educational Assessment Platform',
      description: 'Specialized educational platform for Tawjihi exam preparation with assessment tools, progress tracking, and student performance analytics.',
      longDescription: 'A comprehensive educational assessment platform designed specifically for Tawjihi exam preparation, featuring advanced analytics and personalized learning paths.',
      metrics: '6+ Assessment Tools • Student Analytics • Exam Prep',
      technologies: ['Laravel', 'Education', 'Assessment', 'Analytics'],
      impact: '95% exam success rate',
      status: 'Completed',
      category: 'web',
      images: [
        '/images/projects/tawjihi clinic/screencapture-tawjihiclinic-droobuni-2021-10-13-164323_2.png',
        '/images/projects/tawjihi clinic/screencapture-tawjihiclinic-droobuni-2021-10-13-164323_2(1).png',
        '/images/projects/tawjihi clinic/screencapture-tawjihiclinic-droobuni-exam-7-2021-10-13-164447.png',
        '/images/projects/tawjihi clinic/screencapture-tawjihiclinic-droobuni-exam-7-2021-10-13-164447(1).png',
        '/images/projects/tawjihi clinic/screencapture-tawjihiclinic-droobuni-profile-2021-10-13-164406_2.png',
        '/images/projects/tawjihi clinic/screencapture-tawjihiclinic-droobuni-results-6166e2f594627-2021-10-13-164543.png'
      ],
      featured: false
    }
  ], []);
  
  // SEO and typing effect
  useEffect(() => {
    // Set page metadata for SEO
    document.title = "Mohammed Ghonaim - Laravel Developer | Building Scalable Web Applications";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Mohammed Ghonaim - Expert Laravel Developer with 5+ years experience building scalable web applications. Specializing in multi-tenant SaaS platforms, API development, and team leadership.'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Mohammed Ghonaim - Expert Laravel Developer with 5+ years experience building scalable web applications. Specializing in multi-tenant SaaS platforms, API development, and team leadership.';
      document.head.appendChild(meta);
    }

    // Typing animation
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);





  return (
    <>
      <ScrollProgress />
      <div className="min-h-screen smooth-scroll">
        {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-5">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Available for new projects</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Hi, I'm{' '}
                  <span className="gradient-text">MOHAMMED GHONAIM</span>
                </h1>
                <p className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                  I build scalable Laravel apps that handle 10,000+ users
                </p>
                <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400">
                  {typedText}<span className="animate-pulse">|</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                  Helping businesses grow through <strong>multi-tenant SaaS platforms</strong>, 
                  robust APIs, and clean code architecture. Leading teams to deliver 
                  high-performance applications that scale with your business needs.
                </p>
                
                {/* Quick Stats */}
                <div className="flex flex-wrap gap-6 pt-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary-600" />
                    <span className="text-sm font-medium">5+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary-600" />
                    <span className="text-sm font-medium">30+ Projects Delivered</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary-600" />
                    <span className="text-sm font-medium">Team Lead</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/projects" className="btn-primary inline-flex items-center justify-center">
                  See Case Studies
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <a href="/files/CV.pdf" download className="btn-secondary inline-flex items-center justify-center">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
                <Link to="/contact" className="inline-flex items-center justify-center px-6 py-2 border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white font-medium rounded-lg transition-colors duration-200">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book a Call
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <motion.a
                  href="tel:+201501255871"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-3 bg-gray-100 dark:bg-dark-700 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors duration-200"
                >
                  <Phone className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/mohammed-ghoname-079586214"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-3 bg-gray-100 dark:bg-dark-700 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors duration-200"
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="mailto:mohammed9000dd@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Mohammed,%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.%0A%0ABest%20regards,"
                  onClick={(e) => {
                    // Fallback if mailto doesn't work
                    if (!navigator.userAgent.includes('mailto:')) {
                      e.preventDefault();
                      window.open('https://mail.google.com/mail/?view=cm&fs=1&to=mohammed9000dd@gmail.com&su=Portfolio%20Inquiry&body=Hello%20Mohammed,%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.%0A%0ABest%20regards,', '_blank');
                    }
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-3 bg-gray-100 dark:bg-dark-700 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors duration-200"
                >
                  <Mail className="h-5 w-5" />
                </motion.a>
              </div>
            </motion.div>

            {/* Right Content - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div aria-hidden className="absolute -top-8 -left-8 w-32 h-32 bg-primary-500/20 blur-3xl rounded-full" />
                <div aria-hidden className="absolute -bottom-8 -right-12 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full" />
                <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-dark-700 profile-image-container">
                  <img
                    src="/images/best.jpg"
                    alt="MOHAMMED GHONAIM - Full-stack Laravel Developer"
                    className="profile-image"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <Code className="h-12 w-12 text-white animate-bounce-slow" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section-padding bg-white dark:bg-dark-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Showcasing my latest work with measurable impact and client testimonials
              </p>
            </div>

            {/* Featured Projects Grid */}
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.filter(p => p.featured).slice(0, 4).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white dark:bg-dark-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-dark-600"
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-primary-600 text-white text-sm rounded-full font-medium">
                          {project.status}
                        </span>
                        <span className="px-3 py-1 bg-green-600 text-white text-sm rounded-full font-medium">
                          {project.impact}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Metrics & Results - Hidden until content is ready */}
                    {/* {project.results && (
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                          <div className="font-semibold text-green-700 dark:text-green-400">Performance</div>
                          <div className="text-green-600 dark:text-green-300">{project.results.performance}</div>
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                          <div className="font-semibold text-blue-700 dark:text-blue-400">Efficiency</div>
                          <div className="text-blue-600 dark:text-blue-300">{project.results.efficiency}</div>
                        </div>
                      </div>
                    )} */}

                    {/* Client Testimonial - Hidden until content is ready */}
                    {/* {project.testimonial && (
                      <div className="bg-gray-50 dark:bg-dark-600 p-4 rounded-lg border-l-4 border-l-primary-500">
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                              <span className="text-primary-600 font-bold text-sm">
                                {project.testimonial.client.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                              "{project.testimonial.quote}"
                            </p>
                            <div className="flex items-center justify-between mt-2">
                              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                                {project.testimonial.client}
                              </span>
                              <div className="flex items-center space-x-1">
                                {[...Array(project.testimonial.rating)].map((_, i) => (
                                  <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )} */}

                    {/* Technologies & Actions */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-100 dark:bg-dark-600 text-gray-600 dark:text-gray-400 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-2">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 rounded-lg hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors duration-200"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View All Projects CTA */}
            <div className="text-center">
              <Link
                to="/projects"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200"
              >
                View All Projects
                <ExternalLink className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Section - Hidden until content is ready */}
      {/* <BlogSection /> */}

      {/* Testimonials Section - Hidden until content is ready */}
      {/* <TestimonialsSection /> */}

      {/* Skills Preview Section */}
      <section className="section-padding bg-white dark:bg-dark-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Technologies I Work With</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">I specialize in Laravel PHP and modern web technologies to build robust, scalable platforms.</p>
            </div>

            {/* Core Stack Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Code2, title: 'Laravel', subtitle: 'PHP Framework' },
                { icon: Code2, title: 'PHP', subtitle: 'Backend' },
                { icon: Database, title: 'MySQL', subtitle: 'Relational DB' },
                { icon: Braces, title: 'JavaScript', subtitle: 'Frontend' },
                { icon: Globe, title: 'REST API', subtitle: 'API Design' },
                { icon: Layers, title: 'Multi-tenancy', subtitle: 'Architecture' },
                { icon: GitBranch, title: 'Git', subtitle: 'Version Control' },
                { icon: Cloud, title: 'AWS', subtitle: 'Cloud' },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group p-5 rounded-xl bg-gray-50 dark:bg-dark-700 border border-gray-200/60 dark:border-dark-600 hover:border-primary-300/70 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center shadow-sm">
                        <Icon className="h-5 w-5 text-primary-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-gray-100">{item.title}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{item.subtitle}</div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Tooling */}
            <div className="text-center">
              <div className="inline-flex flex-wrap items-center justify-center gap-2">
                {['HTML5', 'CSS3', 'Bootstrap', 'jQuery', 'Sass', 'GitHub'].map((tool, index) => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded-full bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 text-sm border border-gray-200 dark:border-dark-600"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* Stats Section */}
      <section className="section-padding bg-white dark:bg-dark-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: '5+', label: 'Years Experience', icon: TrendingUp },
                { number: '30+', label: 'Projects Delivered', icon: CheckCircle2 },
                { number: '10K+', label: 'Users Served', icon: Users },
                { number: '100%', label: 'Client Satisfaction', icon: Star }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <Icon className="h-8 w-8 text-primary-600 mx-auto" />
                    <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
                      {stat.number}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-purple-600 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Build Something Amazing?</h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Let's discuss your project and how I can help you create scalable, high-performance web applications.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Start a Conversation
              </Link>
              <a 
                href="/files/CV.pdf" 
                download
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-200"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Home;

