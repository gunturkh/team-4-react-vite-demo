import { useState } from 'react'
import Button from './Button'
import Header from './Header'
import './App.css'
import Footer from './Footer'
import Description from './Description'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = (value: number) => {
    setCount((count) => count + value)
  }

  return (
    <>
      <Header />
      <div className="card">
        <Button onClickProps={() => handleClick(1)}>
          <div style={{ color: 'red' }}>Count is {count}</div>
        </Button>
        <Button onClickProps={() => handleClick(-1)}>
          Decrement by 1: Count is {count}
        </Button>
        <Button onClickProps={() => handleClick(10)}>
          Increment by 10: Count is {count}
        </Button>
        <Button onClickProps={() => handleClick(-10)}>
          Decrement by 10: Count is {count}
        </Button>
        
      </div>
      <Description />
     <Footer/> 
    </>
  )
}

export default App
