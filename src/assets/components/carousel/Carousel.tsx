import React, { useState } from 'react';
import style from './Carousel.module.scss';
import Tags from '../tags/Tags';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Type definition for Slide props
interface Slide {
  id: number,
  title: string, 
  image: string, 
  description: string, 
  skills:string[]
}

interface CarouselProps {
  slides: Slide[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const {t} = useTranslation();
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  const nextIndex = (currentIndex + 1) % slides.length;

  const prevSlide = () => {
    setCurrentIndex(prevIndex); // Go to the previous slide
  };

  const nextSlide = () => {
    setCurrentIndex(nextIndex); // Go to the next slide
  };

  const onClickSlide = () => {
    const projectId = slides[currentIndex].id;
    navigate(`/project/${projectId}`);
  }


  return (
    <div className={style.carousel}>

      <div className={style.carouselContainer}>
        
        <div className={style.carouselSlides}>
        {slides.map((slide, index) => {
            let slideClass = style.inactiveSlide; // Default class for hidden slides

            // Assign classes based on their position relative to currentIndex
            if (index === currentIndex) {
              slideClass = style.currentSlide;
            } else if (index === prevIndex) {
              slideClass = style.prevSlide;
            } else if (index === nextIndex) {
              slideClass = style.nextSlide;
            }

            return (
              <div
                key={slide.id}
                className={`${style.slide} ${slideClass}`}
                onClick={onClickSlide}
                style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
              </div>
            );
          })}
 
        </div>

        <div className={style.navigation}>
          <button className={`${style.arrow} ${style.leftArrow}`} onClick={prevSlide}>
            &#8592;
          </button>
          <button className={`${style.arrow} ${style.rightArrow}`} onClick={nextSlide}>
          &#8594;
          </button>
        </div>

      </div>

      <div className={style.slideInfo}>

        <div className={style.first}>

          <div className={style.titleContainer}>
          <FontAwesomeIcon icon={faLaptopCode} />
          <h3 className={style.title}>{slides[currentIndex].title}</h3>
          </div>

          <div className={style.tags}>
            {slides[currentIndex].skills.map((skill, index) =>
            <Tags key={skill + index} name={skill}/>
            )}
          </div>

        </div>
        
        <div className={style.second}>
          <p className={style.description}>{slides[currentIndex].description}</p>
          <Link className={style.more} to={`/project/${slides[currentIndex].id}`}>{t('plus')}</Link>
        </div>
      </div>

      
      

    </div>
  );
};

export default Carousel;
