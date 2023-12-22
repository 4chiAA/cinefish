import {Link} from "react-router-dom";
import styled from "styled-components";

export default function NavBar() {

    return (
            <StyledNav>
                <Link to={"/home"}>Home</Link>
                <Link to={"/popular"}>Popular</Link>
                <Link to={"/newcomer"}>Newcomer</Link>
                <Link to={"/favourite"}>Favourites</Link>
            </StyledNav>
    )
}

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #333;
  color: white;

  @media (max-width: 767px) {
    position: fixed;
    bottom: 0;
    width: 100vw;
    left: 0;
  }

  @media (min-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
  }

  a {
    margin-right: 10px;
    text-decoration: none;
    color: white;

    &:hover {
      text-decoration: underline;
    }
  }
`