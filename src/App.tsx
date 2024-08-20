import { useRef } from "react"
import Button from "./components/Button"
import Container from "./components/Container"
import Input from "./components/Input"
import Form from "./components/Form"

function App() {

  const input=useRef<HTMLInputElement>(null)

  return (
<Form>
  <Input id="title" placeholder="title" type="text"/>
  <Input id="price" placeholder="price" type="text"/>
  <button>add product</button>
</Form>
  )
}

export default App
