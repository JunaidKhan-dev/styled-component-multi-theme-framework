import styled from "styled-components"

interface TitleProps {
  variant: string
  scheme: string
}
export const Title = styled.h1<TitleProps>`
  color: ${({ variant, scheme, theme }) =>
    theme[variant]?.colors[scheme] || "black"};
`

export const SubTitle = styled.h2<TitleProps>`
  color: ${({ variant, scheme, theme }) =>
    theme[variant]?.colors[scheme] || "black"};
`
