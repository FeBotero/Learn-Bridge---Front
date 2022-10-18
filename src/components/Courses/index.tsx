
import { FormEvent,useState } from "react";
import { api } from "../../services/api";
import { Container, Content, Form, Interface, Main } from "./styles";

export function Courses() {
  const[data,setData]=useState('')
  const[nome,setNome]=useState('');

    

  function handleCreateNewCourses(event:FormEvent){
    event.preventDefault()

    const dat ={
      data,
      nome,
     
    };

    // console.log(dat)
    api.post("/sala",dat)

  }

  // Fazer um get para buscar escola e tutores para as salas

  return (
    <Container>
      <Main>
      <Interface>
        <Form onSubmit={handleCreateNewCourses}>
          <h2>Cadastro de Cursos</h2>
          <input 
          type="date"
          placeholder="Data" 
          value={data}
          onChange={event => setData(event.target.value)}
          />
          <input 
          type=""
          placeholder="Nome" 
          value={nome}
          onChange={event => setNome(event.target.value)}
          />
          
          
          <button type="submit">Cadastrar</button>
        </Form>
      </Interface>
      <Content>


        {/* Listar as salas criadas por escola */}
      
      
      
      </Content>
      </Main>
    </Container>
  )
}