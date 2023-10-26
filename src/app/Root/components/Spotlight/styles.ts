import styled from "@emotion/styled";

export const Spot = styled.div`
  position: fixed;
  opacity: 1;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #000000cc;
  pointer-events: none;

  #off-switch {
    margin: 36px auto;
    padding: 8px 16px;
    width: fit-content;
    border: 0;
    background: #fff;
    font-family: "IBM Plex Sans";
    color: #000;
    cursor: pointer;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }

  @keyframes enter {
    0% {
      transform: scale(1.5);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes exit {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    98% {
      transform: scale(3);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
`;
