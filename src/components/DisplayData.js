import React from 'react'

function DisplayData({firstName,lastName}) {
  return (
    <div>
        <h1>{firstName}</h1>
        <h2>{lastName}</h2>
    </div>
  )
}

export default DisplayData 