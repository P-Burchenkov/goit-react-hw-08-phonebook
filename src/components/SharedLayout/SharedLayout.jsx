import PrimarySearchAppBar from 'components/AppBar';
import { ThreeDots } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsRefreshing } from 'redux/selectors';

export default function SharedLayout() {
  const isRefreshing = useSelector(selectIsRefreshing);
  return (
    <>
      <PrimarySearchAppBar />
      <main className="container">
        {isRefreshing ? <ThreeDots /> : <Outlet />}
      </main>
    </>
  );
}
