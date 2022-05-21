import { Box, Divider, styled, Typography } from "@mui/material";
import informationBG from "src/assets/images/informationBG.jpg";

const PREFIX = "ReportSection";

const StyledSection = styled("section", {
  name: `${PREFIX}-StyledSection`,
})(({ theme }) => ({
  padding: theme.spacing(8, 25),
  display: "flex",
  background: `url(${informationBG}) center no-repeat`,
  backgroundSize: "cover",
  position: "relative",
  justifyContent: "space-between",
}));

const StyledOverlay = styled("div", {
  name: `${PREFIX}-StyledOverlay`,
})(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: theme.palette.secondary.dark,
  opacity: 0.7,
  zIndex: 1,
}));

const StyledWrapper = styled(Box, {
  name: `${PREFIX}-StyledWrapper`,
})(({ theme }) => ({
  padding: theme.spacing(10),
  background: theme.palette.secondary.light,
  zIndex: 2,
  width: "48%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledTitle = styled(Typography, {
  name: `${PREFIX}-StyledTitle`,
})(({ theme }) => ({
  fontSize: 50,
  fontFamily: "AmaticSCRegular",
  marginBottom: theme.spacing(3),
  textAlign: "center",
}));

const StyledDivider = styled(Divider, {
  name: `${PREFIX}-StyledDivider`,
})(({ theme }) => ({
  width: "70%",
  background: theme.palette.brown.main,
  padding: theme.spacing(0.125),
  borderRadius: 40,
  marginBottom: theme.spacing(3),
}));

const StyledText = styled(Typography, {
  name: `${PREFIX}-StyledText`,
})(({ theme }) => ({
  fontSize: 14,
  fontFamily: "BitterRegular",
  lineHeight: 2,
  textAlign: "center",
  margin: theme.spacing(1, 0),
}));

const StyledQuote = styled(Typography, {
  name: `${PREFIX}-StyledTitle`,
})(({ theme }) => ({
  fontSize: 20,
  fontFamily: "AmaticSCRegular",
  margin: theme.spacing(2, 0),
  textAlign: "center",
}));

export const ReportSection = () => (
  <StyledSection>
    <StyledOverlay />
    <StyledWrapper>
      <StyledText sx={{ fontSize: 18 }}>
        Кожен витвір мистецтва тому саме вірно, що... як би висловити?.. Воно
        вражає. Воно розсуває і дає змогу побачити все те, що вчора залишалося
        для тебе лише рамкою. Сьогодні все по-іншому. Усе навкруги. Численні
        пори року і народи навколо. Історія, яку ми завжди пам'ятали, але якої
        ніколи не траплялося.
      </StyledText>
    </StyledWrapper>
    <StyledWrapper>
      <StyledTitle>Аукціон</StyledTitle>
      <StyledDivider />
      <StyledText>
        На аукціоні вдалося зібрати <strong>353 500 гривень!</strong>{" "}
      </StyledText>
      <StyledText sx={{ mb: 4 }}>
        <strong>196 500 гривень</strong> – з продажу робіт, які створювали діти
        разом з митцями. <strong>157 000 гривень</strong> – на тихому аукціоні,
        де були представлені авторські роботи самих митців.
      </StyledText>
      <StyledDivider />
      <StyledQuote>
        Мистецтво — єдина серйозна річ у світі. І художник — єдина людина, яка
        ніколи не буває серйозною.
      </StyledQuote>
    </StyledWrapper>
  </StyledSection>
);
