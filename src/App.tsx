import { Link } from "react-router-dom";
import { Suspense } from "react";
import { useTheme } from "./Theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";
import { Route, Routes } from "react-router-dom";
import { MainPageAsync } from "./Pages/MainPage/MainPageAsync";
import { AboutPageAsync } from "./Pages/AboutPage/AboutPageAsync";
import "./styles/index.scss";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
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
