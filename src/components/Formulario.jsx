import { Fragment } from "react"
import { MARCAS, YEARS, PLANES } from "../constants"

const Formulario = () => {
  return (
    <>
        <form action="">
            <div className="my-5">
                <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">
                    Marca
                </label>
                <select 
                    name="marca" 
                    id="" 
                    className="w-full p-3 bg-white border border-gray-200"
                >
                    <option value="">--Selecciona Marca--</option>

                    {MARCAS.map(marca=>(
                        <option
                            key={marca.id}
                            value={marca.id}
                        >
                            {marca.nombre}
                        </option>
                    ))}
                </select>
            </div>

            <div className="my-5">
                <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">
                    Año
                </label>
                <select 
                    name="año" 
                    id="" 
                    className="w-full p-3 bg-white border border-gray-200"
                >
                    <option value="">--Selecciona Año--</option>

                    {YEARS.map(year=>(
                        <option
                            key={year}
                            value={year}
                        >
                            {year}
                        </option>
                    ))}
                </select>
            </div>

            <div className="my-5">
                <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">
                    Elige un Plan
                </label>
                <div className="flex gap-3">
                    {PLANES.map(plan=>(
                        
                        <Fragment key={plan.id}>
                            <label htmlFor="">
                                {plan.nombre}
                            </label>
                            <input 
                                type="radio"
                                name="plan"
                                value={plan.id} 
                            />
                        </Fragment>
                        
                    ))}

                </div>
            </div>
            <input
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold rounded-lg"
                value="Cotizar"
            />
        </form>
    </>
  )
}

export default Formulario
