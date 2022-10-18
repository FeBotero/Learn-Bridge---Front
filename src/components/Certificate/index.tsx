import CertTutor from "../../assets/Certificado/tutor.png"
import CertAluno from "../../assets/Certificado/aluno.png"
import { Container } from "./styles"

export function CertificateTutor(){
  return(
    <Container>
    <div>

      <h1>Parabéns</h1>

      <h3>Você concluiu apresentação do curso HTML, CSS e JS com aproveitamenteo de 95%</h3>
    </div>
    <div>
      <h3>Você pode baixar seu certificado <a href="">aqui</a></h3>
      <img src={CertTutor} alt="Certificado tutor" />
    </div>
  </Container>
  )
}

export function CertificateAluno(){
  return(
    <Container>
    <div>

      <h1>Parabéns</h1>

      <h3>Você concluiu o curso HTML, CSS e JS com aproveitamenteo de 85%</h3>
    </div>
    <div>
      <h3>Você pode baixar seu certificado <a href="">aqui</a></h3>
      <img src={CertAluno} alt="Certificado tutor" />
    </div>
  </Container>
  )
}