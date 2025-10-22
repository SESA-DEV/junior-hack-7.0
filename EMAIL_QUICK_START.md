# Email Notification - Quick Setup Summary

## ✅ What Was Added

1. **Email Library** (`/src/lib/email.ts`)
   - Professional HTML email template
   - Nodemailer integration
   - Sends to all team members (leader + members)

2. **Updated Registration API** (`/src/app/api/register/route.ts`)
   - Sends confirmation email after successful registration
   - Non-blocking (won't fail registration if email fails)

3. **Dependencies Installed**
   - `nodemailer` - Email sending library
   - `@types/nodemailer` - TypeScript types

4. **Documentation**
   - `EMAIL_SETUP.md` - Complete setup guide
   - `.env.example` - Environment variables template

## 🚀 Quick Start (5 minutes)

### Step 1: Get Gmail App Password

1. Go to your Google Account: https://myaccount.google.com
2. Security > 2-Step Verification (enable if not already)
3. Security > App passwords
4. Create new: Select "Mail" → "Other" → Name it "JuniorHack"
5. Copy the 16-character password

### Step 2: Add to .env File

Create/update `.env` in project root:

```env
# Your existing variables
DATABASE_URL="your_mongodb_url"
GOOGLE_SHEET_ID="your_sheet_id"
GOOGLE_SERVICE_ACCOUNT_KEY='{"type":"service_account"...}'

# Add these new email variables
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_SECURE="false"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="xxxx xxxx xxxx xxxx"  # The 16-char app password
```

### Step 3: Test It!

```bash
npm run dev
```

Register a test team and check:
- ✅ Terminal logs (should show no email errors)
- ✅ Email inbox of all team members
- ✅ Check spam folder if not in inbox

## 📧 Email Features

The confirmation email includes:

✅ **Sent to all team members** (leader + members)
✅ **Professional design** with JuniorHack 7.0 branding
✅ **Complete team information**
   - Team name
   - All member details (name, email, student no, contact)
   - Registration date
✅ **Next steps and important reminders**
✅ **Social media links**
✅ **Mobile-responsive HTML**

## 🔧 Email Template Preview

**Subject:** ✅ Registration Confirmed - Team [TeamName] | JuniorHack 7.0

**Content:**
- Success badge
- Team details card
- All team members listed with roles
- What's next section
- Important reminders
- Footer with social links

## 📝 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `SMTP_HOST` | SMTP server address | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP port | `587` |
| `SMTP_SECURE` | Use SSL/TLS | `false` (true for port 465) |
| `SMTP_USER` | Email address | `yourname@gmail.com` |
| `SMTP_PASS` | App password | `xxxx xxxx xxxx xxxx` |

## 🎯 Production Tips

For production (when you have many registrations):

1. **Use a professional service:**
   - SendGrid (100 emails/day free)
   - Mailgun (5,000 emails/month free)
   - Amazon SES (cheapest for high volume)

2. **Gmail limits:**
   - ~500 emails/day on free tier
   - Fine for hackathon size events
   - Upgrade to Google Workspace for more

## 🐛 Troubleshooting

**Email not sending?**
- Check terminal logs for errors
- Verify .env file exists and has correct values
- Make sure you used App Password (not regular password)
- Check spam folder

**"Invalid login" error?**
- Use App Password, not your Gmail password
- Enable 2-Step Verification first

**"Connection timeout"?**
- Check SMTP_HOST and SMTP_PORT values
- Verify firewall isn't blocking port 587

## 📚 Full Documentation

See `EMAIL_SETUP.md` for:
- Detailed setup for different email providers
- Security best practices
- Production recommendations
- Email template customization
- Advanced troubleshooting

## ✨ That's It!

Your registration system now sends beautiful confirmation emails to all team members automatically! 🎉
