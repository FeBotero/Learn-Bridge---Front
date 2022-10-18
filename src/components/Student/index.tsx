
import { FormEvent,useState } from "react";
import { api } from "../../services/api";
import { Container, Content, Form, Interface, Main } from "./styles";

export function Student() {
  const[data,setData]=useState('')
  const[nome,setNome]=useState('');
  const[matricula,setMatricula]=useState('');
    

  function handleCreateNewStudent(event:FormEvent){
    event.preventDefault()

    const dat ={
      data,
      nome,
      matricula,
     
    };

    // console.log(dat)
    api.post("/aluno",dat)

  }

  return (
    <Container>
      <Main>
      <Interface>
        <Form onSubmit={handleCreateNewStudent}>
          <h2>Crie sua Conta</h2>
          <input 
          placeholder="Data" 
          value={data}
          onChange={event => setData(event.target.value)}
          />
          <input 
          placeholder="Nome" 
          value={nome}
          onChange={event => setNome(event.target.value)}
          />
          <input 
          type=""
          placeholder="Matricula" 
          value={matricula}
          onChange={event => setMatricula(event.target.value)}
          />
          
          <button type="submit">Cadastrar</button>
        </Form>
      </Interface>
      <Content>
        <h2>
          Diversos devs já estão no time.
        </h2>
        <h4>Junte-se ao nosso time de Studentes e vamos levar a tecnologia a todos os lugares.</h4>

        <a href="/access">Voltar para Login</a>
      </Content>
      </Main>
    </Container>
  )
}