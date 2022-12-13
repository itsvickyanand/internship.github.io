import React from 'react'
import '../cssFolder/NavBar.css'

const style = {
  display: 'flex',
  flexDirection: 'row',
  listStyle: 'none',
  marginTop: '0px',
  //border: '1px solid red',
}

const Nav1 = () => {
  return (
    <div className="nav1">
      <ul style={style}>
        <li className="alignLeft">NETWORK</li>
        <li className="alignLeft">
          <img
            style={{ marginRight: '5px' }}
            src="https://www.archiproducts.com/images/flags/gb.png"
            alt=""
          />
          UNITED KINGDOM / EN(&#xA3;)
        </li>
        <li className="alignLeft">PUBLISH PRODUCTS</li>
      </ul>
    </div>
  )
}

export default Nav1
