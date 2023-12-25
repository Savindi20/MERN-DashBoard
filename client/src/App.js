import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Routes, Route} from "react-router-dom";
import { themeSettings } from "theme";
import Dashboard from "scenes/dashboard";

function App() {
  const mode = useSelector((state) => state.global.mode); // eslint-disable-line react-hooks/exhaustive-deps
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);  // eslint-disable-line react-hooks/exhaustive-deps 
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
            <Routes>
              <Route element={<Layout />} > 
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
            </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
