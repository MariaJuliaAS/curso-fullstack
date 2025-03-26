import { useState, useEffect, useRef, useMemo, useCallback } from "react"

export default function App() {
  // Ele nao sabe a quem eu estou referenciando ele por isso deve passar a tipagem
  const inputRef = useRef<HTMLInputElement>(null)
  const firstRender = useRef(true)

  const [tasks, setTasks] = useState<string[]>([])
  const [input, setInput] = useState('')
  const [editTask, setEditTask] = useState({
    enable: false,
    task: ''
  })

  useEffect(() => {
    const tarefasSalvas = localStorage.getItem('@cursoreact')

    if (tarefasSalvas) {
      setTasks(JSON.parse(tarefasSalvas))
    }
  }, [])

  useEffect(() => {
    // Na primeira renderização esse useEffect vai entrar no if e não vai carregar o resto, apenas na segunda em diante que carrega o localStorage
    if (firstRender.current) {
      firstRender.current = false
      return
    }

    localStorage.setItem('@cursoreact', JSON.stringify(tasks))
  }, [tasks])

  const handleRegister = useCallback(() => {
    if (!input) {
      alert('Preencha o input com uma terafa')
      return
    }

    if (editTask.enable) {
      handleSaveEdit()
      return
    }

    setTasks(tarefas => [...tarefas, input])
    setInput('')
  }, [input, tasks])


  function handleDelet(item: string) {
    const removeTask = tasks.filter(task => task !== item)
    setTasks(removeTask)
  }

  function handleSaveEdit() {
    const findIndexTask = tasks.findIndex(task => task === editTask.task)
    const allTasks = [...tasks];

    allTasks[findIndexTask] = input;
    setTasks(allTasks)

    setEditTask({
      enable: false,
      task: ''
    })
    setInput('')
  }

  function handleEdit(item: string) {

    inputRef.current?.focus()

    setInput(item)
    setEditTask({
      enable: true,
      task: item
    })
  }

  // function handleEdit(item: string) {
  //   let editTask = prompt('Edite sua tarefa', item) || item;
  //   const findIndexTask = tasks.findIndex(task => task === item)

  //   const allTasks = [...tasks]
  //   allTasks[findIndexTask] = editTask
  //   setTasks(allTasks)
  // }

  const totalTarefas = useMemo(() => {
    return tasks.length
  }, [tasks])

  return (
    <div>
      <h1>Lista de tarefas</h1>

      <input
        type="text"
        placeholder="Digite uma tarefa..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        ref={inputRef}
      />

      <button onClick={handleRegister}>
        {editTask.enable ? 'Atualizar tarefa' : 'Adicionar tarefa'}
      </button>

      <hr />

      <strong>Você tem {totalTarefas} tarefas!</strong>
      <br /> <br />

      {/* Função anonima com parenteses simboliza que esta retornando algo na interface */}
      {tasks.map((item, index) => (
        <section key={index}>
          <span>{item}</span>
          <button onClick={() => handleDelet(item)}>Excluir</button>
          <button onClick={() => handleEdit(item)}>Editar</button>
        </section>
      ))}
    </div>
  )
}

