import { useState } from "react"
import { School } from "../School"
import { Tutor } from "../Tutor"
import { Container, Select,   } from "./styles"

export function Forms() {
  const[ShowSchoolForm,setShowSchoolForm] = useState(false);

  function handleChangeForm(mustShowSchoolForm:boolean){
    setShowSchoolForm(mustShowSchoolForm)
  }

  return (
    <Container>
      <Select>
        <button onClick={()=> handleChangeForm(false)}>Tutor</button>
        <button onClick={() => handleChangeForm(true)}>Escola</button>
        </Select>
        <div>
              {ShowSchoolForm? <School /> : <Tutor />}
              </div>
    </Container>
  )
}