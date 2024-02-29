import Card from "../components/card";
import ContentContainer from "../utils/content-container";
import Grid from "../utils/grid";
import RichText from "../utils/rich-text";
import Section from "../utils/section";


const Home = () => {

  return (
    <>
    <Section paddingBottom="3" paddingTop="4">
      <ContentContainer width={1200}>
        <RichText>
          <center>
            <h1>DESIGN.<br/><span className="gradient-txt">DEVELOP.</span><br/>DELIVER.</h1>
            <p>Transforming visions into reality through meticulous design, seamless development, and impeccable delivery.</p>
            <div className="buttons">
              <a href="#projects" className="primary-btn">My Projects</a>
              <a target="_blank" href="https://www.linkedin.com/in/wojciech-borz%C4%99cki-a22a4727a/" className="secondary-btn">Contact Me</a>
            </div>
          </center>
        </RichText>
      </ContentContainer>
    </Section>
    <Section paddingBottom="3">
      <ContentContainer width={1200}>
        <RichText>
          <center>
            <h5>Find out more about me</h5>
            <span className="circle">1</span>
            <h3 className="gradient-txt">Development</h3>
          </center>
        </RichText>
      </ContentContainer>
    </Section>
    <Section paddingBottom="3">
      <ContentContainer width={1200}>
        <Grid paddingBottom="3" gap={3} xl={2} md={2} xs={1}>
          <RichText>
            <p>Web development is not just my profession; it's my passion. With expertise in languages like JavaScript and frameworks like React, I thrive on crafting dynamic and responsive web applications. From conceptualization to execution, I enjoy the creative process of turning ideas into functional and visually appealing digital experiences. Let's collaborate and bring your vision to the web</p>
          </RichText>
          <img className="grid-images" src="../img/development-image.svg"/>
        </Grid>
        <RichText>
          <center>
            <span className="circle">2</span>
            <h3 className="gradient-txt">Design</h3>
          </center>
        </RichText>
        <Grid paddingBottom="3" gap={3} paddingTop="3" xl={2} md={2} xs={1}>
        <img className="grid-images" src="../img/design-image.webp"/>
          <RichText>
            <p>In addition to my proficiency in web development, I also have a keen eye for design. I specialize in prototyping designs using tools like Figma, where I bring together aesthetics and functionality to create seamless user experiences. Whether it's designing intuitive user interfaces or crafting engaging user interactions, I'm dedicated to ensuring that every aspect of the web application is thoughtfully designed and meticulously implemented. Let's collaborate to build not just functional, but visually stunning web experiences.</p>
          </RichText>
        </Grid>
      </ContentContainer>
    </Section>
    <Section id="projects">
      <ContentContainer>
        <RichText>
          <center>
            <span className="circle">3</span>
            <h3 className="gradient-txt">Projects</h3>
          </center>
          <Grid gap={3} paddingBottom='3' paddingTop='3' xl={3} md={2} xs={1}>
            <Card id="id1" href="https://hazle.pl/">
              <img src="../img/hazle-bg.jpg"/>
              <span className="overlay"/>
              <RichText>
                <h4>Website</h4>
                <h2>Hazle.pl</h2>
              </RichText>
            </Card>
            <Card id="id1" href="https://ping-pong-eosin.vercel.app/">
              <img src="../img/pingpong-bg.jpg"/>
              <span className="overlay"/>
              <RichText>
                <h4>Mini game</h4>
                <h2>Ping-Pong</h2>
              </RichText>
            </Card>
            <Card id="id1" href="https://tic-tac-toe-sandy-five-55.vercel.app/">
            <img src="../img/tictactoe-bg.jpg"/>
              <span className="overlay"/>
              <RichText>
                <h4>Mini game</h4>
                <h2>Tic Tac Toe</h2>
              </RichText>
            </Card>
          </Grid>
        </RichText>
      </ContentContainer>
    </Section>
    <Section>
      <ContentContainer>
        <RichText>
          <center>
            <span className="circle">4</span>
            <h3 className="gradient-txt">Usefull links</h3>
          </center>
        </RichText>
        <Grid paddingTop="4" paddingBottom="3">
          <RichText>
          <ul><li><a target="_blank" href="https://www.linkedin.com/in/wojciech-borz%C4%99cki-a22a4727a/">Linkedin profile</a></li><li><a target="_blank" href="https://github.com/hazle-pl?tab=repositories">Github repository</a></li><li><a target="_blank" href="../pdf/cv-pl.pdf">Polish CV</a></li><li><a target="_blank" href="../pdf/cv-en.pdf">English CV</a></li></ul>
          </RichText>
        </Grid>
      </ContentContainer>
    </Section>
  </>
  );
};

export default Home;
