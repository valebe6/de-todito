import React from 'react'

export const Suma = ({numeroUno, numeroDos}) => {
  return (
    <section>
        <p>La suma es: {parseInt(numeroUno)+parseInt(numeroDos)}</p>
    </section>
  )
}
