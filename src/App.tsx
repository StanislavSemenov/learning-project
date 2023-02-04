import { Link } from "react-router-dom";
import { Suspense, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Counter } from "./components/Counter/Counter";
import { MainPageAsync } from "./Pages/MainPage/MainPageAsync";
import { AboutPageAsync } from "./Pages/AboutPage/AboutPageAsync";
import "./styles/index.scss";
import { Theme, ThemeContext } from "./Theme/ThemeContext";
import { useTheme } from "./Theme/useTheme";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`app ${theme}`}>
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
