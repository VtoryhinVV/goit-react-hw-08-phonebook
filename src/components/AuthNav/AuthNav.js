import { AuthNavContainer, StyledLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavContainer>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </AuthNavContainer>
  );
};
