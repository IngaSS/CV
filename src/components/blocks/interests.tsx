import { memo } from 'react'
import { motion } from 'framer-motion'
import Icon from '../common/icon/icon'

const Interests = memo(({ title, text, interests }: any) => {
  return (
    <div className="block">
      <h4 className="block-title" id="interests">
        {title}
      </h4>
      <motion.div
        className="interests-card"
        initial={{ opacity: 0, transform: 'translateY(30%)' }}
        whileInView={{ opacity: 1, transform: 'translateY(0)' }}
      >
        <p className="interests-card-text">{text}</p>
        <div className="interests-items">
          {interests?.map(({ icon, name }: any, key: number) => {
            return (
              <div key={key} className="interests-item">
                <Icon iconName={icon} />
                <span>{name}</span>
              </div>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
})

Interests.displayName = 'Interests'
export default Interests
