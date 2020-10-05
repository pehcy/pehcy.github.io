import React from 'react'
import { FaGithub, FaTwitter, FaLinkedinIn, FaRss, FaDiscord } from "react-icons/fa"
import styled from '@emotion/styled'

const icons = {
  discord:  <FaDiscord size={23.5}/>,
  github:   <FaGithub size={23.5}/>,
  linkedin: <FaLinkedinIn size={23.5}/>,
  rss:      <FaRss size={23.5}/>,
  twitter:  <FaTwitter size={23.5}/>,
}

const SocialLinks = ({ social }) => (
  <SocialWrapper>
    <Wrapper>
    <SocialInnerGrid>
      { Object.entries(social).map(([key, value] : [string, string]) => {
          return (
            <BtnIconRounded>
            <a href={ value } target='_blank' rel='noopener noreferrer'>
              { icons[key] }
            </a>
            </BtnIconRounded>
          )
        })
      }
    </SocialInnerGrid>
    </Wrapper>
  </SocialWrapper>
)

export default SocialLinks

const SocialInnerGrid = styled.div`
  display: grid;
  justify-content: stretch;
  width: max-content;
  gap: 1.5rem;
  margin-left: auto;
  margin-right: 0;
  pointer-events: auto;

  @media (max-width: 680px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`

const BtnIconRounded = styled.div`
  display: inline-flex;
  border-radius: 50%;
  &:hover {
    background: #86e7b8;
  }
`

const SocialWrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 32.5%;
  margin-right: 70px;
  pointer-events: none;

  @media (max-width: 680px) {
    position: relative;
    height: 3rem;
  }
`
const Wrapper = styled.div`
  margin: 0px 64px;
  right: 0;
`