import { useState } from 'react'

const Calculadora = () => {
    const [numeroUno, setNumeroUno] = useState(0)
    const [numeroDos, setNumeroDos] = useState(0)

  return (
    <section>
        <form action="">
            <input onChange={(e)=>setNumeroUno(e.target.value)} placeholder="Numero Uno" type="text" />
            <input onChange={(e)=>setNumeroDos(e.target.value)} placeholder="Numero Dos" type="text" />
        </form>
        <section>
            <p>La suma es: {parseInt(numeroUno)+parseInt(numeroDos)}</p>
        </section>
    </section>
  )
}

export default Calculadora