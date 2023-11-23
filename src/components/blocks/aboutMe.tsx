import { memo } from 'react'
import AVATAR_SRC from '../../assets/avatar/my_avatar.jpeg'
import Icon from '../common/icon/icon'

const icons = [
  {
    name: 'linkedIn',
  },
  {
    name: 'linkedIn',
  },
  {
    name: 'linkedIn',
  },
]

const buttons = [
  {
    name: 'Download CV',
    value: 'download',
  },
  {
    name: 'Contact me',
    value: 'contact',
  },
]

const AboutMe = memo(() => {
  return (
    <div className="aboutMe-container">
      <div className="aboutMe-upper">
        <div className="aboutMe-upper-block">
          <h1 className="aboutMe-name">Inga Gulina</h1>
          <h4 className="aboutMe-position">Web developer</h4>
        </div>
      </div>
      <div className="aboutMe-avatar">
        <img src={AVATAR_SRC} alt="my avatar" />
      </div>
      <div className="block">
        <div className="aboutMe-info">
          <div className="aboutMe-socials">
            {icons.map(({ name }: { name: string }, key: number) => {
              return (
                <button className="aboutMe-socials-btn" key={key}>
                  <Icon iconName={name} />
                </button>
              )
            })}
          </div>
          <p className="aboutMe-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt. In euismod
            iaculis lobortis. Vestibulum posuere molestie ipsum vel sollicitudin. Vestibulum venenatis pharetra mi, ut
            vestibulum elit ultricies a. Vestibulum at mollis ex, ac consectetur massa. Donec nunc dui, laoreet a nibh
            et, semper tincidunt nunc. Donec ac posuere tellus. Pellentesque tempus suscipit velit sit amet bibendum.
          </p>
          <div className="aboutMe-actions">
            {buttons.map(({ name }: any, key: number) => {
              return (
                <button className="aboutMe-actions-btn" key={key}>
                  {name}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
})

AboutMe.displayName = 'AboutMe'
export default AboutMe
