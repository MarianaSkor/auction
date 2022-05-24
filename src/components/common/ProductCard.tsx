import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  styled,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCardData } from "src/constants";
import { RootState } from "src/redux/store";
import { ModalWindow } from "../ModalWindow";
import { addToCart } from "src/redux/cardRedux";
import { ModalBasket } from "../ModalBasket";

const PREFIX = "ProductCard";

const StyledTextWrapper = styled(Box, {
  name: `${PREFIX}-StyledTextWrapper`,
})(({ theme }) => ({
  padding: theme.spacing(5),
}));

const StyledTitle = styled(Typography, {
  name: `${PREFIX}-StyledTitle`,
})(({ theme }) => ({
  fontSize: 40,
  fontFamily: "AmaticSCRegular",
  textTransform: "uppercase",
  textShadow: `1px 1px 2px ${theme.palette.black.main}`,
  marginBottom: theme.spacing(1.5),
}));

const StyledText = styled(Typography, {
  name: `${PREFIX}-StyledText`,
})(({ theme }) => ({
  fontFamily: "BitterRegular",
  fontSize: 16,
  marginBottom: theme.spacing(1.5),
}));

const StyledSubtitle = styled("span", {
  name: `${PREFIX}-StyledSubtitle`,
})(({ theme }) => ({
  fontFamily: "BitterBold",
  marginRight: theme.spacing(1),
}));

export const ProductCard = ({ product }: ProductCardData) => {
  const [currentPrice, setNewPrice] = useState(product.price);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const dispatch = useDispatch();

  const handleChangePrice = () =>
    setNewPrice(Math.round(currentPrice + currentPrice * 0.05));
  const handleModalClose = () => setIsModalOpen(false);
  const handleBasketClose = () => setIsBasketOpen(false);

  const user = useSelector((state: RootState) => state.user.currentUser);

  const handleClick = () => {
    dispatch(
      addToCart({
        product: { ...product },
        price: currentPrice,
      })
    );
    setIsBasketOpen(true);
  };

  return (
    <Card sx={{ maxWidth: "100%", display: "flex", mb: 5 }}>
      <CardMedia
        component="img"
        image={product.img}
        alt={product.title}
        sx={{ width: 500 }}
      />
      <StyledTextWrapper>
        <CardContent>
          <StyledTitle>{product.title}</StyledTitle>
          <Box>
            <StyledText>
              <StyledSubtitle>Artist:</StyledSubtitle>
              {product.artist}
            </StyledText>
            <StyledText>
              <StyledSubtitle>Edition:</StyledSubtitle>
              {product.edition}
            </StyledText>
            <StyledText>
              <StyledSubtitle>Medium:</StyledSubtitle>
              {product.medium}
            </StyledText>
            <StyledText>
              <StyledSubtitle>Signature:</StyledSubtitle>
              {product.signature}
            </StyledText>
            <StyledText>
              <StyledSubtitle>Unframed dimensions:</StyledSubtitle>
              {product.unframed_dimension}
            </StyledText>
            <StyledText>
              <StyledSubtitle>Year:</StyledSubtitle>
              {product.year}
            </StyledText>
          </Box>
          <Typography>
            <StyledSubtitle>Price:</StyledSubtitle>
            {currentPrice}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="outlined"
            onClick={user ? handleClick : () => setIsModalOpen((x) => !x)}
          >
            Buy now
          </Button>
          <Button size="small" variant="outlined" onClick={handleChangePrice}>
            Raise rate by 5%
          </Button>
          <ModalWindow isOpen={isModalOpen} handleClose={handleModalClose} />
          <ModalBasket isOpen={isBasketOpen} handleClose={handleBasketClose} />
        </CardActions>
      </StyledTextWrapper>
    </Card>
  );
};
