import { useRef } from "react"
import Button from "./components/Button"
import Container from "./components/Container"
import Input from "./components/Input"

function App() {

  const input=useRef<HTMLInputElement>(null)

  return (
    <>
 {/* <Container componentType={Button}>add product</Container> */}
 <Input id="title" placeholder="title" ref={input}/>
    </>
  )
}

export default App
