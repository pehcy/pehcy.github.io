import styled from '@emotion/styled'

export const Button = styled.button`
  cursor: pointer;
  border-radius: 5px;
  padding: 0.7rem 2.5rem;
  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  color: #fff;
  background: #4733ff;

  &:focus {
    outline: none;
  }

  &:disabled {
    background: gray;
  }

  &:hover {
    background: #230aff;
  }
`