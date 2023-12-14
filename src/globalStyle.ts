import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
   
    font-family: Open-Sans, Helvetica, Sans-Serif;

    background-color: #F8F8F8;

  }
  h2{
    margin-bottom:20px;
  }
  .preloader{
    
        background: "green",
        width: "50px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: translate(-50%, -50%),
      
  }
  p{
    color: #3A3A3B;
    margin: 0;
    font-size: 1rem;
  }
  input{
    padding:5px;
  }
  .input-width{
    width:97%;
  }
  .align-right{
    text-align:right;
  }
  h1{
    font-size: 1.5rem;
    margin-top: 0;
    color: #3A3A3B;
  }
  .list-item{
    margin-bottom: 10px;
    border-bottom:1px solid #ccc;
  }
`;

export default GlobalStyle;
