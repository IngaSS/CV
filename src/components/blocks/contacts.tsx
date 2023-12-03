import { memo, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import Icon from '../common/icon/icon'

const EMAIL_PUBLIC_KEY = 'X8v1y2iVKrqv_bQMq'
const EMAIL_SERVICE_ID = 'service_pgby14h'
const EMAIL_TEMPLATE_ID = 'template_m5mstna'

const Contacts = memo(({ title, phone, post, form_name, form_email, form_message, btn }: any) => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  })

  const { name, email, message } = formValues
  const [loading, setLoading] = useState(false)

  const handleChange = (e: any, field: string) => {
    const value = e.target.value

    const newValues = { ...formValues, [field]: value }
    setFormValues(newValues)
  }

  const handleSend = async (e: any) => {
    e.preventDefault()

    try {
      setLoading(true)
      await emailjs.send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, {
        to_name: 'Inga',
        from_name: `${name} ${email}`,
        message: message,
      })
      alert('Email successfully sent')
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
      setFormValues({
        name: '',
        email: '',
        message: '',
      })
    }
  }

  useEffect(() => emailjs.init(EMAIL_PUBLIC_KEY), [])

  return (
    <div className="block mb-80">
      <h4 className="block-title" id="contacts">
        {title}
      </h4>
      <motion.div
        className="contacts"
        initial={{ opacity: 0, transform: 'translateY(30%)' }}
        whileInView={{ opacity: 1, transform: 'translateY(0)' }}
      >
        <div className="contacts-info">
          <div className="contacts-info-item">
            <Icon iconName="phone" />
            <span>{phone}</span>
          </div>
          <div className="contacts-info-item">
            <Icon iconName="post" />
            <span>{post}</span>
          </div>
        </div>
        <div className="contacts-form">
          <div className="contacts-form-item">
            <input
              id="name"
              className={`contacts-form-item-input`}
              type="text"
              value={name}
              onChange={(e) => handleChange(e, 'name')}
            />
            <label
              className={`contacts-form-item-label contacts-form-item-label__filled-${name.length > 0}`}
              htmlFor="name"
            >
              {form_name}
            </label>
          </div>
          <div className="contacts-form-item">
            <input
              id="email"
              className="contacts-form-item-input"
              type="text"
              value={email}
              onChange={(e) => handleChange(e, 'email')}
            />
            <label
              className={`contacts-form-item-label contacts-form-item-label__filled-${email.length > 0}`}
              htmlFor="email"
            >
              {form_email}
            </label>
          </div>
          <div className="contacts-form-item">
            <textarea
              id="message"
              className="contacts-form-item-textarea"
              value={message}
              onChange={(e) => handleChange(e, 'message')}
            />
            <label
              className={`contacts-form-item-label contacts-form-item-label__filled-${message.length > 0}`}
              htmlFor="phone"
            >
              {form_message}
            </label>
          </div>
          <button onClick={(e) => handleSend(e)} className="contacts-form-btn">
            {loading ? (
              <span className="send-loader">
                <span className="send-loader-inner" />
              </span>
            ) : (
              btn
            )}
          </button>
        </div>
      </motion.div>
    </div>
  )
})

Contacts.displayName = 'Contacts'
export default Contacts
