// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#012230', // Set your primary color
        },
        secondary: {
            main: '#ECF0F1', // Set your secondary color
        },
    },
    components: {
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#012230',
                    color: '#ECF0F1',
                }
            }
        }
    }
});

export default theme;
