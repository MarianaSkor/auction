import { Typography, Box, Divider, styled } from "@mui/material";
import { TextBlockProps } from "src/constants";

const PREFIX = "InformationBlock";

const StyledWrapper = styled(Box, {
  name: `${PREFIX}-StyledWrapper`,
})(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
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

const StyledText = styled(Typography, {
  name: `${PREFIX}-StyledText`,
})(({ theme }) => ({
  fontSize: 16,
  fontFamily: "BitterRegular",
  lineHeight: 2,
  textAlign: "center",
  margin: theme.spacing(2, 0),
}));

export const InformationBlock = ({ title, text }: TextBlockProps) => (
  <StyledWrapper>
    <StyledTitle>{title}</StyledTitle>
    <StyledDivider />
    <Box>
      {text.map((text, index) => (
        <StyledText key={index}>{text}</StyledText>
      ))}
    </Box>
  </StyledWrapper>
);
