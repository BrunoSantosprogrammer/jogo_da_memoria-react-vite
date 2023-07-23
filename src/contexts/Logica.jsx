import { createContext } from "react";

const Logica = createContext();

export const LogicaProvider = {{children}} => {
const valor = {

}

  return (
    <Logica.Provider value={valor}>
    {children}
  </Logica.Provider>
  )
}
