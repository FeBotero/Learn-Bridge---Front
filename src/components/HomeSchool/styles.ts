import styled from "styled-components";

export const Container=styled.div`
  background:black;
  color:white;
  height:100vw;

`
export const Personal=styled.div`

padding:2rem 0 0 1rem ;
h1{
  margin-bottom: 1.5rem;
}

button{
  
  padding: 0 1rem;
  height:2rem;
  background:rgb(130, 87, 229);
  color: #fff;
  border-radius:0.25rem;
  border:0;
  font-size:1rem;
  margin:1.5rem 0;
}
`
export const Dados=styled.div`
margin-left:10rem;

`
export const Tables=styled.table`
margin-top:3rem;
background:blank;
width:80%;
font-size:1.4rem;

tr,td{
  border:1px solid white;
border-collapse: collapse;
}

img{
  width:3rem;
  


}

td{
  text-align:center;
}
button{
    border:none;
    background:transparent;
    display:flex;
    align-items:center;
    margin-inline: auto;
  }


`