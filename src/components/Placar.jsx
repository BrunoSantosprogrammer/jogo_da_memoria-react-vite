import { useJogoDaMemoria } from '../hooks/useJogoMemoria'

export const Placar = () => {
  const { quantidadeCartasViradas, quantidadeDePontos } = useJogoDaMemoria()
  return (
    <div className="placar">
      <Pontos titulo="Pontos" valor={quantidadeDePontos} />
      <Pontos titulo="Cartas viradas" valor={quantidadeCartasViradas} />
    </div>
  )
}

// eslint-disable-next-line react/prop-types
const Pontos = ({ titulo, valor }) => {
  return (
    <div className="pontos">
      <strong className="pontos__titulo">{titulo}: </strong>
      <span className="pontos__valor">{valor} </span>
    </div>
  )
}
