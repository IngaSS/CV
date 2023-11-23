import { ForwardedRef, forwardRef, memo } from 'react'

const TimelineCard = (content: any) => {
  const { title, text, date } = content

  return (
    <div className="timeline-card">
      <div className="timeline-card-content">
        {title && <span className="timeline-card-title">{title}</span>}
        <div className="timeline-card-inner-content">
          {date && <span className="timeline-card-date">{date}</span>}
          {text && <p className="timeline-card-text">{text}</p>}
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
              <div className="timeline-event-content">
                <TimelineCard {...el} />
              </div>
            </div>
          )
        })}
      </div>
    )
  })
)

CustomTimeline.displayName = 'CustomTimeline'
export default CustomTimeline
