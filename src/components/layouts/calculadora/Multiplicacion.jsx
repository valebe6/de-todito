import React from 'react'

export const Multiplicacion = ({numeroUno, numeroDos}) => {
  return (
    <section>
        <p>La multiplicacion es: {parseInt(numeroUno)*parseInt(numeroDos)}</p>
    </section>
  )
}
