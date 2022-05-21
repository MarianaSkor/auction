import { Box, Link, List, ListItem, styled } from "@mui/material";
import { SocialMedia } from "./common/SocialMedia";
import logo from "src/assets/images/logo.jpg";
import { ROUTES } from "src/constants/routes";

const PREFIX = "Footer";

const StyledListItem = styled(ListItem, {
  name: `${PREFIX}-StyledListItem`,
})(({ theme }) => ({
  "& > button": {
    textTransform: "uppercase",
    fontFamily: "BitterBold",
    color: theme.palette.white.main,
    transition: "all 0.3s",

    "&:hover": {
      color: theme.palette.secondary.contrastText,
    },
  },
}));

const StyledFooter = styled("footer", {
  name: `${PREFIX}-StyledSection`,
})(({ theme }) => ({
  background: theme.palette.secondary.dark,
  padding: theme.spacing(5, 15),
  display: "flex",
  justifyContent: "space-between",
}));

export const Footer = () => (
  <StyledFooter>
    <Box>
      <List>
        <StyledListItem>
          <Link component="button">Головна</Link>
        </StyledListItem>
        <StyledListItem>
          <Link component="button">Історія</Link>
        </StyledListItem>
        <StyledListItem>
          <Link component="button">Buy art</Link>
        </StyledListItem>
        <StyledListItem>
          <Link component="button">Блог</Link>
        </StyledListItem>
        <StyledListItem>
          <Link component="button">Контакти</Link>
        </StyledListItem>
      </List>
    </Box>
    <Box>
      <SocialMedia />
    </Box>
    <Box>
      <Link href={ROUTES.HOME}>
        <img src={logo} alt="logo" />
      </Link>
    </Box>
  </StyledFooter>
);
