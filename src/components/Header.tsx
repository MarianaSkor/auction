import { Grid, List, ListItem, Link, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "src/assets/images/logo_size.jpg";
import { ROUTES } from "src/constants/routes";

const PREFIX = "Header";

const StyledGrid = styled(Grid, {
  name: `${PREFIX}-StyledGrid`,
})(({ theme }) => ({
  position: "fixed",
  maxWidth: 1440,
  padding: theme.spacing(0, 5),
  alignItems: "center",
  justifyContent: "space-between",
  height: 85,
  background: theme.palette.white.main,
  zIndex: 10,
  boxShadow: `0px 2px 10px ${theme.palette.secondary.contrastText}`,

  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(0, 0.2),
  },

  [theme.breakpoints.down("ipad")]: {
    padding: theme.spacing(0, 2),
  },
}));

const StyledLogo = styled("img", {
  name: `${PREFIX}-StyledLogo`,
})(({ theme }) => ({
  width: 80,
}));

const StyledList = styled(List, {
  name: `${PREFIX}-StyledList`,
})(({ theme }) => ({
  display: "flex",
}));

const StyledListItem = styled(ListItem, {
  name: `${PREFIX}-StyledListItem`,
})(({ theme }) => ({
  justifyContent: "center",

  "& > button": {
    textTransform: "uppercase",
    fontFamily: "BitterBold",
    color: theme.palette.secondary.main,
    transition: "all 0.3s",

    "&:hover": {
      color: theme.palette.black.main,
    },
  },
}));

export const Header = () => {
  const navigate = useNavigate();

  return (
    <StyledGrid container>
      <Grid item>
        <Link href={ROUTES.HOME}>
          <StyledLogo src={logo} alt="logo" />
        </Link>
      </Grid>
      <Grid item sx={{ width: "45%" }}>
        <StyledList>
          <StyledListItem>
            <Link component="button" onClick={() => navigate(ROUTES.HOME)}>
              Головна
            </Link>
          </StyledListItem>
          <StyledListItem>
            <Link component="button">Історія</Link>
          </StyledListItem>
          <StyledListItem>
            <Link component="button" onClick={() => navigate(ROUTES.CATALOG)}>
              Buy art
            </Link>
          </StyledListItem>
          <StyledListItem>
            <Link component="button">Блог</Link>
          </StyledListItem>
          <StyledListItem>
            <Link component="button">Контакти</Link>
          </StyledListItem>
        </StyledList>
      </Grid>
    </StyledGrid>
  );
};
