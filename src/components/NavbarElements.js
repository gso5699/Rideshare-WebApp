import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
 
export const Nav = styled.nav`
  position: fixed;
  padding: 10px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #4c768d;
  color: #242443;
  height: 60px;
  top: 0;
  width: 100%
`;
 
export const NavLink = styled(Link)`
  color: #fffff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #ADD8E6;
  }
`;
 
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;