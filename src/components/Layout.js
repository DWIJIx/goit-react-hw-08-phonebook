import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Layout = styled.div`
  width: 500px;
  display: flex;
  margin: 20px auto;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 40;
  color: #010101;

  border-radius: 10px;
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  &.active {
    color: white;
    background-color: grey;
  }
`;
