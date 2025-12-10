import express from 'express';
import { Resend } from 'resend';

const app = express();
app.use(express.json());

const RESEND_API_KEY = process.env.RESEND_API_KEY;
let resend: Resend | null = null;

if (RESEND_API_KEY) {
  resend = new Resend(RESEND_API_KEY);
}

app.post('/api/apply', async (req, res) => {
  const { name, email, github, linkedin, project, background, whyYou } = req.body;

  if (!name || !email || !project || !background || !whyYou) {
    return res.status(400).json({ message: 'Please fill in all required fields.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Please provide a valid email address.' });
  }

  if (!resend) {
    return res.status(500).json({ message: 'Email service not configured. Please contact the administrator.' });
  }

  try {
    await resend.emails.send({
      from: 'Singapore Hackers Fund <noreply@singaporehackersfund.com>',
      to: 'info@singaporehackersfund.com',
      replyTo: email,
      subject: `New Application: ${name}`,
      html: `
        <h2>New Application Received</h2>
        <hr/>
        <h3>Applicant Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>GitHub:</strong> ${github || 'Not provided'}</p>
        <p><strong>LinkedIn:</strong> ${linkedin || 'Not provided'}</p>
        <hr/>
        <h3>What are you building?</h3>
        <p>${project.replace(/\n/g, '<br/>')}</p>
        <hr/>
        <h3>Technical Background</h3>
        <p>${background.replace(/\n/g, '<br/>')}</p>
        <hr/>
        <h3>Why You?</h3>
        <p>${whyYou.replace(/\n/g, '<br/>')}</p>
      `,
    });

    await resend.emails.send({
      from: 'Singapore Hackers Fund <noreply@singaporehackersfund.com>',
      to: email,
      subject: 'Application Received - Singapore Hackers Fund',
      html: `
        <h2>Thanks for applying, ${name}!</h2>
        <p>We've received your application for Singapore Hackers Fund.</p>
        <p>Our team will review your application and get back to you soon.</p>
        <br/>
        <p>In the meantime, keep building.</p>
        <br/>
        <p>- The SHF Team</p>
      `,
    });

    res.json({ success: true, message: 'Application submitted successfully!' });
  } catch (error: any) {
    console.error('Email send error:', error);
    res.status(500).json({ 
      message: 'Failed to submit application. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
