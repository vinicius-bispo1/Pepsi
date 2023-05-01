import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
`;

export const Container = styled.section`
  height: 50vh;
`;

export const Boxbackground = styled.section`
  height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-left: 3vw;
`;
export const LogoBox = styled.div`
  width: 6.5vw;
  display: flex;
  align-items: center;
`;

export const NavHeader = styled.nav`
  display: flex;
  align-items: center;
  width: 50vw;
  height: 19vh;

  ul {
    display: flex;
    justify-content: space-evenly;
    width: 95%;
    list-style: none;
  }
  li {
    font-size: 1.5rem;
    font-family: "Roboto", sans-serif;
    color: #ffffff;
    font-size: 21px;
    cursor: pointer;
    &:hover {
      transform: scale(108%);
      opacity: 0.5;
    }
  }
`;

export const MainBox = styled.main`
  height: 77vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TextBox = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 40%;
  height: 75vh;
  color: #ffffff;
  padding-left: 40px;
  padding-bottom: 50px;
  font-family: "Roboto", sans-serif;
  h1 {
    font-size: 3em;
    font-family: Roboto, sans-serif;
    line-height: 1.5em;
    letter-spacing: 1px;
    font-weight: bold;
    span {
      font-size: 2.2em;
      font-family: Roboto, sans-serif;
      font-weight: bold;
      width: 26.5vw;

      letter-spacing: 1px;
      color: rgb(255, 255, 255);
    }
  }
  p {
    width: 37vw;
    font-size: 16px;
    letter-spacing: 1px;
    line-height: 1.5em;
  }
  button {
    width: 15vw;
    height: 6vh;
    border-radius: 20px;
    margin-top: 10px;
    border: none;
    cursor: pointer;
    color: #000000;
    font-size: 1.05rem;
    &:hover {
      opacity: 0.5;
      transform: scale(105%);
    }
  }
`;

export const Boximg = styled.section`
  width: 19vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  right: 5vw;
`;

export const Boxicone = styled.div`
  width: 5vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  img {
    width: 2.5vw;
    position: relative;
    transition: ease-in-out 0.6s;
    top: 0vh;
    &:hover {
      top: -4px;
      opacity: 0.5;
    }
  }
`;

export const Boxface = styled.div`
  padding-left: 10px;
  img {
    width: 1.3vw;
  }
`;

export const Boxlatinha = styled.div`
  width: 17vw;
  height: 80vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  right: 8vw;
  padding-bottom: 10px;
  img {
    width: 3.5vw;
    height: 13.3vh;
    cursor: pointer;
    position: relative;
    top: -2vh;
    transition: ease-in-out 0.6s;
    &:hover {
      top: -4.5vh;
    }
  }
`;
