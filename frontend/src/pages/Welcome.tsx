import {Link} from "react-router-dom";
import styled from "styled-components";

export default function Welcome() {
    return (
        <>
            <StyledContainer>
                <StyledLink to={"/home"}>Welcome to Cinefish</StyledLink>
            </StyledContainer>
        </>
    )
}

const StyledLink = styled(Link)`
  font-size: 2em;
  color: #fff;
margin-top: 75px;`

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  background-image: url("../../public/image.png");
  height: 100vh;
`