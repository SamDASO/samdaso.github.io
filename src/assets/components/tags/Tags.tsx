import style from "./Tags.module.scss"

interface TagsInterface {
/**name of the skill/expertise */
name: string;
}


function Tags({name}: TagsInterface) {

  return (
    <div className={style.container}>
        <p className={style.tagContent}>{name}</p>
    </div>
  );
}

export default Tags