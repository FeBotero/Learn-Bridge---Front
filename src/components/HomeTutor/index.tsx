
import Cad from "../../assets/cadastro.png"
import { Container, Content, Tables } from "./style"


export function HomeTutor(){
  
  

  
  return(
    <Container>
      <h1>Felipe Botero</h1>
    <Content>
    

      <Tables>
        <thead>
          <tr>
            <td>Escola</td>
            <td>Endereço</td>
            <td>Curso</td>
            <td>Alunos</td>
            <td>Tutores</td>
            <td>Candidatar</td>
            <td>Certificado</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Escola Municipal Alfredo Godoy</td>
            <td>Av. Max Teixeira,430 - Flores</td>
            <td>HTML, CSS e Javascript</td>
            <td>18</td>
            <td>0</td>
            <td><button ><img src={Cad} alt="Se Cadastrar" /></button></td>
            <td><span>Baixar</span></td>
          </tr>
          <tr>
            <td>Escola Estadual Miranda Flores</td>
            <td>Rua Jose Paranaguá - Cidade de Deus</td>
            <td>Introdução a Logica</td>
            <td>10</td>
            <td>1</td>
            <td><button disabled ><img src={Cad} alt="Se Cadastrar" /></button></td>
            <td><a href="/certificateTutor">Baixar</a></td>
          
          </tr>
        </tbody>
      </Tables>
    </Content>
    </Container>
  )
}
