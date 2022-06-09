import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./Cronomentro.module.scss"
import { tempoParaSegundos } from "../../common/utils/time";
import { Itarefas } from "../../types/tarefa";
import { useEffect, useState } from "react";

interface Props{
    selecionado:Itarefas | undefined;
}

export default function Cronomentro ({selecionado}:Props){
    const [tempo, setTempo]= useState<number>();
    
    useEffect(()=>{
        if(selecionado?.tempo)
        setTempo(tempoParaSegundos(selecionado.tempo));
    },[selecionado])
       
    
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um cards e inicie o cronômentro</p>
            <div className={style.relogioWrapper}>
             <Relogio tempo={tempo} />   
            </div>
            <Botao>
                Começar
            </Botao>
        </div>
    )
}