import { ComponentPropsWithoutRef } from "react"

type ButtonProps={
    element:'button'
} & ComponentPropsWithoutRef<'button'>

type Anchorprops={
    element:'anchor'
} & ComponentPropsWithoutRef<'a'>

export default function Button(props:ButtonProps|Anchorprops) {
 if(props.element==='button'){
return <button {...props}></button>
 }
 return <a {...props}></a>
}
