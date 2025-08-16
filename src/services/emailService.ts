import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, EmailData } from '../config/emailjs';

export class EmailService {
  private static instance: EmailService;
  
  private constructor() {
    // Initialize EmailJS with your public key
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }

  public static getInstance(): EmailService {
    if (!EmailService.instance) {
      EmailService.instance = new EmailService();
    }
    return EmailService.instance;
  }

  public async sendEmail(data: EmailData): Promise<{ success: boolean; message: string }> {
    try {
      const templateParams = {
        from_name: data.from_name,
        from_email: data.from_email,
        subject: data.subject,
        message: data.message,
        to_name: 'Mohammed Ghonaim', // Your name
        to_email: 'mohammed9000dd@gmail.com', // Your email
      };

      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );

      if (response.status === 200) {
        return {
          success: true,
          message: 'Message sent successfully! I\'ll get back to you soon.'
        };
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      return {
        success: false,
        message: 'Failed to send message. Please try again or contact me directly via email.'
      };
    }
  }

  public async sendTestEmail(): Promise<boolean> {
    try {
      const testData: EmailData = {
        from_name: 'Test User',
        from_email: 'test@example.com',
        subject: 'Test Message',
        message: 'This is a test message from your portfolio contact form.'
      };

      const result = await this.sendEmail(testData);
      return result.success;
    } catch (error) {
      console.error('Test email failed:', error);
      return false;
    }
  }
}

export default EmailService;
