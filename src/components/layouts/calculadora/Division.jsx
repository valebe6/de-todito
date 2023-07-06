import React from 'react'

export const Division = ({numeroUno, numeroDos}) => {
  return (
    <section>
        <p>La division es: {parseInt(numeroUno)/parseInt(numeroDos)}</p>
    </section>
  )
}
