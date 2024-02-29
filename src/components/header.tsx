import { useState, useEffect} from 'react';
import { useInView } from 'react-intersection-observer';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);;  
  const { ref, inView } = useInView({
    threshold: 0,
  });


  const useScrollDirection = () => {
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
    

    useEffect(() => {
      let prevScrollY = typeof window !== 'undefined' ? window.scrollY : 0;


      const handleScroll = () => {
        const currentScrollY = typeof window !== 'undefined' ? window.scrollY : 0;

        if (currentScrollY > prevScrollY) {
          setScrollDirection('down');
        } else {
          setScrollDirection('up');
        }

        prevScrollY = currentScrollY;
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return scrollDirection;
  };

  const scrollDirection = useScrollDirection();


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = typeof window !== 'undefined' ? window.scrollY || document.documentElement.scrollTop : 0;
      setIsHeaderFixed(scrollPosition > 0);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <header ref={ref} className={` ${isHeaderFixed ? 'fixed' : ''} ${isNavOpen ? 'open' : ''} scroll-${scrollDirection} ${inView ? 'visible' : 'not-visible'}`}>
        <div className="content-container">
        <div className={`burger  ${isNavOpen ? 'open' : ''}`} onClick={() => setIsNavOpen(!isNavOpen)}>
          <span />
        </div>
      </div>
      <div className={`menu ${isNavOpen ? 'open' : ''}`}>
        <ul>
          <li><a onClick={() => setIsNavOpen(!isNavOpen)} target="_blank" href="https://www.instagram.com/hazle.pl/">Linkedin</a></li>
          <li><a onClick={() => setIsNavOpen(!isNavOpen)} target="_blank" href="https://facebook.com/hazle.studio">Github</a></li>
          <li><a onClick={() => setIsNavOpen(!isNavOpen)} href={`mailto:kontakt@hazle.pl`}>Polish CV</a></li>
          <li><a onClick={() => setIsNavOpen(!isNavOpen)} href={`mailto:kontakt@hazle.pl`}>English CV</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
