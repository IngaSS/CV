import { memo } from 'react'
import CustomTimeline from '../common/customTimeline/customTimeline'

const events = [
  {
    title: 'Chief Project Manager',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero praesentium blanditiis consequatur aspernatur accusantium maxime molestiae sunt ipsa.',
    marker: '',
    date: 'January 2012 - December 2015',
  },
  {
    title: 'Senior UX/UI Designer',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero praesentium blanditiis consequatur aspernatur accusantium maxime molestiae sunt ipsa.',
    marker: '',
    date: 'January 2012 - December 2015',
  },
  {
    title: 'Chief Project Manager',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero praesentium blanditiis consequatur aspernatur accusantium maxime molestiae sunt ipsa.',
    marker: '',
    date: 'January 2012 - December 2015',
  },
  {
    title: 'Senior UX/UI Designer',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero praesentium blanditiis consequatur aspernatur accusantium maxime molestiae sunt ipsa.',
    marker: '',
    date: 'January 2012 - December 2015',
  },
]

const Experience = memo(() => {
  return (
    <div className="block">
      <h4 className="block-title" id="experience">
        EXPERIENCE
      </h4>
      <CustomTimeline events={events} />
    </div>
  )
})

Experience.displayName = 'Experience'
export default Experience
