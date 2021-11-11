import React from "react"

import { ContentFlow } from "../../styledComponents/layout/spacing"
import { SubTitle, Title } from "../../styledComponents/typography/headings"
import { Wrapper } from "./heroSection.style"

const Hero = () => {
  return (
    <Wrapper>
      <ContentFlow>
        <h1>Welcome to Styled Component APP with Naming</h1>
        <Title variant="clientOne" scheme="primary">
          Custom Heading Testing
        </Title>

        <SubTitle variant="clientTwo" scheme="primary">
          Sub Heading for client two
        </SubTitle>

        <p className="HeroSection__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          repellendus voluptatibus atque magnam, quibusdam ab. Error quidem,
          maxime, quibusdam dolores doloremque suscipit maiores deserunt
          voluptate, necessitatibus laborum ullam quam cumque.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          repellendus voluptatibus atque magnam, quibusdam ab. Error quidem,
          maxime, quibusdam dolores doloremque suscipit maiores deserunt
          voluptate, necessitatibus laborum ullam quam cumque.
        </p>
      </ContentFlow>
    </Wrapper>
  )
}

export default Hero
