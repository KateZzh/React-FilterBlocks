import JobPage from "./page/JobPage/JobPage";
import VacancyPage from "./page/VacancyPage/VacancyPage"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<JobPage />}></Route>
        <Route path="/vacancy/:id" element={<VacancyPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
