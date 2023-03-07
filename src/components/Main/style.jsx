import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  height: 100%;
`;
export const LeftDiv = styled.div`
  flex: 2;
  height: 100%;
  display: flex;
  @media (max-width: 999px) {
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 300px;
  }

`;
export const CardLeft = styled.div`
  width: 540px;
  height: 420px;
  margin-top: 80px;
  @media (max-width: 650px) {
    width: 350px;
    margin-top: 110px;
  }
`;
export const TextH3Area = styled.div`
  width: 450px;
`;
export const H2 = styled.h2`
  font-family: "Poppins";
  font-weight: 700;
  font-size: 3rem;
  text-align: left;
  @media (max-width: 650px) {
    width: 400px;
  }
`;
export const Paragraph = styled.p`
  margin-top: 20px;
  width: 350px;
  font-family: poppins;
`;
export const RightDiv = styled.div`
  flex: 1.5;
  display: flex;
  align-items: center;
  @media (max-width: 1000px) {
    display: none;
  }
`;
export const CardRigth = styled.div`
  width: 500px;
  height: 420px;
  position: relative;
  > .activi {
    position: absolute;
    left: -70px;
    top: 110px;
  }
  > .estatistc {
    position: absolute;
    top: 300px;
    left: -90px;
  }
  > .woman {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;
export const Button = styled.button`
  margin-top: 20px;
  background-color: #17a4d0;
  border-radius: 100px;
  width: 150px;
  height: 45px;
  color: white;
  font-family: "poppins", sans-serif;
  font-size: small;
`;
