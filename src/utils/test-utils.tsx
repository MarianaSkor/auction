import { ReactNode, ReactElement } from "react";
import { Provider } from "react-redux";
import { createStore, Store } from "redux";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { render, RenderOptions } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { rootReducer, RootState } from "src/redux/store";
import { theme } from "./theme";

const getWrapper = (
  children: ReactNode,
  {
    initialState,
    store = createStore(rootReducer, initialState, undefined),
  }: {
    initialState?: Partial<RootState>;
    store?: Store<Partial<RootState>>;
  } = {}
) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  </Provider>
);

export const renderWithTheme = (
  ui: ReactElement,
  initialState?: {
    initialState?: Partial<RootState>;
    store?: Store<Partial<RootState>>;
  },
  options?: Omit<RenderOptions, "queries">
) => {
  const rendered = render(getWrapper(ui, initialState), options);
  return {
    ...rendered,
    rerender: (ui: ReactElement) => rendered.rerender(getWrapper(ui)),
  };
};
