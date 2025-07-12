import React from 'react'

interface UncontrolledInputProps {
  inputRef: React.RefObject<HTMLTextAreaElement | null>
}

const UncontrolledInput: React.FC<UncontrolledInputProps> = ({ inputRef }) => {
  return (
    <div className='form-container__input'>
        <label htmlFor='comment-field'>Залиште Ваш коментар:</label>
        <textarea id='comment-field' ref={inputRef} required></textarea>
    </div>
  )
}

export default UncontrolledInput