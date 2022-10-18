import Aluno from "../../assets/aluno2.png"
import Algoritmo from "../../assets/alg2.png"
import CSS from "../../assets/css.svg"
import JS from "../../assets/javascript.svg"

import { Container, Personal, Content, Alocation, Medals, Rumo } from "./styles"
export function HomeStudent() {
  return (

    <Container>

      <Content>
        <Rumo>
          <Personal>
            <img src={Aluno} alt="Aluno" />
            <h3>Marcelo</h3>
          </Personal>
          <Alocation>
            <h1>Casimiro-01</h1>
            <h2>HTML, CSS e Javascript</h2>
            <div>
              <a href="">Topicos</a>
              <a href="">Exercicios</a>
              <a href="/certificateAluno">Avaliação</a>
            </div>
          </Alocation>
          <Medals>
            <h3>Medalhas</h3>
            <div>
              <img src={Algoritmo} alt="Algoritmo" placeholder="Algoritmo"/>
              
              <img src={CSS} alt="CSS" />
              <img src={JS} alt="Javascript" />
            </div>
          </Medals>
        </Rumo>
      </Content>
    </Container>
  )
}