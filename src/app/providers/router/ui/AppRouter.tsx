import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouterConfig } from 'shared/config/RouterConfig/RouterConfig';
import { PageLoader } from 'widgets/PageLoader';


export function AppRouter() {
  return (
    <Routes>
      {Object.values(RouterConfig).map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={(
            <Suspense fallback={<PageLoader/>}>
              <div className="page-wrapper">
                {element}
              </div>
            </Suspense>
          )}
          />
        ))}
    </Routes>
  );
}
