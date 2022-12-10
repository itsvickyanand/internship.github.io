import logo from './logo.svg'
import './App.css'
import Nav1 from './components/navbar/Nav1.jsx'
import Nav2 from './components/navbar/Nav2.jsx'
import Nav3 from './components/navbar/Nav3.jsx'
import Carousel from './components/Carousel'

function App() {
  return (
    <div style={{ height: '10000px', marginTop: '0px' }}>
      <div className="sticky">
        <Nav1 />
        <Nav2 />
      </div>
      <Nav3 />
      <Carousel />
    </div>
  )
}

export default App
