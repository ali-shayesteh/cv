'use client';

import { ReactNode, createContext, useContext, useState } from "react";
export type GlobalContent = {
    color: string
    setColor: React.Dispatch<React.SetStateAction<string>>
  }

export const ThemeContext = createContext<GlobalContent>({ color: "dark", setColor: () => {}, })

// export const ThemeContextProvider = ({ children } : { children : ReactNode} ) => {
//     const [color, setColor] = useState<string>('dark');
//     return (
//         <ThemeContext.Provider value={{ color, setColor }}>
//             {children}
//         </ThemeContext.Provider>
//     )
// };

export const useThemeContext = () => useContext(ThemeContext);