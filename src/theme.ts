import { createTheme, useTheme } from "@mui/material";

const theme = createTheme({
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                },
            },
        },
    },
});
export default theme;
