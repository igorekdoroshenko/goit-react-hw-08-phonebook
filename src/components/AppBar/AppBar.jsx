import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import useAuth from 'hooks/useAuth';
import { AppBarWrapper, ToolBar } from './AppBar.styled';
import { Container } from '@mui/material';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBarWrapper position="static">
      <Container maxWidth="xl">
        <ToolBar disableGutters>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </ToolBar>
      </Container>
    </AppBarWrapper>
  );
};

export default AppBar;