import { useMemo } from 'react';

import classNames from 'classnames';
import { useJogoDaMemoria } from '../hooks/useJogoMemoria';
import { resultados } from '../constantes/resultado';

export const Resultado = () => {
  const {
    idsDosParesEncontrados,
    cartas,
    quantidadeCartasViradas,
    reiniciarJogo,
  } = useJogoDaMemoria();

  
  const aberto = useMemo(
    () => cartas.length > 0 && cartas.length === idsDosParesEncontrados.length * 2,
    [idsDosParesEncontrados.length]
    );
    const taxaDeAcertos = cartas.length / quantidadeCartasViradas * 100;

  const resultado = useMemo(
    () => resultados.find(({ min }) => min < taxaDeAcertos),
    [aberto]
    );

    const cn = classNames("resultado", {
      "resultado--aberto": aberto,
    });

  return (
    <div className={cn}>
      <div className="resultado__caixa">
        <p>Seu nível de memória é:</p>
        <h1>{resultado?.titulo}</h1>
        <img
          src={resultado?.imagem}
          alt="Imagem referente ao nível de memória"
          height={150}
        />
        <p className="resultado__porcentos">
          <strong>Taxa de acertos: </strong>
          <span>{taxaDeAcertos.toFixed(0)}%</span>
        </p>
        <button className="button" onClick={reiniciarJogo}>
          Nova Partida
        </button>
        <p>
          <small>
            * Essa análise é ilustrativa e não possui base científica.
          </small>
        </p>
      </div>
    </div>
  )
}
