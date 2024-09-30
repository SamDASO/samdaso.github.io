
import style from './Error.module.scss'


function Error() {

  return (
    <div className={style.error}>
      <h2 className={style.title}>Error 404</h2>
      <p className={style.message}> The page you are looking for doesn't exist. <br/> Please verify the page url or try another time</p>
    </div>
  );
}

export default Error