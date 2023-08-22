import { ThemeProvider } from 'next-themes';

const ProviderTheme = ({ children }) => {

    return <ThemeProvider attribute='class'>
        {children}
    </ThemeProvider>

}

export default ProviderTheme;