import logo from './logo.svg'
import './App.css'
import Nav1 from './components/navbar/Nav1.jsx'
import Nav2 from './components/navbar/Nav2.jsx'
import Nav3 from './components/navbar/Nav3.jsx'
import Carousel from './components/Carousel'
import Stories from './components/Story/Stories'
import Product from './components/products/Product'

function App() {
  return (
    <div
      style={{
        height: 'auto',
        marginTop: '0px',
        backgroundColor: 'white',
      }}
    >
      <div className="sticky">
        <Nav1 />
        <Nav2 />
      </div>
      <Nav3 />
      <Carousel />
      <div style={{ textAlign: 'center' }}>
        <h1>From home to contract, get inspired and design!</h1>
        <p style={{ fontSize: '25px' }}>
          Browse through all catalogues, download BIM and 3D files and shop
          furniture and Architecture products
        </p>
      </div>
      <Stories />
      <Product />
    </div>
  )
}

export default App
