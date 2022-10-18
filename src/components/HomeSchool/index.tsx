import { Container, Dados, Personal, Tables } from "./styles";

const salas = fetch('http://localhost:4000/sala')
  .then(response => response.json())
  .then(data => console.log(data));

const course = fetch('http://localhost:4000/cursos')
  .then(response => response.json())
  .then(data => console.log(data));

// const s1 = salas.filter(escolaId: "1")

export function HomeSchool() {


  return (
    <Container>
      <Personal>
        <h1>Escola Estadual Senador Firmino</h1>
        <a href="/room"><button>Criar Sala</button></a>
      </Personal>
      <Dados>
        <Tables>
          <thead>
            <tr>
              <td>Nome</td>
              <td>Curso</td>
              <td>Alunos</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Casimiro01</td>
              <td>HTML, CSS e JS</td> {/* Fazer uma map para mostrar os cursos cadastrados */}
              <td>10</td>
            </tr>
            <tr>
              <td>Casimiro02</td>
              <td>Introdução a Logica</td> {/* Fazer uma map para mostrar os cursos cadastrados */}
              <td>8</td>
            </tr>

          </tbody>
        </Tables>
      </Dados>

    </Container>

  )
}

