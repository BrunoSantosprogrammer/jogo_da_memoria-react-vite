import { Placar } from "./Placar"
import { Carta } from "./Cartas"
import { paresDeCartas } from "../constantes/cartas"

const JogoDaMemoria = () => {

  return (
    <div className="jogo-da-memoria">
      <div className="jogo-da-memoria__conteudo">
          <h1>Jogo da Memória</h1>
          <Placar />
          <div className="jogo-da-memoria__cartas">
            {paresDeCartas.map((carta) => <Carta key={carta.id} {...carta}/>)}
          </div>
      </div>
    </div>
  )
}

export default JogoDaMemoria
