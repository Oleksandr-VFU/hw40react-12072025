import React, { useRef, useState } from 'react'
import ControlledInput from './ControlledInput'
import UncontrolledInput from './UncontrolledInput'

const FormComponent = () => {
  const commentRef = useRef<HTMLTextAreaElement>(null)
  const [reset, setReset] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Коментар з дочірнього компоненту textarea:', commentRef.current?.value)
    setReset(prev => !prev)
    if (commentRef.current) {
      commentRef.current.value = ''
    }
  }
  return (
    <form className='form-container' onSubmit={handleSubmit}>
        <ControlledInput reset={reset} />
        <UncontrolledInput inputRef={commentRef} />
        <button className='form-container__submit' type='submit'>Надіслати</button>
    </form>
  )
}

export default FormComponent;