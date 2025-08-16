import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye, X, ChevronLeft, ChevronRight, TrendingUp, Star, Award } from 'lucide-react';



const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);

  
  // Touch/swipe support for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Professional project data
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
      status: 'Live',
      url: 'https://jewelsjordan.org',
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
      title: 'Qudra Platform',
      subtitle: 'Business Management System',
      description: 'Comprehensive business management platform with advanced calculator tools and process automation for enhanced productivity.',
      longDescription: 'A powerful business management system that streamlines operations through intelligent automation and advanced calculation tools. Built for scalability and efficiency.',
      metrics: '1000+ Calculations • 50+ Businesses • 200ms Response',
      technologies: ['Laravel', 'Business Tools', 'API', 'Automation'],
      impact: '60% time savings',
      status: 'Live',
      url: 'https://qudra.ps',
      calculatorUrl: 'https://qcalculator.qudra.ps',
      images: [
        '/images/projects/Qudra/screencapture-qudra-ps-2025-08-10-15_52_53.png',
        '/images/projects/Qudra/screencapture-qudra-ps-about-us-2025-08-10-15_53_14.png',
        '/images/projects/Qudra/screencapture-qudra-ps-projects-2025-08-10-15_53_46.png',
        '/images/projects/Qudra/screencapture-qudra-ps-category-news-en-2025-08-10-15_54_04.png',
        '/images/projects/Qudra/screencapture-qcalculator-qudra-ps-2025-08-10-15_59_00.png',
        '/images/projects/Qudra/screencapture-qcalculator-qudra-ps-2025-08-10-15_59_21.png',
        '/images/projects/Qudra/screencapture-qcalculator-qudra-ps-2025-08-10-16_00_02.png',
        '/images/projects/Qudra/screencapture-qcalculator-qudra-ps-2025-08-10-16_00_21.png'
      ],
      featured: true
    },
    {
      id: 4,
      title: 'Top Service',
      subtitle: 'Service Management Platform',
      description: 'Professional service management platform for businesses to streamline operations, customer management, and service delivery.',
      longDescription: 'A comprehensive service management solution that helps businesses optimize their operations, manage customer relationships, and deliver exceptional service experiences.',
      metrics: '200+ Services • 30+ Businesses • 98% Satisfaction',
      technologies: ['Laravel', 'Service Management', 'CRM', 'Dashboard'],
      impact: '50% efficiency boost',
      status: 'Live',
      url: 'https://topservice.ps',
      images: [
        '/images/projects/Top Service/screencapture-topservice-ps-2025-08-10-16_17_08.png',
        '/images/projects/Top Service/screencapture-topservice-ps-about-us-2025-08-10-16_17_25.png',
        '/images/projects/Top Service/screencapture-topservice-ps-discover-vrf-2025-08-10-16_17_40.png',
        '/images/projects/Top Service/screencapture-topservice-ps-windfree-samsung-2025-08-10-16_18_05.png',
        '/images/projects/Top Service/screencapture-topservice-ps-shop-2025-08-10-16_18_32.png',
        '/images/projects/Top Service/screencapture-topservice-ps-archives-featured-item-category-projects-2025-08-10-16_18_50.png',
        '/images/projects/Top Service/screencapture-topservice-ps-approaches-2025-08-10-16_19_04.png',
        '/images/projects/Top Service/screencapture-topservice-ps-maintenance-2025-08-10-16_19_46.png',
        '/images/projects/Top Service/screencapture-topservice-ps-contact-us-2025-08-10-16_20_00.png',
        '/images/projects/Top Service/screencapture-topservice-ps-distributors-2025-08-10-16_20_12.png',
        '/images/projects/Top Service/screencapture-topservice-ps-warranty-2-2025-08-10-16_20_21.png'
      ],
      featured: true
    },
    {
      id: 5,
      title: 'Clinic Management System',
      subtitle: 'Healthcare Management Platform',
      description: 'Complete healthcare management system with patient records, appointments, billing, and comprehensive reporting capabilities.',
      longDescription: 'A sophisticated healthcare management platform designed for medical practices. Features patient management, appointment scheduling, billing systems, and detailed analytics.',
      metrics: '500+ Patients • 10+ Clinics • 24/7 Availability',
      technologies: ['Laravel', 'Healthcare', 'MySQL', 'Security'],
      impact: '80% paperwork reduction',
      status: 'Private',
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
      id: 6,
      title: 'Task Management Dashboard',
      subtitle: 'Team Collaboration Platform',
      description: 'Advanced task management system with real-time collaboration, chat functionality, and comprehensive project tracking.',
      longDescription: 'A modern task management platform that enhances team productivity through intelligent task distribution, real-time communication, and detailed progress tracking.',
      metrics: '5 Teams • 95% Sprint Completion • Real-time Sync',
      technologies: ['Laravel', 'Vue.js', 'WebSockets', 'Real-time'],
      impact: '60% team efficiency',
      status: 'Private',
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
      id: 7,
      title: 'Dynasty Media',
      subtitle: 'Creative Agency Website',
      description: 'Professional creative agency website with portfolio showcase, team management, and project presentation capabilities.',
      longDescription: 'A modern creative agency platform designed to showcase projects, manage team profiles, and provide comprehensive business solutions for creative professionals.',
      metrics: '100+ Projects • 15+ Team Members • Modern Design',
      technologies: ['Laravel', 'Portfolio', 'CMS', 'Responsive'],
      impact: '90% client engagement',
      status: 'Completed',
      images: [
        '/images/projects/Dynasty Media/screencapture-thedynastymedia-2022-05-19-20_23_46 (1).png',
        '/images/projects/Dynasty Media/screencapture-thedynastymedia-about-us-2022-05-19-20_25_04.png',
        '/images/projects/Dynasty Media/screencapture-thedynastymedia-contact-2025-08-10-16_27_28.png',
        '/images/projects/Dynasty Media/screencapture-thedynastymedia-our-team-2025-08-10-16_25_37.png',
        '/images/projects/Dynasty Media/screencapture-thedynastymedia-projects-2025-08-10-16_26_53 (1).png',
        '/images/projects/Dynasty Media/screencapture-thedynastymedia-services-2025-08-10-16_26_01.png'
      ],
      featured: false
    },
    {
      id: 8,
      title: 'Kone Admin & User System',
      subtitle: 'Task Management Dashboard',
      description: 'Advanced dual-interface system with separate admin and user portals for comprehensive task management and business operations.',
      longDescription: 'A sophisticated dual-portal system featuring separate admin and user interfaces with role-based access control, comprehensive task management, reporting, and seamless user experience across mobile and web platforms.',
      metrics: '19+ Admin Features • 8+ User Features • Role-Based Access',
      technologies: ['Laravel', 'Admin Panel', 'User Portal', 'RBAC', 'Mobile App', 'Dashboard'],
      impact: '75% management efficiency',
      status: 'Completed',
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
      id: 9,
      title: 'News Management System',
      subtitle: 'Content Management Platform',
      description: 'Comprehensive news and content management system with publishing workflow, category management, and user engagement features.',
      longDescription: 'A robust content management platform designed for news organizations with advanced publishing workflows, SEO optimization, and reader engagement tools.',
      metrics: '1000+ Articles • 18+ Features • SEO Optimized',
      technologies: ['Laravel', 'CMS', 'SEO', 'Publishing'],
      impact: '60% publishing efficiency',
      status: 'Completed',
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
      id: 10,
      title: 'Optimal Business System',
      subtitle: 'Business Optimization Platform',
      description: 'Advanced business optimization platform with mobile and web interfaces for comprehensive business process management.',
      longDescription: 'A complete business optimization solution featuring both mobile and web applications, designed to streamline operations and enhance productivity across all business functions.',
      metrics: '17+ Features • Mobile + Web • Cross-Platform',
      technologies: ['Laravel', 'Mobile App', 'Business Intelligence', 'Cross-Platform'],
      impact: '70% process optimization',
      status: 'Completed',
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
      id: 11,
      title: 'Tawjihi Clinic',
      subtitle: 'Educational Assessment Platform',
      description: 'Specialized educational platform for Tawjihi exam preparation with assessment tools, progress tracking, and student performance analytics.',
      longDescription: 'A comprehensive educational assessment platform designed specifically for Tawjihi exam preparation, featuring advanced analytics and personalized learning paths.',
      metrics: '6+ Assessment Tools • Student Analytics • Exam Prep',
      technologies: ['Laravel', 'Education', 'Assessment', 'Analytics'],
      impact: '95% exam success rate',
      status: 'Completed',
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

  // Use all projects directly for better performance
  const allProjects = useMemo(() => projects, [projects]);

  // Gallery functions
  const openGallery = useCallback((projectIndex: number) => {
    setSelectedProject(projectIndex);
    setCurrentImageIndex(0);
  }, []);

  const closeGallery = useCallback(() => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  }, []);

  const nextImage = useCallback(() => {
    if (selectedProject !== null) {
      const project = projects[selectedProject];
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  }, [selectedProject, projects]);

  const prevImage = useCallback(() => {
    if (selectedProject !== null) {
      const project = projects[selectedProject];
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  }, [selectedProject, projects]);

  // Touch handlers for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }

    setTouchStart(null);
    setTouchEnd(null);
  }, [touchStart, touchEnd, nextImage, prevImage]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedProject === null) return;
      
      switch (e.key) {
        case 'Escape':
          closeGallery();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [selectedProject, closeGallery, prevImage, nextImage]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (galleryRef.current && !galleryRef.current.contains(e.target as Node)) {
        closeGallery();
      }
    };

    if (selectedProject !== null) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [selectedProject, closeGallery]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900">
      {/* Enhanced Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-purple-50 to-indigo-50 dark:from-dark-800 dark:via-dark-900 dark:to-dark-950 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >


            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-7xl font-bold">
                My <span className="gradient-text bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                A collection of innovative projects that showcase my expertise in web development, 
                mobile applications, and business solutions
              </p>
            </motion.div>


          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Enhanced Featured Projects Section */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-100 to-purple-100 dark:from-primary-900/30 dark:to-purple-900/30 px-6 py-3 rounded-full mb-6">
                <Star className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                <span className="text-primary-700 dark:text-primary-300 font-semibold">Featured Projects</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Showcase <span className="gradient-text bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">Highlights</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                These projects represent my best work and demonstrate advanced technical skills
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {allProjects.filter((p: any) => p.featured).map((project: any, index: number) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group relative bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-dark-700"
                  whileHover={{ y: -8 }}
                >
                  {/* Featured Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      ⭐ Featured
                    </div>
                  </div>

                  {/* Project Image */}
                  <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-dark-700 dark:to-dark-800">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-out"
                      loading="lazy"

                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Overlay Actions */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100">
                      <div className="flex flex-col sm:flex-row gap-3">
                        <button
                          onClick={() => openGallery(projects.findIndex(p => p.id === project.id))}
                          className="flex items-center gap-2 bg-white/95 hover:bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
                        >
                          <Eye className="h-5 w-5" />
                          View Gallery
                        </button>
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
                          >
                            <ExternalLink className="h-5 w-5" />
                            Visit Site
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8 space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                        {project.title}
                      </h3>
                      <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                        {project.subtitle}
                      </p>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Enhanced Metrics */}
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" />
                        <span>{project.impact}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4" />
                        <span>{project.status}</span>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech: string, techIndex: number) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-dark-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* All Projects Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                All <span className="gradient-text bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Explore my complete portfolio of web applications, mobile apps, and business solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="group relative bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-dark-700"
                    whileHover={{ y: -4 }}
                  >
                    {/* Project Image */}
                    <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-dark-700 dark:to-dark-800 h-56">
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"

                      />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex gap-3">
                          <button
                            onClick={() => openGallery(projects.findIndex(p => p.id === project.id))}
                            className="p-3 bg-white/90 hover:bg-white text-gray-900 rounded-full transition-all duration-200 hover:scale-110"
                          >
                            <Eye className="h-5 w-5" />
                          </button>
                          {project.url && (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full transition-all duration-200 hover:scale-110"
                            >
                              <ExternalLink className="h-5 w-5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6 space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                          {project.title}
                        </h3>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">
                          {project.subtitle}
                        </p>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      {/* Quick Stats */}
                      <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <TrendingUp className="h-3 w-3" />
                          <span>{project.impact}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Award className="h-3 w-3" />
                          <span>{project.status}</span>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech: string, techIndex: number) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 text-xs rounded-full border border-gray-200 dark:border-dark-600"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 text-xs rounded-full border border-gray-200 dark:border-dark-600">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <div
              ref={galleryRef}
              className="relative w-full max-w-6xl max-h-full"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Close Button */}
              <button
                onClick={closeGallery}
                className="absolute top-4 right-4 z-30 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-200 hover:scale-110"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-200 hover:scale-110"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-200 hover:scale-110"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image Display */}
              <div className="relative w-full h-full">
                {selectedProject !== null && (
                  <motion.img
                    key={currentImageIndex}
                    src={projects[selectedProject].images[currentImageIndex]}
                    alt={`${projects[selectedProject].title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-auto max-h-[80vh] object-contain mx-auto"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </div>

              {/* Image Counter */}
              {selectedProject !== null && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                  {currentImageIndex + 1} / {projects[selectedProject].images.length}
                </div>
              )}

              {/* Project Info */}
              {selectedProject !== null && (
                <div className="absolute bottom-4 left-4 z-30 bg-black/50 text-white px-4 py-2 rounded-xl text-sm max-w-xs">
                  <div className="font-semibold">{projects[selectedProject].title}</div>
                  <div className="text-gray-300">{projects[selectedProject].subtitle}</div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
