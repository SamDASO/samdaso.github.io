
import { useParams } from 'react-router-dom';
import Gallery from '../../assets/components/gallery/Gallery';
import style from './Project.module.scss'
import carouselItems from "../../assets/data/CarouselItems.js";
import Tags from '../../assets/components/tags/Tags.js';
import { useTranslation } from 'react-i18next';


interface ProjectItem {
    id: number;
    title: string;
    date: string;
    image: string;
    description: string;
    skills: string[];
    github: string;
    gallery: string[];
}


function Project() {
    const {t} = useTranslation();
    const { id } = useParams<{ id: string }>();
    const projectData = carouselItems.find((element: ProjectItem) => element.id.toString() === id);
    
  return (
    <div className={style.project}>

        <section className={style.info}>
            <div className={style.divTitle}>
                <h2 className={style.title}>{projectData.title}</h2>
                <p className={style.date}>{projectData.date}</p>
            </div>
            <div className={style.info_tags}>
                {
                    projectData.skills.map((skill: string, index: number) => (
                        <Tags key={index} name={skill}/>
                    ))
                }
            </div>
            <a className={style.info_githubLink} target="_blank" href={projectData.github}>&#8594; {t('GitHubLink')}</a>
            <p className={style.info_description}>{projectData.description}</p>
            <p className={style.info_desc_info}>[{t('imageInfo')}]</p>
        </section>

      <Gallery galleryData={projectData.gallery}/>
    </div>
  );
}

export default Project