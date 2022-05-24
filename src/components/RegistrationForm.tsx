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
import { REG_EX_NAME, REG_EX_SURNAME, userRequest } from "src/constants";
import { Input } from "./common/Input";
import { login } from "src/redux/apiCalls";

const PREFIX = "RegistrationForm";

const StyledRegistForm = styled(Box, {
  name: `${PREFIX}-StyledInputWrapper`,
})(({ theme }) => ({
  width: "50%",

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
  width: "49%",

  "@media (max-width: 600px)": {
    width: "100%",

    "&:not(:last-child)": {
      marginBottom: theme.spacing(1),
    },
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
  name: string;
  surname: string;
  email: string;
  password: string;
}

export const REG_EX_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const REG_EX_PASSWORD =
  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
export interface ValidFormValueType {
  isNameValid: boolean;
  isSurnameValid: boolean;
  isEmailValid: boolean;
  isPasswordValid: boolean;
}

export const RegistrationForm = () => {
  const navigate = useNavigate();

  const [nameError, setNameError] = useState(false);
  const [surnameError, setSurnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isDisabledButton, setIsDisabledButton] = useState(true);
  const [registrationError, setRegistrationError] = useState(false);

  const [formValue, setFormValue] = useState<FormValueType>({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const [isValidForm, setValidForm] = useState<ValidFormValueType>({
    isNameValid: true,
    isSurnameValid: true,
    isEmailValid: true,
    isPasswordValid: true,
  });

  const isNameValid = useMemo(
    () => REG_EX_NAME.test(formValue.name),
    [formValue.name]
  );

  const isSurnameValid = useMemo(
    () => REG_EX_SURNAME.test(formValue.surname),
    [formValue.surname]
  );

  const isEmailValid = useMemo(
    () => REG_EX_EMAIL.test(formValue.email),
    [formValue.email]
  );

  const isPasswordValid = useMemo(
    () => REG_EX_PASSWORD.test(formValue.password),
    [formValue.password]
  );

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      name: e.target.value,
    }));
  };

  const handleChangeSurname = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      surname: e.target.value,
    }));
  };

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
      isNameValid,
      isSurnameValid,
      isEmailValid,
      isPasswordValid,
    });
  }, [isNameValid, isSurnameValid, isEmailValid, isPasswordValid]);

  const createUser = async () => {
    try {
      const res = await userRequest.post("/auth/register", {
        username: formValue.name,
        email: formValue.email,
        password: formValue.password,
      });
      navigate(ROUTES.AUTHORIZATION);
    } catch {
      setRegistrationError(true);
    }
  };

  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    createUser();
  };

  return (
    <StyledRegistForm>
      <StyledBlock>
        <StyledTitle>Create an account</StyledTitle>
        <StyledInputsWrapper container>
          <StyledInputWrapper item sx={{ mb: 2 }}>
            <Input
              rows={1}
              paddingY={1.2}
              paddingX={2.5}
              placeholder="Name"
              isMask={false}
              multiline={false}
              variant="outlined"
              helperText="Please enter correct name"
              handleChange={handleChangeName}
              value={formValue.name}
              onBlur={() => setNameError(true)}
              error={nameError && !isValidForm.isNameValid}
              data-testid="userName"
            />
          </StyledInputWrapper>
          <StyledInputWrapper item>
            <Input
              rows={1}
              paddingY={1.2}
              paddingX={2.5}
              placeholder="Surname"
              allowEmptyFormatting={false}
              variant="outlined"
              isMask={false}
              helperText="Please enter correct surname"
              handleChange={handleChangeSurname}
              value={formValue.surname}
              onBlur={() => setSurnameError(true)}
              error={surnameError && !isValidForm.isSurnameValid}
              multiline={false}
            />
          </StyledInputWrapper>
          <StyledInputWrapper item>
            <Input
              rows={1}
              paddingY={1.2}
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
              paddingY={1.2}
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
        <StyledText>
          By creating an account, I consent to the processing of my personal
          data in accordance with the{" "}
          <Link sx={{ cursor: "pointer", fontWeight: 600 }}>
            PRIVACY POLICY
          </Link>
        </StyledText>
        {registrationError && (
          <Alert severity="error" sx={{ width: "100%", mb: 2 }}>
            Something went wrong...
          </Alert>
        )}
        <StyledButton
          disabled={
            isNameValid && isSurnameValid && isPasswordValid && isEmailValid
              ? !isDisabledButton
              : isDisabledButton
          }
          variant="outlined"
          onClick={handleClick}
        >
          CREATE
        </StyledButton>
      </StyledBlock>
    </StyledRegistForm>
  );
};
