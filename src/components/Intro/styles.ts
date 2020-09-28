import styled from '@emotion/styled'

export const Wrapper = styled.div`
  padding-bottom: 4rem;
`

export const IntroWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`

export const DetailsContainer = styled.div`
  flex: 1;

  h2 {
    margin-bottom: 2rem;
  }

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`