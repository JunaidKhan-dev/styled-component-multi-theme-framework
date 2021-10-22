import styled from "styled-components"

import { device } from "../../styledComponents/layout/mediaqueries"

export const HeroWrapper = styled.div`
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

console.log(HeroWrapper)
