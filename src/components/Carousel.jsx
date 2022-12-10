import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { useEffect } from 'react'

const imageList = [
  'https://pg-edtr.archiproducts.com/desktop_2520x1050_83e07315-04f1-47cc-99f6-2638a636c5d5.jpg',
  ' https://pg-edtr.archiproducts.com/desktop_2521x1050_aab21990-55eb-4099-96e3-0dc8d23efe0d.png',
  'https://pg-edtr.archiproducts.com/desktop_2520x1050_0e0b7fc2-67d8-4414-be47-b26c32f5aa3e.jpg',
]

const changeCarouselImage = (state, setState) => {
  console.log(state)
  if (state > 1) {
    setState(0)
  } else {
    setState((prev) => prev + 1)
  }
}
function Carousel() {
  const [state, setState] = useState(0)
  const style = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '500px',
    backgroundImage: `url(${imageList[state]})`,
    backgroundSize: '100%',
    marginTop: '-15px',
  }

  return (
    <div style={style}>
      <ChevronLeftIcon
        onClick={() => changeCarouselImage(state, setState)}
        color="white"
        w={38}
        h={38}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
        }}
      >
        <h1 style={{ color: 'white' }}>Archiproducts Design Awards 2022</h1>
        <h3 style={{ color: 'white' }}>Winners revealed!</h3>
      </div>
      <ChevronRightIcon
        onClick={() => changeCarouselImage(state, setState)}
        color="white"
        w={38}
        h={38}
      />
    </div>
  )
}

export default Carousel
