import {type ComponentPropsWithoutRef } from "react"

type InputProps={
    id:string
    placeholder:string
} & ComponentPropsWithoutRef<'input'>

export default function Input({id,placeholder,...props}:InputProps) {
  return (
    <p>
        <input id={id} placeholder={placeholder} {...props}/>
    </p>
  )
}
