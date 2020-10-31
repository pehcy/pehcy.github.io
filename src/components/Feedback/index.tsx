import React from 'react'
//import { Formik, Form, Field, ErrorMessage } from 'formik'
//import * as Yup from 'yup'
import { Container } from '../Container'
import { author } from '../../gatsby/data/config'
import axios from 'axios'

export default class FeedbackForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fullname: '',
      email: '',
      message: '',
    }
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    event.persist()
    this.setState({[event.target.id]: event.target.value })
  }

  async handleSubmit(event: React.FormEvent<HTMLElement>) {
    event.preventDefault()
    try {
      await axios({})
    } catch (err) {
      alert(err)
    }
  }

  render() {
    return (
      <Container>
        <form action={`https://formspree.io/${process.env.GATSBY_FORMSPREE_ENDPOINT}`} method="POST">
          <input type="text" name="_gotcha" style={{ display: `none`}} />
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" id="fullname" />
          <label htmlFor="email">Email</label>
          <input type="email" name="_replyto" id="email" />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" 
            placeholder="Please leave your message here..."/>
          <button type="submit">Submit</button>
        </form>
      </Container>
    )
  }
}