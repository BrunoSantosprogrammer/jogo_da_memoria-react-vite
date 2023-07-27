import classNames from 'classnames';
import { useJogoDaMemoria } from '../hooks/useJogoMemoria';

// eslint-disable-next-line react/prop-types
export const Carta = ({ id, idDoPar, imagem }) => {
  const { virarCarta, idsDasCartasViradas, idsDosParesEncontrados } =
    useJogoDaMemoria();

  const controlarClique = () => {
    virarCarta({ id, idDoPar });
  };

  const cartaEncontrada = idsDosParesEncontrados.includes(idDoPar);
  const cartaVirada = cartaEncontrada || idsDasCartasViradas.includes(id);

  const bloqueado = cartaVirada || idsDasCartasViradas.lenght > 1;

  const cn = classNames("carta", {
    "carta--virada": cartaVirada,
    "carta--encontrada": cartaEncontrada,
  });

  return (
    <button
      id={id}
      className={cn}
      onClick={controlarClique}
      disabled={bloqueado}
    >
      <div className="carta__conteudo">
        <div className="carta__frente"></div>
        <div className="carta__costas">
          <img src={imagem} alt={`Carta ${id}`} width={300} />
        </div>
      </div>
    </button>
  )
}
