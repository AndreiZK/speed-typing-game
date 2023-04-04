import { useState, useEffect, useRef } from "react";

export default function useGame(timerVal = 10) {
    const [text, setText] = useState('')
  const [wordCount, setWordCount] = useState('???')
  const [timer, setTimer] = useState('-')
  const [isGame, setIsGame] = useState(false)

  const textRef = useRef(null)

  useEffect(() => {
    if (isGame && timer > 0) {
      setTimeout(() => {
        setTimer(prevTimer => prevTimer - 1)
      }, 1000)
    } else {
      endGame()
    }
  }, [timer])

  useEffect(() => {
    if (!isGame && timer === 0) {

    }
  }, [isGame])

  function handleChange(e) {
    setText(e.target.value)
  }

  function calcWords() {
    const currentWords = text.trim().split(' ').filter(word => word !== '')
    const currentWordCount = currentWords.length
    setWordCount(currentWordCount)
  }

  function startGame() {
    setIsGame(true)
    setTimer(timerVal)
    setText('')
    setWordCount('???')
    textRef.current.disabled = false
    textRef.current.focus()
  }

  function endGame() {
    setIsGame(false)
    calcWords()
  }

  return {isGame, textRef, text, handleChange, timer, startGame, wordCount}
}