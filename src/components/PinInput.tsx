import React from 'react'

import { Pin } from '../../../@types'

interface PinInputProps {
  type: string,
  code: Pin,
  className?: string,
  inputHandler: (code: Pin) => void
}

const PinInput = React.forwardRef<HTMLInputElement, PinInputProps>(({ code, type, inputHandler }, ref) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    inputHandler(e.key)
  }
  
  return (
    <input className='pin-input' autoComplete='off' ref={ref} type={type} value={code} onKeyDown={handleKeyDown} onChange={() => {}} />
  )
})

export default PinInput