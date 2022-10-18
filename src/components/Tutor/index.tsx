import { FormEvent,useState } from "react";
import { api } from "../../services/api";
import { Container, Content, Form, Interface, Main } from "./styles";

export function Tutor() {
  const[data,setData]=useState('')
  const[nome,setNome]=useState('');
  const[cpf,setCpf]=useState('');
  const[endereco,setEndereco]=useState('');
  const[cep,setCep]=useState('');
  const[email,setEmail]=useState('');
  const[telefone,setTelefone]=useState('');
  const[password,setPassword]=useState('');
  
  
  

  function handleCreateNewTutor(event:FormEvent){
    event.preventDefault()

    const dat ={
      data,
      nome,
      cpf,
      endereco,
      cep,
      email,
      telefone,
      password,
    };

    // console.log(dat)
    api.post("/tutor",dat)

  }

  return (
    <Container>
      <Main>
      <Interface>
        <Form onSubmit={handleCreateNewTutor}>
          <h2>Crie sua Conta</h2>
          <input 
          type="date"
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
          placeholder="CPF" 
          value={cpf}
          onChange={event => setCpf(event.target.value)}
          />
          <input 
          placeholder="Endereço" 
          value={endereco}
            onChange={event => setEndereco(event.target.value)}
          />
          <input 
          placeholder="CEP" 
          value={cep}
            onChange={event => setCep(event.target.value)}
          />
          <input 
          placeholder="Email" 
          value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <input 
          type="tel"
          placeholder="Telefone" 
          value={telefone}
            onChange={event => setTelefone(event.target.value)}
          />
          <input 
          type="password"
          placeholder="Senha" 
          value={password}
            onChange={event => setPassword(event.target.value)}
          />
          <button type="submit">Cadastrar</button>
        </Form>
      </Interface>
      <Content>
        <h2>
          Diversos devs já estão no time.
        </h2>
        <h4>Junte-se ao nosso time de tutores e vamos levar a tecnologia a todos os lugares.</h4>

        <a href="/access">Voltar para Login</a>
      </Content>
      </Main>
    </Container>
  )
}