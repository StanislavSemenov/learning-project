import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/SideBar";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { classNames } from "shared/lib/classNames/classNames";
import "./styles/index.scss";

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar to={""} />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div >
  )
};

export default App;
