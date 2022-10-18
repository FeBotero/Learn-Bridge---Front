import styled from "styled-components";

export const Container=styled.header`
  background:black;
  width:100vw;
`;
export const Content =styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items:center;
  justify-content:space-between;
  padding: 0  0 .5rem .5rem;

  a{
    text-decoration: none;
  font-family: baumans;
  font-size: larger;
  color: white;
  }

 

`
export const Logo = styled.div`
  margin: 0.5rem 0 0 0.5rem;
  display: flex;
  font-family: baumans;
  color: White;
  justify-content: space-between;
  align-items: center;
`
export const Box1=styled.div`
  width: 0.4rem;
  height: 1.2rem;
  margin-left: 0.2rem;
  background: rgba(255, 255, 255, 1);
`
export const Box2=styled.div`
  width: 0.4rem;
  height: 1.2rem;
  margin-left: 0.2rem;
  background: rgba(255, 255, 255, 0.6);
`
export const Box3=styled.div`
  width: 0.4rem;
  height: 1.2rem;
  margin-left: 0.2rem;
  background: rgba(255, 255, 255, 0.2);
`
export const Options=styled.div`
  margin-left: -10rem;
  width: 20rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a:hover{
    text-decoration: none;
    padding-bottom: 0.3rem;
    border-bottom: 2px solid rgb(171, 17, 202);
  
  }

`
export const Access=styled.div`
  width: 11rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0.5rem 0 0;
`
export const Account=styled.div`
  display: flex;
  align-items: center;
  padding: 0.3rem;
  border-radius: 5%;
  border: 0.2rem solid #663399;

  :hover{
    background: #663399;
  }
`

export const User=styled.div`


  display:flex;
  color:white;
  align-items: center;
  gap:0.5rem;

  img{
    
    height:2.5rem;
    background:white;
    border-radius: 50%;
  }

`
