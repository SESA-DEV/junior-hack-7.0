import nodemailer from 'nodemailer';

// Create reusable transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface Member {
  name: string;
  studentNo: string;
  contactNo: string;
  email: string;
}

interface SendRegistrationEmailParams {
  teamName: string;
  membersCount: number;
  leader: Member;
  members: Member[];
}

export async function sendRegistrationEmail({
  teamName,
  membersCount,
  leader,
  members,
}: SendRegistrationEmailParams) {
  // Create list of all team members
  const allMembers = [
    { ...leader, role: 'Leader' },
    ...members.map((m, idx) => ({ ...m, role: `Member ${idx + 1}` })),
  ];

  // Get all email addresses (leader + members)
  const recipientEmails = allMembers.map(m => m.email).join(', ');

  const emailHTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JuniorHack 7.0 Registration Confirmation</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f4f4f4;
    }
    .container {
      background: linear-gradient(135deg, #000000 0%, #0d0d0d 100%);
      border: 2px solid #63f8fc;
      border-radius: 10px;
      padding: 30px;
      box-shadow: 0 0 20px rgba(99, 248, 252, 0.3);
    }
    .header {
      text-align: center;
      margin-bottom: 30px;
      padding-bottom: 20px;
      border-bottom: 2px solid #63f8fc;
    }
    .header h1 {
      color: #63f8fc;
      font-size: 28px;
      margin: 0;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
    .header p {
      color: #a0a0a0;
      font-size: 14px;
      margin: 10px 0 0 0;
    }
    .content {
      color: #e5e5e5;
    }
    .success-badge {
      position: relative;
      background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
      border: 2px solid #63f8fc;
      padding: 25px 20px;
      border-radius: 12px;
      text-align: center;
      margin: 25px 0;
      box-shadow: 
        0 0 30px rgba(99, 248, 252, 0.2),
        inset 0 0 20px rgba(99, 248, 252, 0.05);
      overflow: hidden;
    }
    .success-badge::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, #63f8fc 0%, #00d9d1 50%, #63f8fc 100%);
    }
    .success-badge-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, #63f8fc 0%, #00d9d1 100%);
      border-radius: 50%;
      margin: 0 auto 15px;
      box-shadow: 0 4px 15px rgba(99, 248, 252, 0.4);
    }
    .success-badge-icon svg {
      width: 35px;
      height: 35px;
      fill: none;
      stroke: #000;
      stroke-width: 3;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    .success-badge-title {
      color: #63f8fc;
      font-size: 24px;
      font-weight: bold;
      margin: 0 0 8px 0;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
    .success-badge-subtitle {
      color: #a0a0a0;
      font-size: 14px;
      margin: 0;
      font-weight: normal;
    }
    .success-badge-message {
      color: #e5e5e5;
      font-size: 15px;
      margin: 15px 0 0 0;
      line-height: 1.6;
    }
    .team-info {
      background-color: rgba(99, 248, 252, 0.1);
      border-left: 4px solid #63f8fc;
      padding: 15px;
      margin: 20px 0;
      border-radius: 5px;
    }
    .team-info h3 {
      color: #63f8fc;
      margin-top: 0;
      font-size: 16px;
      text-transform: uppercase;
    }
    .team-info p {
      margin: 8px 0;
      color: #e5e5e5;
    }
    .member-card {
      background-color: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(99, 248, 252, 0.3);
      padding: 12px;
      margin: 10px 0;
      border-radius: 5px;
    }
    .member-card h4 {
      color: #63f8fc;
      margin: 0 0 8px 0;
      font-size: 14px;
    }
    .member-card p {
      margin: 4px 0;
      font-size: 13px;
      color: #c0c0c0;
    }
    .info-section {
      margin: 20px 0;
      padding: 15px;
      background-color: rgba(168, 85, 247, 0.1);
      border-radius: 8px;
      border-left: 4px solid #a855f7;
    }
    .info-section h3 {
      color: #a855f7;
      margin-top: 0;
      font-size: 16px;
    }
    .info-section ul {
      margin: 10px 0;
      padding-left: 20px;
      color: #e5e5e5;
    }
    .info-section li {
      margin: 8px 0;
    }
    .footer {
      text-align: center;
      margin-top: 30px;
      padding-top: 20px;
      border-top: 2px solid rgba(99, 248, 252, 0.3);
      color: #a0a0a0;
      font-size: 12px;
    }
    .footer p {
      margin: 5px 0;
    }
    .footer a {
      color: #63f8fc;
      text-decoration: none;
    }
    .cta-button {
      display: inline-block;
      background: linear-gradient(135deg, #63f8fc 0%, #00d9d1 100%);
      color: #000;
      padding: 12px 30px;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
      margin: 20px 0;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🚀 JUNIORHACK 7.0</h1>
      <p>University of Kelaniya</p>
    </div>

    <div class="content">
      <div class="success-badge">
        <div class="success-badge-icon">
          <svg viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h2 class="success-badge-title">Registration Confirmed</h2>
        <p class="success-badge-subtitle">Your team has been successfully registered</p>
        <p class="success-badge-message">
          Welcome to JuniorHack 7.0! You're now part of an exciting journey of innovation and collaboration.
        </p>
      </div>

      <p>Dear Team <strong style="color: #63f8fc;">${teamName}</strong>,</p>

      <p>Congratulations! Your team has been successfully registered for <strong>JuniorHack 7.0</strong>, the premier hackathon for 1st and 2nd year undergraduates at the University of Kelaniya.</p>

      <div class="team-info">
        <h3>📋 Team Details</h3>
        <p><strong>Team Name:</strong> ${teamName}</p>
        <p><strong>Total Members:</strong> ${membersCount}</p>
        <p><strong>Registration Date:</strong> ${new Date().toLocaleDateString('en-US', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}</p>
      </div>

      <h3 style="color: #63f8fc; margin-top: 30px;">👥 Team Members</h3>
      ${allMembers.map(member => `
        <div class="member-card">
          <h4>${member.role}: ${member.name}</h4>
          <p>📧 ${member.email}</p>
          <p>🎓 ${member.studentNo}</p>
          <p>📱 ${member.contactNo}</p>
        </div>
      `).join('')}

      <div class="info-section">
        <h3>📅 What's Next?</h3>
        <ul>
          <li><strong>Pre-Hack Challenge:</strong> Details will be shared via email soon</li>
          <li><strong>Final Hack:</strong> Top teams from Pre-Hack will compete in the main event</li>
          <li><strong>Stay Updated:</strong> Follow us on social media for announcements</li>
          <li><strong>Questions?</strong> Contact the organizing team via email or social media</li>
        </ul>
      </div>

      <div class="info-section">
        <h3>⚠️ Important Reminders</h3>
        <ul>
          <li>Keep your team information secure</li>
          <li>All team members must participate in both Pre-Hack and Final Hack</li>
          <li>Check your email regularly for updates and announcements</li>
          <li>Join our official communication channels (details coming soon)</li>
        </ul>
      </div>

      <p style="margin-top: 30px;">We're excited to see what innovative solutions your team will create! Get ready to code, collaborate, and compete at JuniorHack 7.0.</p>

      <p style="color: #63f8fc; font-weight: bold; margin-top: 20px;">Best of luck! 🎯</p>
    </div>

    <div class="footer">
      <p><strong>JuniorHack 7.0</strong></p>
      <p>Organized by SESA & IEEE Student Branch - University of Kelaniya</p>
      <p style="margin-top: 15px;">
        <a href="https://www.facebook.com/sesauok/?_rdc=1&_rdr">Facebook (SESA)</a> | 
        <a href="https://www.instagram.com/sesa_uok/">Instagram (SESA)</a> | 
        <a href="https://www.linkedin.com/company/software-engineering-students-association-university-of-kelaniya/posts/?feedView=all">LinkedIn (SESA)</a> | 
        <a href="https://www.youtube.com/@SoftwareEngineeringStudentsAss">YouTube (SESA)</a>
      </p>
      <p style="margin-top: 10px;">
        <a href="https://www.facebook.com/ieeekln/">Facebook (IEEE)</a> | 
        <a href="http://instagram.com/ieee.uok/">Instagram (IEEE)</a> | 
        <a href="https://www.linkedin.com/company/ieee-student-branch-university-of-kelaniya/posts/?feedView=all">LinkedIn (IEEE)</a>
      </p>
      <p style="margin-top: 15px; font-size: 11px; color: #808080;">
        This is an automated message. Please do not reply to this email.<br>
        For inquiries, contact the organizing team through official channels.
      </p>
    </div>
  </div>
</body>
</html>
  `;

  const emailText = `
JUNIORHACK 7.0 - Registration Confirmation

Dear Team ${teamName},

Congratulations! Your team has been successfully registered for JuniorHack 7.0.

TEAM DETAILS:
- Team Name: ${teamName}
- Total Members: ${membersCount}
- Registration Date: ${new Date().toLocaleDateString()}

TEAM MEMBERS:
${allMembers.map(member => `
${member.role}: ${member.name}
Email: ${member.email}
Student No: ${member.studentNo}
Contact: ${member.contactNo}
`).join('\n')}

WHAT'S NEXT?
- Pre-Hack Challenge: Details will be shared via email soon
- Final Hack: Top teams from Pre-Hack will compete in the main event
- Stay Updated: Follow us on social media for announcements

IMPORTANT REMINDERS:
- Keep your team information secure
- All team members must participate in both Pre-Hack and Final Hack
- Check your email regularly for updates

Best of luck!

JuniorHack 7.0 Organizing Team
SESA & IEEE Student Branch - University of Kelaniya
  `;

  // Send email
  const mailOptions = {
    from: `"JuniorHack 7.0" <${process.env.SMTP_USER}>`,
    to: recipientEmails,
    subject: `✅ Registration Confirmed - Team ${teamName} | JuniorHack 7.0`,
    text: emailText,
    html: emailHTML,
  };

  await transporter.sendMail(mailOptions);
}
