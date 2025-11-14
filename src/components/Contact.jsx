import './Contact.css'

function Contact() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:seresigo1@gmail.com'
  }

  return (
    <section id="contact">
      <h2>{'/* Contact */'}</h2>
      <div className="code-block">
        <p>
          <span className="contact-function" onClick={handleEmailClick}>
            sendEmail(&apos;seresigo1@gmail.com&apos;)
          </span>;
        </p>
        <p>
          <span className="tech-category">{'// '}</span>
          <a href="https://www.linkedin.com/in/philipptru" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </p>
        <p>
          <span className="tech-category">{'// '}</span>
          <a href="https://github.com/philtru" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
      </div>
    </section>
  )
}

export default Contact

