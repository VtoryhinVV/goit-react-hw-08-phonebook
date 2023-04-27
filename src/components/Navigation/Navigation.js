import { useAuth } from 'hooks';
import { NavigationContainer, StyledLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationContainer>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </NavigationContainer>
  );
};
