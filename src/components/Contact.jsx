import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [copied, setCopied] = useState(false)
  const email = 'seresigo1@gmail.com'

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`
  }

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-heading">
      <h2 id="contact-heading">{'/* Contact */'}</h2>
      <div className="code-block">
        <p className="contact-line">
          <span className="contact-function" onClick={handleEmailClick} role="button" tabIndex={0} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') handleEmailClick() }} aria-label="Send email to seresigo1@gmail.com">
            sendEmail(&apos;{email}&apos;)
          </span>
          <button 
            className="copy-email-button" 
            onClick={handleCopyEmail}
            aria-label="Copy email to clipboard"
            title="Copy email"
          >
            {copied ? '✓' : '📋'}
          </button>
        </p>
        <p>
          <span className="tech-category" aria-hidden="true">{'// '}</span>
          <a href="https://www.linkedin.com/in/philipptru" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
            LinkedIn
          </a>
        </p>
        <p>
          <span className="tech-category" aria-hidden="true">{'// '}</span>
          <a href="https://github.com/philtru" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
            GitHub
          </a>
        </p>
      </div>
    </section>
  )
}

export default Contact

