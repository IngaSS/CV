import { ForwardedRef, forwardRef, memo } from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { motion } from 'framer-motion'

const TimelineCard = (content: any) => {
  const { title, text, date, markdown_text } = content

  return (
    <div className="timeline-card">
      <div className="timeline-card-content">
        {title && <span className="timeline-card-title">{title}</span>}
        <div className="timeline-card-inner-content">
          {date && <span className="timeline-card-date">{date}</span>}
          {text && <p className="timeline-card-text">{text}</p>}
          {markdown_text && (
            <Markdown className="timeline-card-text-markdown" remarkPlugins={[remarkGfm]}>
              {markdown_text}
            </Markdown>
          )}
        </div>
      </div>
    </div>
  )
}

const TimelineMarker = (content: any) => {
  const { marker } = content
  return (
    <div className="marker-container">
      {marker && <div className="marker-indicator">{marker}</div>}
      <div className="marker-point"></div>
    </div>
  )
}

const CustomTimeline = memo(
  forwardRef<HTMLDivElement, { events: any[] }>(({ events }, ref) => {
    return (
      <div ref={ref as ForwardedRef<HTMLDivElement>} className="timeline">
        {events?.map((el: any, key: number) => {
          return (
            <div className="timeline-event" key={key}>
              <div className="timeline-event-opposite">
                <span>&nbsp;</span>
              </div>
              <div className="timeline-event-separator">
                <TimelineMarker {...el} />
                <div className="timeline-event-connector" />
              </div>
              <motion.div
                className="timeline-event-content"
                initial={{ opacity: 0, transform: 'translateY(30%)' }}
                whileInView={{ opacity: 1, transform: 'translateY(0)' }}
              >
                <TimelineCard {...el} />
              </motion.div>
            </div>
          )
        })}
      </div>
    )
  })
)

CustomTimeline.displayName = 'CustomTimeline'
export default CustomTimeline
