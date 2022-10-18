import styled from "styled-components";

export const Container = styled.div`
  background: black;
  height: 100vw;
  color: white;
  box-sizing: border-box;
`;

export const Content = styled.div`
  width: 80%;
  margin-inline: auto;
`;

export const Rumo = styled.div`
  padding-top:3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;
  
`;
export const Personal = styled.div`
  height:20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  border: 0;

  img {

    width: 10rem;
    border-radius: 35%;
    background: white;
    border: 0;
  }

  h3 {
    margin-top: 2rem;
    font-size:1.5rem;
  }
`;

export const Alocation = styled.div`
  height:20rem;
  h2 {
    margin: 2rem 0;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }
  a {
    text-decoration: none;
    font-size: large;
    color: white;
  }
`;

export const Medals = styled.div`
  height:20rem;
  display: flex;
  flex-direction:column;
  background: rgb(32,32,36);
  padding:1rem;
  width: 30rem;
  border-radius: .35rem;
  h3{
    margin-bottom:2rem;
  }

  img{
    width:3rem;
    margin-left:0.4rem
  }
`;
