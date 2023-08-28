import { useParams } from "react-router-dom";

const VacancyPage = () => {
  const { id } = useParams();

  return (
    <>
      <h1>{id}</h1>
    </>
  );
};

export default VacancyPage;