import {type ComponentPropsWithoutRef } from "react"

type ButtonProps= ComponentPropsWithoutRef<'button'> &{
    href?:never
}

type Anchorprops= ComponentPropsWithoutRef<'a'> &{

    href?:string
}

function isAnchorProps(props:ButtonProps|Anchorprops):props is Anchorprops{
    return 'href' in props
}
export default function Button(props:ButtonProps|Anchorprops) {
 if(isAnchorProps(props)){
     return <a {...props}></a>
}
return <button {...props}></button>
}
