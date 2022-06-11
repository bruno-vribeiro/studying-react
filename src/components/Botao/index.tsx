import React, { ReactNode } from 'react';
import style from './Botao.module.scss';

interface Props{
    type?:"button" | "submit" | "reset" | undefined,
    children:ReactNode,onClick?:()=>void,

}

function Botao({type, children,onClick}:Props){
    return (
        <button onClick={onClick} type={type} className={style.botao}>
            {children}
        </button>
       );    
}
        

export default Botao;