import { ChangeEvent, FC, FocusEvent } from "react";
import {
  Grid,
  TextField,
  outlinedInputClasses,
  inputClasses,
  styled,
  inputAdornmentClasses,
  formHelperTextClasses,
  formControlClasses,
  Theme,
} from "@mui/material";
import { SxProps } from "@mui/system";

export interface InputProps {
  variant?: "outlined" | "standard";
  rows: number;
  placeholder?: string;
  handleClick?: () => void;
  paddingY: number;
  paddingX: number;
  testIdIcon?: string;
  handleChange?: (value: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  error?: boolean;
  helperText?: string;
  mask?: string | string[];
  format?: string;
  allowEmptyFormatting?: boolean;
  placeholderColor?: "light" | "main";
  isMask: boolean;
  sxIcon?: SxProps<Theme>;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  multiline: boolean;
  type?: "text" | "password";
}

const PREFIX = "Input";

interface StyleProps {
  paddingY: number;
  paddingX: number;
  placeholderColor: "main" | "light";
}

const StyledTextField = styled(TextField, {
  name: `${PREFIX}-TextField`,
  shouldForwardProp: (prop) =>
    prop !== "paddingY" && prop !== "paddingX" && prop !== "placeholderColor",
})<StyleProps>(({ theme, paddingY, paddingX, placeholderColor }) => ({
  [`& .${outlinedInputClasses.root}, & .${inputClasses.root}`]: {
    padding: theme.spacing(paddingY, paddingX),
    borderRadius: 0,
    display: "flex",
    justifyContent: "space-between",
  },

  [`& .${outlinedInputClasses.input}, & .${inputClasses.input}`]: {
    padding: 0,
    fontFamily: "BitterRegular",
    fontSize: 14,
    lineHeight: 1.4,
    color: theme.palette.black.main,

    "&::placeholder": {
      fontFamily: "BitterRegular",
      fontSize: 14,
      lineHeight: 1.4,
      color:
        placeholderColor === "main"
          ? theme.palette.secondary.main
          : theme.palette.secondary.light,
    },
  },

  [`& .${inputAdornmentClasses.root}`]: {
    marginRight: 0,
  },

  [`& .${formHelperTextClasses.root}`]: {
    position: "absolute",
    marginLeft: 0,
    bottom: theme.spacing(-2),
  },

  [`& .${formControlClasses.root}`]: {
    position: "relative",
  },
}));

export const Input: FC<InputProps> = ({
  handleClick,
  testIdIcon,
  handleChange,
  error,
  helperText,
  mask,
  format,
  type = "text",
  variant = "standard",
  placeholderColor = "main",
  allowEmptyFormatting,
  isMask,
  sxIcon,
  ...props
}) => (
  <Grid>
    <StyledTextField
      data-testid="commonInput"
      fullWidth
      variant={variant}
      placeholderColor={placeholderColor}
      error={error}
      helperText={error && helperText}
      onChange={handleChange}
      type={type}
      {...props}
    />
  </Grid>
);
