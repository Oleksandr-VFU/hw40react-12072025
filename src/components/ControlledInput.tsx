import React, { useEffect, useState } from 'react'

interface ControlledInputProps {
    reset: boolean
}

const ControlledInput: React.FC<ControlledInputProps> = ({ reset }) => {
    const [value, setValue] = useState('')

    useEffect(() => {setValue('')}, [reset])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const input = e.target.value
        if(/^\d*$/.test(input)) {
            setValue(input)
        } else {
            alert('Для номера можливо вводити тільки цифри !!!')
        }
    }
  return (
    <div className='form-container__input'>
        <label htmlFor='phone-number'>Введіть номер телефону:</label>
        <input id='phone-number' value={value} onChange={handleChange} required></input>
    </div>
  )
}

export default ControlledInput