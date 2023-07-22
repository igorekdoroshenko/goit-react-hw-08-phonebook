import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const AuthNavWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const AuthNavLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  :hover,
  :active {
    color: #f6e764;
  }
  &.active {
    color: #f6e764;
  }
`;
