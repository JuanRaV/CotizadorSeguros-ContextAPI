import { createContext, useState } from "react";

const CotizadorContext = createContext()

//Provider: lugar donde vamos a definir nuestro state, de donde vienen los datos

const CotizadorProvider=({children})=>{
    const [modal,setModal] = useState(false)
    
    return(
        <CotizadorContext.Provider
            value={{
                modal,
                setModal
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