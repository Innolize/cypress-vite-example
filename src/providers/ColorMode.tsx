import { createTheme } from "@mui/material";
import React from "react";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

type props = {
  children: JSX.Element;
};

const ColorProvider = ({ children }: props) => {
  const [mode, setMode] = React.useState<"light" | "dark">("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      {children}
    </ColorModeContext.Provider>
  );
};

export default ColorProvider;

