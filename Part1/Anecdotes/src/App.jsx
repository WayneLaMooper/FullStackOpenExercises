import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>
const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(Array(9).fill(0))

  const random = () => {
    const newSelected = [...selected]
    newSelected[8] = Math.floor(Math.random() * 8)
    setSelected(newSelected)
  }

  const vote = () => {
    const newSelected = [...selected]
    newSelected[selected[8]] = newSelected[selected[8]] + 1
    setSelected(newSelected)
  }

  const max_index = () => {
    let max = selected[0];
    let index = 0;

    for (let i = 0; i < selected.length - 1; i++) {
        if (selected[i] > max) {
            index = i;
            max = selected[i];
        }
    }

    return index
  }

  return (
    <div>
      <Header text='Anecdote of the day'/>
      {anecdotes[selected[8]]}
      <div>
        has {selected[selected[8]]} votes
      </div>
        <Button text='vote' onClick={vote}/>
        <Button text='next anecdote' onClick={random}/>
      <Header text='Anecdote with most votes'/>
      {anecdotes[max_index()]}
      <div>
        has {selected[max_index()]} votes
      </div>
    </div>
  )
}

export default App
