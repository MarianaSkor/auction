import { Button, Grid, styled, List, Link, ListItem } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "src/constants/routes";
import { logOut } from "src/redux/userRedux";
import { AddNewItemModal } from "./AddNewItemModal";

const PREFIX = "Topbar";

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
    padding: theme.spacing(0, 2),
  },

  [theme.breakpoints.down("ipad")]: {
    padding: theme.spacing(0, 2),
  },
}));

const StyledList = styled(List, {
  name: `${PREFIX}-StyledList`,
})(({ theme }) => ({
  display: "flex",
  marginLeft: theme.spacing(5),
}));

const StyledListItem = styled(ListItem, {
  name: `${PREFIX}-StyledListItem`,
})(({ theme }) => ({
  justifyContent: "center",

  "& > button": {
    textTransform: "uppercase",
    fontFamily: "BitterBold",
    color: theme.palette.secondary.main,
    width: 100,
    transition: "all 0.3s",

    "&:hover": {
      color: theme.palette.black.main,
    },
  },
}));

const StyledListWrapper = styled(Grid, {
  name: `${PREFIX}-StyledListWrapper`,
})(({ theme }) => ({
  display: "flex",
}));

export const Topbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => setIsOpen((x) => !x);

  const handleLogOut = () => {
    dispatch(logOut());
    navigate(ROUTES.HOME);
  };

  return (
    <StyledGrid container>
      <StyledListWrapper item>
        <Link
          component="button"
          sx={{
            fontSize: 20,
            cursor: "pointer",
            fontFamily: "BitterBold",
            textDecoration: "none",
          }}
          onClick={() => navigate(ROUTES.HOME)}
        >
          Art IBC
        </Link>

        <StyledList>
          <StyledListItem>
            <Link
              component="button"
              onClick={() => {
                navigate(ROUTES.ADMINPAGE);
                window.scrollTo(0, 0);
              }}
            >
              Головна
            </Link>
          </StyledListItem>
          <StyledListItem>
            <Link
              component="button"
              onClick={() => {
                navigate(ROUTES.PRODUCTS);
                window.scrollTo(0, 0);
              }}
            >
              Список лотів
            </Link>
          </StyledListItem>
          <StyledListItem>
            <Link component="button" onClick={handleCloseModal}>
              Додати лот
            </Link>
          </StyledListItem>
        </StyledList>
      </StyledListWrapper>
      <Grid item>
        <Button onClick={handleLogOut}>Log out</Button>
      </Grid>
      <AddNewItemModal isOpen={isOpen} handleClose={handleCloseModal} />
    </StyledGrid>
  );
};
