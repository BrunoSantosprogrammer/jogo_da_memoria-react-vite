import { useJogoDaMemoria } from '../hooks/useJogoMemoria'

// eslint-disable-next-line react/prop-types
export const Pontos = ({ titulo, valor }) => {
  return (
    <div className="pontos">
      <strong className="pontos__titulo">{titulo}: </strong>
      <span className="pontos__valor">{valor} </span>
    </div>
  )
}

export const Placar = () => {
  const { quantidadeCartasViradas, } = useJogoDaMemoria()
  return (
    <div className="placar">
      <Pontos titulo="Cartas viradas" valor={quantidadeCartasViradas} />
      <Pontos titulo="Nível" valor={1}/>
    </div>
  )
}

