import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthNavContainer = styled.div`
  display: flex;
  gap: 40px;
`;

export const StyledLink = styled(NavLink)`
  padding: 5px;
  color: black;
  font-weight: 600;

  &.active {
    border: 1px solid black;
    border-radius: 4px;
    font-weight: 500;
    text-decoration: none;
  }
`;
