import styled from "styled-components";

export const ModalCont = styled.div`
  position: fixed;
  top: 50%;
  right: 90px;
  transform: translate(50%,-50%);
  background-color: white;
  transition:  all 2s ease-out;
  height: 100%;
  width: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 60px;
  background-color: #00000016;
  z-index: 3;
`;
export const UlSpan = styled.ul`
  
`;
export const Li = styled.li`
  list-style: none;
  font-family: poppins;
  margin: 10px;
  cursor: pointer;
`;
export const Button = styled.button`
  position: absolute;
  top: 20px;
  right: 30px;
  height: 25px;
  width: 25px;
  border-radius: 5px;
  color: black;
  background: none;
  font-family: "poppins", sans-serif;
  font-weight: 600;
`;
