# Email Setup Guide for JuniorHack 7.0

## Overview
This guide will help you set up email notifications for registration confirmations.

## Email Service Options

### Option 1: Gmail (Recommended for Development)

1. **Create/Use a Gmail Account**
   - Use an existing Gmail account or create a new one for the hackathon

2. **Enable 2-Step Verification**
   - Go to your Google Account settings
   - Navigate to Security > 2-Step Verification
   - Follow the steps to enable it

3. **Generate an App Password**
   - Go to Security > 2-Step Verification > App passwords
   - Select "Mail" and "Other (Custom name)"
   - Name it "JuniorHack 7.0"
   - Copy the 16-character password generated

4. **Update .env File**
   ```env
   SMTP_HOST="smtp.gmail.com"
   SMTP_PORT="587"
   SMTP_SECURE="false"
   SMTP_USER="your-email@gmail.com"
   SMTP_PASS="your-16-char-app-password"
   ```

### Option 2: Outlook/Hotmail

1. **Use your Outlook account**

2. **Update .env File**
   ```env
   SMTP_HOST="smtp-mail.outlook.com"
   SMTP_PORT="587"
   SMTP_SECURE="false"
   SMTP_USER="your-email@outlook.com"
   SMTP_PASS="your-outlook-password"
   ```

### Option 3: SendGrid (Recommended for Production)

1. **Create a SendGrid Account**
   - Go to https://sendgrid.com
   - Sign up for a free account (100 emails/day free tier)

2. **Create an API Key**
   - Go to Settings > API Keys
   - Create a new API key with "Mail Send" permissions
   - Copy the API key

3. **Update .env File**
   ```env
   SMTP_HOST="smtp.sendgrid.net"
   SMTP_PORT="587"
   SMTP_SECURE="false"
   SMTP_USER="apikey"
   SMTP_PASS="your-sendgrid-api-key"
   ```

### Option 4: Mailgun

1. **Create a Mailgun Account**
   - Go to https://www.mailgun.com
   - Sign up for a free account

2. **Get SMTP Credentials**
   - Go to Sending > Domain settings > SMTP credentials
   - Copy your SMTP login and password

3. **Update .env File**
   ```env
   SMTP_HOST="smtp.mailgun.org"
   SMTP_PORT="587"
   SMTP_SECURE="false"
   SMTP_USER="your-mailgun-smtp-login"
   SMTP_PASS="your-mailgun-smtp-password"
   ```

## Email Template Features

The registration confirmation email includes:

✅ **Professional Design**
- Cyberpunk-themed matching the JuniorHack 7.0 brand
- Responsive HTML layout
- Dark theme with cyan (#63f8fc) accents

✅ **Complete Information**
- Team name and member count
- All team member details (name, email, student number, contact)
- Leader clearly marked
- Registration date

✅ **Next Steps**
- Information about Pre-Hack challenge
- Final Hack details
- Important reminders
- Social media links

✅ **All Team Members Receive Email**
- Email is sent to all team members (leader + members)
- Everyone gets the same confirmation

## Testing Email Functionality

### 1. Local Testing (Development)

```bash
# Make sure you have the .env file configured
npm run dev

# Register a test team through the form
# Check the terminal for any email errors
```

### 2. Gmail "Less Secure Apps" Alternative (Not Recommended)

If you can't use App Passwords, you can temporarily enable "Less secure app access":
- Go to Google Account > Security
- Turn ON "Less secure app access"
- **Note**: This is less secure and not recommended for production

### 3. Test Email Services

For development, you can use:
- **Mailtrap** (https://mailtrap.io) - Catches all emails, doesn't send to real addresses
- **Ethereal** (https://ethereal.email) - Temporary test email accounts

## Troubleshooting

### Error: "Invalid login"
- **Gmail**: Make sure you're using an App Password, not your regular password
- **Outlook**: Verify your email and password are correct
- Check that 2FA is enabled (for Gmail)

### Error: "Connection timeout"
- Check your SMTP_HOST and SMTP_PORT
- Verify your firewall isn't blocking port 587
- Try SMTP_PORT="465" with SMTP_SECURE="true"

### Error: "Self-signed certificate"
- Add to your transporter config:
  ```typescript
  tls: {
    rejectUnauthorized: false
  }
  ```

### Email not received
- Check spam/junk folder
- Verify the recipient email address
- Check server logs for errors
- Ensure SMTP credentials are correct

### Rate Limiting
- Gmail free: ~500 emails/day
- SendGrid free: 100 emails/day
- Mailgun free: 5,000 emails/month
- Consider upgrading for production use

## Production Recommendations

1. **Use a Professional Email Service**
   - SendGrid, Mailgun, Amazon SES, or Postmark
   - Better deliverability
   - Analytics and tracking
   - Higher sending limits

2. **Verify Your Domain**
   - Set up SPF, DKIM, and DMARC records
   - Improves email deliverability
   - Reduces spam classification

3. **Monitor Email Delivery**
   - Track delivery rates
   - Monitor bounce rates
   - Check spam complaints

4. **Use Environment Variables**
   - Never commit credentials to Git
   - Use different credentials for dev/staging/production
   - Rotate credentials regularly

## Email Content Customization

To customize the email template, edit `/src/lib/email.ts`:

- **Subject line**: Line 311
- **HTML template**: Lines 43-238
- **Text version**: Lines 240-267
- **Sender name**: Line 271

## Support

For issues with email setup:
1. Check the terminal/logs for error messages
2. Verify all environment variables are set correctly
3. Test with a simple email service like Gmail first
4. Consult the email provider's documentation

## Security Best Practices

- ✅ Use App Passwords (never regular passwords)
- ✅ Store credentials in .env (never in code)
- ✅ Add .env to .gitignore
- ✅ Use different credentials for dev/prod
- ✅ Enable 2FA on email accounts
- ✅ Rotate credentials periodically
- ✅ Monitor for suspicious activity
