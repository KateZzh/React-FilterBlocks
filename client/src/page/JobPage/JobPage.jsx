import { Input, Button, Pagination } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import style from "./jobPage.module.scss";
import { Link } from "react-router-dom";
import array from "../../storage/storage.json";
import Header from "../../components/Header/Header";

const JobPage = () => {
  return (
    <>
      <Header />

      <div className={style.wrapper}>
        <Input
          placeholder="Your email"
          rightSection={<Button>Поиск</Button>}
          icon={<IconSearch />}
        />

        <div>
          {array.map((el, index) => (
            <Link to={`/vacancy/${el.id}`} key={index}>
              <div className={style.wrapperJob} key={index}>
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
      </div>
    </>
  );
};

export default JobPage;
