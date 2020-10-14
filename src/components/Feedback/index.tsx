import React, { useState } from 'react'
import axios from 'axios'

const FeedbackForm = () => {

  const [robot, isRobot] = useState<boolean>(false)

  isRobot(true)

  function updateSubmit(event: React.FormEvent<HTMLElement>) {
    event.preventDefault()
  }

  return(
    <form action="https://formspree.io/f/{form_id}" acceptCharset="UTF-8" method="post">
      <fieldset>
        <label>Full Name</label>
        <input type="email" name="_replyto" id="_replyto"/>
        <textarea placeholder="Leave your message here...">
        </textarea>
        <input type="hidden" name="_gotcha" id="_gotcha" style={{display: 'none'}} />
      </fieldset>
      <button onClick={ updateSubmit }></button>
    </form>
  )
}

export default FeedbackForm