import { Grid, Link, styled } from "@mui/material";
import { socialMedia } from "src/constants";
import { Icon } from "src/components/common/Icon";

const PREFIX = "SocialMedia";

const StyledIcon = styled(Icon, {
  name: `${PREFIX}-StyledList`,
})(({ theme }) => ({
  width: 25,
  height: 25,
  margin: theme.spacing(0, 1),
  transition: theme.transitions.create("transform", {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.standard,
  }),

  "& path": {
    fill: theme.palette.white.main,
  },

  "&:hover": {
    transform: "scale(1.25)",
  },
}));

export const SocialMedia = () => (
  <Grid item>
    {socialMedia.map(({ id, icon, link }) => (
      <Link href={link} key={id}>
        <StyledIcon icon={icon} viewBox="0 0 25 25" key={id} />
      </Link>
    ))}
  </Grid>
);
