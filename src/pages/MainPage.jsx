import { useState } from "react"

const CounterComponent = ({counter}) => {
  return (
    <div>
      <h1>{counter}</h1>
    </div>
  )
}

const ButtonComponent = ({setCounter, counter}) => {
  return (
    <button onClick={() => setCounter(counter + 1)}>+</button>
  )
}

const SomeComponent = ({setCounter, counter}) => {
  return (
    <div>
      <ButtonComponent setCounter={setCounter} counter={counter}/>
    </div>
  )
}

export default function MainPage() {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <SomeComponent setCounter={setCounter} counter={counter} />
      <CounterComponent counter={counter} />
    </div>
  )
}