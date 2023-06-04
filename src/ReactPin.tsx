import React, { useCallback, useMemo, useState, useEffect, useRef } from 'react'

import PinInput from './components/PinInput'
import { Pin } from './@types'

export type PinType = 'numeric' | 'alphaNumeric' | 'alphaNumericPassword' | 'numericPassword' | 'alphabet'

interface ReactPinProps {
  length?: number,
  type?: PinType,
  inputClass?: string,
  onFill?: (code: string) => void
}

const ReactPin:React.FC<ReactPinProps> = ({ length = 6, type = 'numeric', inputClass, onFill }) => {
  const inputsRef = useRef<HTMLInputElement[]>([])
  const pinLength = useMemo(() => {
    return Number(length) || 0 
  }, [length])

  const checkIfKeyValid = useCallback((key: Pin) => {
    let regex = /^[a-zA-Z0-9]+$/
    
    if (type === 'numeric' || type === 'numericPassword') {
      regex = /^[0-9]+$/
    }

    if (type === 'alphabet') {
      regex = /^[a-zA-Z]+$/
    }
    
    return regex.test(key)
  }, [type])

  const [codes, setCodes] = useState<Pin[]>(new Array(pinLength).fill(''))
  const inputType = useMemo(() => {
    if (type === 'alphaNumericPassword' || type === 'numericPassword') return 'password'

    return 'text'
  }, [type])

  const backSpaceHandler = (index: number) => {
    if (codes[index] === '') {
      return focusInput(index - 1)
    }

    updatePinCode(index, '')
  }

  const onKeyInput = (index: number, key: Pin) => {
    if (key === 'Backspace') return backSpaceHandler(index)
    if (key.length > 1) return
    if (!checkIfKeyValid(key)) return

    updatePinCode(index, key)
    focusInput(index + 1)
  }

  const updatePinCode = (index: number, code: Pin) => {
    setCodes(currCodes => {
      const prevCodes = [...currCodes]
      
      prevCodes[index] = code
      return prevCodes
    })
  }

  const focusInput = (index: number) => {
    if (index < 0) return
    if (index >= pinLength) {
      return setTimeout(() => inputsRef.current[index - 1].blur(), 0)
    }

    setTimeout(() => inputsRef.current[index].focus(), 0)
  }
  
  useEffect(() => {
    const value = codes.join('')

    if (!onFill || !value) return
    
    onFill(value)
    // eslint-disable-next-line
  }, [codes])

  useEffect(() => {
    setCodes(new Array(pinLength).fill(''))
  }, [pinLength])

  return (
    <div className='react-pin'>
      {
        codes.map((code, index) => <PinInput code={code} ref={input => (inputsRef.current[index] = input as HTMLInputElement)} className={inputClass} key={index} type={inputType} inputHandler={(key: Pin) => { onKeyInput(index, key) }} />)
      }
    </div>
  )
}

export default ReactPin