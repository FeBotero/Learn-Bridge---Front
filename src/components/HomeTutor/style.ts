import styled from "styled-components";

export const Container=styled.div`
  background: black;
  color:white;
 
  height:100vw;

  h1{
    padding-top:2rem;
    padding-left:3rem
  }
  
`
export const Content=styled.div`
  
  width:80%;
  display:flex;
  align-items:center;
  margin-inline:auto;

`
export const Tables=styled.table`
margin-top:3rem;
background:blank;

tr,td{
  border:1px solid white;
border-collapse: collapse;
text-align:center
}

img{
  width:3rem;
  

  

}

td{
  padding-left:0.3rem;
}
button{
    border:none;
    background:transparent;
    display:flex;
    align-items:center;
    margin-inline: auto;
  }
a{
  color:white
}

span{
  color:gray
}
`