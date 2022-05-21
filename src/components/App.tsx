import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import store from "src/redux/store";
import { theme } from "src/utils/theme";
import { Router } from "./Router";

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  </Provider>
);

export default App;
