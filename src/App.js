import {BrowserRouter,Routes,Route} from "react-router-dom"
import {pageRoutes} from "./routes/Routes"
import {ThemeProvider} from "@emotion/react"
import {createTheme, responsiveFontSizes} from "@mui/material"

function App() {
  let theme = createTheme({
    palette: {
      primary: {
        main: "#3d734d",
      },
      secondary: {
        main: "#f44336",
      },
    },
  });
  theme = responsiveFontSizes(theme);
  return (
    <div className="App">
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Routes>
               {pageRoutes.map((item,index) => (
               <Route 
                path={item.link}
                element={<item.component/>}
                key={`routes-${index}`}
                />
               ))}
            </Routes>
          </ThemeProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
