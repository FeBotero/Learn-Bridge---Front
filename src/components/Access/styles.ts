import styled from "styled-components";

export const Container=styled.div`
  width:100vw;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:2rem;
  background:black;
  
  padding-bottom:4.2rem;

`

export const Select=styled.div`

display:flex;
gap:2rem;
margin-inline: auto;

height:0.1rem;

button{
  margin-top:3rem 0;
  border:none;
  background:transparent;
  font-size:1rem;
  color:white;
  padding-bottom:1.3rem;

  &:focus{
    border-bottom: 1px solid rgb(130, 87, 229);;
  }
}

`

export const Show=styled.div`
  width:50rem;
  height:100vw;
`


