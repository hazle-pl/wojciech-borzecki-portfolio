import ContentContainer from "../utils/content-container";
import Grid from "../utils/grid";
import RichText from "../utils/rich-text";
import { useInView } from 'react-intersection-observer';


export default function Footer() {

  const { ref, inView } = useInView({
    threshold: 0,
  });
  
  return (
    <footer ref={ref} className={`${inView ? 'visible' : 'not-visible'}`}>
      <ContentContainer>
        <Grid gap={3} xl={3} md={3} xs={1} paddingBottom="3" paddingTop="3">
          <RichText>
            <img src="../img/hazle-logo.svg" alt="Footer Logotype Hazle"/>
            <p>Twoja Wizja, Nasza Pasja, Razem Kreujemy Niepowtarzalne Doświadczenia, Które Definiują Twoją Markę</p>
          </RichText>
          <RichText>
            <p><b>Usługi</b></p>
            <ul>
              <li><a href="#service">Web Development</a></li>
              <li><a href="#service">Web Design</a></li>
              <li><a href="#service">Graphic Design</a></li>
              <li><a href="#service">Branding</a></li>
              <li><a href="#service">UX/UI</a></li>
              <li><a href="#service">Marketing</a></li>
            </ul>
          </RichText>
          <RichText>
            <p><b>Znajdz nas</b></p>
            <ul>
              <li><a target="_blank" href="https://www.instagram.com/hazle.pl/">Instagram</a></li>
              <li><a target="_blank" href="https://facebook.com/hazle.studio">Facebook</a></li>
              <li><a href={`mailto:kontakt@hazle.pl`}>Mail</a></li>
            </ul>
          </RichText>
        </Grid>
      </ContentContainer>
      <div className="footer-code">
        <p>© 2024 Hazle.pl. Wszelkie prawa zastrzeżone.</p>
      </div>
      </footer>
  );
}