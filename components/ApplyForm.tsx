import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  github: string;
  linkedin: string;
  project: string;
  whyYou: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export const ApplyForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    github: '',
    linkedin: '',
    project: '',
    whyYou: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          github: '',
          linkedin: '',
          project: '',
          whyYou: '',
        });
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="apply-success">
        <CheckCircle size={48} />
        <h3>Application Submitted</h3>
        <p>We've received your application and will be in touch soon.</p>
        <button 
          className="btn-apply-another"
          onClick={() => setStatus('idle')}
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <form className="apply-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="name">NAME *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">EMAIL *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="github">GITHUB</label>
          <input
            type="url"
            id="github"
            name="github"
            value={formData.github}
            onChange={handleChange}
            placeholder="https://github.com/username"
          />
        </div>

        <div className="form-group">
          <label htmlFor="linkedin">LINKEDIN</label>
          <input
            type="url"
            id="linkedin"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            placeholder="https://linkedin.com/in/username"
          />
        </div>
      </div>

      <div className="form-group full-width">
        <label htmlFor="project">WHAT ARE YOU BUILDING? *</label>
        <textarea
          id="project"
          name="project"
          value={formData.project}
          onChange={handleChange}
          required
          rows={4}
          placeholder="Describe your current project or the problem you're obsessed with solving..."
        />
      </div>

      <div className="form-group full-width">
        <label htmlFor="whyYou">WHY YOU? *</label>
        <textarea
          id="whyYou"
          name="whyYou"
          value={formData.whyYou}
          onChange={handleChange}
          required
          rows={3}
          placeholder="What makes you the right founder to build this?"
        />
      </div>

      {status === 'error' && (
        <div className="form-error">
          <AlertCircle size={16} />
          <span>{errorMessage}</span>
        </div>
      )}

      <button 
        type="submit" 
        className="btn-submit"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            SUBMITTING...
          </>
        ) : (
          <>
            SUBMIT APPLICATION
            <Send size={20} />
          </>
        )}
      </button>
    </form>
  );
};
