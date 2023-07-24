import {  useState, createContext } from 'react'
import { paresDeCartas } from '../constantes/cartas'
import { PONTOS, TEMPO_MS } from '../constantes/configuracoes'
import { buscarCartas } from '../services/buscarCartasParaOJogoDaMemoria'

export const LogicaJogoDaMemoriaContext = createContext()

// eslint-disable-next-line react/prop-types
export const LogicaJogoDaMemoriaProvider = ({ children }) => {
  const [cartas, definirCartas] = useState([])

  const [carregandoCartas, definirCarregandoCartas] = useState(false)

  const [idsDosParesEncontrados, definirIdsDosParesEncontrados] = useState([])
  const [idsDasCartasViradas, definirIdDasCartasViradas] = useState([])
  const [quantidadeCartasViradas, definirQuantidadeCartasViradas] = useState(0)
  const [quantidadeDePontos, definirQuantidadeDePontos] = useState(0)

  const incrementarCartasViradas = () => {
    definirQuantidadeCartasViradas((quantidade) => quantidade + 1)
  }

  const incrementarPontos = () => {
    definirQuantidadeDePontos((pontos) => pontos + PONTOS.ENCONTRAR_CARTA)
  }

  const iniciarJogo = async () => {
    definirCarregandoCartas(true)
    const cartas = await buscarCartas()
    definirCartas(cartas)
    definirCarregandoCartas(false)
  }

  const reiniciarJogo = () => {
    definirIdsDosParesEncontrados([])
    definirIdDasCartasViradas([])
    definirQuantidadeCartasViradas(0)
    definirCartas(paresDeCartas)
  }

  const compararCartas = ([id1, id2]) => {
    const idPar1 = cartas.find(({ id }) => id === id1)?.idDoPar
    const idPar2 = cartas.find(({ id }) => id === id2)?.idDoPar
    return idPar1 === idPar2
  }

  const virarCarta = ({ id, idDoPar }) => {
    incrementarCartasViradas()

    const cartaJaVirada =
      idsDasCartasViradas.includes(id) ||
      idsDosParesEncontrados.includes(idDoPar)

    if (cartaJaVirada) return

    if (idsDasCartasViradas.length >= 2) {
      return;
    }
    if (idsDasCartasViradas.length == 0) {
      return definirIdDasCartasViradas([id]);
    }

    const ids = [idsDasCartasViradas[0], id]
    definirIdDasCartasViradas(ids)

    const cartasIguais = compararCartas(ids)

    if (cartasIguais) {
      incrementarPontos()
      definirIdsDosParesEncontrados((ids) => [...ids, idDoPar])
    }

    const tempo = cartasIguais ? 0 : TEMPO_MS.VIRAR_CARTAS
    setTimeout(() => {
      definirIdDasCartasViradas([])
    }, tempo)
  };

  const valor = {
    cartas,
    quantidadeCartasViradas,
    quantidadeDePontos,
    virarCarta,
    iniciarJogo,
    reiniciarJogo,
    idsDasCartasViradas,
    idsDosParesEncontrados,
    carregandoCartas
  };

  return (
    <LogicaJogoDaMemoriaContext.Provider value={valor}>
      {children}
    </LogicaJogoDaMemoriaContext.Provider>
  )
};
