import { createContext, useState } from "react";

const CotizadorContext = createContext()

//Provider: lugar donde vamos a definir nuestro state, de donde vienen los datos

const CotizadorProvider=({children})=>{
    const [datos,setDatos] = useState({
        marca: '',
        año:'',
        plan:''
    })

    const [error,setError] = useState('')

    const handleChangeDatos = e =>{
        setDatos({
            ...datos, //Mantiene la info previa si no se perderia todo
            [e.target.name] : e.target.value
        })
    }
    return(
        <CotizadorContext.Provider
            value={{
                datos,
                handleChangeDatos,
                error,
                setError
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export{
    CotizadorProvider
}

export default CotizadorContext