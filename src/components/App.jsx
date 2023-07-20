import { LineWave } from 'react-loader-spinner';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';

import { SharedLayout } from './SharedLayout/SharedLayout';
import Contacts from './Contacts';
import SearchBox from './SearchBox';
import ContactForm from './ContactForm';
import { selectIsLoading, selectError, selectToken } from 'redux/selectors';

import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from 'Pages/Home';
import { ContactsPage } from 'Pages/ContactsPage';
import AuthPage from 'Pages/Authorization';
import { LogInPage } from 'Pages/Login';
import { fetchCurrentUser } from 'redux/Authorization/operations';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';

export function App() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const selectedToken = useSelector(selectToken);

  useEffect(() => {
    if (!selectedToken) {
      return;
    }
    dispatch(fetchCurrentUser(selectedToken));
  }, [dispatch, selectedToken]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <PrivateRoute path="contacts">
          <ContactsPage />
        </PrivateRoute>
        <Route path="auth" element={<AuthPage />} />
        <Route path="login" element={<LogInPage />} />
      </Route>
    </Routes>
  );
}
