import { FC } from 'react';
import { LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps extends LinkProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
  const {
    to,
    children,
    className,
  } = props;

  return (
    <div className={classNames(cls.navbar, {}, [])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} className={cls.mainLink} to={'/'}>Главная</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>О сайте</AppLink>
      </div>

    </div>
  );
};
