import React from 'react'
import { useState } from 'react';

const Form = (props) => {
  const [firstName , setFirstName] = useState('Philip');
  const [lastName , setLastName] = useState('');
  const [comment , setComment] = useState('Enter your comment');
  const [gender , setGender] = useState('');
  const [html , setHtml] = useState('');
  const [css , setCss] = useState('');
  const [javascript , setJavascript] = useState('');

  function handleChange(e) {
    const {name, value, type, checked} = e.target;
    if (name === 'firstName') {
      setFirstName(value)
    } else if (name === 'lastName') {
      setLastName(value)
    } else if (name === 'comment') {
      setComment(value)
    } else if (type === 'radio') {
      setGender(value)
    } else if (name === 'html5') {
      if (checked) {
       setHtml(value)
      } else {
        setHtml('')
      }
    } else if (name === 'css') {
      if (checked) {
       setCss(value)
      } else {
        setCss('')
      }
    } else if (name === 'javascript') {
      if (checked) {
       setJavascript(value)
      } else {
        setJavascript('')
      }
    }
  }


  return (
    <form action = "" onSubmit = {props.onSubmit}>
      <div className = "firstname">
        <label htmlFor="firstName">FirstName: </label>
        <input 
          type="text" 
          name="firstName" 
          id="firstName" 
          placeholder = 'firstname' 
          value = {firstName}
        onChange = {handleChange}/>
      </div>

      <div className = 'lastname'>
        <label htmlFor="lastName">Lastname: </label>
        <input 
          type="text" 
          name="lastName" 
          id="lastName" 
          placeholder = "lastname"
          value = {lastName}
        onChange = {handleChange}/>
      </div>

      <div className = 'comment'>
        <label htmlFor="comment">Comment</label>
        <textarea 
          name="comment" 
          id="comment" 
          cols="30" 
          rows="10" 
          value = {comment} 
        onChange = {handleChange}/>
      </div>

      <div className = 'male'>
        <label htmlFor="male">male</label>
        <input 
          type="radio" 
          name="gender"
          value = 'male' 
          id="male" 
          checked = {gender == 'male'}
        onChange = {handleChange}/>
      </div>

      <div className = 'female'>
        <label htmlFor="female">female</label>
        <input 
          type="radio" 
          name="gender" 
          value = 'female'
          id="female" 
          checked = {gender == 'female'}
        onChange = {handleChange}/>
      </div>

      <div className = 'html5'>
        <label htmlFor="HTML 5">HTML 5</label>
        <input 
          type="checkbox" 
          name="html5" 
          value = 'html5'
          id="html5" 
          checked = {html}
        onChange = {handleChange}/>
      </div>

      <div className = 'css'>
        <label htmlFor="CSS">CSS</label>
        <input 
          type="checkbox"
          name="css" 
          value = 'css'
          id="css" 
          checked = {css}
        onChange = {handleChange}/>
      </div>

      <div className = 'javascript'>
        <label htmlFor="javascript">Javascript</label>
        <input 
          type="checkbox" 
          name="javascript" 
          value = 'javascript'
          id="javascript" 
          checked = {javascript}
        onChange = {handleChange}/>
      </div>
      <h3>{`${firstName} ${lastName} Your comment: ${comment} Gender: ${gender} languages: ${html} ${css} ${javascript}`}</h3>
    </form>
  );
}
 
export default Form;