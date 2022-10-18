import React, {useState} from "react"
import C from "../../assets/c.png"
import Alg from "../../assets/Alg.png"
import bd from "../../assets/bd.png"
import HCJ from "../../assets/HCJ.png"
import IntLog from "../../assets/IntLog.png"
import Cs from "../../assets/c++.png"
import { Container, Content, Extern } from "./styles"




export function CoursesList() {

  const JS= "Um algoritmo é uma sequência de instruções bem definidas, normalmente usadas para resolver problemas de matemática específicos, executar tarefas, ou para realizar cálculos e equações. A origem da palavra “algoritmo” remete a Al Khowarizmi, famoso matemático árabe do século IX. ;"
  const IntLogic="A lógica de programação é a capacidade que todo programador precisa ter para resolver os problemas que aparecem no dia-a-dia. A capacidade de dividir o problema em partes menores é uma etapa essencial da lógica de programação e precisa ser levada em consideração quando nos deparamos com qualquer exercício/desafio. É nesse ponto que entra o conceito de algoritmo, descrito, geralmente, como uma sequência lógica de ações capaz de resolver um problema."
  const HCJa="Essas três ferramentas dominam o desenvolvimento web. Cada biblioteca ou ferramenta parece estar centrada em HTML, CSS e JS. Então, se você quer se tornar um desenvolvedor web, você precisa aprendê-los bem."
  const Cl = "C é uma linguagem de programação compilada de propósito geral, estruturada,imperativa, procedural, padronizada pela Organização Internacional para Padronização (ISO), criada em 1972 por Dennis Ritchie na empresa AT&T Bell Labs para desenvolvimento do sistema operacional Unix (originalmente escrito em Assembly)"
  const Cplus = "O C++ é uma linguagem de programação de nível médio, baseada na linguagem C. O desenvolvimento da linguagem começou na década de 80, por Bjarne Stroustrup. O objetivo do desenvolvimento desta linguagem era melhorar uma versão do núcleo Unix. Para desenvolver a linguagem, foram acrecentados elementos de outras linguagens de vários níveis, na tentativa de criar uma linguagem com elementos novos, sem trazer problemas para a programação."
  const bds = "Um banco de dados é uma coleção organizada de informações - ou dados - estruturadas, normalmente armazenadas eletronicamente em um sistema de computador. Um banco de dados é geralmente controlado por um sistema de gerenciamento de banco de dados (DBMS). Juntos, os dados e o DBMS, juntamente com os aplicativos associados a eles, são chamados de sistema de banco de dados, geralmente abreviados para apenas banco de dados."
  
  const [showCourse,setShowcourse]= useState("Um algoritmo é uma sequência de instruções bem definidas, normalmente usadas para resolver problemas de matemática específicos, executar tarefas, ou para realizar cálculos e equações. A origem da palavra “algoritmo” remete a Al Khowarizmi, famoso matemático árabe do século IX. ;");

  // const[alg,SetAlg]=useState(false);
  // const[intLog,SetIntLog]=useState(false);
  // const[hcj,Sethcj]=useState(false);
  // const[c,SetC]=useState(false);
  // const[cplus,SetCplus]=useState(false);
  // const[bds,SetBds]=useState(false);

  return (
    <Container>
      <Extern>
        <div>
          <h1>
            Cursos disponiveis
          </h1>
          <ul>
            <li><button onClick={()=>setShowcourse(JS)}><img src={Alg} alt="Algoritmo" />Algoritmo</button></li>
            <li><button onClick={()=>setShowcourse(IntLogic)}><img src={IntLog} alt="" />Introdução a Logica</button></li>
            <li><button onClick={()=>setShowcourse(HCJa)}><img src={HCJ} alt="HTML, CSS e Javascript" />HTML, CSS e Javascript</button></li>
            <li><button onClick={()=>setShowcourse(Cl)}><img src={C} alt="C" />C</button></li>
            <li><button onClick={()=>setShowcourse(Cplus)}><img src={Cs} alt="C++" />C++</button></li>
            <li><button onClick={()=>setShowcourse(bds)}><img src={bd} alt="Banco de Dados" />Banco da dados</button></li>
          </ul>
        </div>
        <Content>
          {showCourse}
        </Content>
      </Extern>
    </Container>


  )
}
