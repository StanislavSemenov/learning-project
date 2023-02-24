import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line no-unused-vars
function MainPage(_props: any) {
  const { t } = useTranslation('main');

  return (
    <div>
      <BugButton />
      {t('Главная страница')}
    </div>
  );
}

export default MainPage;
