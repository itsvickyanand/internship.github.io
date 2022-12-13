import React from 'react'
import Card from './Card.jsx'

const style = {
  display: 'flex',
  flexDirection: 'row',
}
const style2 = {
  display: 'flex',
  flexDirection: 'row',
}

const Data = [
  {
    title: 'SHOP',
    bg: '#e7e5e2',
    src:
      'https://pg-edtr.archiproducts.com/desktop_261x260_b85b05df-5f53-4297-8c55-f4e974bc27cd.png',
  },
  {
    title: 'NEW',
    bg: '#e7e5e2',
    src:
      'https://pg-edtr.archiproducts.com/desktop_261x260_1f1140e8-c6de-422f-bab7-ea07480ca90d.png',
  },
  {
    title: 'FURNITURE',
    bg: '#e7e5e2',
    src:
      'https://pg-edtr.archiproducts.com/desktop_260x260_1031d6ff-1ee8-4ae3-a14b-d26aaf38ca38.jpg',
  },
  {
    title: 'BATHROOM',
    bg: '#e7e5e2',
    src:
      'https://pg-edtr.archiproducts.com/desktop_260x260_924a8340-a705-4c45-8ea7-c02289def616.jpg',
  },
  {
    title: 'KITCHEN',
    bg: '#e7e5e2',
    src:
      'https://pg-edtr.archiproducts.com/desktop_260x260_bd6b8fb5-4c07-4b3b-8b82-a9f650df71cb.jpg',
  },
  {
    title: 'LIGHTING',
    bg: '#e7e5e2',
    src:
      'https://pg-edtr.archiproducts.com/desktop_260x260_58943331-48a3-4b04-ba23-fc23ed7a9ce3.jpg',
  },
  {
    title: 'OUTDOOR',
    bg: '#e7e5e2',
    src:
      'https://pg-edtr.archiproducts.com/desktop_260x260_0b80e3f9-8579-4ac9-9c6b-3c100d85c362.jpg',
  },
  {
    title: 'OFFICE',
    bg: '#e7e5e2',
    src:
      'https://pg-edtr.archiproducts.com/desktop_260x260_20a4d2bf-a07b-4621-bd8c-8ee5e77b21da.jpg',
  },
  {
    title: 'CONTRACT',
    bg: '#e7e5e2',
    src:
      'https://pg-edtr.archiproducts.com/desktop_260x260_7e77a673-dcca-4fe7-9246-04e00a02e364.jpg',
  },
  {
    title: 'WELLNESS',
    bg: '#e7e5e2',
    src:
      'https://pg-edtr.archiproducts.com/desktop_260x260_a08cc423-9a42-4542-b270-c12baa320bcd.jpg',
  },
]

function Stories() {
  return (
    <div style={style2}>
      {Data.map((ele) => (
        <Card key={Math.random()} src={ele.src} bg={ele.bg} title={ele.title} />
      ))}
    </div>
  )
}

export default Stories
