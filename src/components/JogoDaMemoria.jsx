import { Placar } from "./Placar"
import { Carta } from "./Cartas"
import { paresDeCartas } from "../constantes/cartas"
import { Resultado } from "./Resultado"
import { LogicaProvider } from "../contexts/Logica"

export const JogoDaMemoria = () => {
  return (
    <LogicaProvider>
      <JogoDaMemoriaConteudo />
    </LogicaProvider>
  )
}



export const JogoDaMemoriaConteudo = () => {

  return (
    <div className="jogo-da-memoria">
      <div className="jogo-da-memoria__conteudo">
          <h1>Jogo da Memória</h1>
          <Placar />
          <div className="jogo-da-memoria__cartas">
            {paresDeCartas.map((carta) => <Carta key={carta.id} {...carta}/>)}
          </div>
      </div>
      <Resultado />
    </div>
  )
}
