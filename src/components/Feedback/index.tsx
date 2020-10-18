import React, { useState, useEffect } from 'react'
import { Container } from '../Container'
import { author } from '../../gatsby/data/config'
import axios from 'axios'

interface feedbackProps {
  fullname: string;
  email:    string;
  message:  string;
  _gotcha:  string;
}

export default function FeedbackForm() {
  const [isRobot, setIsRobot] = useState<boolean>(false)
  const [fieldError, setFieldError] = useState<object>({})

  const [inputs, setInputs] = useState<feedbackProps>({
    fullname: '',
    email: '',
    message: '',
    _gotcha: '',
  })

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    event.persist()
    setInputs(prev => ({
      ...prev,
      [event.target.id]: event.target.value,
    }))
    //setIsRobot(!setInputs['hidden'].value.length)
  }

  const validateScheme = {
    fullname: val => !!val,
    email: val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
    message: msg => !!msg,
    _gotcha: val => !val
  }

  const isValid = () => {
    const errors = Object.keys(inputs).filter(attr => !validateScheme[attr](inputs[attr]))
    setFieldError(prev => ({ ...prev, ...errors}))
    return errors.hasOwnProperty('key')
  }

  useEffect(() => {
    if (Object.keys(fieldError).length > 0){
      isValid()
    }
  }, [inputs])

  async function handleOnSubmit(event: React.FormEvent<HTMLElement>){
    event.preventDefault()
    if(isValid() || !isRobot) {
      try{
        await axios({
          method: "POST",
          url: `https://formspree.io/${author.contacts.email}`,
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

  function resetForm() {
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
            value = { inputs.fullname }
            onChange={ handleOnChange }
          />
          <label htmlFor="_replyto">Email</label>
          <input
            id="email"
            name="_replyto"
            value = { inputs.email }
            onChange={ handleOnChange }
          />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Leave your message here..."
            value = { inputs.message }
            onChange={ handleOnChange }
          />
          <input type="hidden" id="_gotcha" name="_gotcha" 
            value={ inputs._gotcha }
            onChange={ handleOnChange } 
          />
          <button type="submit">
            Submit
          </button>
        </fieldset>
      </form>
    </Container>
  )
}