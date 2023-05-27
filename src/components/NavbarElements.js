import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
 
export const Nav = styled.nav`
  position: fixed;
  padding: 10px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #4c768d;
  height: 60px;
  top: 0;
  width: 100%
`;
 
export const NavLink = styled(Link)`
  color: #ffffff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #ADD8E6;
  }
  border: 2px solid rgb(206, 233, 233); /* Add border properties */
  border-radius: 5px; /* Add border-radius to round the corners */
  color: rgb(206, 233, 233);
  transition: background-color 0.3s ease-in-out;

  & + & {
    margin-left: 10px; /* Adjust the margin as needed */
  }

  &:hover {
    background-color: rgb(206, 233, 233);
    color: #4c768d;
  }

  &.active {
    background-color: rgb(206, 233, 233);
    color: #4c768d;
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