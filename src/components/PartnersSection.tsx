import { Box, Divider, Link, styled, Typography } from "@mui/material";
import { coordinators, partners } from "src/constants";

const PREFIX = "ReportSection";

const StyledSection = styled("section", {
  name: `${PREFIX}-StyledSection`,
})(({ theme }) => ({
  padding: theme.spacing(8, 25),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: theme.palette.secondary.light,
}));

const StyledTitle = styled(Typography, {
  name: `${PREFIX}-StyledTitle`,
})(({ theme }) => ({
  fontSize: 50,
  fontFamily: "AmaticSCRegular",
  marginBottom: theme.spacing(3),
  textAlign: "center",
}));

const StyledDivider = styled(Divider, {
  name: `${PREFIX}-StyledDivider`,
})(({ theme }) => ({
  width: 70,
  background: theme.palette.brown.main,
  padding: theme.spacing(0.125),
  borderRadius: 40,
  marginBottom: theme.spacing(3),
}));

const StyledImage = styled("img", {
  name: `${PREFIX}-StyledImage`,
})(({ theme }) => ({
  width: 230,
}));

const StyledCoordinators = styled(Box, {
  name: `${PREFIX}-StyledCoordinators`,
})(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-evenly",
}));

const StyledName = styled(Typography, {
  name: `${PREFIX}-StyledName`,
})(({ theme }) => ({
  fontSize: 16,
  fontFamily: "BitterBold",
  color: theme.palette.brown.main,
  margin: theme.spacing(2, 0),
}));

const StyledText = styled(Typography, {
  name: `${PREFIX}-StyledText`,
})(({ theme }) => ({
  fontSize: 16,
  fontFamily: "BitterMedium",
  margin: theme.spacing(1, 0),
}));

const StyledLink = styled(Link, {
  name: `${PREFIX}-StyledLink`,
})(({ theme }) => ({
  fontSize: 16,
  fontFamily: "BitterRegular",
}));

const StyledLogo = styled("img", {
  name: `${PREFIX}-StyledLogo`,
})(({ theme }) => ({
  width: 100,
  transition: "all 0.3s",

  "&:hover": {
    transform: "scale(1.25)",
  },
}));

const StyledLogoWrapper = styled(Box, {
  name: `${PREFIX}-StyledLogoWrapper`,
})(({ theme }) => ({
  width: "60%",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  margin: theme.spacing(0, "auto"),
  marginTop: theme.spacing(10),
}));

export const PartnersSection = () => (
  <StyledSection>
    <StyledTitle>Наші партнери</StyledTitle>
    <StyledDivider />
    <Box sx={{ width: "100%" }}>
      <StyledCoordinators>
        {coordinators.map(({ image, name, position, phoneNumber, email }) => (
          <Box key={image}>
            <StyledImage src={image} alt={name} />
            <StyledName>{name}</StyledName>
            <StyledText>{position}</StyledText>
            <StyledLink href={`tel: ${phoneNumber}`}>{phoneNumber}</StyledLink>
            <br />
            <StyledLink href={`mailto: ${email}`} target="_blank">
              {email}
            </StyledLink>
          </Box>
        ))}
      </StyledCoordinators>
      <StyledLogoWrapper>
        {partners.map(({ logo, link }) => (
          <Link key={link} href={link} target="_blank">
            <StyledLogo src={logo} alt={link} />
          </Link>
        ))}
      </StyledLogoWrapper>
    </Box>
  </StyledSection>
);
