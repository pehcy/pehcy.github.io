import React, { useState, useEffect } from 'react'
import { Container } from '../Container'
import axios from 'axios'

interface feedbackProps {
  fullname: string;
  email:    string;
  message:  string;
  hidden?:  string;
}

export default function FeedbackForm() {
  const [isRobot, setIsRobot] = useState<boolean>(false)
  const [fieldError, setFieldError] = useState<object>({})

  const [inputs, setInputs] = useState<feedbackProps>({
    fullname: '',
    email: '',
    message: '',
    hidden: '',
  })

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    event.persist()
    setInputs(prev => ({
      ...prev,
      [event.target.id]: event.target.value,
    }))
    setIsRobot(!setInputs['hidden'].value.length)
  }

  const validateScheme = {
    fullname: val => !!val,
    email: val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
    message: msg => !!msg,
    hidden: val => !val
  }

  function isValid() : boolean {
    const errors = Object.keys(inputs).filter(attr => !validateScheme[attr](inputs[attr]))
    return errors.hasOwnProperty('key')
  }

  useEffect(() => {
    if (Object.keys()){
    }
  }, [inputs])

  async function handleOnSubmit(event: React.FormEvent<HTMLElement>){
    event.preventDefault()
    if(!setIsRobot) {
      try{
        await axios({
          method: "POST",
          url: "https://formspree.io/YOUR_FORM_ID",
          data: JSON.stringify(inputs),
        })
        .then(res => console.log(res))
        setTimeout(() => resetForm(), 4000)
      }
      catch(e){
        console.warn(e)
      }
    }
  }

  const resetForm = () => {
    Object.keys(setInputs).forEach(attr => setInputs[attr] = '')
  }

  return (
    <Container>
      <form onSubmit={ handleOnSubmit } acceptCharset='UTF-8' noValidate>
        <fieldset>
          <label htmlFor="fullname">Full Name</label>
          <input
            id="fullname"
            type="text"
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            onChange={ handleOnChange }
          />
          <label htmlFor="message">Message</label>
          <textarea
            placeholder="Leave your message here..."
            value = { inputs.message }
            onChange={ handleOnChange }
          />
          <input type="hidden" id="_gotcha"/>
        </fieldset>
      </form>
    </Container>
  )
}