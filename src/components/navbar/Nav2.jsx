import React from 'react'
import '../cssFolder/NavBar.css'
import {
  BsFillSuitHeartFill,
  BsFillFolderFill,
  BsCartDash,
} from 'react-icons/bs'
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
        <li style={{ width: '25%' }}>
          <img
            style={{ height: '100%', width: '70%' }}
            src="https://www.archiproducts.com/images/logo-archiproducts@2x.png"
            alt=""
          />
        </li>
        <li
          style={{
            width: '40%',
            height: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <input
            style={{
              height: '120%',
              width: '100%',
              border: '0px',
              borderRadius: '5px',
              marginLeft: '-10%',
              backgroundColor: '#E2E0DD',
              fontSize: '17px',
            }}
            type="text"
            placeholder="Search amongst 293,851 products, manufacturers, designers, news"
          />
        </li>

        <li style={{ width: '20px', height: '20px' }}>
          <BsFillSuitHeartFill />
        </li>
        <li style={{ width: '20px', height: '20px' }}>
          <BsFillFolderFill />
        </li>
        <li style={{ width: '20px', height: '20px' }}>
          <BsCartDash />
        </li>
        <li>
          {' '}
          <button
            style={{
              height: '50px',
              width: '100px',
              backgroundColor: 'black',
              color: 'white',
              borderRadius: '5px',
            }}
          >
            SIGN IN
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Nav2
