import React from "react";
import { Button, Container, Li, ModalCont, UlSpan } from "./style";

function Modal({ isOpen, CloseMenu }) {
  const handleOutsideClick = (e) => {
    if (e.target.id == "Container") {
      CloseMenu();
    }
  };

  if (isOpen) {
    return (
      <Container id="Container" onClick={handleOutsideClick}>
        <ModalCont propiedade={isOpen}>
          <div>
            <UlSpan>
              <Li>Home</Li>
              <Li>About us</Li>
              <Li>How it Works</Li>
              <Li>Services</Li>
              <Li>Contacts</Li>
              <Li>
                <Button onClick={CloseMenu} style={{ fontFamily: "poppins" }}>
                  X
                </Button>
              </Li>
            </UlSpan>
          </div>
        </ModalCont>
      </Container>
    );
  }

  return null;
}
export default Modal;
