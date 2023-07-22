import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import useAuth from 'hooks/useAuth';
import { MenuWrapper, MenuText, MenuButton } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <MenuWrapper>
      <MenuText>Welcome, {user.name}</MenuText>
      <MenuButton onClick={() => { dispatch(logOut())}}>
        Logout
      </MenuButton>
    </MenuWrapper>
  );
};

export default UserMenu;