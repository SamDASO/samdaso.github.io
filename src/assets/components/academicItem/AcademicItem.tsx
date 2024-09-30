import style from "./AcademicItem.module.scss"

interface ItemInterface {
/**name of the certificate/degree */
name: string;
/**level of the degree */
level: string;
/**date of the degree. Only the year */
date: number;
}


function AcademicItem({name, level, date}: ItemInterface) {

  return (
    <div className={style.container}>
      <p className={style.date}>{date}</p>

      <div className={style.content}>
        <p className={style.level}>{level}</p>
        <p className={style.name}>{name}</p>
      </div>
    </div>
  );
}

export default AcademicItem