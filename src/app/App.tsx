import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/SideBar";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Suspense } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import "./styles/index.scss";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar to={""} />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>

    </div >
  )
};

export default App;
