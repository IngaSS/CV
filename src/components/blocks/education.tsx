import { memo } from 'react'
import CustomTimeline from '../common/customTimeline/customTimeline'

const Education = memo(({ title, events }: any) => {
  return (
    <div className="block">
      <h4 className="block-title" id="education">
        {title}
      </h4>
      <CustomTimeline events={events} />
    </div>
  )
})

Education.displayName = 'Education'
export default Education
