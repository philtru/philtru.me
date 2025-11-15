import './Projects.css'

const projects = [
  {
    title: 'Self-Hosted Infrastructure Automation',
    description: 'Designed and deployed Proxmox-based virtualization platform with automated container orchestration via Portainer. Implemented infrastructure-as-code patterns using shell scripting for VM provisioning, Docker Compose stack management, and service lifecycle automation',
    tech: 'Tech: Proxmox, Portainer, Docker Compose, Shell Scripting, LXC Containers, Reverse Proxy',
    links: [
      { label: '[architecture]', href: '#' }
    ]
  },
  {
    title: 'GraphQL API Migration',
    description: 'Modernized legacy REST APIs to GraphQL, achieving 35% performance improvement',
    tech: 'Tech: GraphQL, Node.js, Redis, MongoDB',
    links: [
      { label: '[details]', href: '#' },
      { label: '[metrics]', href: '#' }
    ]
  },
  {
    title: 'React Component Library',
    description: 'Built comprehensive UI/UX component library with Storybook documentation',
    tech: 'Tech: React, TypeScript, Storybook, Styled Components',
    links: [
      { label: '[storybook]', href: '#' },
      { label: '[github]', href: '#' }
    ]
  },
  {
    title: 'E-commerce Platform Migration',
    description: 'Led migration from legacy stack to Next.js, reducing code by 25%',
    tech: 'Tech: Next.js, React, Node.js, MongoDB',
    links: [
      { label: '[case-study]', href: '#' }
    ]
  },
  {
    title: 'Real-time Monitoring Dashboard',
    description: 'Developed Splunk alerts and Grafana dashboards for production monitoring',
    tech: 'Tech: Node.js, Splunk, Grafana, Docker',
    links: [
      { label: '[architecture]', href: '#' }
    ]
  }
]

function Projects() {
  return (
    <section id="projects">
      <h2>{'/* Featured Projects */'}</h2>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <div className="project-header">{project.title}</div>
          <div className="project-description">{project.description}</div>
          <div className="project-tech">{project.tech}</div>
          <div className="project-links">
            {project.links.map((link, linkIndex) => (
              <a key={linkIndex} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default Projects

