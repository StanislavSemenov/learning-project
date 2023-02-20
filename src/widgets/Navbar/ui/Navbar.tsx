import { LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
interface NavbarProps extends LinkProps {
  className?: string;
}

export const Navbar = (props:NavbarProps) => {
  const {
    to,
    children,
    className,
  } = props;

  const { t } = useTranslation();

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={cls.mainLink}
          to='/'
        >
          {t('Главная')}
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to='/about'
        >
          {t('О сайте')}
        </AppLink>
      </div>

    </div>
  );
};
