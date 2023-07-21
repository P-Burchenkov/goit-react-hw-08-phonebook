import PrimarySearchAppBar from 'components/AppBar';
import { Outlet } from 'react-router-dom';

export default function SharedLayout() {
  return (
    <>
      <PrimarySearchAppBar />
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}
