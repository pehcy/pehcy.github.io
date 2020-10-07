import baseTheme from './'
import { merge } from 'theme-ui'

const fontsList = ['"Inter"', 'system-ui', '-apple-system', 
                'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 
                '"Helvetica Neue"', 'sans-serif'];

const colorTransition = 'background 0.25s var(--ease-in-out-quad), color 0.25s var(--ease-in-out-quad)'

export default merge(baseTheme, {
    useLocalStorage: false,
    useCustomProperties: true,
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
    }
})

