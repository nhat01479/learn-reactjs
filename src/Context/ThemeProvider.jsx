import React, { createContext, useState } from 'react';

export const themeProviders = createContext();

function ThemeProvider({ children }) {

    const [theme, setTheme] = useState('light')
    const handleChangeTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }
    return (
        <themeProviders.Provider value={{theme, handleChangeTheme, setTheme}}>
            {children}
        </themeProviders.Provider>
    );
}

export default ThemeProvider;