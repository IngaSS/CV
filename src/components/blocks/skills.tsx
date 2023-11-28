import { memo } from 'react'
import Icon from '../common/icon/icon'

const CompanyItem = ({ item }: any) => {
  const { icon, name } = item

  return (
    <div className="skills-animated-item">
      <Icon iconName={icon} />
      <span>{name}</span>
    </div>
  )
}

const Skills = memo(({ title, items1, items2, items3 }: any) => {
  const items_1 = items1?.map((item: { name: string; icon: string }, index: number) => (
    <CompanyItem item={item} key={index} />
  ))
  const items_2 = items2?.map((item: { name: string; icon: string }, index: number) => (
    <CompanyItem item={item} key={index} />
  ))

  const items_3 = items3?.map((item: { name: string; icon: string }, index: number) => (
    <CompanyItem item={item} key={index} />
  ))
  return (
    <div className="block">
      <h4 className="block-title" id="skills">
        {title}
      </h4>
      <div className="skills-animated-rows">
        <div className={`skills-animated-row-wrapper skills-animated-row-wrapper-count-1`}>
          <div className="skills-animated-row">{items_1}</div>
          <div className="skills-animated-row2">{items_1}</div>
        </div>
        <div className={`skills-animated-row-wrapper skills-animated-row-wrapper-count-2`}>
          <div className="skills-animated-row">{items_2}</div>
          <div className="skills-animated-row2">{items_2}</div>
        </div>
        <div className={`skills-animated-row-wrapper skills-animated-row-wrapper-count-3`}>
          <div className="skills-animated-row">{items_3}</div>
          <div className="skills-animated-row2">{items_3}</div>
        </div>
      </div>
    </div>
  )
})

Skills.displayName = 'Skills'
export default Skills
