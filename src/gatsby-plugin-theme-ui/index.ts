const fontsList = ['"Inter"', 'system-ui', '-apple-system', 
                'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 
                '"Helvetica Neue"', 'sans-serif'];

const colorTransition = 
    'background 0.25s var(--ease-in-out-quad), color 0.25s var(--ease-in-out-quad)'

export default {
    useLocalStorage: false,
    useCustomProperties: true,
    initialColorModeName: 'light',
    colorModeTransition: colorTransition,
    colors: {
        text: "#333",
        background: '#fff',
        primary: '#639',
        secondary: '#ff6347',
        modes: {
            dark: {
                text: '#fff',
                background: '#060606',
                primary: '#3cf',
            },
        },
    },
    fonts: {
        body: fontsList.join(','),
        heading: 'inherit',
    },
    styles: {
        root: {
            fontFamily: "body",
        },
    }
}

