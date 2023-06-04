import React from 'react'

import { Pin } from '../@types'
interface PinInputProps {
  type: string,
  code: Pin,
  className?: string,
  style?: React.CSSProperties,
  inputHandler: (code: Pin) => void
}

const PinInput = React.forwardRef<HTMLInputElement, PinInputProps>(({ code, type, inputHandler, className, style }, ref) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    inputHandler(e.key)
  }
  
  return (
    <input className={`pin-input ${className || ''}`} style={style} autoComplete='off' ref={ref} type={type} value={code} onKeyDown={handleKeyDown} onChange={() => {}} />
  )
})

export default PinInput