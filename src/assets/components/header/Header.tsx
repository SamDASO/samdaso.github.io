import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import style from "./Header.module.scss"
import icon from "/img/icon.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobe, faHouse } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Header() {

    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const currentLanguage = i18n.language;
        const newLanguage = currentLanguage === 'en' ? 'fr' : 'en';

        i18n.changeLanguage(newLanguage).then(() => {
            window.location.reload();
        });
    };


  return (
    <header className={style.container}>
        
        <div className={style.profilePhoto}>
            <img className={style.img} alt="profile photo" aria-hidden src={icon}/>
        </div>
        <nav className={style.navbar}>
            <ul className={style.listUl}>
                <li className={style.list}>
                    <Link to="/" className={`${style.navItem} ${style.homeIcon}`} title={t('homeIcon')}>
                    <FontAwesomeIcon icon={faHouse} />
                    </Link>
                </li>
                <li className={style.list}>
                    <div className={`${style.navItem} ${style.langIcon}`} onClick={toggleLanguage}>
                    <FontAwesomeIcon icon={faGlobe} title={t('language')}/>
                    </div>
                </li>
                <li className={style.list}>
                    <a href="https://github.com/SamDASO" title="GitHub" target="_blank" rel="noopener noreferrer" className={`${style.navItem} ${style.gitIcon}`}>
                    <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                <li className={style.list}>
                    <a href="https://www.linkedin.com/in/samantadasilva/" title="LinkedIn" target="_blank" rel="noopener noreferrer" className={`${style.navItem} ${style.linkedinIcon}`}>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                </li>


            </ul>
        </nav>
        <h1 className={style.title}>{t('positionTitle')}</h1>
        <h2 className={style.name}>{t('myName')}</h2>
        <div className={style.language}>{t('languageInfo')} <p><span>FR</span> French,</p> <p><span>EN</span> English,</p> <p><span>PT</span> Portuguese,</p><p><span>ES</span> Spanish</p></div>
        <a className={style.link} href="mailto:samanta.o.dasilva@hotmail.fr"><FontAwesomeIcon icon={faEnvelope}/>{t('contact')}</a>

    </header>
  );
}

export default Header;