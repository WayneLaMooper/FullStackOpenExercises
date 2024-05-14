import { useState } from "react"

const Header = ({header}) => <h1>{header}</h1>
const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td> 
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = (good - bad)/all
  const positive = [(good/all) * 100, '%'].join(' ')

  if (all === 0) {
    return (
      <>No feedback given</>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticLine text='good' value={good}/>
        <StatisticLine text='neutral' value={neutral}/>
        <StatisticLine text='bad' value={bad}/>
        <StatisticLine text='all' value={all}/>
        <StatisticLine text='average' value={average}/>
        <StatisticLine text='positive' value={positive}/>
      </tbody>
    </table>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handlingGood = () => setGood(good + 1)
  const handlingNeutral = () => setNeutral(neutral + 1)
  const handlingBad = () => setBad(bad + 1)

  const all = good + neutral + bad
  const average = (good - bad)/all
  const positive = [(good/all) * 100, '%'].join(' ')

  return (
    <div>
      <Header header='give feedback'/>
      <Button text='good' onClick={handlingGood}/>
      <Button text='neutral' onClick={handlingNeutral}/>
      <Button text='bad' onClick={handlingBad}/>
      <Header header='statistics'/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
