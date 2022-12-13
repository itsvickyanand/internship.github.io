import React from 'react'
import '../cssFolder/NavBar.css'
const style = {
  display: 'flex',
  flexDirection: 'row',
  listStyle: 'none',
  backgroundColor: 'white',
  height: '40px',
  marginTop: '-15px',
  alignItems: 'center',
}
const Nav3 = () => {
  return (
    <div>
      <ul style={style}>
        <li>
          <button className="navbut">New</button>
        </li>
        <li>
          <button className="navbut">Furniture</button>
        </li>
        <li>
          <button className="navbut">Bathroom</button>
        </li>
        <li>
          <button className="navbut">Kitchen</button>
        </li>
        <li>
          <button className="navbut">Lighting</button>
        </li>
        <li>
          <button className="navbut">Outdoor</button>
        </li>
        <li>
          <button className="navbut">Office</button>
        </li>
        <li>
          <button className="navbut">Contract</button>
        </li>
        <li>
          <button className="navbut">Wellness</button>
        </li>
        <li>
          <button className="navbut">Decor</button>
        </li>
        <li>
          <button className="navbut">Finishes</button>
        </li>
        <li>
          <button className="navbut">Construction</button>
        </li>
        <li>
          <button className="navbut">Lifestyle</button>
        </li>
        <li>
          <button className="navbut">Shop</button>
        </li>
      </ul>
    </div>
  )
}

export default Nav3
