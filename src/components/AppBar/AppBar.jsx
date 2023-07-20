import { useSelector } from 'react-redux';

import { MainNav } from 'components/MainNav/MainNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { selectIsLogedIn } from 'redux/selectors';

export function AppBar() {
  const isLogedIn = useSelector(selectIsLogedIn);
  return (
    <header>
      <MainNav />
      {isLogedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
