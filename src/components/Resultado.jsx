import classNames from "classnames"

export const Resultado = () => {
  const cn = classNames("resultado", {
    "resultado--aberto": false
  })
  return (
    <div className={cn}>
      <div className="resultado__caixa">
        <p>Seu nível de memória é:</p>
        <h1>Bom</h1>
        <img src="/kitekat-3.png" alt="Imagem referente ao nível de memória" height={150}/>
        <p className="resultado__porcentos">
          <strong>Taxa de acertos: </strong>
          <span>60%</span>
        </p>
        <button className="button">Nova Partida</button>
      </div>
    </div>
  )
}
