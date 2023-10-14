import { createContext, useState } from "react";
import { obtenerDiferenciaYear,calcularMarca, calcularPlan,formatearDinero } from "../helpers";
const CotizadorContext = createContext()

//Provider: lugar donde vamos a definir nuestro state, de donde vienen los datos

const CotizadorProvider=({children})=>{
    const [datos,setDatos] = useState({
        marca: '',
        año:'',
        plan:''
    })

    const [error,setError] = useState('')
    const [resultado,setResultado] = useState(0)

    const handleChangeDatos = e =>{
        setDatos({
            ...datos, //Mantiene la info previa si no se perderia todo
            [e.target.name] : e.target.value
        })
    }

    const cotizarSeguro = ()=>{
        //Una base
        let resultado =2000
        //Obtener diferencia de anios
        const diferencia = obtenerDiferenciaYear(datos.año)
        
        //Restar el 3% por cada anio que pase
        resultado-=((diferencia*3)*resultado)/100
        
        //Americano 15%
        //Europeo 30%
        // Asiatico 5%
        resultado*=calcularMarca(datos.marca)
        
        //Basico %20
        //Completo %50
        resultado*=calcularPlan(datos.plan)
        //Formatear
        resultado=resultado.toFixed(2)
        resultado =formatearDinero(resultado)
        setResultado(resultado)

    }
    
    return(
        <CotizadorContext.Provider
            value={{
                datos,
                handleChangeDatos,
                error,
                setError,
                cotizarSeguro
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