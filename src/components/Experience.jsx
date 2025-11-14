import './Experience.css'

const experiences = [
  {
    company: 'Tesla',
    role: 'Software Developer',
    period: 'July 2023 - May 2024',
    location: 'Fremont, CA',
    achievements: [
      { text: '-> Modernized API architecture with GraphQL: ', highlight: '35% performance boost' },
      '-> Built project management app with React Hooks & custom components',
      '-> Designed Node.js BFF with Redis caching, halved API calls'
    ]
  },
  {
    company: 'Apple (contractor)',
    role: 'Software Developer',
    period: 'Jan 2022 - April 2023',
    location: 'Sunnyvale, CA',
    achievements: [
      { text: '-> Migrated retail platform to Next.js: ', highlight: '25% code reduction' },
      { text: '-> Increased test coverage: ', highlight: '55% -> 83%' },
      '-> Led legacy page migration with dedicated team'
    ]
  },
  {
    company: 'MyBook',
    role: 'Full-Stack Developer',
    period: 'Jun 2019 - Apr 2021',
    location: 'Moscow, Russia',
    achievements: [
      { text: '-> Next.js migration: ', highlight: '15% engagement increase' },
      '-> Built comprehensive component library with Storybook',
      '-> Launched new version of mybook.ru platform'
    ]
  },
  {
    company: 'Leomax',
    role: 'Full-Stack Developer',
    period: 'Oct 2017 - Jun 2019',
    location: 'Moscow, Russia',
    achievements: [
      '-> Built landing page builder with React + Apollo',
      { text: '-> User engagement increased ', highlight: '3x' },
      '-> Implemented GraphQL with no-SQL databases'
    ]
  }
]

function Experience() {
  return (
    <section id="experience">
      <h2>{'/* Professional Experience */'}</h2>
      {experiences.map((experience, index) => (
        <div key={index} className="experience-item">
          <div className="experience-header">{experience.company}</div>
          <div className="experience-meta">
            {experience.role} | {experience.period} | {experience.location}
          </div>
          {experience.achievements.map((achievement, achievementIndex) => {
            if (typeof achievement === 'string') {
              return (
                <div key={achievementIndex} className="achievement">
                  {achievement}
                </div>
              )
            }
            return (
              <div key={achievementIndex} className="achievement">
                {achievement.text}
                <span className="key-achievement">{achievement.highlight}</span>
              </div>
            )
          })}
        </div>
      ))}
    </section>
  )
}

export default Experience

