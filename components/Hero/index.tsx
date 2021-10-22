import React from "react"

import { ContentFlow } from "../../styledComponents/layout/spacing"
import { Title } from "../../styledComponents/typography/headings"
import { HeroWrapper } from "./style"

const Hero = () => {
  return (
    <HeroWrapper>
      <ContentFlow>
        <h1>Welcome to Styled Component APP with Naming</h1>
        <Title variant="clientOne" scheme="primary">
          Custom Heading Testing
        </Title>
        <p>
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
    </HeroWrapper>
  )
}

export default Hero
