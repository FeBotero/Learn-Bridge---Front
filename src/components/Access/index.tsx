
import { AccessSchool } from "../AccessSchool";
import { AccessTutor } from "../AccessTutor";
import { AccessStudent } from "../AccessStudent";
import { Container, Select, Show } from "./styles";
import React, { useState } from "react";


export function Access() {

  const [showLoginUser, setShowLoginUser] = useState(AccessTutor)


  return (
    <Container>
      <Select>
        <button onClick={() => setShowLoginUser(AccessTutor)}>Tutor</button>
        <button onClick={() => setShowLoginUser(AccessSchool)}>Escola</button>
        <button onClick={() => setShowLoginUser(AccessStudent)}>Aluno</button>
      </Select>

      <Show>
        {showLoginUser}
      </Show>

    </Container>
  )
}

