import styled from '@emotion/styled'

// Day/Night Switch reference: https://codepen.io/aaroniker/pen/KGpXZo


export const BtnWrapper = styled.button`
  opacity: 1/2;
  border-radius: 5px;
  width: 40px;
  height: 25px;
  position: relative;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
  margin-left: 30px;
  background: rgba(255, 255, 255, 0.01);
  border: transparent;
  &:hover { opacity: 1; }
`

export const DayNight = styled.div<{isLight: boolean, theme: any}>`
  cursor: pointer;
  position: relative;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  border: ${p => (p.isLight ? "2px" : "4px")} solid ${p => p.theme.colors.primary};
  transform: scale(${p => (p.isLight ? 1 : 0.55)});
  transition: all 0.45s ease;
  overflow: ${p => (p.isLight ? "hidden" : "visible")};

  &::before {
    content: '';
    position: absolute;
    right: -9px;
    top: -9px;
    height: 24px;
    width: 24px;
    border: 2px solid ${p => p.theme.colors.primary};
    border-radius: 50%;
    transform: translate(${p => (p.isLight ? "0,0" : "14px, -14px" )});
    opacity: ${p => (p.isLight ? 1 : 0 )};
  }

  &::after {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin: -4px 0 0 -4px;
    position: absolute;
    top: 50%;
    left: 50%;
    box-shadow: 0 -23px 0 ${p => p.theme.colors.primary},
                0 23px 0 ${p => p.theme.colors.primary},
                23px 0 0 ${p => p.theme.colors.primary},
                -23px 0 0 ${p => p.theme.colors.primary},
                15px 15px 0 ${p => p.theme.colors.primary},
                -15px 15px 0 ${p => p.theme.colors.primary},
                15px -15px 0 ${p => p.theme.colors.primary},
                -15px -15px 0 ${p => p.theme.colors.primary};
    transform: scale(${p => (p.isLight ? 0 : 1)});
    transition: all 0.35s ease;
  }
`

export const IconLayer = styled.div<{isLight: boolean, theme: any}>`
  position: absolute;
  right: -1px;
  top: -8px;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: 0;
  transition: ${p => p.theme.colors.primary}, transform 0.45s ease;
`