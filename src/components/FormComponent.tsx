import React, { useRef, useState, useEffect } from 'react'
import ControlledInput from './ControlledInput'
import UncontrolledInput from './UncontrolledInput'
import { fetchData } from '../utils/api'

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

const FormComponent = () => {
  const commentRef = useRef<HTMLTextAreaElement>(null)
  const [showData, setShowData] = useState(false)
  const [reset, setReset] = useState(false)
  const [data, setData] = useState<Company | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!showData) return
    const getAPI = async () => {
      try {
        const response = await fetchData()
        if (!response.ok) {
          throw new Error('Помилка при отриманні даних')
        }
        const result = await response.json()
        setData(result.company)
      } catch (err) {
        setError(err.message)
      }
    }
    getAPI()
  }, [showData])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowData(true)
    setReset(prev => !prev)
    if (commentRef.current) {
      commentRef.current.value = ''
    }
  }
  return (
    <>
      <form className='form-container' onSubmit={handleSubmit}>
          <ControlledInput reset={reset} />
          <UncontrolledInput inputRef={commentRef} />
          <button className='form-container__submit' type='submit'>Надіслати</button>
      </form>
      <div>
        {error && <p style={{color: 'red', fontWeight: 'bolder'}}>Error: {error}</p>}
        {data ? (
            <div>
            <h4>*** Дані про компанію ***</h4>
            <strong>Назва: </strong>{data.name}
            <p><strong>Слоган: </strong>{data.catchPhrase}</p>
            <p><strong>Сфера діяльності: </strong>{data.bs}</p>
          </div>
        ) : (
          !error && showData && <p style={{color: 'blue', fontWeight: 'bold'}}>Відбувається завантаження даних...</p>
        )}
      </div>
    </>
  )
}

export default FormComponent;