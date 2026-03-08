import { useState } from 'react'
import BaristaForm from './components/BaristaForm';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <video autoPlay muted loop className="background-video">
        <source src="/coffeeshop.mp4" type="video/mp4" />
      </video>
      <div className="content-overlay">
        <div className="title-container">
          <div className="title-with-image">
            <img src="/coffee.gif" alt="Coffee animation" className="coffee-gif" />
            <h1 className="title">On My Grind</h1>
          </div>
          <p>So you think you can barista? Let's put that to the test...</p>
        </div>
        <BaristaForm />
      </div>
    </>
  )
}

export default App
