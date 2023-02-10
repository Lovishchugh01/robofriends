import React from 'react'

const Card = (props) => {
  return (
    <div className='bg-light-green dib pa3 br3 ma2 grow'>
        <img src={`https://robohash.org/${props.username}?200x200`} alt="robots" />
        <div>
            <h2>{props.name}</h2>
            <p>{props.email}</p>
        </div>
    </div>
  )
}

export default Card
