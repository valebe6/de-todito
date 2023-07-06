import React from 'react'

export const Resta = ({numeroUno, numeroDos}) => {
  return (
    <section>
        <p>La Resta es: {parseInt(numeroUno)-parseInt(numeroDos)}</p>
    </section>
  )
}
