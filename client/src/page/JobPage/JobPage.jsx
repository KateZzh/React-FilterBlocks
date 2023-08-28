import { Input, Button, Pagination } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import style from "./jobPage.module.scss";
import { Link } from "react-router-dom";

const JobPage = () => {
  const array = [
    {
      header: "Менеджер-дизайнер",
      salary: "з/п от 70000 rub",
      city: "Новый Уренгой",
      jobTime: "Полный рабочий день",
    },
    {
      header: "Ведущий графический дизайнер НЕ УДАЛЕННО",
      salary: "з/п от 80000 rub",
      city: "Москва",
      jobTime: "Полный рабочий день",
    },
    {
      header: "Работник декорации, дизайнер (ТЦ Амбар)",
      salary: "з/п 29000 rub",
      city: "Самара",
      jobTime: "Сменный график работы",
    },
    {
      header: "Менеджер-дизайнер",
      salary: "з/п 55000 - 95000 rub",
      city: "Тюмень",
      jobTime: "Полный рабочий день",
    },
  ];

  return (
    <>
      <Input placeholder="Your email" rightSection={<Button>Поиск</Button>} icon={<IconSearch />} />

      <div>
        {array.map((el, index) => (
          <Link to={`/vacancy/${el.header}`} key={index}>
            <div className={style.wrapper} key={index}>
              <h2>{el.header}</h2>

              <div className={style.info}>
                <div>{el.salary}</div>
                <p>{el.jobTime}</p>
              </div>

              <div className={style.location}>
                <div className={style.logoLocation}></div>
                <p>{el.city}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Pagination total={3} />
    </>
  );
};

export default JobPage;
