import { Visibility } from "@mui/icons-material";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  styled,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { userRequest } from "src/constants";

interface Users {
  _id: string;
  username: string;
  email: string;
}

const PREFIX = "WidgetSm";

const StyledInfoWrapper = styled(Grid, {
  name: `${PREFIX}-StyledInfoWrapper`,
})(({ theme }) => ({
  padding: theme.spacing(3, 4),
  boxShadow: `0px 0px 5px ${theme.palette.secondary.light}`,
  margin: theme.spacing(3, 0),
  width: "35%",
  height: 397,
  overflow: "auto",
  backgroundColor: theme.palette.white.main,
}));

const StyledTitle = styled(Typography, {
  name: `${PREFIX}-StyledTitle`,
})(({ theme }) => ({
  fontSize: 20,
  marginBottom: theme.spacing(2),
  fontFamily: "BitterBold",
}));

const StyledButton = styled("button", {
  name: `${PREFIX}-StyledButton`,
})(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  border: "none",
  borderRadius: 5,
  padding: theme.spacing(1),
  backgroundColor: "#eeeef7",
  color: "#555",
  cursor: "pointer",
}));

export const WidgetSm = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true");
        setUsers(res.data);
      } catch {}
    };
    getUsers();
  }, []);

  return (
    <StyledInfoWrapper>
      <StyledTitle>New Join Members</StyledTitle>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {users.map((user: Users) => (
          <ListItem key={user._id} sx={{ px: 0 }}>
            <ListItemText primary={user.username} secondary={user.email} />
            <StyledButton className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </StyledButton>
          </ListItem>
        ))}
      </List>
    </StyledInfoWrapper>
  );
};
