import { useState } from 'react';
import  Cronomentro  from '../components/Cronomentro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import { Itarefas } from '../types/tarefa';
import style  from './App.module.scss';

function App() {
  const [tarefas,setTarefas]= useState<Itarefas[]>([])
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas}/>
      <Cronomentro/>
    </div>
  );
}

export default App;
