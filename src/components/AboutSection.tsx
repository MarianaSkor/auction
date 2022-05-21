import { styled } from "@mui/material";
import { textBlock2 } from "src/constants";
import { InformationBlock } from "./common/InformationBlock";

const PREFIX = "AboutSection";

const StyledSection = styled("section", {
  name: `${PREFIX}-StyledSection`,
})(({ theme }) => ({
  padding: theme.spacing(0, 25, 8),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const AboutSection = () => (
  <StyledSection>
    <InformationBlock title={textBlock2.title} text={textBlock2.text} />
  </StyledSection>
);
