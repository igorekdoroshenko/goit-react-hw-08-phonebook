import useAuth from 'hooks/useAuth';
import { NavWrapper, HomeLogo, NavItem, LogoText } from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavWrapper>
      <HomeLogo to="/">
        <LogoText
          variant="h6"
          noWrap
          style={{ textDecoration: 'none', color: '#ffffff', fontSize: '18px' }}
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.1rem',
          }}
        >
          Home
        </LogoText>
      </HomeLogo>

      {isLoggedIn && <NavItem to="/contacts">Contacts</NavItem>}
    </NavWrapper>
  );
};

export default Navigation;
