import { styled } from "@mui/material";
import { textBlock3 } from "src/constants";
import { InformationBlock } from "./common/InformationBlock";

const PREFIX = "InformationSection";

const StyledSection = styled("section", {
  name: `${PREFIX}-StyledSection`,
})(({ theme }) => ({
  padding: theme.spacing(8, 25),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: theme.palette.secondary.light,
}));

export const InformationSection = () => (
  <StyledSection>
    <InformationBlock title={textBlock3.title} text={textBlock3.text} />
  </StyledSection>
);
