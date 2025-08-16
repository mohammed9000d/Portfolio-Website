# EmailJS Setup Guide for Portfolio Contact Form

## What is EmailJS?
EmailJS allows you to send emails directly from your frontend JavaScript code without needing a backend server. It's perfect for static websites and portfolios.

## Step-by-Step Setup

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Set Up Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (or your preferred email provider)
4. Connect your Gmail account (mohammed9000dd@gmail.com)
5. Note down the **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```html
Subject: New Contact Form Message from {{from_name}}

Hello {{to_name}},

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

4. Save the template and note down the **Template ID** (e.g., `template_xyz789`)

### 4. Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (e.g., `user_def456`)

### 5. Update Configuration
1. Open `src/config/emailjs.ts`
2. Replace the placeholder values:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_abc123', // Your actual service ID
  TEMPLATE_ID: 'template_xyz789', // Your actual template ID
  PUBLIC_KEY: 'user_def456', // Your actual public key
};
```

### 6. Test the Form
1. Start your development server: `npm start`
2. Go to the Contact page
3. Fill out and submit the form
4. Check your email (mohammed9000dd@gmail.com) for the test message

## Alternative Solutions

### Option 1: Formspree (Simpler)
If EmailJS seems complex, you can use Formspree:
1. Go to [https://formspree.io/](https://formspree.io/)
2. Create a free account
3. Create a new form
4. Replace the form action with your Formspree endpoint

### Option 2: Netlify Forms (If deploying on Netlify)
1. Add `netlify` attribute to your form
2. Deploy to Netlify
3. Forms are automatically handled

## Troubleshooting

### Common Issues:
1. **"Service not found"**: Check your Service ID
2. **"Template not found"**: Check your Template ID
3. **"Public key invalid"**: Check your Public Key
4. **Emails not sending**: Verify your email service connection

### Testing:
- Use the `sendTestEmail()` method in the EmailService class
- Check browser console for error messages
- Verify all IDs are correctly copied

## Security Notes
- The public key is safe to expose in frontend code
- EmailJS handles rate limiting and spam protection
- Free tier allows 200 emails per month
- Consider upgrading for production use

## Support
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Community: [https://community.emailjs.com/](https://community.emailjs.com/)
- GitHub Issues: [https://github.com/emailjs-com/emailjs-com](https://github.com/emailjs-com/emailjs-com)
