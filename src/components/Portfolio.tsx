import { Box, Divider, styled, Typography } from "@mui/material";
import { protfolio } from "src/constants";

const PREFIX = "InformationBlock";

const StyledWrapper = styled(Box, {
  name: `${PREFIX}-StyledWrapper`,
})(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: theme.spacing(15),
}));

const StyledTitle = styled(Typography, {
  name: `${PREFIX}-StyledTitle`,
})(({ theme }) => ({
  fontSize: 72,
  fontFamily: "AmaticSCRegular",
  margin: theme.spacing(3, 0),
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

const StyledPortfolioWrapper = styled(Box, {
  name: `${PREFIX}-StyledPortfolioWrapper`,
})(({ theme }) => ({
  maxWidth: 1350,
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
}));

const StyledImage = styled("img", {
  name: `${PREFIX}-StyledImage`,
})(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

export const Portfolio = () => (
  <StyledWrapper>
    <StyledTitle>Джерело красномовства – у серці!</StyledTitle>
    <StyledDivider />
    <StyledPortfolioWrapper>
      {protfolio.map((photo) => (
        <StyledImage key={photo} src={photo} alt="" />
      ))}
    </StyledPortfolioWrapper>
  </StyledWrapper>
);
