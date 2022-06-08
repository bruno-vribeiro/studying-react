import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./Cronomentro.module.scss"

export default function Cronomentro (){
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um cards e inicie o cronômentro</p>
            <div className={style.relogioWrapper}>
             <Relogio />   
            </div>
            <Botao>
                Começar
            </Botao>
        </div>
    )
}