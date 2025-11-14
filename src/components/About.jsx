import './About.css'

function About() {
  return (
    <section id="about">
      <h2>{'/* About */'}</h2>
      <pre className="about-text">{`const developer = {
  name: 'Philipp Trubchenko',
  experience: 7, // years
  expertise: ['Full-Stack Development', 'System Architecture', 'Team Leadership'],
  focus: ['React/Next.js Apps', 'GraphQL APIs', 'Performance Optimization'],
  currentRole: 'Building scalable web applications',
  achievements: {
    performanceGains: '35%+ improvements',
    testCoverage: '55% -> 83% increase',
    migrationProjects: 'Legacy -> Modern stack'
  }
};`}</pre>
    </section>
  )
}

export default About

