import styled from 'styled-components';

export const OpenTab = styled.div`

background: #C2DAFE;
border: 3px solid #4047FF;
border-radius: 8px;
padding: 0px;
color: #363AAA;
margin: 5px;

.contentBox {

    padding: 16px;
    margin-left: auto;
    margin-right: auto;
}

.boxLink {
  font-size: 14px;
  color: #363AAA;
  text-decoration: none;
  font-weight: 800;
}
.title {
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 20px;
  color: #363AAA;
}
.subTitle {
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 20px;
}
.smallTitle {
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 700;
  color: #363AAA;
  margin-bottom: 20px;
}
hr {
  margin-top: 12px;
  margin-bottom: 8px;
  border-color: transparent;
  border-bottom-color: #ECF2FA;
}
input {
  width: 100%;
  background-color: #F4F4F4;
  color: #363AAA;
  border: 0;
  padding: 14px 16px;
  margin-bottom: 14px;
  border-radius: 10000px;
  ::placeholder {
    color: #333333;
    opacity: 1;
  }
}
button {
  border: 0;
  padding: 8px 12px;
  color: #FFFFFF;
  border-radius: 10000px;
  background-color: #6F92BB;
}

`;

export const BarTab = styled.div`

width: 100%;

margin: 0px;
padding: 5px;
background: #BEBEBE;
border-bottom: 3px solid #4047FF;
border-top: 0px;
border-left: 0px;
border-right: 0px;
box-sizing: border-box;
border-radius: 4px 4px 0px 0px;
height: 30px;
color: #363AAA;

.button {

    float: right;
    height: 20px;
}
`;

const Box = styled.div`
  background: #FFFFFF;
  border-radius: 8px;
  padding: 16px;

  /* CSS Pré-Pronto */
  margin-bottom: 10px;
  .boxLink {
    font-size: 14px;
    color: #2E7BB4;
    text-decoration: none;
    font-weight: 800;
  }
  .title {
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .subTitle {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .smallTitle {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
    color: #333333;
    margin-bottom: 20px;
  }
  hr {
    margin-top: 12px;
    margin-bottom: 8px;
    border-color: transparent;
    border-bottom-color: #ECF2FA;
  }
  input {
    width: 100%;
    background-color: #F4F4F4;
    color: #333333;
    border: 0;
    padding: 14px 16px;
    margin-bottom: 14px;
    border-radius: 10000px;
    ::placeholder {
      color: #333333;
      opacity: 1;
    }
  }
  button {
    border: 0;
    padding: 8px 12px;
    color: #FFFFFF;
    border-radius: 10000px;
    background-color: #6F92BB;
  }
`; 

export default Box