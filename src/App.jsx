import useGame from './useGame'

function App() {
  
  const {isGame, 
    textRef, 
    text, 
    handleChange, 
    timer, 
    startGame, 
    wordCount
  } = useGame(3)

  return (
    <div>
      <h1>Speed typing game</h1>
      <textarea disabled={!isGame} ref={textRef} name="" id="" cols="30" rows="10" value={text} onChange={handleChange}></textarea>
      <h4>Time remaining: {timer}</h4>
      <button onClick={startGame} disabled={isGame}>Start</button>
      <h1>Word count: {wordCount}</h1>
    </div>
  )
}

export default App
