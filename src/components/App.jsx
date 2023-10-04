import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { fetchCurrentUser } from 'redux/Authorization/operations';
import { selectIsRefreshing } from 'redux/selectors';
import SharedLayout from './SharedLayout/SharedLayout';
import ContactsPage from 'Pages/ContactsPage';
import AuthPage from 'Pages/Authorization';
import LogInPage from 'Pages/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRote';
import HomePage from 'Pages/HomePage';

export function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route element={<PrivateRoute redirectTo="login" />}>
              <Route path="contacts" element={<ContactsPage />} />
            </Route>
            <Route element={<PublicRoute redirectTo="/contacts" restricted />}>
              <Route path="auth" element={<AuthPage />} />
              <Route path="login" element={<LogInPage />} />
            </Route>
          </Route>
        </Routes>
        <ToastContainer autoClose={3000} />
      </>
    )
  );
}
