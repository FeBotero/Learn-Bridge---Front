import { Container, Content, Form, Interface, Main } from "./styles"
import Escola from "../../assets/escola.svg"
export function AccessSchool() {
  return (
    <Container>
      <Main>
        <Content>
          <h2>
            Faça seu login
          </h2>

          <img src={Escola} alt="" />


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
            
            
            <a className="acesso "href="/student" type="submit">Entrar</a>
            
            

            <a href="/newaccount">Não tem cadastro?</a>
          </Form>
        </Interface>

      </Main>
    </Container>

  )
}