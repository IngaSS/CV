import { memo, useState } from 'react'
import Icon from '../common/icon/icon'

const Contacts = memo(() => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  })

  const { name, email, message } = formValues

  const handleChange = (e: any, field: string) => {
    const value = e.target.value

    const newValues = { ...formValues, [field]: value }
    setFormValues(newValues)
  }

  return (
    <div className="block mb-80">
      <h4 className="block-title">Contact</h4>
      <div className="contacts">
        <div className="contacts-info">
          <div className="contacts-info-item">
            <Icon iconName="linkedIn" />
            <span>+880 - 12345 - 67890</span>
          </div>
          <div className="contacts-info-item">
            <Icon iconName="linkedIn" />
            <span>+880 - 12345 - 67890</span>
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
              Name
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
              Email
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
              Message
            </label>
          </div>
          <button className="contacts-form-btn">SEND</button>
        </div>
      </div>
    </div>
  )
})

Contacts.displayName = 'Contacts'
export default Contacts
