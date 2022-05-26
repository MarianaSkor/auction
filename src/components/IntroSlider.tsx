import { Box, Button, styled, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Slider, { Settings } from "react-slick";
import slide1 from "src/assets/images/introSlider-1.jpg";
import slide2 from "src/assets/images/introSlider-2.jpg";
import slide3 from "src/assets/images/introSlider-3.jpg";
import slide4 from "src/assets/images/introSlider-4.jpg";
import slide5 from "src/assets/images/introSlider-5.jpg";
import { ROUTES } from "src/constants/routes";
import { RootState } from "src/redux/store";

const PREFIX = "IntroSlider";

const StyledSliderSection = styled("section", {
  name: `${PREFIX}-StyledSection`,
})(({ theme }) => ({
  height: 690,
  position: "relative",
  top: 80,

  "@media (max-width: 768px)": {
    height: 750,
  },
  "ul.slick-dots": {
    bottom: 30,
    zIndex: 2,
    "button::before": {
      fontSize: 12,
      color: theme.palette.white.main,
      opacity: 0.5,
    },
    "li.slick-active button::before": {
      opacity: 1,
    },
  },
}));

const StyledSlide = styled("div", {
  name: `${PREFIX}-StyledSlide`,
})(({ theme }) => ({
  height: 700,

  "@media (max-width: 768px)": {
    height: 750,
  },
}));

const StyledTitle = styled(Typography, {
  name: `${PREFIX}-StyledTitle`,
})(({ theme }) => ({
  color: theme.palette.white.main,
  fontSize: 56,
  lineHeight: "56px",
  fontWeight: 700,
  fontFamily: "BitterBold",
  textTransform: "uppercase",
  textShadow: `1px 1px 2px ${theme.palette.black.main}`,

  "@media (max-width: 768px)": {
    fontSize: 32,
    lineHeight: 32,
  },
}));

const StyledDescriptionBlock = styled(Box, {
  name: `${PREFIX}-StyledDescriptionBlock`,
})(({ theme }) => ({
  maxWidth: 800,
  marginTop: theme.spacing(4),

  color: theme.palette.white.main,
  fontFamily: "BitterRegular",
  fontSize: 28,
  lineHeight: "55px",
  textShadow: `1px 1px 2px ${theme.palette.black.main}`,

  "@media (max-width: 768px)": {
    margin: theme.spacing(3, 0, 4.5),
    p: {
      fontSize: 14,
    },
  },
}));

const StyledContent = styled(Box, {
  name: `${PREFIX}-StyledContent`,
})(({ theme }) => ({
  position: "absolute",
  inset: 0,
  display: "flex",
  justifyContent: "center",
  padding: theme.spacing(15, 3),

  "@media (max-width: 768px)": {
    height: 550,
    padding: theme.spacing(12.5, 6.25, 0, 8.75),
  },

  "@media (max-width: 600px)": {
    padding: theme.spacing(7, 2.5, 0),
  },
}));

const StyledTextWrapper = styled(Box, {
  name: `${PREFIX}-StyledTextWrapper`,
})(({ theme }) => ({
  zIndex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "100%",
  maxWidth: 1180,
}));

const StyledButton = styled(Button, {
  name: `${PREFIX}-StyledButton`,
})(({ theme }) => ({
  color: theme.palette.white.main,
  textShadow: `1px 1px 2px ${theme.palette.black.main}`,
  borderColor: theme.palette.white.main,
  padding: theme.spacing(1.25, 5),

  "&:hover": {
    borderColor: theme.palette.secondary.light,
    backgroundColor: theme.palette.secondary.light,
  },
}));

const sliderSettings: Settings = {
  dots: true,
  fade: true,
  speed: 1000,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
};

const slides: Array<string> = [slide1, slide2, slide3, slide4, slide5];

export const IntroSlider = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user.currentUser);
  console.log(user);

  return (
    <StyledSliderSection>
      <Slider {...sliderSettings}>
        {slides.map((slide) => (
          <StyledSlide key={slide}>
            <img src={slide} style={{ objectFit: "cover" }} />
          </StyledSlide>
        ))}
      </Slider>

      <StyledContent>
        <StyledTextWrapper>
          <StyledTitle> МИСТЕЦЬКИЙ АУКЦІОН «Art IBC»</StyledTitle>
          <StyledDescriptionBlock>
            Прекрасне в житті, прекрасне в мистецтві допомагає людині жити,
            допомагає виконувати складну справу життя, бо це прекрасне випрямляє
            її душу. Мистецтво – посередник того, що неможливо висловити.
          </StyledDescriptionBlock>
          {!user && (
            <Box sx={{ mt: 5 }}>
              <StyledButton
                variant="outlined"
                sx={{ mr: 5 }}
                onClick={() => navigate(ROUTES.REGISTER)}
              >
                Зареєструватися
              </StyledButton>
              <StyledButton
                variant="outlined"
                onClick={() => navigate(ROUTES.AUTHORIZATION)}
              >
                Ввійти
              </StyledButton>
            </Box>
          )}
          {user && user.isAdmin && (
            <Box sx={{ mt: 5 }}>
              <StyledButton
                variant="outlined"
                sx={{ mr: 5 }}
                onClick={() => navigate(ROUTES.ADMINPAGE)}
              >
                Перейти у кабінет
              </StyledButton>
            </Box>
          )}
        </StyledTextWrapper>
      </StyledContent>
    </StyledSliderSection>
  );
};
