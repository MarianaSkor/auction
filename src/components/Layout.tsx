import { FC } from "react";
import { Grid } from "@mui/material";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout: FC = ({ children }) => (
  <Grid data-testid="layout" sx={{ maxWidth: 1440, mx: "auto", my: 0 }}>
    <Header />
    {children}
    <Footer />
  </Grid>
);
