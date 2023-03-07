import {
  Button,
  CardLeft,
  CardRigth,
  Content,
  H2,
  LeftDiv,
  Paragraph,
  RightDiv,
  TextH3Area
} from "./style";
import { Logo, Muier, Singles, StatisticYear } from "../../img";

const Home = () => {
  return (
    <div style={{ height: "100%" }}>
      <Content>
        <LeftDiv>
          <CardLeft>
            <TextH3Area>
              <H2>Design driven development of your web product</H2>
            </TextH3Area>
            <Paragraph>
              We are a full service digital agency that builds immesive user
              experience.
            </Paragraph>
            <Button>Contact Us</Button>
          </CardLeft>
        </LeftDiv>
        <RightDiv>
          <CardRigth>
            <img src={Singles} alt="" className="activi" />
            <img src={StatisticYear} alt="" className="estatistc" />
            <img src={Muier} alt="" className="woman" />
          </CardRigth>
        </RightDiv>
      </Content>
    </div>
  );
};

export default Home;
