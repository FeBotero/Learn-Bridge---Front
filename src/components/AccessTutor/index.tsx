import Tutors from "../../assets/tutor2.svg"

import { Container, Content, Form, Interface, Main } from "./styles"

export function AccessTutor() {
  return (
    <Container>
      <Main>
        <Content>
          <h2>
            Faça seu login
          </h2>

          <img src={Tutors} alt="Tutor" />


        </Content>
        <Interface>
          <Form >


            <input
              placeholder="Email"

            />

            <input
              type="password"
              placeholder="Senha"

            />


            <a className="acesso " href="/tutor" type="submit">Entrar</a>

            <a href="/newaccount">Não tem cadastro?</a>
          </Form>
        </Interface>

      </Main>
    </Container>

  )
}