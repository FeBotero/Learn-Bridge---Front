
import { Access, Account, Box1, Box2, Box3, Container, Content, Logo, Options } from "./styles";



export function Header() {


  return (
    <Container>
      <Content>
        
          <Logo>
            <h3>learnbridge</h3>
            <Box1></Box1>
            <Box2></Box2>
            <Box3></Box3>
          </Logo>
          <Options>
            <a href="/">Home</a>
            <a href="/courses">Cursos</a>
            <a href="/about">A Learnbridge</a>
            <a href="/contact">Contato</a>
          </Options>
         
          
          <Access>
            <a href="/access">Entrar</a>
            <Account>
              <a href="/newaccount">Criar Conta</a>
            </Account>
          </Access>
        
      </Content>

      
    </Container>
  )
}




