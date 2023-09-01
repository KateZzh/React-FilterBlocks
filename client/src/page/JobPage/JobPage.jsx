import { Input, Button, Pagination } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import style from "./jobPage.module.scss";
import { Link } from "react-router-dom";
import array from "../../storage/storage.json";
import Header from "../../components/Header/Header";
import { useState } from "react";

const JobPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const amountCards = 6;
  const npage = Math.ceil(array.length / amountCards);
  const lastIndex = amountCards * currentPage;
  const firstIndex = lastIndex - amountCards;
  const partArray = array.slice(firstIndex, lastIndex);
  const emptyRow = amountCards - (array.length % amountCards);

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
          {partArray.map((el, index) => (
            <Link to={`/vacancy/${el.id}`} key={index}>
              <div className={style.wrapperJob} key={index}>
                <h2>{el.header}</h2>

                <div className={style.info}>
                  <div>{el.salary}</div>
                  <p>{el.time}</p>
                </div>

                <div className={style.location}>
                  <div className={style.logoLocation}></div>
                  <p>{el.city}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {array.length % amountCards !== 0 && currentPage === npage ? (
          <div style={{ height: 155 * emptyRow }}></div>
        ) : null}

        <Pagination
          className={style.pagination}
          total={npage}
          onChange={(val) => setCurrentPage(val)}
        />
      </div>
    </>
  );
};

export default JobPage;
