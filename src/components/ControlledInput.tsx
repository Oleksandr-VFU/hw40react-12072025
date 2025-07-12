import React, { useState } from 'react'

const ControlledInput = () => {
    const [value, setValue] = useState('')
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
    <div>
        <label htmlFor='phone-number'>Введіть номер телефону:</label>
        <input id='phone-number' type='text' value={value} onChange={handleChange} required></input>
    </div>
  )
}

export default ControlledInput