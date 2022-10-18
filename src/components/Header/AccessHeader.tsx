import user from "../../assets/aluno2.png"

import { Access, Account, User } from "./styles";

export function AccessHeader() {
  return (

    <Access>
      <a href="/access">Entrar</a>
      <Account>
        <a href="/newaccount">Criar Conta</a>
      </Account>
    </Access>
  )
}

export function AccessUser() {
  return (
    <User>
      <img src={user} alt="Usuario" />
      <h3>Felipe Botero</h3>
      <a href="/">Sair</a>
    </User>
  )
}