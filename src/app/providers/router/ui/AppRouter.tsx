import { t } from 'i18next';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouterConfig } from 'shared/config/RouterConfig/RouterConfig';

export function AppRouter() {
  return (
    <Suspense fallback={<div>{t('Loading...')}</div>}>
      <Routes>
        {Object.values(RouterConfig).map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={(
              <div className="page-wrapper">
                {element}
              </div>
            )}
          />
        ))}
      </Routes>
    </Suspense>
  );
}
