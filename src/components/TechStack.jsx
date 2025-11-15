import './TechStack.css'

function TechStack() {
  return (
    <section id="stack">
      <h2>{'/* Tech Stack */'}</h2>
      <div className="code-block">
        <div className="tech-grid">
          <div>
            <span className="tech-category">{'// Frontend:'}</span> JavaScript, TypeScript, React, React Hooks, Redux, Next.js, Apollo
          </div>
          <div>
            <span className="tech-category">{'// Backend:'}</span> Node.js, Express, GoLang, GraphQL
          </div>
          <div>
            <span className="tech-category">{'// Database:'}</span> MongoDB, MySQL, Redis
          </div>
          <div>
            <span className="tech-category">{'// Testing:'}</span> Jest, Cypress
          </div>
          <div>
            <span className="tech-category">{'// DevOps:'}</span> Docker, Kubernetes, Proxmox, Self-hosting, RabbitMQ, CI/CD, Git
          </div>
          <div>
            <span className="tech-category">{'// Tools:'}</span> Webpack, Splunk, Grafana, Vite, Ansible
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack

