import { useLocation } from "react-router-dom";
import { Publish } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { RootState } from "src/redux/store";
import { userRequest } from "src/constants";
import { Button, Grid, Typography, Box, styled } from "@mui/material";

const PREFIX = "EditProductSection";

const StyledTitleWrapper = styled(Grid, {
  name: `${PREFIX}-StyledInfoWrapper`,
})(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: theme.spacing(3),
}));

const StyledSectionWrapper = styled(Grid, {
  name: `${PREFIX}-StyledInfoWrapper`,
})(({ theme }) => ({
  flexDirection: "column",
}));

const StyledInfoWrapper = styled(Grid, {
  name: `${PREFIX}-StyledInfoWrapper`,
})(({ theme }) => ({
  padding: theme.spacing(3, 4),
  boxShadow: `0px 0px 5px ${theme.palette.secondary.light}`,
  width: "49%",
  background: theme.palette.white.main,

  "& > .productForm": {
    display: "flex",
    justifyContent: "space-between",
  },

  ".productFormLeft": {
    display: "flex",
    flexDirection: "column",
  },

  ".productFormLeft > label": {
    marginBottom: theme.spacing(1.5),
    color: theme.palette.secondary.main,
  },

  ".productFormLeft > input": {
    marginBottom: theme.spacing(1.5),
    border: "none",
    padding: theme.spacing(0.5),
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
  },

  ".productFormLeft >select": {
    marginBottom: theme.spacing(1.5),
  },

  ".productUploadImg": {
    width: 100,
    height: 100,
    borderRadius: "10px",
    objectFit: "cover",
    marginRight: theme.spacing(2.5),
  },

  ".productFormRight": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },

  ".productUpload": {
    display: "flex",
    alignItems: "center",
  },
}));

const StyledImage = styled("img", {
  name: `${PREFIX}-StyledInfoWrapper`,
})(({ theme }) => ({
  width: 150,
  height: 150,
  borderRadius: "50%",
  objectFit: "cover",
  marginRight: theme.spacing(2.5),
}));

const StyledTitle = styled(Typography, {
  name: `${PREFIX}-StyledTitle`,
})(({ theme }) => ({
  fontSize: 32,
  fontFamily: "BitterBold",
  marginRight: theme.spacing(5),
}));

const StyledImg = styled("img", {
  name: `${PREFIX}-StyledInfoWrapper`,
})(({ theme }) => ({
  width: 100,
  height: 100,
  marginRight: theme.spacing(3),
}));

const StyledDataWrapper = styled(Box, {
  name: `${PREFIX}-StyledDataWrapper`,
})(({ theme }) => ({
  display: "flex",
}));

const StyledDataProp = styled(Typography, {
  name: `${PREFIX}-StyledDataProp`,
})(({ theme }) => ({
  fontSize: 20,
  fontFamily: "BitterMedium",
  marginRight: theme.spacing(5),
}));

const StyledData = styled(Typography, {
  name: `${PREFIX}-StyledData`,
})(({ theme }) => ({
  fontSize: 20,
  fontFamily: "BitterRegular",
  color: theme.palette.secondary.main,
}));

export const EditProductSection = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[3];
  const [pStats, setPStats] = useState<any>([]);

  const product = useSelector((state: RootState) =>
    state.product.products.find((product: any) => product._id === productId)
  );

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("orders/income?pid=" + productId);
        const list = res.data.sort((a: any, b: any) => {
          return a._id - b._id;
        });
        list.map((item: any) =>
          setPStats((prev: any) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [productId, MONTHS]);

  return (
    <StyledSectionWrapper container>
      <StyledTitleWrapper item>
        <StyledTitle>Product</StyledTitle>
      </StyledTitleWrapper>
      <Grid
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <StyledInfoWrapper item>
          <StyledTitleWrapper sx={{ justifyContent: "left" }}>
            <StyledImg src={product.img} alt="" />
            <Typography>{product.title}</Typography>
          </StyledTitleWrapper>
          <Box>
            <StyledDataWrapper>
              <StyledDataProp>id:</StyledDataProp>
              <StyledData>{product._id}</StyledData>
            </StyledDataWrapper>
            <StyledDataWrapper>
              <StyledDataProp>sales:</StyledDataProp>
              <StyledData>5123</StyledData>
            </StyledDataWrapper>
            <StyledDataWrapper>
              <StyledDataProp>in stock:</StyledDataProp>
              <StyledData>true</StyledData>
            </StyledDataWrapper>
          </Box>
        </StyledInfoWrapper>
        <StyledInfoWrapper item>
          <form className="productForm">
            <div className="productFormLeft">
              <label>Product Name</label>
              <input type="text" placeholder={product.title} />
              <label>Product Description</label>
              <input type="text" placeholder={product.desc} />
              <label>Price</label>
              <input type="text" placeholder={product.price} />
              <label>In Stock</label>
              <select name="inStock" id="idStock">
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
            <div className="productFormRight">
              <div className="productUpload">
                <StyledImage
                  src={product.img}
                  alt=""
                  className="productUploadImg"
                />
                <label htmlFor="file">
                  <Publish />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <Button variant="outlined">Update</Button>
            </div>
          </form>
        </StyledInfoWrapper>
      </Grid>
    </StyledSectionWrapper>
  );
};
