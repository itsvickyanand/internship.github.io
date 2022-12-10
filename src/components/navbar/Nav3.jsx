import React from 'react'
import '../cssFolder/NavBar.css'
const style = {
  display: 'flex',
  flexDirection: 'row',
  listStyle: 'none',
  backgroundColor: 'rgb(231, 229, 226)',
  height: '40px',
  marginTop: '-15px',
  alignItems: 'center',
}
const Nav3 = () => {
  return (
    <div>
      <ul style={style}>
        <li>
          <button>New</button>
        </li>
        <li>
          <button>Furniture</button>
        </li>
        <li>
          <button>Bathroom</button>
        </li>
        <li>
          <button>Kitchen</button>
        </li>
        <li>
          <button>Lighting</button>
        </li>
        <li>
          <button>Outdoor</button>
        </li>
        <li>
          <button>Office</button>
        </li>
        <li>
          <button>Contract</button>
        </li>
        <li>
          <button>Wellness</button>
        </li>
        <li>
          <button>Decor</button>
        </li>
        <li>
          <button>Finishes</button>
        </li>
        <li>
          <button>Construction</button>
        </li>
        <li>
          <button>Lifestyle</button>
        </li>
        <li>
          <button>Shop</button>
        </li>
      </ul>
    </div>
  )
}

export default Nav3
