import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { UserMenuContainer, UserMenuTitle } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuContainer>
      <UserMenuTitle>Welcome, {user.name}</UserMenuTitle>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </UserMenuContainer>
  );
};
