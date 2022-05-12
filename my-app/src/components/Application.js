import React from 'react'


function Application() {
  return (
    <div>
      <div className="application-form">
      <h2>Krusty Krab Application Form</h2>
      <form >
        <input type="text" name="firstName" placeholder="First Name" />
        <input type="text" name="lastName" placeholder="Last Name" />
        <input type="text" name="experience"  placeholder="Previous Experience" />
        <input type="text" name="reccomendation" placeholder="Reccomendations" />
        <button type="submit" className='appButton'>Submit Application</button>
      </form>
    </div>
    </div>
  )
}

export default Application;