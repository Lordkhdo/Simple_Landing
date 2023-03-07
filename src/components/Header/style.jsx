import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  max-width: 1100px;
  display: flex;
  padding-top: 30px;
  @media (max-width: 1000px){
   justify-content: space-around ;
  }
`;
export const Logo = styled.div`
  margin-right: 424px;

  @media (max-width: 1171px) {
    margin-right: 300px;
  }
  @media (max-width: 1000px) {
    margin-right: 100px;
  }
`;
export const DivAbout = styled.div`
  align-items: center;
  display: flex;
  @media (max-width: 1000px) {
    display: none;
  }
`;
export const Menu = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 1000px) {
    display: none;
  }
`;
export const UlList = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 405px;
  margin-right: 20px;
`;
export const ItemList = styled.li`
  list-style: none;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
`;
export const DivList = styled.div``;
export const DivButton = styled.div``;

export const ButtonHeader = styled.button`
  width: 130px;
  height: 42px;
  background: none;
  border: 1px solid #17a4d0;
  border-radius: 4px;
  font-weight: 600;
  font-family: "poppins", sans-serif;
  color: #17a4d0;
`;
