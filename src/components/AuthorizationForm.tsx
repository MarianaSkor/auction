import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  Box,
  Button,
  Grid,
  Link,
  styled,
  Typography,
} from "@mui/material";
import { ROUTES } from "src/constants/routes";
import { REG_EX_EMAIL, REG_EX_PASSWORD } from "src/constants";
import { login } from "src/redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/redux/store";
import { Input } from "./common/Input";

const PREFIX = "RegistrationForm";

const StyledRegistForm = styled(Box, {
  name: `${PREFIX}-StyledInputWrapper`,
})(({ theme }) => ({
  width: "45%",

  "@media (max-width: 1024px)": {
    width: "80%",
  },

  "@media (max-width: 600px)": {
    width: "90%",
  },
}));

const StyledButton = styled(Button, {
  name: `${PREFIX}-StyledButton`,
})(({ theme }) => ({
  padding: theme.spacing(1.5, 10),
  transition: "all 0.3s",
  color: theme.palette.white.main,
  backgroundColor: theme.palette.secondary.main,
  borderRadius: 0,
  alignSelf: "flex-start",
  border: `1px solid ${theme.palette.secondary.main}`,
  fontFamily: "BitterBold",
  marginTop: theme.spacing(2),

  "&:hover": {
    border: `1px solid ${theme.palette.secondary.contrastText}`,
    backgroundColor: theme.palette.secondary.contrastText,
  },

  "@media (max-width: 600px)": {
    padding: theme.spacing(1, 5),
    alignSelf: "center",
  },
}));

const StyledBlock = styled(Box, {
  name: `${PREFIX}-StyledBlock`,
})(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  background: theme.palette.white.main,
  padding: theme.spacing(5),
  borderRadius: 25,
}));

const StyledTitle = styled(Typography, {
  name: `${PREFIX}-StyledTitle`,
})(({ theme }) => ({
  fontFamily: "AmaticSCRegular",
  fontSize: 50,
  marginBottom: theme.spacing(2),

  "@media (max-width: 600px)": {
    fontSize: 30,
  },
}));

const StyledInputsWrapper = styled(Grid, {
  name: `${PREFIX}-StyledInputsWrapper`,
})(({ theme }) => ({
  padding: theme.spacing(2),
  border: `1px solid ${theme.palette.secondary.light}`,
  justifyContent: "space-between",
}));

const StyledInputWrapper = styled(Grid, {
  name: `${PREFIX}-StyledInputWrapper`,
})(({ theme }) => ({
  width: "100%",

  "&:not(:last-child)": {
    marginBottom: theme.spacing(2),
  },
}));

const StyledText = styled(Typography, {
  name: `${PREFIX}-StyledText`,
})(({ theme }) => ({
  fontFamily: "BitterRegular",
  padding: theme.spacing(3, 0),

  "@media (max-width: 600px)": {
    fontSize: 12,
  },
}));

export interface FormValueType {
  email: string;
  password: string;
}

export interface ValidFormValueType {
  isEmailValid: boolean;
  isPasswordValid: boolean;
}

export const AuthorizationForm = () => {
  const navigate = useNavigate();

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isDisabledButton, setIsDisabledButton] = useState(true);

  const dispatch = useDispatch();
  const { error } = useSelector((state: RootState) => state.user);

  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    login(dispatch, { email: formValue.email, password: formValue.password });
    navigate(ROUTES.CATALOG);
  };

  const [formValue, setFormValue] = useState<FormValueType>({
    email: "",
    password: "",
  });

  const [isValidForm, setValidForm] = useState<ValidFormValueType>({
    isEmailValid: true,
    isPasswordValid: true,
  });

  const isEmailValid = useMemo(
    () => REG_EX_EMAIL.test(formValue.email),
    [formValue.email]
  );

  const isPasswordValid = useMemo(
    () => REG_EX_PASSWORD.test(formValue.password),
    [formValue.password]
  );

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      email: e.target.value,
    }));
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      password: e.target.value,
    }));
  };

  useEffect(() => {
    setValidForm({
      isEmailValid,
      isPasswordValid,
    });
  }, [isEmailValid, isPasswordValid]);

  return (
    <StyledRegistForm>
      <StyledBlock>
        <StyledTitle>Sign in</StyledTitle>
        <StyledInputsWrapper container>
          <StyledInputWrapper item>
            <Input
              rows={1}
              paddingY={2}
              paddingX={2.5}
              placeholder="Email"
              allowEmptyFormatting={false}
              variant="outlined"
              isMask={false}
              helperText="Please enter correct email"
              handleChange={handleChangeEmail}
              value={formValue.email}
              onBlur={() => setEmailError(true)}
              error={emailError && !isValidForm.isEmailValid}
              multiline={false}
            />
          </StyledInputWrapper>
          <StyledInputWrapper item>
            <Input
              rows={1}
              paddingY={2}
              paddingX={2.5}
              placeholder="Password"
              allowEmptyFormatting={false}
              variant="outlined"
              isMask={false}
              helperText="Please enter correct password"
              handleChange={handleChangePassword}
              value={formValue.password}
              onBlur={() => setPasswordError(true)}
              error={passwordError && !isValidForm.isPasswordValid}
              multiline={false}
              type="password"
            />
          </StyledInputWrapper>
        </StyledInputsWrapper>
        {error && (
          <Alert severity="error" sx={{ width: "100%", mt: 2 }}>
            Something went wrong...
          </Alert>
        )}
        <StyledButton
          disabled={
            isPasswordValid && isEmailValid
              ? !isDisabledButton
              : isDisabledButton
          }
          variant="outlined"
          onClick={handleClick}
        >
          Login
        </StyledButton>
        <StyledText>
          DO NOT REMEMBER THE PASSWORD?{` `}
          <Link
            sx={{ cursor: "pointer", fontWeight: 600 }}
            onClick={() => {
              navigate(`${ROUTES.REGISTER}`);
              window.scrollTo(0, 0);
            }}
          >
            CREATE A NEW ACCOUNT
          </Link>
        </StyledText>
      </StyledBlock>
    </StyledRegistForm>
  );
};
