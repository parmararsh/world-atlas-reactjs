import React from 'react'

function Contact() {
  const handleFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries)
  }
  return (
    <section className='contact'>
      <div className="form_container">
        <h1 className='contact_title'>Contact</h1>
        <form action={handleFormSubmit}>
          <input type="text" className="txtName" placeholder='Enter Name' autoComplete='off' />
          <input type="email" className="txtEmail" placeholder='Enter Email' autoComplete='off' />
          <textarea name="txtArea" className="txtDesc" placeholder='Enter Text' autoComplete='off' rows="10" cols={55}></textarea>
          <button type='submit' className="btnSubmit" value={"send"}>Submit</button>
        </form>
      </div>

    </section>
  )
}

export default Contact
