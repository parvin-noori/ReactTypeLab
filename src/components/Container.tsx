import {type ReactNode, type ElementType, ComponentPropsWithoutRef } from "react"

type ContainerProps<T extends ElementType>={
    componentType?:T
    children:ReactNode
}&ComponentPropsWithoutRef<T>

export default function Container< c extends ElementType>({componentType,children,...props}:ContainerProps<c>) {
    const Component=componentType || 'div'
  return <Component {...props}>{children}</Component>
}
