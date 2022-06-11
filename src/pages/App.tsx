import { useState } from "react";
import Cronomentro from "../components/Cronomentro";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import { Itarefas } from "../types/tarefa";
import style from "./App.module.scss";

function App() {
  const [tarefas, setTarefas] = useState<Itarefas[]>([]);
  const [selecionado, setSelecionado] = useState<Itarefas>();

  function selecionaTarefa(tarefaSelecionada: Itarefas) {
    setSelecionado(tarefaSelecionada);
    setTarefas((tarefasAntingas) =>
      tarefasAntingas.map((tarefa) => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
      }))
    );
  }

  function finalizarTarefa() {
    if (selecionado) {
      setTarefas((tarefasAntigas: any) =>
        tarefasAntigas.map((tarefa: Itarefas) => {
          if (tarefa.id === selecionado.id) {
            return {
              ...tarefa,
              selecionado: false,
              completado: true,
            };
          }
          return tarefa;
        })
      );
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
      <Cronomentro
        selecionado={selecionado}
        finalizarTarefa={finalizarTarefa}
      />
    </div>
  );
}

export default App;
