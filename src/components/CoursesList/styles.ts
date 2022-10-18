import styled from "styled-components";

export const Container = styled.div`
  background: black;
  height: 100vw;
`;

export const Extern = styled.div`
  color: white;
  display: flex;

  div {
    margin-top: 3rem;
    flex-direction: columns;
    align-items: center;
    margin-inline: auto;
  }
  h1 {
    margin-bottom: 2rem;
  }
  li {
    margin: 0.5rem 0;
  }

  img {
    width: 3rem;
    background: white;
    padding: 0.25rem;
    border-radius: 0.25rem;
  }
  a {
    display: flex;
    align-items: center;
    gap: 0 0.5rem;
    text-decoration: none;
    color: white;
  }

  button{
    display:flex;
    align-items:center;
    font-size:1.4rem;

    background:transparent;
    color:white;
    margin-bottom:1.5rem;

    img{
      margin-right:1rem
    }
    
  }
`;
export const Content = styled.div`
  margin-top: 12rem;
  color: black;
  width: 15rem;
  background: white;
  padding: 1rem;
  border-radius: 0.15rem;
`;
