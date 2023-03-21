import {useEffect, useState} from 'react'

function UseEffectHook() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count+1)
  }

    // useEffect(()=>{
    //   setCount(count+1)
    //     console.log('Hello')
    //     // Render on Every Changes on Component
    // })
    // useEffect(()=>{
    //   setCount(count+1)
    //   console.log('Run Only Once')
    // }, [])
    useEffect(()=>{
      document.title = `chat(${count})`
      console.log('Run when dependency has changed')
    }, [count])
  return (
    <>
        <h1>Use Effect Hook Allow to perform Side Effect Inside component</h1>
        <h2>Hello {count}</h2>
        <button onClick={increment}>Increment</button>
    </>
  )
}

export default UseEffectHook;