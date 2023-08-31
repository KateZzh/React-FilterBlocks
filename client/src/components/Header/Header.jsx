import style from "./header.module.scss";

const Header = () => {
  return (
    <div className={style.wrapper}>
      <div>
        <div className={style.imgLogo}></div>
        <h2>Jobored</h2>
      </div>

      <nav>
        <p>Поиск Вакансий</p>
        <p>Избранное</p>
      </nav>
    </div>
  );
};

export default Header;
