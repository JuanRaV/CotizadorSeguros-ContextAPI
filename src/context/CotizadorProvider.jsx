import { createContext } from "react";

const CotizadorContext = createContext()

//Provider: lugar donde vamos a definir nuestro state, de donde vienen los datos

const CotizadorProvider=({children})=>{

    return(
        <CotizadorContext.Provider
            value={{
                
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