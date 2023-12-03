import { memo, useMemo } from 'react'
import CustomTimeline from '../common/customTimeline/customTimeline'
import content from '../../content/content.json'

const Experience = memo(({ title, events }: any) => {
  const editedEvents = useMemo(
    () =>
      events?.map((el: any) =>
        el.markdown ? { ...el, markdown_text: content ? (content as any)[el.markdown] : '' } : el
      ),
    [events]
  )

  return (
    <div className="block">
      <h4 className="block-title" id="experience">
        {title}
      </h4>
      <CustomTimeline events={editedEvents} />
    </div>
  )
})

Experience.displayName = 'Experience'
export default Experience
