import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-dark-700">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-600 profile-image-container">
                <img
                  src="/images/best.jpg"
                  alt="MOHAMMED GHONAIM"
                  className="profile-image"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  MOHAMMED GHONAIM
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Full-stack Laravel Developer
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              Passionate about creating exceptional digital experiences with clean code, 
              innovative solutions, and modern web technologies.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/mohammed-ghoname-079586214"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 dark:bg-dark-700 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:mohammed9000dd@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Mohammed,%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.%0A%0ABest%20regards,"
                onClick={(e) => {
                  // Fallback if mailto doesn't work
                  if (!navigator.userAgent.includes('mailto:')) {
                    e.preventDefault();
                    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=mohammed9000dd@gmail.com&su=Portfolio%20Inquiry&body=Hello%20Mohammed,%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.%0A%0ABest%20regards,', '_blank');
                  }
                }}
                className="p-2 bg-gray-100 dark:bg-dark-700 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors duration-200"
                aria-label="Send Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/970592894632"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 dark:bg-dark-700 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors duration-200"
                aria-label="WhatsApp Contact"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary-600 mt-0.5" />
                <a
                  href="mailto:mohammed9000dd@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Mohammed,%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.%0A%0ABest%20regards,"
                  onClick={(e) => {
                    // Fallback if mailto doesn't work
                    if (!navigator.userAgent.includes('mailto:')) {
                      e.preventDefault();
                      window.open('https://mail.google.com/mail/?view=cm&fs=1&to=mohammed9000dd@gmail.com&su=Portfolio%20Inquiry&body=Hello%20Mohammed,%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.%0A%0ABest%20regards,', '_blank');
                    }
                  }}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 text-sm"
                >
                  mohammed9000dd@gmail.com
                </a>
              </li>

              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary-600 mt-0.5" />
                <a
                  href="https://wa.me/970592894632"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 text-sm"
                >
                  +970 592894632 (WhatsApp)
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-600 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-400 text-sm">
                  Cairo, Nasr City, El-Nasr Rd
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-dark-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} MOHAMMED GHONAIM. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 text-sm">
              Privacy Policy
            </button>
            <button className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 text-sm">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

