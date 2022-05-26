import { Grid, styled } from "@mui/material";
import Background from "src/assets/images/form_bg.jpg";
import { AuthorizationForm } from "src/components/AuthorizationForm";
import { Layout } from "src/components/Layout";

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

export const Authorization = () => (
  <Layout>
    <StyledPageWrapper>
      <AuthorizationForm />
    </StyledPageWrapper>
  </Layout>
);
