import { useState } from 'react'
import { Suma } from './Suma'
import { Resta } from './Resta'
import { Division } from './Division'
import { Multiplicacion } from './Multiplicacion'

const Calculadora = () => {
    const [numeroUno, setNumeroUno] = useState(0)
    const [numeroDos, setNumeroDos] = useState(0)

  return (
    <section className='calculadora'>
        <form className='formulario'>
            <input onChange={(e)=>setNumeroUno(e.target.value)} placeholder="Numero Uno" type="text" />
            <input onChange={(e)=>setNumeroDos(e.target.value)} placeholder="Numero Dos" type="text" />
        </form>
        <section className='resultados'>
            <Suma numeroUno={numeroUno} numeroDos={numeroDos}/>
            <Resta numeroUno={numeroUno} numeroDos={numeroDos}/>
            <Division numeroUno={numeroUno} numeroDos={numeroDos}/>
            <Multiplicacion numeroUno={numeroUno} numeroDos={numeroDos}/>
        </section>
    </section>
  )
}

export default Calculadora