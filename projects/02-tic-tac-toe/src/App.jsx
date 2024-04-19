import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

  const TURNS = {
    X: 'x',
    O:'o'
  }
  
  const Square = ({children, isSelected, updateBoard,index})=>{
    const className = `square ${isSelected}? 'is-selected': ''`
    return(
      <div className={className}>
        {children}
      </div>
    )
  }
function App() {
  // const board = Array(9).fill(null)
  //crear un estado para cada vez que cambie renderizar 
  // crear tablero con un estado inicial 
  const [board,setBoard] = useState(Array(9).fill(null))
  //estado de tueno 
  const [turn, setTurn] = useState(TURNS.X)


  return (
    <>
      <main className='board'>
      <h1>Tic Tac Toe</h1>
      <section className='game'>
        {
          board.map((_,index)=>{
            return(
              <Square
              key={index}
              index={index}>
                {index}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected = { turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected ={turn === TURNS.O}> 
        {TURNS.O}
        </Square>
      </section>
      </main>
    </>
  )
}

export default App
