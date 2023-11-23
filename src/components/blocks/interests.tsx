import { memo } from 'react'
import Icon from '../common/icon/icon'

const interests = [
  {
    icon: 'linkedIn',
    name: 'Sport',
  },
  {
    icon: 'linkedIn',
    name: 'Sport',
  },
  {
    icon: 'linkedIn',
    name: 'Sport',
  },
  {
    icon: 'linkedIn',
    name: 'Sport',
  },
  {
    icon: 'linkedIn',
    name: 'Sport',
  },
  {
    icon: 'linkedIn',
    name: 'Sport',
  },
]

const Interests = memo(() => {
  return (
    <div className="block">
      <h4 className="block-title">Interests</h4>
      <div className="interests-card">
        <p className="interests-card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt. In euismod
          iaculis lobortis. Vestibulum posuere molestie ipsum vel sollicitudin. Vestibulum venenatis pharetrami. Lorem
          ipsum dolor sit amet.
        </p>
        <div className="interests-items">
          {interests.map(({ icon, name }: any, key: number) => {
            return (
              <div key={key} className="interests-item">
                <Icon iconName={icon} />
                <span>{name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
})

Interests.displayName = 'Interests'
export default Interests
