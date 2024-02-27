import Card from "../components/card";
import ContentContainer from "../utils/content-container";
import Grid from "../utils/grid";
import RichText from "../utils/rich-text";
import Section from "../utils/section";


const Home = () => {

  return (
    <>
    <span className="blob" id="blob-1"/>
    <Section background="neutral-900" paddingBottom="3" paddingTop="4">
    <ContentContainer>
      <RichText>
        <h3>Hey, im Wojtek!</h3>
        <h1>Welcome to my portfolio</h1>
        <span className="blob" id="blob-2"/>
      </RichText>
    </ContentContainer>
    </Section>
    <Section id="projects" background="neutral-900" paddingBottom="3" paddingTop="0">
    <span className="blob" id="blob-3"/>
      <ContentContainer>
        <Grid id="custom-grid" gap={3} paddingBottom='3' paddingTop='3'>
          <Card id="id1" href="https://hazle.pl/">
            <img src="../img/hazle-bg.jpg"/>
            <span className="overlay"/>
            <RichText>
              <h4>Website</h4>
              <h2>Hazle.pl</h2>
            </RichText>
          </Card>
          <Card id="id2" href="https://ping-pong-eosin.vercel.app/">
            <img src="../img/pingpong-bg.jpg"/>
            <span className="overlay"/>
            <RichText>
              <h4>Mini game</h4>
              <h2>Ping Pong</h2>
            </RichText>
          </Card>
          <Card id="id3" href="https://tic-tac-toe-sandy-five-55.vercel.app/">
          <img src="../img/tictactoe-bg.jpg"/>
          <span className="overlay"/>
            <RichText>
              <h4>Mini game</h4>
              <h2>Tic Tac Toe</h2>
            </RichText>
          </Card>
          <span className="blob" id="blob-4"/>
          <Card id="id4" href="https://github.com/hazle-pl?tab=repositories">
            <img src="../img/github-bg.jpg"/>
            <span className="overlay"/>
            <RichText>
              <h4>Repository</h4>
              <h2>Github</h2>
            </RichText>
          </Card>
          <Card id="id6" href="#soon">
            <img src="https://lh4.googleusercontent.com/proxy/EWm9FVpPqF7N5rcraSRF-UMDuwBzfkA2tYNH73WwfdaqqrhD7V-TQL22-XP7fOgbjSp4X836b8_TVTYw1JN7bSJuUHbgtMURdiA2n-lyFKYnnpRzFzCJ72kCEw"/>
            <span className="overlay"/>
            <RichText>
              <h4>App</h4>
              <h2>Soon</h2>
            </RichText>
          </Card>
          <Card id="id7" href="#soon">
            <img src="https://lh4.googleusercontent.com/proxy/EWm9FVpPqF7N5rcraSRF-UMDuwBzfkA2tYNH73WwfdaqqrhD7V-TQL22-XP7fOgbjSp4X836b8_TVTYw1JN7bSJuUHbgtMURdiA2n-lyFKYnnpRzFzCJ72kCEw"/>
            <span className="overlay"/>
            <RichText>
              <h4>App</h4>
              <h2>Soon</h2>
            </RichText>
          </Card>
          <Card id="id68" href="#soon">
            <img src="https://lh4.googleusercontent.com/proxy/EWm9FVpPqF7N5rcraSRF-UMDuwBzfkA2tYNH73WwfdaqqrhD7V-TQL22-XP7fOgbjSp4X836b8_TVTYw1JN7bSJuUHbgtMURdiA2n-lyFKYnnpRzFzCJ72kCEw"/>
            <span className="overlay"/>
            <RichText>
              <h4>App</h4>
              <h2>Soon</h2>
            </RichText>
          </Card>
        </Grid>
      </ContentContainer>
    </Section>
    <span className="blob" id="blob-5"/>
    <Section background="neutral-900" paddingBottom="3" paddingTop="0">
      <ContentContainer>
        <RichText>
          <h2>Useful links</h2>
          <ul>
            <li>
              <a target="_blank" href="https://www.linkedin.com/in/wojciech-borz%C4%99cki-a22a4727a/">Linkedin profile</a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/hazle-pl?tab=repositories">Github repository</a>
            </li>
            <li>
              <a target="_blank" href="../pdf/cv-pl.pdf">Polish CV</a>
            </li>
            <li>
              <a target="_blank" href="../pdf/cv-en.pdf">English CV</a>
            </li>
          </ul>
        </RichText>
      </ContentContainer>
    </Section>
  </>
  );
};

export default Home;
