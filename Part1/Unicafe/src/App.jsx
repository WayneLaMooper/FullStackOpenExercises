import { useState } from "react"

const Header = ({header}) => <h1>{header}</h1>
const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>
const Display = ({text, count}) => <p>{text} {count}</p>

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handlingGood = () => setGood(good + 1)
  const handlingNeutral = () => setNeutral(neutral + 1)
  const handlingBad = () => setBad(bad + 1)

  const all = good + neutral + bad

  return (
    <div>
      <Header header='give feedback'/>
      <Button text='good' onClick={handlingGood}/>
      <Button text='neutral' onClick={handlingNeutral}/>
      <Button text='bad' onClick={handlingBad}/>
      <Header header='statistics'/>
      <Display text='good' count={good}/>
      <Display text='neutral' count={neutral}/>
      <Display text='bad' count={bad}/>
      <Display text='all' count={all}/>
      <Display text='average' count={(good - bad)/(all)}/>
      <Display text='positive' count={(good/all)*100}/>
    </div>
  )
}

export default App
