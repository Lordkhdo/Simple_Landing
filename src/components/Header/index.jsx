import Modal from '.././Modal';
import * as C from "./style";
import Logo from "../../img/Logo.jpg";
import { SlMenu } from "react-icons/sl";

const Header = ({ OpenMenu, ModalValue }) => {
  
  return (
    <C.Header>
        <C.Logo>
          <img src={Logo} alt="Logo" />
        </C.Logo>
      <C.DivAbout>
        <C.DivList>
          <C.UlList>
            <C.ItemList>Home</C.ItemList>
            <C.ItemList>About us</C.ItemList>
            <C.ItemList>How it Works</C.ItemList>
            <C.ItemList>Services</C.ItemList>
            <C.ItemList>Contacts</C.ItemList>
          </C.UlList>
        </C.DivList>
        <C.DivButton>
          <C.ButtonHeader>Enquiry</C.ButtonHeader>
        </C.DivButton>
      </C.DivAbout>
      <C.Menu onClick={OpenMenu}>
        <SlMenu />
      </C.Menu>
        <Modal isOpen={ModalValue} CloseMenu={OpenMenu} />
    </C.Header>
  );
};

export default Header;


