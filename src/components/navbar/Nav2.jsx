import React from 'react'
import '../cssFolder/NavBar.css'
const style = {
  display: 'flex',
  flexDirection: 'row',
  listStyle: 'none',
  //border: '1px solid red',
  height: '70px',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '0px',
}
const Nav2 = () => {
  return (
    <div>
      <ul style={style}>
        <li>
          <h1>archiproducts</h1>
        </li>
        <li>
          <input type="text" />
        </li>

        <li>heart logo</li>
        <li>folder logo</li>
        <li>cart logo</li>
        <li>
          {' '}
          <button>SIGN IN</button>
        </li>
      </ul>
    </div>
  )
}

export default Nav2
