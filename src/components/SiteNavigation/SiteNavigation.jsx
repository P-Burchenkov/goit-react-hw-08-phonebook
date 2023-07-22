import AuthNav from 'components/AuthNav/AuthNav';
import ContactsLink from 'components/ContactsLink/ContactsLink';
import HomeLink from 'components/HomeLink/HomeLink';
import { useSelector } from 'react-redux';
import { selectIsLogedIn } from 'redux/selectors';
import css from './SiteNavigation.module.css';

export default function SiteNavigation() {
  const isLogedIn = useSelector(selectIsLogedIn);

  return (
    <nav className={css.nav}>
      <HomeLink />
      {isLogedIn ? <ContactsLink /> : <AuthNav />}
    </nav>
  );
}
