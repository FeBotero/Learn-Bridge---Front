import { Container, Content, Form, Select } from "./styles";

export function Contact() {
  return (
    <Container>
      <Content>
        <h1>Sente aquela vontade de falar com a gente? </h1>
        <h2>É so manda uma mensagem...</h2>
      </Content>
      <Select>
        <Form action="" method="POST">
          <input placeholder="Nome" name="name"/>
          <input placeholder="Email" name="user_email"/>
          
          <textarea placeholder="Mensagem" name="mensagem" />
          <button type="submit" value="send">Enviar</button>
        </Form>
      </Select>
    </Container>
  )
}