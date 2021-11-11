import styled from "styled-components"

import { device } from "../../styledComponents/layout/mediaqueries"

/* Block component */
// .btn {}

/* Element that depends upon the block */
// .btn__price {}

/* Modifier that changes the style of the block */
// .btn--orange {}
// .btn--big {}

export const Wrapper = styled.div`
  .heroSection__description {
    font-size: 2rem;
  }
  /* media queries */
  @media ${device.tablet} {
    background-color: rebeccapurple;
    color: white;
  }
  @media ${device.laptop} {
    background-color: purple;
    color: white;
  }
`

console.log(Wrapper)
