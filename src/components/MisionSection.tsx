import { styled } from "@mui/material";
import video from "src/assets/images/The formula for selling a million-dollar work of art.mp4";
import { textBlock1 } from "src/constants";
import { InformationBlock } from "./common/InformationBlock";

const PREFIX = "MisionSection";

const StyledSection = styled("section", {
  name: `${PREFIX}-StyledSection`,
})(({ theme }) => ({
  padding: theme.spacing(19, 25, 8),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const MisionSection = () => (
  <StyledSection>
    <InformationBlock title={textBlock1.title} text={textBlock1.text} />
    <video loop controls width={800}>
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </StyledSection>
);
