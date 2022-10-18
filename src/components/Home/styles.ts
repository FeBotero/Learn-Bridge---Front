import styled from "styled-components";
import background from "../../assets/background.png"

export const Container=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Roboto, sans-serif;
  
  
  
`
export const Content=styled.div`
  width:100vw;
  padding-bottom:2rem;
  height:61vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Roboto, sans-serif;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: 100vw;
`

export const Compliment=styled.div`
  margin-top: 6rem;
  color: white;
  font-weight: 700;

  h2{
    font-size:3rem;
    
    border-radius:0.25rem;
  }

  img{
    margin-right: 0.3rem;
  animation: bounce 0.5s infinite alternate;
  -webkit-animation: bounce 0.5s infinite alternate;

  }
  @keyframes bounce {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-10px);
  }
}
`

export const DivYou=styled.div` 
  margin-top: 1rem;
  width: 50%;
  color: white;
  font-weight: 700; 

`

export const Calling=styled.div`
  text-align:center; 
  margin-top: 1rem;
  width: 50%;
  color: white;
  font-weight: 100;
`

export const Help=styled.div`
  display: inline;
  justify-items: right;
  margin-top: 10.5rem;
  margin-left: 82rem;

  img{
    width: 2rem;
    margin-top:22rem;
    padding-bottom:1rem;
  }

`

