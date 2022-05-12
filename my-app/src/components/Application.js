import React, { useState } from 'react'


function Application() {

  const [isSubmit, setIsSubmit] = useState(false);

  const handleAppSubmit = (e) => {
    e.preventDefault()
    setIsSubmit(isSubmit => !isSubmit)
  }

  return (
    <div>
      <div className="application-form">
      <h2>Krusty Krab Application Form</h2>
      <form onSubmit={e => handleAppSubmit(e)}>
        <input type="text" name="firstName" placeholder="First Name" />
        <input type="text" name="lastName" placeholder="Last Name" />
        <input type="text" name="experience"  placeholder="Previous Experience" />
        <input type="text" name="reccomendation" placeholder="Reccomendations" />
        <button type="submit" className='appButton' >Submit Application</button>
      </form>
      
    </div>
    {isSubmit ? <button className='appButton'>Thanks for your Application, we'll get back to you in 3 business days</button> : null}
    </div>
  )
}

export default Application;