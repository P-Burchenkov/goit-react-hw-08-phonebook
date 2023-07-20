import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/Authorization/operations';
import { selectUser } from 'redux/selectors';

export function UserMenu() {
  const userName = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <>
      <div>{`Hello ${userName}!!!`}</div>
      <button
        type="button"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Log Out
      </button>
    </>
  );
}
