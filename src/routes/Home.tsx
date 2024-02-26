import { useEffect, useRef, useState } from "react";
import Tab from "../components/Tabs/tab";
import Tabs from "../components/Tabs/tabs";
import Card from "../components/card";
import ContentContainer from "../utils/content-container";
import Grid from "../utils/grid";
import RichText from "../utils/rich-text";
import Section from "../utils/section";
import HeroBanner from "../components/hero-banner";
import InfiniteCarousel from "../components/InfiniteCarousel";

const Home = () => {

  const [projectsCount, setProjectsCount] = useState(0);
  const [experienceYears, setExperienceYears] = useState(0);
  const [satisfactionPercentage, setSatisfactionPercentage] = useState(0);
  const isAnimating = useRef(false);

  useEffect(() => {

    const handleScroll = () => {
      const cardNode = document.getElementById('counter-card');
      if (cardNode) {
        const cardTop = cardNode.getBoundingClientRect().top;
        const cardBottom = cardNode.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (cardTop < windowHeight && cardBottom >= 0 && !isAnimating.current) {
          startCounting();
        }
      }
    };
    

    const startCounting = () => {
      isAnimating.current = true;
      const maxCount = 50;
      const maxExperienceYears = 3;
      const maxSatisfactionPercentage = 99;
      const stepCount = Math.ceil(maxCount / 50);
      const stepExperienceYears = Math.ceil(maxExperienceYears / 50);
      const stepSatisfactionPercentage = Math.ceil(maxSatisfactionPercentage / 50);
      let count = 0;
      let experienceYearsCount = 0;
      let satisfactionPercentageCount = 0;

      const interval = setInterval(() => {
        if (count < maxCount) {
          setProjectsCount(prevCount => {
            const newCount = Math.min(prevCount + stepCount, maxCount);
            return newCount;
          });
        }

        if (experienceYearsCount < maxExperienceYears) {
          setExperienceYears(prevCount => {
            const newCount = Math.min(prevCount + stepExperienceYears, maxExperienceYears);
            return newCount;
          });
        }

        if (satisfactionPercentageCount < maxSatisfactionPercentage) {
          setSatisfactionPercentage(prevCount => {
            const newCount = Math.min(prevCount + stepSatisfactionPercentage, maxSatisfactionPercentage);
            return newCount;
          });
        }

        count += stepCount;
        experienceYearsCount += stepExperienceYears;
        satisfactionPercentageCount += stepSatisfactionPercentage;

        if (count >= maxCount && experienceYearsCount >= maxExperienceYears && satisfactionPercentageCount >= maxSatisfactionPercentage) {
          clearInterval(interval);
          isAnimating.current = false;
        }
      }, 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
    <HeroBanner>
      <RichText>
        <h1>Tworzymy strony internetowe które napędzają rozwój biznesu.</h1>
        <a href="#about" className="primary-btn">Dowiedź się więcej<i className="fa-solid fa-arrow-right"></i></a>
      </RichText>
    </HeroBanner>
    <Section background="neutral-300" paddingBottom="3" paddingTop="3">
        <InfiniteCarousel scrollDirection="left">
          <img src="../../img/Tripply.jpg" alt="Tripply design" loading="lazy" />
          <img src="../../img/Superspas.jpg" alt="Superspas design" loading="lazy" />
          <img src="../../img/TurboHive.jpg" alt="TurboHive design" loading="lazy" />
        </InfiniteCarousel>
        <InfiniteCarousel paddingBottom='3' paddingTop='3' scrollDirection="right">
          <img src="../../img/Tripply.jpg" alt="Tripply design" loading="lazy" />
          <img src="../../img/Superspas.jpg" alt="Superspas design" loading="lazy" />
          <img src="../../img/TurboHive.jpg" alt="TurboHive design" loading="lazy" />
        </InfiniteCarousel>
      </Section>
    <Section id="about" background="neutral-300" paddingBottom="3" paddingTop="0">
      <ContentContainer>
        <Grid gap={3} paddingBottom='3' paddingTop='3'>
          <RichText>
            <h2>Hazle w liczbach</h2>
          </RichText>
        </Grid>
        <Grid gap={3} paddingBottom='3' xl={3} md={3} xs={1}>
          <Card id="counter-card" backgroundColor="secondary-100">
            <RichText>
              <span className='big-text'>{projectsCount}+</span>
              <span className='divider'/>
              <p><b>Stworzonych projektów</b></p>
            </RichText>
          </Card>
          <Card id="counter-card" backgroundColor="secondary-100">
            <RichText>
              <span className='big-text'>{experienceYears}</span>
              <span className='divider'/>
              <p><b>Lata komercyjnego doświadczenia</b></p>
            </RichText>
          </Card>
          <Card id="counter-card" backgroundColor="secondary-100">
            <RichText>
              <span className='big-text'>{satisfactionPercentage}%</span>
              <span className='divider'/>
              <p><b>Zadowolonych klientów</b></p>
            </RichText>
          </Card>
        </Grid>
      </ContentContainer>
    </Section>
    <Section background="neutral-100" id="service" paddingBottom="3" paddingTop="3">
      <ContentContainer>
        <RichText>
          <h2>Usługi</h2>
        </RichText>
        <Grid gap={3} paddingBottom='3' paddingTop='3'>
          <Tabs>
            <Tab label={'Web Dev.'} >
              <RichText>
                <div className="badge-list">
                  <span className="badge">Landingi</span>
                  <span className="badge">E-Commerce</span>
                  <span className="badge">Aplikacje www</span>
                  <span className="badge">Wsparcie techniczne</span>
                </div>
                <p>Tworzymy wysokiej jakości strony internetowe, opierając się na nowoczesnych praktykach projektowych. Oferujemy kompleksowe rozwiązania, które są kluczowe dla sukcesu Twojego projektu internetowego, uwzględniając mobilność i doświadczenie użytkownika.</p>
                <p>Nasz zespół kładzie duży nacisk na indywidualność projektów, dbając o to, aby Twoja strona była responsywna i zoptymalizowana pod każde urządzenie i interfejs.</p>
                <p>Dzięki naszym rozwiązaniom Twoja strona przyciągnie odpowiednie grupy docelowe, zwiększy zaangażowanie użytkowników oraz wspomoże rozwój biznesu poprzez zwiększenie sprzedaży i wartości marki. Niezależnie od tego, czy potrzebujesz strony landingowej, sklepu internetowego czy aplikacji, nasz zespół zapewni rozwiązanie dostosowane do Twoich potrzeb.</p>
                <p>Ponadto, gwarantujemy wsparcie techniczne, które zapewni sprawną i efektywną pracę Twojej strony przez cały czas.</p>
              </RichText>
            </Tab>
            <Tab label={'Branding'} >
              <RichText>
                <div className="badge-list">
                  <span className="badge">Logotyp</span>
                  <span className="badge">Re-Branding</span>
                  <span className="badge">Grafiki reklamowe</span>
                </div>
                <p>Nasz zespół specjalistów do spraw brandingu doskonale poradzi sobie z prezentacją Twojego biznesu w najlepszym świetle. Bez względu na to, czy chcesz przyciągnąć nowych klientów, przywrócić do życia dawną bazę klientów, czy po prostu doskonalić tożsamość swojej firmy - nasi kreatywni eksperci opracują kompleksową strategię brandingową, która idealnie odzwierciedli unikalne cechy Twojego biznesu.</p>
                <p>Od identyfikacji korporacyjnej, przez projekty materiałów reklamowych, aż po wytyczne brandu, zapewniamy spersonalizowane podejście, które będzie w pełni odpowiadać potrzebom Twojego przedsiębiorstwa. Nasze rozwiązania nie tylko wyróżnią Cię na rynku, ale także pomogą w budowaniu silnej marki i zwiększeniu lojalności klientów.</p>
                <p>Wyposażony w nową, spersonalizowaną markę - będziesz teraz w stanie przyciągnąć zaangażowane nowe audytorium i wykorzystać pełny potencjał swojej firmy. Dzięki naszemu wsparciu będziesz mógł skutecznie rozwijać swój biznes i osiągać coraz większe sukcesy.</p>
              </RichText>
            </Tab>
            <Tab label={'UI/UX Design'} >
              <RichText>
                <div className="badge-list">
                  <span className="badge">Aplikacje mobilne</span>
                  <span className="badge">Strony internetowe</span>
                </div>
                <p>Pomożemy Ci stworzyć optymalny projekt UI oraz inteligentne UX dla Twojego projektu, wykorzystując bogate doświadczenie naszego zespołu ds. interfejsu użytkownika (UI) i doświadczenia użytkownika (UX). Nasze usługi obejmują kompleksową analizę potrzeb użytkowników, szczegółowe projektowanie interfejsu oraz skuteczną implementację rozwiązań dostosowanych do Twoich unikalnych wymagań.</p>
                <p>Niezależnie od tego, czy posiadasz już istniejące wytyczne marki, czy też potrzebujesz stworzenia niestandardowej biblioteki komponentów, możesz polegać na naszym zespole. Jesteśmy gotowi dostarczyć Ci elegancki i czytelny interfejs użytkownika, idealnie odpowiadający Twoim potrzebom oraz przyciągający uwagę użytkowników swoim estetycznym designem i intuicyjnymi funkcjonalnościami.</p>
                <p>Nasi projektanci nie tylko tworzą pikselowo doskonałe ekrany, ale również dbają o spójność z wizją Twojej marki oraz optymalne doświadczenie użytkownika na każdym etapie interakcji z Twoją aplikacją lub stroną internetową. Dzięki temu Twoja marka zostanie jeszcze lepiej rozpoznawalna, a użytkownicy będą mieli pozytywne wrażenia z korzystania z Twoich produktów.</p>
                <p>Współpracując z nami, możesz być pewien, że otrzymasz nie tylko profesjonalne podejście do projektowania interfejsu, ale także partnerskie wsparcie w osiągnięciu Twoich celów biznesowych poprzez skuteczne kreowanie przyjaznych dla użytkownika aplikacji i stron internetowych.</p>
              </RichText>
            </Tab>
            <Tab label={'Marketing'} >
              <RichText>
                <div className="badge-list">
                  <span className="badge">Strategie Marketingowe</span>
                  <span className="badge">Kampanie Reklamowe</span>
                  <span className="badge">Analiza Rynku</span>
                </div>
                <p>Specjalizujemy się w tworzeniu wysokiej jakości strategii marketingowych dostosowanych do podniesienia obecności Twojej marki w Internecie. Zrozumieliśmy istotę nowoczesnych zasad projektowania w dzisiejszym świecie cyfrowym, dlatego nasz doświadczony zespół skupia się na tworzeniu atrakcyjnych stron internetowych, które priorytetowo traktują doświadczenia z myślą o urządzeniach mobilnych.</p>
                <p>Bez względu na to, czy wdrażasz nowy projekt, czy też odnawiasz istniejący, nasze zaangażowanie w responsywne projektowanie gwarantuje, że Twoja strona internetowa będzie się wyróżniać na każdym urządzeniu i interfejsie. Poprzez wplecenie esencji Twojej marki w każdy aspekt procesu projektowania, zapewniamy, że Twoja nowa strona internetowa będzie rezonować z Twoją grupą docelową, generować istotne zaangażowanie i ostatecznie zwiększać wyniki sprzedaży.</p>
                <p>Współpracując z nami, odblokujesz pełny potencjał swojej obecności w Internecie, osiągając sukcesy, o jakich marzysz.</p>
              </RichText>
            </Tab>
          </Tabs>
        </Grid>
      </ContentContainer>
    </Section>
    <Section background="neutral-100" id="trusted-us" paddingBottom="3" paddingTop="3">
      <ContentContainer>
        <RichText>
          <h2 id="about" className="center">Klienci</h2>
        </RichText>
        <Grid gap={1} paddingBottom='3' paddingTop='3' xl={4} md={4} xs={2}>
          <Card backgroundColor="secondary-100"><img src="../../img/logo/logo-awt.png" alt="Logo AWT Polska" loading="lazy"/></Card>
          <Card backgroundColor="secondary-100"><img src="../../img/logo/logo-superspas.png" alt="Logo Superspas" loading="lazy"/></Card>
          <Card backgroundColor="secondary-100"><img src="../../img/logo/logo-bewell.png" alt="Logo Bewell Polska" loading="lazy"/></Card>
          <Card backgroundColor="secondary-100"><img src="../../img/logo/logo-hanscraft.png" alt="Logo Hanscraft Polska" loading="lazy"/></Card>
          <Card backgroundColor="secondary-100"><img src="../../img/logo/logo-infra-bruk.png" alt="Logo Infra bruk Polska Gniezno" loading="lazy"/></Card>
          <Card backgroundColor="secondary-100"><img src="../../img/logo/logo-platinumspas.png" alt="Logo Platonumspas Polska" loading="lazy"/></Card>
          <Card backgroundColor="secondary-100"><img src="../../img/logo/logo-pk-bruk.svg" alt="Logo PK-Bruk Polska" loading="lazy"/></Card>
        </Grid>
      </ContentContainer>
    </Section>
  </>
  );
};

export default Home;
