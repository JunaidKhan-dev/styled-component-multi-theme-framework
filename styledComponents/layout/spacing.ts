import styled from "styled-components"

import { device } from "./mediaqueries"

interface IContentFlowProps {
  marginBottom?: string
}

export const ContentFlow = styled.div<IContentFlowProps>`
  & > * {
    margin-bottom: ${({ marginBottom }) =>
      marginBottom ? marginBottom : 1}rem;
  }

  & > *:last-child {
    margin-bottom: 0;
  }
`
