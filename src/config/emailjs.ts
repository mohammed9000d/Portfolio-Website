// EmailJS Configuration
// You'll need to set up EmailJS at https://www.emailjs.com/
// and replace these IDs with your actual service and template IDs

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS public key
};

// EmailJS Template Variables (these should match your EmailJS template)
export interface EmailData {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
}
