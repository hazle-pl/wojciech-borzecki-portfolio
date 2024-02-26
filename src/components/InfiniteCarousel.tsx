import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useInView } from 'react-intersection-observer';

interface InfiniteCarouselProps {
  children: React.ReactNode;
  scrollDirection?: 'left' | 'right';
  paddingBottom?: string;
  paddingTop?: string;
}

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({ children, scrollDirection = 'right', paddingTop, paddingBottom }) => {
  const paddingTopClass = paddingTop ? `padding-top-${paddingTop}` : 'padding-top-0';
  const paddingBottomClass = paddingBottom ? `padding-bottom-${paddingBottom}` : 'padding-bottom-0';

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const settings = {
    infinite: true,
    speed: 30000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    variableWidth: true,
    rtl: scrollDirection === 'right',
  };

  return (
    <div className={`infinite-carousel`} ref={ref}>
      <Slider {...settings} className={`infinite-carousel  ${inView ? 'visible' : 'not-visible'} ${paddingTopClass} ${paddingBottomClass}`}>
        {children}
      </Slider>
    </div>
  );
};

export default InfiniteCarousel;