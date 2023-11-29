import { memo, useMemo } from 'react'

import CustomTimeline from '../common/customTimeline/customTimeline'
import { GET_MAIN_PAGE } from '../../graphql/queries/main'
import { useQuery } from '@apollo/client'

const Experience = memo(({ title, events }: any) => {
  const { data } = useQuery(GET_MAIN_PAGE, {
    variables: {
      locale: 'en',
    },
  })

  const markdownContent = useMemo(() => data?.main?.data?.attributes, [data?.main?.data?.attributes])

  const editedEvents = useMemo(
    () => events?.map((el: any) => (el.markdown ? { ...el, markdown_text: markdownContent[el.markdown] || '' } : el)),
    [events, markdownContent]
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
