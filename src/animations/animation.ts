import styled, { keyframes, StyledComponent } from "styled-components";

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
`;

export const inputFocus = keyframes`
  from {
      height: 35px;
  }
  to {
      height: 45px;
  }
`;
