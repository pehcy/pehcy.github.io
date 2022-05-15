import React, { useState } from "react";
import { useSpring, animated, CSS } from "react-spring";

interface SpringAnimation {
  light: {
    [key: string]: number | string
  };
  dark: {
    [key: string]: number | string
  };
  springConfig?: {
    [key: string]: number | string
  };
}

type ThemeEnums = keyof SpringAnimation;

const properties : SpringAnimation = {
  light: {
    r: 9,
    transform: 'rotate(40deg)',
    cx: 12,
    cy: 4,
    opacity: 0
  },
  dark: {
    r: 5,
    transform: 'rotate(90deg)',
    cx: 30,
    cy: 0,
    opacity: 1
  },
  springConfig: {
    mass: 4,
    tension: 250,
    friction: 35
  }
};

const ToggleTheme = () : JSX.Element => {
  const [isDarkMode, setDarkMode] = useState<boolean>(false);

  const { r, transform, cx, cy, opacity } : any = properties[isDarkMode ? 'dark' : 'light']

  const svgContainerProps = useSpring<CSS.Properties>({ transform, config: properties.springConfig });
  const centerCircleProps = useSpring<CSS.Properties>({ r, config: properties.springConfig });
  const maskedCircleProps = useSpring<CSS.Properties>({ cx, cy, config: properties.springConfig });
  const linesProps = useSpring<CSS.Properties>({ opacity, config: properties.springConfig });

  const toggleDarkMode = () : void => {
    setDarkMode(!isDarkMode)
  };

  return (
    <animated.svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ 
        cursor: "pointer",
        ...svgContainerProps
      }}
      onClick={toggleDarkMode}
    >
      <mask id="mask">
        <rect x="0" y="0" width="100%" height="100%" fill="white" />
        <animated.circle
          style={maskedCircleProps}
          r="9"
          fill="black" 
        />
      </mask>
      <animated.circle 
        fill="black"
        cx="12" 
        cy="12"
        style={centerCircleProps} 
        mask="url(#mask)" 
      />
      <animated.g stroke="currentColor" style={linesProps}>
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </animated.g>
    </animated.svg>
  );
}

export default ToggleTheme;