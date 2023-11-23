import { memo } from 'react'
import Icon from '../common/icon/icon'

const content = [
  {
    title: 'Professional',
    items: ['Committed', 'Committed', 'Committed', 'Committed', 'Committed'],
  },
  {
    title: 'Personal',
    items: ['Committed', 'Committed', 'Committed', 'Committed', 'Committed'],
  },
  {
    title: 'Language',
    items: ['Committed', 'Committed', 'Committed', 'Committed', 'Committed'],
  },
]

const Skills = memo(() => {
  return (
    <div className="block">
      <h4 className="block-title">SKILLS</h4>
      <div className="skills-cards">
        {content.map(({ title, items }: any, key: number) => {
          return (
            <div className="skills-card" key={key}>
              <h5 className="skills-card-title">{title}</h5>
              <div className="skills-card-content">
                {items.map((name: string, key: number) => {
                  return (
                    <div key={key} className="skills-card-content-item">
                      <span>{name}</span>
                      <Icon iconName="tick" />
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      {/* <div className="skills-cards">
        {content.map(({ title, items }: any, key: number) => {
          return (
            <div className="skills-card skills-card__dark" key={key}>
              <h5 className="skills-card-title">{title}</h5>
              <div className="skills-card-content">
                {items.map((name: string, key: number) => {
                  return (
                    <div key={key} className="skills-card-content-item-test">
                      <div className="skills-card-content-item-title">
                        <span className="skills-card-content-item-name">{name}</span>
                        <span className="skills-card-content-item-value">100%</span>
                      </div>
                      <div className="skills-card-content-item-range">
                        <div className="skills-card-content-item-range-fill">
                          <div className="skills-card-content-item-range-marker" />
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div> */}
    </div>
  )
})

Skills.displayName = 'Skills'
export default Skills
