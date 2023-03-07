import { useState } from "react";
import Header from "../components/Header/index.jsx";
import Main from "../components/Main/index.jsx";
import * as C from "../styles/HomeStyles.jsx";
const Home = () => {
  const [MenuValue, setMenuValue] = useState(false);

  return (
    <>
      <C.Container>
        <Header OpenMenu={() =>setMenuValue((value)=>!value)} ModalValue={MenuValue} />
        <Main />
      </C.Container>
    </>
  );
};

export default Home;
