import React from 'react'
import ProductCard from './ProductCard'
import '../cssFolder/NavBar.css'
const arr = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  1,
  1,
  1,
  1,
  1,
  1,
  11,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
]

function product() {
  return (
    <div className="products">
      {arr.map((ele) => (
        <ProductCard />
      ))}
    </div>
  )
}

export default product
