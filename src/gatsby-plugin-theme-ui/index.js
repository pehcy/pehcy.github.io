const fontsList = ['"Inter"', 'system-ui', '-apple-system', 
                'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 
                '"Helvetica Neue"', 'sans-serif'];

export default {
    useLocalStorage: false,
    initialColorModeName: 'light',
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
        heading: 'system-ui',
    },
    text: {
        heading: {
            fontFamily: 'heading',
        },
    },
    styles: {
        root: {
            fontFamily: "body",
        },
        h3: {
            fontFamily: 'system-ui',
        }
    }
}

