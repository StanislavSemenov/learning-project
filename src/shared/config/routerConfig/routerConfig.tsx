import { MainPage } from 'pages/ui/MainPage';
import { AboutPage } from 'pages/ui/AboutPage';
import { RouteProps } from 'react-router-dom';
import { NotFoundPage } from 'pages/ui/NotFoundPage';

export enum AppRouters {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found'
};

export const RoutePath: Record<AppRouters, string> = {
  [AppRouters.MAIN]: '/',
  [AppRouters.ABOUT]: 'about',
  [AppRouters.NOT_FOUND]: '*',
};

export const RouterConfig: Record<AppRouters, RouteProps> = {
  [AppRouters.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRouters.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />
  },
  [AppRouters.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />
  }
};