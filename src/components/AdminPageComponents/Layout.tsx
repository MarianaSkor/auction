import { Grid, styled } from "@mui/material";
import { FC } from "react";
import { Topbar } from "./Topbar";
import Background from "src/assets/images/form_bg.jpg";
import { Footer } from "../Footer";

const PREFIX = "AdminPage";

const StyledPageWrapper = styled(Grid, {
  name: `${PREFIX}-StyledPageWrapper`,
})(({ theme }) => ({
  background: `url(${Background}) center no-repeat`,
  backgroundSize: "cover",
}));

export const Layout: FC = ({ children }) => (
  <StyledPageWrapper
    data-testid="layout"
    sx={{ maxWidth: 1440, mx: "auto", my: 0 }}
  >
    <Topbar />
    <Grid
      container
      justifyContent="space-between"
      sx={{ pt: 15, px: 5, pb: 5 }}
    >
      {children}
    </Grid>
    <Footer />
  </StyledPageWrapper>
);
