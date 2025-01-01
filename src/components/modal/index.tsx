import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'

type Props = {
  trigger : React.ReactNode
  title : string
  children : React.ReactNode
  description : string 
  classname? : string 
}

const Modal = ({children,description,title,trigger,classname}: Props) => {
  return (
    <Dialog>
      <DialogTrigger
      className={classname} asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  )
}

export default Modal