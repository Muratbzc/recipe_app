import Navbar from "../../components/navbar/Navbar";
import StyledAbout, {
  AboutImg,
  AboutText,
  AboutTitle,
  StyledAboutCard,
} from "./About.styled";
import avatar from "../../assets/ab1.jpg";
import avatar2 from "../../assets/ab2.jpg";
import prize from "../../assets/ab3.jpeg";

const About = () => {
  return (
    <div>
      <Navbar />
      <StyledAbout>
        <StyledAboutCard>
          <AboutImg src={avatar} />
          <AboutTitle>Online Cooking Course </AboutTitle>
          <AboutText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
            assumenda minima ex earum fugiat doloremque accusamus.
          </AboutText>
        </StyledAboutCard>
        <StyledAboutCard>
          <AboutImg src={prize} />
          <AboutTitle>Superior Taste Award</AboutTitle>
          <AboutText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
            assumenda minima ex earum fugiat doloremque accusamus.
          </AboutText>
        </StyledAboutCard>
        <StyledAboutCard>
          <AboutImg src={avatar2} />
          <AboutTitle>Best Practical Recipes</AboutTitle>
          <AboutText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
            assumenda minima ex earum fugiat doloremque accusamus.
          </AboutText>
        </StyledAboutCard>
      </StyledAbout>
    </div>
  );
};

export default About;
