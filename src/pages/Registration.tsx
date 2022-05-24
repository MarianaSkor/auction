import { Grid, styled } from "@mui/material";
import { RegistrationForm } from "src/components/RegistrationForm";
import Background from "src/assets/images/form_bg.jpg";

const PREFIX = "RegistrationPage";

const StyledPageWrapper = styled(Grid, {
  name: `${PREFIX}-StyledPageWrapper`,
})(({ theme }) => ({
  background: `url(${Background}) center no-repeat`,
  backgroundSize: "cover",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const Registration = () => (
  <StyledPageWrapper>
    <RegistrationForm />
  </StyledPageWrapper>
);
