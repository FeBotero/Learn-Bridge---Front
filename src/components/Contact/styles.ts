import styled from "styled-components";

export const Container=styled.div`
  
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:3rem;
  background:black;
  color:white;
  height:100vw;



`
export const Content=styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction:column;
  align-items:center;
  gap:2rem;
  

`

export const Select=styled.form`
  width:50%;
  

`
export const Form=styled.form`

width:100%;
display:flex;
flex-direction:column;
align-items:center;
gap:0.2rem 0;
padding:2rem 0;
border-radius:0.35rem;

background:rgb(32,32,36);


h2{
  color:white;
  font-size: 1.5rem;
  margin-bottom:2rem;
}
input{
  width:80%;
  padding:0 0.5rem;
  height:4rem;
  border-radius:0.25rem;

  border:1px solid #d7d7d7;
  background: #e7e9ee;

  font-weight:400;
  font-size:1rem;

  &::placeholder{
    color: var(--text-body)
  }
  & +input {
    margin-top:.5rem;
  }
}

textarea{
  margin-top:0.5rem;
  width:80%;
  padding:0 0.5rem;
  height:6rem;
  border-radius:0.25rem;

  border:1px solid #d7d7d7;
  background: #e7e9ee;

  font-weight:400;
  font-size:1rem;

  &::placeholder{
    color: var(--text-body);
    padding: 0.5rem 0;
}
}

button[type="submit"]{
  width:80%;
  padding: 0 1.5rem;
  height:4rem;
  background:rgb(130, 87, 229);
  color: #fff;
  border-radius:0.25rem;
  border:0;
  font-size:1rem;
  margin-top:1.5rem;

  &:hover{
    filter:brightness(0.9)
  }


}
`