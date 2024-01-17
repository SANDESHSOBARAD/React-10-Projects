/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Button from "./Button/Button"
import { FaRegMessage } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { useState } from "react";
import Contact from '../assets/contact.svg'
const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = (e) => {

    e.preventDefault();

    setName(e.target[0].value)
    setEmail(e.target[1].value)
    setMessage(e.target[2].value)

    console.log(name)
    console.log(email)
    console.log(message)

  }
  return (
    <div className="container">
      <div className="form-content">
      <div className="content">
        <div className="btns">
          <Button icon={<FaRegMessage fontSize="24px"/>} text={'VIA SUPPORT CHAT'}/>
          <Button icon={<IoCallOutline fontSize="24px" />} text={'VIA Call'}/>
        </div>
        <Button isOutLine={true} icon={<FaRegMessage fontSize="24px"/>} text={'VIA EMAIL FORM'}/>
      </div>

        <form onSubmit={onSubmit}>
        <div className='form_control'>
            <label htmlFor="name">Name</label>
            <input type="text" name="name"/>
          </div>
          <div className='form_control'>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className='form_control'>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT" />
          </div>
        </form>
        </div>
      <div className="img">
          <img src={Contact} alt="contact" />
        </div>

    </div>
  )
}

export default ContactForm