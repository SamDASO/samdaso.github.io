import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './Home.module.scss'
import { faCode, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import Skill from '../../assets/components/skill/Skill';
import AcademicItem from '../../assets/components/academicItem/AcademicItem';
import Carousel from '../../assets/components/carousel/Carousel';
import carouselItems from "../../assets/data/CarouselItems.js";
import { useTranslation } from 'react-i18next';

function Home() {

  const {t} = useTranslation();
  const slidesData = carouselItems;
  return (
    <div className={style.home}>
      <section className={style.profileDesc}>
        <p className={style.profileDescription}>{t('profileDesc')}</p>
      </section>

      <div className={style.container}>
        <section className={style.skills}>
          <div className={`${style.skillsTitle} ${style.borderBottom}`}>
            <FontAwesomeIcon icon={faCode} className={style.icon}/>
            <h3 className={style.title}>{t('titleSkills')}</h3>
          </div>

          <ul className={style.skillsList}>
            <li className={style.skillsItem}><Skill name="HTML5" level={.9} /></li>
            <li className={style.skillsItem}><Skill name="CSS/SASS" level={.8} /></li>
            <li className={style.skillsItem}><Skill name="JavaScript" level={.7} /></li>
            <li className={style.skillsItem}><Skill name="TypeScript" level={.6} /></li>
            <li className={style.skillsItem}><Skill name="React" level={.7} /></li>
            <li className={style.skillsItem}><Skill name="Php" level={.2} /></li>
            <li className={style.skillsItem}><Skill name="SQL" level={.05} /></li>
          </ul>

        </section>

        <section className={style.academicBgr}>

          <div className={`${style.academicTitle} ${style.borderBottom}`}>
            <FontAwesomeIcon icon={faGraduationCap} className={style.icon}/>
            <h3 className={style.title}>{t('titleAcademic')} <span>(France)</span></h3>
          </div>

          <ul className={style.academicList}>
            <li className={style.academicItem}><AcademicItem name={t('lvl6Content')} level={t('lvl6')} date={2024}/></li>
            <li className={style.academicItem}><AcademicItem name={t('masterContent')} level={t('master')} date={2020}/></li>
            <li className={style.academicItem}><AcademicItem name="Bachelor in Business Administration" level={t('bachelor')} date={2018}/></li>
          </ul>

        </section>

      </div>
        
      <section className={style.carousel}>
        <Carousel slides={slidesData}/>
      </section>
      
    </div>
  );
}

export default Home