import React from 'react'

function Card({ title, src, bg }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        font: 'bold',
      }}
    >
      <img
        style={{ width: '80%', height: '80%', borderRadius: '50%' }}
        src={src}
        alt="broken"
      />
      <p>{title}</p>
    </div>
  )
}

export default Card
