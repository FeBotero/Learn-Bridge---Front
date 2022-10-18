import { FormEvent, useState } from "react";
import { api } from "../../services/api";
import { Container, Form, Interface, Main } from "./styles";

export function Room() {
  const [nomeSala, setNomeSala] = useState('')
  // const[escola,setEscola]=useState('');
  // const[tutor,setTutor]=useState('');
  const [curso, setCurso] = useState('');


  function handleCreateNewRoom(event: FormEvent) {
    event.preventDefault()

    const dat = {
      nomeSala,
      escola: "Casimiro de Abre",
      tutor: "",
      curso,

    };

    // console.log(dat)
    api.post("/sala", dat)

  }

  // Fazer um get para buscar escola e tutores para as salas

  return (
    <Container>
      <Main>
        <Interface>

          <Form onSubmit={handleCreateNewRoom}>
            <h2>Crie uma Sala</h2>
            <input
              placeholder="Nome da Sala"
              value={nomeSala}
              onChange={event => setNomeSala(event.target.value)}
            />
            <input
              placeholder="Numero de PC's"
              value={nomeSala}
              onChange={event => setNomeSala(event.target.value)}
            />

            {/* <input 
          type="range"
          placeholder="Curso" 
          value={curso}
          onChange={event => setCurso(event.target.value)}
          /> */}

            <select aria-label="State" onChange={event => setCurso(event.target.value)}>
              <option value="Javascript">Javascript</option>
              <option value="C++">C++</option>
              <option value="Banco de Dados">Banco de Dados</option>
              <option value="C">C</option>
              <option value="HTML e CSS">HTML e CSS</option>
              <option value="Introdução a Logica">Introdução a Logica</option>

            </select>

            <button type="submit">Cadastrar</button>
          </Form>
        </Interface>

      </Main>
    </Container>
  )
}