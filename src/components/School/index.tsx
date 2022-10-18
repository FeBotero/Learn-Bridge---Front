import { FormEvent, useState } from "react";
import { api } from "../../services/api";
import { Container, Content, Form, Interface, Main } from "./styles";

export function School() {
  const [data, setData] = useState('')
  const [nome, setNome] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cep, setCep] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');




  function handleCreateNewSchool(event: FormEvent) {
    

    const dat = {
      data,
      nome,
      cnpj,
      endereco,
      cep,
      email,
      telefone,
      password,
    };

    api.post("/escola", dat);



  }

  return (
    <Container>
      <Main>
        <Interface>
          <Form onSubmit={handleCreateNewSchool}>
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
              placeholder="CNPJ"
              value={cnpj}
              onChange={event => setCnpj(event.target.value)}
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
            Faça da sua escola um mundo novo.
          </h2>

          <h4>Junte-se ao mundo da tecnologia e promova o conhecimento na sua escola.</h4>

          <a href="/access">Voltar para Login</a>
        </Content>
      </Main>
    </Container>
  )
}