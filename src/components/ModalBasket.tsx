import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  styled,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { KEY, ModalWindowProp, userRequest } from "src/constants";
import { cleanCart } from "src/redux/cardRedux";
import { RootState } from "src/redux/store";
import StripeChecout from "react-stripe-checkout";

const PREFIX = "ModalBasket";

const StyledTitle = styled(Typography, {
  name: `${PREFIX}-StyledTitle`,
})(({ theme }) => ({
  fontFamily: "BitterBold",
  fontSize: 16,
  color: theme.palette.black.main,
  marginBottom: theme.spacing(2),
}));

const StyledText = styled(Typography, {
  name: `${PREFIX}-StyledText`,
})(({ theme }) => ({
  fontFamily: "BitterRegular",
  fontSize: 14,
  color: theme.palette.black.main,
  marginBottom: theme.spacing(1),
}));

const StyledSpan = styled("span", {
  name: `${PREFIX}-StyledSpan`,
})(({ theme }) => ({
  fontFamily: "BitterBold",
  fontSize: 14,
  color: theme.palette.black.main,
  marginRight: theme.spacing(1),
}));

export const ModalBasket = ({ isOpen, handleClose }: ModalWindowProp) => {
  const cart = useSelector((state: RootState) => state.cart);
  const [stripeToken, setStripeToken] = useState<any>(null);
  const onToken = (token: any) => setStripeToken(token);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(cleanCart());
    handleClose();
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        navigate("/success", {
          state: {
            stripeData: res.data,
            products: cart,
          },
        });
        window.scrollTo(0, 0);
      } catch (err) {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, navigate]);

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you want to buy this item?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {cart.total && (
              <Box sx={{ display: "flex" }}>
                <img src={cart.products[0].img} alt="" width={165} />
                <Box sx={{ pl: 3.5 }}>
                  <StyledTitle>{cart.products[0].title}</StyledTitle>
                  <StyledText>{cart.products[0].artist}</StyledText>
                  <StyledText>
                    <StyledSpan>Signature:</StyledSpan>{" "}
                    {cart.products[0].signature}
                  </StyledText>
                  <StyledText>
                    <StyledSpan>Total:</StyledSpan>
                    {cart.total}
                  </StyledText>
                </Box>
              </Box>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <StripeChecout
            name="Art IBC"
            billingAddress
            shippingAddress
            description={`Your total is ${cart.total} UAH`}
            amount={cart.total * 100}
            token={onToken}
            stripeKey={KEY}
          >
            <Button autoFocus>Buy</Button>
          </StripeChecout>
          <Button onClick={handleCancel}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
