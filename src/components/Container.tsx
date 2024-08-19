import {type ElementType } from "react"

type ContainerProps={
    componentType:ElementType
}

export default function Container({componentType}:ContainerProps) {
    const Component=componentType
  return <Component/>
}
