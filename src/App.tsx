import { Link } from "react-router-dom";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Counter } from "./components/Counter/Counter";
import { MainPageAsync } from "./Pages/MainPage/MainPageAsync";
import { AboutPageAsync } from "./Pages/AboutPage/AboutPageAsync";
import "./index.scss";

const App = () => {
  return (
    <div className="app">
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync />} />
          <Route path={'/'} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div >
  )
};

export default App;
