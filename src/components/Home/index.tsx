import emoji from '../../assets/emoji.svg'
import zap from '../../assets/zap.png'
import { Calling, Compliment, Container,  Content,  DivYou, Help } from './styles'

export function Home(){
  return(
    <Container>
      <Content>
      <Compliment>
        <h2>
          <img src={emoji} alt="" />
          Hello world...
        </h2>
      </Compliment>
      <DivYou>
        <h1>Já pensou em ser o divisor de aguas com seu conhecimento?
          
        </h1>
      </DivYou>
      <Calling>
        <h5>
          Venha fazer parte do nosso time de tutores e ainda ganha horas
          complementares.
        </h5>
      </Calling>
      
      <Help>
        <a href="https://api.whatsapp.com/send?1=pt_br&phone=5592991599300">
          <img src={zap} alt="whatsapp" />
        </a>
      </Help>
      </Content> 
    </Container>
  )
}