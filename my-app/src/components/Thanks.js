import React from 'react'
import ThanksCard from './ThanksCard'

const Thanks = ({ cart }) => {
  return (
    <div>
      {cart.map(receipt => <ThanksCard receipt={receipt}/>)}
    </div>
  )
}

export default Thanks