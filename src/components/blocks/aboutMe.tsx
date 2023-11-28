import { memo } from 'react'
import { motion } from 'framer-motion'
import AVATAR_SRC from '../../assets/avatar/my_avatar.jpeg'
import Icon from '../common/icon/icon'

const AboutMe = memo(({ name, position, text, socials, buttons }: any) => {
  return (
    <div className="aboutMe-container">
      <div className="aboutMe-upper">
        <div className="aboutMe-upper-block">
          <h1 className="aboutMe-name">{name}</h1>
          <h4 className="aboutMe-position">{position}</h4>
        </div>
      </div>
      <motion.div
        className="aboutMe-avatar"
        initial={{ opacity: 0, transform: 'translateY(30%)' }}
        whileInView={{ opacity: 1, transform: 'translateY(0)' }}
      >
        <img src={AVATAR_SRC} alt="my avatar" />
      </motion.div>

      <motion.div
        className="block"
        initial={{ opacity: 0, transform: 'translateY(30%)' }}
        whileInView={{ opacity: 1, transform: 'translateY(0)' }}
      >
        <div className="aboutMe-info">
          <div className="aboutMe-socials">
            {socials?.map(({ icon, link }: { icon: string; link: string }, key: number) => {
              return (
                <a className="aboutMe-socials-btn" href={link} target="_blank" rel="noreferrer" key={key}>
                  <Icon iconName={icon} />
                </a>
              )
            })}
          </div>
          <p className="aboutMe-text">{text}</p>
          <div className="aboutMe-actions">
            {buttons?.map(({ name, value }: any, key: number) => {
              return value === 'contact' ? (
                <a className="aboutMe-actions-btn" href="#contacts" key={key}>
                  {name}
                </a>
              ) : (
                <a href="public/Гулина Инга.pdf" download className="aboutMe-actions-btn" key={key}>
                  {name}
                </a>
              )
            })}
          </div>
        </div>
      </motion.div>
    </div>
  )
})

AboutMe.displayName = 'AboutMe'
export default AboutMe
